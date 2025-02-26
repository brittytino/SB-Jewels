import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Heart, ShoppingBag, Search, Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2 text-sm text-gray-600">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone size={14} />
              <span>+91 9791939502</span>
            </div>
            <div className="hidden md:flex items-center gap-1">
              <MapPin size={14} />
              <span>Kovai, Tamil Nadu</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Heart className="cursor-pointer hover:text-gold-600 transition" size={20} />
            <ShoppingBag className="cursor-pointer hover:text-gold-600 transition" size={20} />
          </div>
        </div>
      </div>
      <div className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-8">
              <Link to="/" className="text-3xl font-serif font-bold">S.B Jewels</Link>
              <nav className="hidden md:flex items-center gap-6">
                <Link to="/" className="text-gray-800 hover:text-gold-600 transition">Home</Link>
                <Link to="/gallery" className="text-gray-800 hover:text-gold-600 transition">Gallery</Link>
                <Link to="/about" className="text-gray-800 hover:text-gold-600 transition">About</Link>
                <Link to="/contact" className="text-gray-800 hover:text-gold-600 transition">Contact</Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
                <Search size={18} />
                <input 
                  type="text" 
                  placeholder="Search jewelry..." 
                  className="bg-transparent border-none outline-none w-48"
                />
              </div>
              <Menu className="md:hidden cursor-pointer" size={24} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}