'use client';
import Link from "next/link";

import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

export function Header() {
  const router = useRouter();
  const locale = useLocale();

  const toggleLanguage = async () => {
    const newLocale = locale === 'en' ? 'fr' : 'en';
    
    try {
      await fetch('/api/language', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ locale: newLocale }),
      });
      
      // Refresh the page to apply new locale
      router.refresh();
    } catch (error) {
      console.error('Failed to change language:', error);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-sm">
      <div className="flex h-16 items-center justify-between px-6">
        {/* Left side - Logo */}
        <Link href="/" className="flex items-center gap-2 text-xl font-semibold text-zinc-900 hover:text-zinc-600 transition-colors">
          <span className="text-2xl">🎸</span>
          <span>Nice Guitar Lesson</span>
        </Link>

        {/* Right side - Navigation and Social Links */}
        <nav className="flex items-center gap-6">
          {/* Main Navigation */}
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors">
              About Me
            </Link>
            <Link href="#contact" className="text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors">
              Contact
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 border-l border-zinc-200 pl-4">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-pink-600 transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.mel849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-red-600 transition-colors"
              aria-label="YouTube"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>

            {/* Language Button */}
            <button
              onClick={toggleLanguage}
              className="text-zinc-600 hover:text-zinc-900 transition-colors font-medium text-sm px-2 py-1 rounded-md hover:bg-zinc-100"
              aria-label="Toggle Language"
            >
              {locale === 'en' ? 'FR' : 'EN'}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

