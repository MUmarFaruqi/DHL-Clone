
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111827] text-white py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
          <div className="col-span-2 lg:col-span-2">
            <span className="text-2xl font-black tracking-tighter text-[#FFCC00] mb-6 block">GLOBALSHIP</span>
            <p className="text-gray-400 max-w-sm mb-8">
              Connecting people, improving lives. We are the leading global logistics provider, specializing in express shipping, freight, and supply chain solutions.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#D40511] transition-colors cursor-pointer">F</div>
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#D40511] transition-colors cursor-pointer">X</div>
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#D40511] transition-colors cursor-pointer">L</div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-500">Services</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-[#FFCC00]">Express Shipping</a></li>
              <li><a href="#" className="hover:text-[#FFCC00]">Parcel & Document</a></li>
              <li><a href="#" className="hover:text-[#FFCC00]">Freight Forwarding</a></li>
              <li><a href="#" className="hover:text-[#FFCC00]">Supply Chain</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-500">Company</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-[#FFCC00]">About Us</a></li>
              <li><a href="#" className="hover:text-[#FFCC00]">Careers</a></li>
              <li><a href="#" className="hover:text-[#FFCC00]">Sustainability</a></li>
              <li><a href="#" className="hover:text-[#FFCC00]">Press</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-500">Legal</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-[#FFCC00]">Terms of Use</a></li>
              <li><a href="#" className="hover:text-[#FFCC00]">Privacy Notice</a></li>
              <li><a href="#" className="hover:text-[#FFCC00]">Fraud Awareness</a></li>
              <li><a href="#" className="hover:text-[#FFCC00]">Dispute Resolution</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} GlobalShip Express. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
