"use client";
import Link from "next/link";

import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export function Header() {
  const router = useRouter();
  const locale = useLocale();

  const toggleLanguage = async () => {
    const newLocale = locale === "en" ? "fr" : "en";

    try {
      await fetch("/api/language", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ locale: newLocale }),
      });

      // Refresh the page to apply new locale
      router.refresh();
    } catch (error) {
      console.error("Failed to change language:", error);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-sm">
      <div className="flex h-16 items-center justify-between px-6">
        {/* Left side - Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-semibold text-zinc-900 hover:text-zinc-600 transition-colors"
        >
          <span className="text-2xl">🎸</span>
          <span>Nice Guitar Lesson</span>
        </Link>

        {/* Right side - Navigation and Social Links */}
        <nav className="flex items-center gap-6">
          {/* Main Navigation */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors"
            >
              About Me
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 border-l border-zinc-200 pl-4">
            <a
              href="https://www.instagram.com/elkosbeats/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 text-pink-600 transition-colors"
              aria-label="Instagram"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm8.25 2.25a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" />
              </svg>
            </a>

            <a
              href="https://www.youtube.com/@elkosbeats"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 text-red-600 transition-colors"
              aria-label="YouTube"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

            {/* Language Button */}
            <button
              onClick={toggleLanguage}
              className="text-zinc-600 hover:text-zinc-900 transition-colors font-medium text-sm px-2 py-1 rounded-md hover:bg-zinc-100"
              aria-label="Toggle Language"
            >
              {locale === "en" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 60 40"
                  width="24"
                  height="16"
                  aria-label="British Flag"
                >
                  <rect width="60" height="40" fill="#012169" />
                  <path
                    fill="#FFF"
                    d="M0 0l60 40m0-40L0 40"
                    stroke="#FFF"
                    strokeWidth="8"
                  />
                  <path
                    fill="#C8102E"
                    d="M0 0l60 40m0-40L0 40"
                    stroke="#C8102E"
                    strokeWidth="4"
                  />
                  <path fill="#FFF" d="M25 0h10v40H25zM0 15h60v10H0z" />
                  <path fill="#C8102E" d="M27 0h6v40h-6zM0 17h60v6H0z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 60 40"
                  width="24"
                  height="16"
                  aria-label="French Flag"
                >
                  <rect width="20" height="40" x="0" y="0" fill="#0055A4" />
                  <rect width="20" height="40" x="20" y="0" fill="#FFFFFF" />
                  <rect width="20" height="40" x="40" y="0" fill="#EF4135" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
