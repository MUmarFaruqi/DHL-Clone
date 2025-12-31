
import React from 'react';
import { ICONS, COLORS } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="bg-[#FFCC00] h-1.5 w-full"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="bg-[#D40511] p-1.5 rounded">
              <ICONS.Truck className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-[#D40511]">GLOBALSHIP</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-sm font-bold text-gray-700 hover:text-[#D40511] uppercase tracking-wide">Track</a>
            <a href="#" className="text-sm font-bold text-gray-700 hover:text-[#D40511] uppercase tracking-wide">Ship</a>
            <a href="#" className="text-sm font-bold text-gray-700 hover:text-[#D40511] uppercase tracking-wide">Enterprise</a>
            <a href="#" className="text-sm font-bold text-gray-700 hover:text-[#D40511] uppercase tracking-wide">Resources</a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="text-sm font-bold text-gray-700 hover:text-[#D40511]">Customer Portal</button>
            <button className="bg-[#D40511] text-white px-5 py-2 rounded font-bold text-sm hover:bg-red-700 transition-colors shadow-sm">
              Register
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
