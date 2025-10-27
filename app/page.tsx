import { ContactForm } from "@/components/ContactForm";

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

        {/* About Me Section */}
        <section id="about" className="mt-24">
          <h2 className="text-2xl font-semibold text-zinc-900">About Me</h2>
          <p className="mt-4 text-zinc-600 leading-relaxed">
            Hi, I’m <strong>Luke</strong> — a guitarist and teacher based in
            Nice. I’ve been playing for over 15 years and specialize in relaxed,
            personal lessons focused on helping you enjoy the instrument at your
            own pace. Whether you’re starting out or looking to refine your
            technique, I’ll help you develop confidence, musicality, and a
            lifelong love of playing.
          </p>
        </section>
        <section id="about" className="mt-24">
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
