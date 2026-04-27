import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-9xl font-bold text-nasared mb-4">404</h1>
        <h2 className="text-4xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8 max-w-md">
          The page you're looking for doesn't exist in this dimension. Maybe
          it's lost in the electromagnetic void.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-6 py-3 bg-nasared text-white font-semibold hover:bg-opacity-80 transition-colors"
          >
            Return Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 border border-nasared text-nasared font-semibold hover:bg-nasared hover:text-white transition-colors"
          >
            Go Back
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
          Lost in space? Check out these pages:
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-4">
          <Link to="/about" className="text-nasared hover:underline">
            About
          </Link>
          <Link to="/work/generative" className="text-nasared hover:underline">
            Work
          </Link>
          <Link
            to="/projects/thenoise"
            className="text-nasared hover:underline"
          >
            Projects
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
