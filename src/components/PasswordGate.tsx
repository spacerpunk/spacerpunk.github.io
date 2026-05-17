import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CORRECT_PASSWORD = 'spcrpnk1993';

interface PasswordGateProps {
  storageKey: string;
  children: React.ReactNode;
}

export default function PasswordGate({ storageKey, children }: PasswordGateProps) {
  const [unlocked, setUnlocked] = useState(
    () => sessionStorage.getItem(storageKey) === 'unlocked',
  );
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === CORRECT_PASSWORD) {
      sessionStorage.setItem(storageKey, 'unlocked');
      setUnlocked(true);
    } else {
      setError(true);
      setShake(true);
      setInput('');
      setTimeout(() => setShake(false), 600);
    }
  };

  if (unlocked) return <>{children}</>;

  return (
    <div className="w-full min-h-[60vh] flex items-center justify-center">
      <motion.div
        animate={shake ? { x: [-8, 8, -8, 8, -4, 4, 0] } : { x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-sm"
      >
        <div className="border border-gray-800 bg-black p-8">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">
            Restricted
          </p>
          <h2 className="text-xl font-bold text-white mb-1">Password Required</h2>
          <p className="text-sm text-gray-400 mb-6">
            This page is password protected.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  setError(false);
                }}
                placeholder="Enter password"
                autoFocus
                className="w-full bg-transparent border border-gray-700 text-white placeholder-gray-600 px-4 py-2 text-sm focus:outline-none focus:border-nasared transition-colors"
              />
              <AnimatePresence>
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-nasared text-xs mt-2"
                  >
                    Incorrect password.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <button
              type="submit"
              className="w-full bg-nasared text-white text-sm font-semibold py-2 px-4 hover:bg-opacity-80 transition-colors"
            >
              UNLOCK
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
