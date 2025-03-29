import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
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
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Empowering voices, transforming lives through the art of public speaking.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 dark:text-gray-400 hover:text-gold dark:hover:text-gold"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-gold dark:hover:text-gold"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Connect With Us
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-gold dark:hover:text-gold"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-gold dark:hover:text-gold"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-gold dark:hover:text-gold"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8">
          <p className="text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Oratory League. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}; 