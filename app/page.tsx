import { ContactForm } from "@/components/ContactForm";
import Link from "next/link";
import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans text-zinc-800">
      <main className="w-full max-w-3xl px-8 py-24 text-center sm:text-left">
        <p className="text-lg text-zinc-600">
          Learn guitar in the heart of Nice — relaxed, personal lessons for
          beginners and intermediates. Acoustic • Electric • Classical.
        </p>

        {/* About Me Section */}
        <section id="about" className="mt-24">
          <h2 className="text-2xl font-semibold text-zinc-900">About Me</h2>
          <h1>{t('title')}</h1>
          <p className="mt-4 text-zinc-600 leading-relaxed">
            Hi, I&apos;m <strong>Luke</strong> — a guitarist and teacher based in
            Nice. I&apos;ve been playing for over 15 years and specialize in relaxed,
            personal lessons focused on helping you enjoy the instrument at your
            own pace. Whether you&apos;re starting out or looking to refine your
            technique, I&apos;ll help you develop confidence, musicality, and a
            lifelong love of playing.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="https://www.youtube.com/@elkosbeats"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-zinc-900 px-6 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-100 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Check out my beats on YouTube
            </a>
            <a
              href="https://open.spotify.com/artist/0k519s8KWmO2LM9Jw63dzf?si=TBx2mXdDQKeDSaxqu03ojw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-zinc-900 px-6 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-100 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              Check out my songs on Spotify
            </a>
            <Link  
              href="#contact"
              className="inline-block rounded-md border border-zinc-900 px-6 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-100 transition-colors text-center"
            >
              Contact me for a free lesson
            </Link>
          </div>
        </section>

        {/* Lessons Available Section */}
        <section className="mt-24">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">Lessons Available</h2>
          <div className="space-y-8">
            {/* Guitar */}
            <div className="flex gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-zinc-800 mb-2">Guitar</h3>
                <p className="text-zinc-600 leading-relaxed">
                  Learn acoustic, electric, or classical guitar at your own pace. From basic chords and strumming to advanced techniques and soloing, I&apos;ll help you build a solid foundation while keeping lessons fun and engaging.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-zinc-200 rounded-lg flex items-center justify-center text-4xl">
                  🎸
                </div>
              </div>
            </div>

            {/* Bass */}
            <div className="flex gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-zinc-800 mb-2">Bass</h3>
                <p className="text-zinc-600 leading-relaxed">
                  Master the rhythm section with bass guitar lessons tailored to your style. Learn fingerstyle and pick techniques, groove patterns, and how to lay down a solid foundation for any band.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-zinc-200 rounded-lg flex items-center justify-center text-4xl">
                  🎸
                </div>
              </div>
            </div>

            {/* Drums */}
            <div className="flex gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-zinc-800 mb-2">Drums</h3>
                <p className="text-zinc-600 leading-relaxed">
                  Develop your rhythm and coordination with drum lessons. Cover basic beats, fills, and timekeeping, progressing to more complex patterns and styles that fit your musical interests.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-zinc-200 rounded-lg flex items-center justify-center text-4xl">
                  🥁
                </div>
              </div>
            </div>

            {/* Music Production */}
            <div className="flex gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-zinc-800 mb-2">Music Production</h3>
                <p className="text-zinc-600 leading-relaxed">
                  Dive into the world of music production and recording. Learn to use DAWs, arrange tracks, mix and master your music, and bring your creative ideas to life in the studio or at home.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-zinc-200 rounded-lg flex items-center justify-center text-4xl">
                  🎹
                </div>
              </div>
            </div>

            {/* Songwriting */}
            <div className="flex gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-zinc-800 mb-2">Songwriting</h3>
                <p className="text-zinc-600 leading-relaxed">
                  Unlock your creative potential with songwriting lessons. Develop your lyric writing, song structure, melody creation, and learn how to craft compelling songs from concept to completion.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-zinc-200 rounded-lg flex items-center justify-center text-4xl">
                  ✍️
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mt-24">
          <h2 className="text-2xl font-semibold text-zinc-900">Contact</h2>
          <ContactForm />
        </section>
      </main>

      <footer className="mt-auto mb-6 text-sm text-zinc-500">
        © {new Date().getFullYear()} Nice Guitar Lesson · Made with ❤️ in Nice
      </footer>
    </div>
  );
}
