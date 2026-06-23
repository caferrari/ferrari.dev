import { useEffect, useRef, useState } from 'react';

const VERTEX_SHADER = `
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

// Domain-warped fractal noise. Paleta intencionalmente escura:
// base quase preta com realces sutis de cyan/purple do tema.
const FRAGMENT_SHADER = `
precision highp float;

uniform vec2 u_resolution;
uniform float u_time;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float fbm(vec2 p) {
  float value = 0.0;
  float amplitude = 0.5;
  for (int i = 0; i < 6; i++) {
    value += amplitude * noise(p);
    p *= 2.02;
    amplitude *= 0.5;
  }
  return value;
}

void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / u_resolution.y;
  float t = u_time * 0.02;

  // leve respiração/zoom para dar sensação de fluxo constante
  uv *= 1.0 + 0.12 * sin(u_time * 0.25);
  uv += 0.15 * vec2(sin(t * 0.7), cos(t * 0.5));

  // domain warping em duas camadas (animadas em todos os eixos)
  vec2 q = vec2(
    fbm(uv + vec2(sin(t * 0.6), t)),
    fbm(uv + vec2(5.2 - t * 0.4, 1.3 + cos(t * 0.8)))
  );

  vec2 r = vec2(
    fbm(uv + 3.5 * q + vec2(1.7 + t, 9.2 - t * 0.6)),
    fbm(uv + 3.5 * q + vec2(8.3 + t * 0.5, 2.8 - t))
  );

  float f = fbm(uv + 3.5 * r + 0.3 * sin(u_time));

  // cores escuras do tema
  vec3 deep = vec3(0.035, 0.035, 0.043);     // ~#09090b
  vec3 cyan = vec3(0.133, 0.827, 0.933);     // #22d3ee
  vec3 purple = vec3(0.654, 0.545, 0.980);   // #a78bfa
  vec3 emerald = vec3(0.0, 1.0, 0.255);      // #00ff41

  // mistura de cor que oscila no tempo entre cyan e purple
  float blend = 0.5 + 0.5 * sin(u_time * 0.6 + f * 4.0);
  vec3 accent = mix(cyan, purple, blend);

  vec3 color = deep;
  color = mix(color, purple * 0.55, clamp(f * f * 1.3, 0.0, 1.0));
  color = mix(color, accent * 0.7, clamp(length(q) * 0.9, 0.0, 1.0));
  color += emerald * 0.08 * smoothstep(0.6, 1.0, r.x + 0.3 * sin(u_time * 1.5));

  // cristas de energia que viajam pela tela
  float ridge = smoothstep(0.5, 0.6, f) - smoothstep(0.6, 0.74, f);
  color += accent * ridge * (0.5 + 0.5 * sin(u_time * 3.0 + uv.x * 8.0 + uv.y * 6.0));

  // vinheta para manter as bordas escuras
  float vignette = smoothstep(1.15, 0.25, length(uv));
  color *= vignette;

  // mantém tudo escuro e elegante
  color = mix(deep, color, 0.85);
  color = pow(color, vec3(1.15));

  gl_FragColor = vec4(color, 1.0);
}
`;

function createShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader | null {
  const shader = gl.createShader(type);

  if (!shader) {
    return null;
  }

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

function createProgram(gl: WebGLRenderingContext): WebGLProgram | null {
  const vertex = createShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
  const fragment = createShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER);

  if (!vertex || !fragment) {
    return null;
  }

  const program = gl.createProgram();

  if (!program) {
    return null;
  }

  gl.attachShader(program, vertex);
  gl.attachShader(program, fragment);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    gl.deleteProgram(program);
    return null;
  }

  return program;
}

function getWebGLContext(canvas: HTMLCanvasElement): WebGLRenderingContext | null {
  const options: WebGLContextAttributes = { antialias: false, alpha: false, powerPreference: 'low-power' };
  const gl = canvas.getContext('webgl', options) ?? canvas.getContext('experimental-webgl', options);

  return gl instanceof WebGLRenderingContext ? gl : null;
}

export function ShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const gl = getWebGLContext(canvas);

    if (!gl) {
      setSupported(false);
      return;
    }

    const program = createProgram(gl);

    if (!program) {
      setSupported(false);
      return;
    }

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, 'a_position');
    const resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
    const timeLocation = gl.getUniformLocation(program, 'u_time');

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    resize();
    window.addEventListener('resize', resize);

    let frameId = 0;
    const start = performance.now();

    const render = (now: number) => {
      const elapsed = (now - start) / 1000;

      gl.useProgram(program);
      gl.enableVertexAttribArray(positionLocation);
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      gl.uniform1f(timeLocation, elapsed);

      gl.drawArrays(gl.TRIANGLES, 0, 3);

      frameId = requestAnimationFrame(render);
    };

    frameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resize);
      gl.deleteProgram(program);
      gl.deleteBuffer(positionBuffer);
    };
  }, []);

  if (!supported) {
    return null;
  }

  return (
    <canvas ref={canvasRef} aria-hidden='true' className='pointer-events-none fixed inset-0 -z-10 h-full w-full' />
  );
}
