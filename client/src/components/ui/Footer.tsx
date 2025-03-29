import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-gold mb-4">Oratory League</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Empowering voices, inspiring change through the art of public speaking.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-gold dark:text-gray-300 dark:hover:text-gold">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-gold dark:text-gray-300 dark:hover:text-gold">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-gold dark:text-gray-300 dark:hover:text-gold">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://twitter.com/oratoryLeague"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gold dark:text-gray-300 dark:hover:text-gold"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/oratory-league"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gold dark:text-gray-300 dark:hover:text-gold"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Oratory League. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}; 