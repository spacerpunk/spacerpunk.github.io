import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export default function NotFound() {
  const { lang } = useLanguage();
  const es = lang === 'es';
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-9xl font-bold text-nasared mb-4">404</h1>
        <h2 className="text-4xl font-semibold mb-4">
          {es ? 'Página no encontrada' : 'Page Not Found'}
        </h2>
        <p className="text-gray-400 mb-8 max-w-md">
          {es
            ? 'La página que buscás no existe en esta dimensión. Quizás se perdió en el vacío electromagnético.'
            : "The page you're looking for doesn't exist in this dimension. Maybe it's lost in the electromagnetic void."}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-6 py-3 bg-nasared text-white font-semibold hover:bg-opacity-80 transition-colors"
          >
            {es ? 'Volver al inicio' : 'Return Home'}
          </Link>
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 border border-nasared text-nasared font-semibold hover:bg-nasared hover:text-white transition-colors"
          >
            {es ? 'Volver atrás' : 'Go Back'}
          </button>
        </div>

        <div className="mt-12 text-sm text-gray-500 font-mono">
          <p>ERROR_CODE: 404</p>
          <p>STATUS: NOT_FOUND</p>
          <p>VOID_INDEX: UNKNOWN</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-16 text-center"
      >
        <p className="text-gray-600 text-sm">
          {es ? '¿Perdido en el espacio? Mirá estas páginas:' : 'Lost in space? Check out these pages:'}
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-4">
          <Link to="/about" className="text-nasared hover:underline">
            {es ? 'Sobre mí' : 'About'}
          </Link>
          <Link to="/work/generative" className="text-nasared hover:underline">
            {es ? 'Trabajo' : 'Work'}
          </Link>
          <Link
            to="/projects/thenoise"
            className="text-nasared hover:underline"
          >
            {es ? 'Proyectos' : 'Projects'}
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
