import React from 'react';
import { Globe, Menu, User } from 'lucide-react';
import { useStore } from '../store/useStore';

export function Header() {
  const { userProgress } = useStore();

  return (
    <header className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Globe className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold">SwedishLingo</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#lessons" className="hover:text-indigo-200 transition-colors">
              Lessons
            </a>
            <a href="#practice" className="hover:text-indigo-200 transition-colors">
              Practice
            </a>
            <a href="#vocabulary" className="hover:text-indigo-200 transition-colors">
              Vocabulary
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="bg-indigo-700 rounded-lg px-3 py-1">
              <span className="text-sm">Level {userProgress.level}</span>
            </div>
            <User className="h-6 w-6 cursor-pointer hover:text-indigo-200 transition-colors" />
            <Menu className="h-6 w-6 md:hidden cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
}