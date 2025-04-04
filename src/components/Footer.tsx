
import { Github, Heart } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-16">
      <div className="max-w-6xl mx-auto py-8 px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center mb-4 sm:mb-0">
            <span className="font-bold text-xl text-gradient mr-2">VideoSnag</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">© {year} All rights reserved</span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
            <a href="#" className="hover:text-primary transition-colors flex items-center">
              <Github className="h-4 w-4 mr-1" />
              GitHub
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          <p className="flex items-center justify-center">
            Made with <Heart className="h-3 w-3 mx-1 text-red-500" /> using React, Tailwind CSS & Vite
          </p>
          <p className="mt-1">
            <span className="text-gray-400 dark:text-gray-600">
              This service is for educational purposes only
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
