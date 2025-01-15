// Create a new ThemeToggle component
// src/components/ThemeToggle.tsx
import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Update body classes when theme changes
    if (isDark) {
      document.body.classList.add('bg-gray-900', 'text-gray-100');
      document.body.classList.remove('bg-white', 'text-gray-800');
    } else {
      document.body.classList.add('bg-white', 'text-gray-800');
      document.body.classList.remove('bg-gray-900', 'text-gray-100');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="fixed bottom-4 right-24 p-2 rounded-full 
        bg-gray-200 dark:bg-gray-700 hover:bg-nasared hover:text-white
        transition-colors duration-200"
    >
      {isDark ? (
        <SunIcon className="w-6 h-6" />
      ) : (
        <MoonIcon className="w-6 h-6" />
      )}
    </button>
  );
};

export default ThemeToggle;