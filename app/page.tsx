export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans text-zinc-800">
      <main className="w-full max-w-3xl px-8 py-24 text-center sm:text-left">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
          🎸 Nice Guitar Lesson
        </h1>

        <p className="mt-4 text-lg text-zinc-600">
          Learn guitar in the heart of Nice — relaxed, personal lessons for
          beginners and intermediates. Acoustic • Electric • Classical.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:items-start">
          <a
            href="#book"
            className="rounded-xl bg-zinc-900 px-6 py-3 text-white transition hover:bg-zinc-700"
          >
            Book a Lesson
          </a>
          <a
            href="#about"
            className="rounded-xl border border-zinc-300 px-6 py-3 text-zinc-700 transition hover:bg-zinc-100"
          >
            Learn More
          </a>
        </div>

        <div className="mt-16">
          <img
            src="/guitar-lesson.jpg"
            alt="Guitar lesson in Nice"
            className="w-full rounded-2xl shadow-sm"
          />
        </div>
      </main>

      <footer className="mt-auto mb-6 text-sm text-zinc-500">
        © {new Date().getFullYear()} Nice Guitar Lesson · Made with ❤️ in Nice
      </footer>
    </div>
  );
}
