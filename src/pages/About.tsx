import Hello from '../components/Hello';
import Experience from '../components/Experience';
import Hero from '../components/Hero';

export default function About() {
  return (
    <div className="p-4">
      <Hello />
      <Hero />
      <Experience />
    </div>
  );
}
