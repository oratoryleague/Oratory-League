import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../../lib/theme';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="Oratory League Logo"
                className="h-8 w-auto"
              />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
                Oratory League
              </span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              to="/about"
              className="text-gray-700 dark:text-gray-300 hover:text-gold dark:hover:text-gold px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 dark:text-gray-300 hover:text-gold dark:hover:text-gold px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {theme === 'light' ? (
                <svg
                  className="h-5 w-5 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5 text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}; 