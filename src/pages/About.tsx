import Hello from '../components/Hello';
import Experience from '../components/Experience';
import Hero from '../components/Hero';

export default function About() {
  return (
    <div className="p-4">
      <h1 className="text-2xl text-semibold text-gray-800 font-bold">
        ABOUT NOW
      </h1>
      <Hello />
      <Hero />
      <Experience />
    </div>
  );
}
