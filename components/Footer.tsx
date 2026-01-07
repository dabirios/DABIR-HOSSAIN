
import React from 'react';

const Footer: React.FC = () => {
  const linkedInUrl = "https://linkedin.com/in/dabir-hossain-54228027b";

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="text-2xl font-serif font-bold text-white mb-4 block underline decoration-blue-500">DABIR HOSSAIN</span>
            <p className="text-slate-400 max-w-sm">
              Shaping the future of hospitality with Swiss excellence and Indian hospitality values. From Cooch Behar to the global stage.
            </p>
          </div>
          <div className="flex md:justify-end space-x-6">
            <a 
              href={linkedInUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 group"
              aria-label="LinkedIn Profile"
            >
              <i className="fab fa-linkedin text-2xl group-hover:scale-110 transition-transform"></i>
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a href="#" className="text-slate-400 hover:text-pink-400 transition-colors" aria-label="Instagram">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors" aria-label="Facebook">
              <i className="fab fa-facebook text-2xl"></i>
            </a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Dabir Hossain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
