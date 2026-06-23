import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { OpenSource } from '@/components/OpenSource';
import { Projects } from '@/components/Projects';
import { ShaderBackground } from '@/components/ShaderBackground';
import { TechStack } from '@/components/TechStack';
import { Testimonials } from '@/components/Testimonials';

export default function App() {
  return (
    <div className='text-foreground relative min-h-screen'>
      <ShaderBackground />
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <Projects />
      <OpenSource />
      <Testimonials />
      <Footer />
    </div>
  );
}
