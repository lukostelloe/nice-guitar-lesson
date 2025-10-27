"use client";
import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError(null);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      email: (
        form.elements.namedItem("email") as HTMLInputElement
      ).value.trim(),
      message: (
        form.elements.namedItem("message") as HTMLTextAreaElement
      ).value.trim(),
      website: (
        form.elements.namedItem("website") as HTMLInputElement
      ).value.trim(), // honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        setStatus("error");
        setError(json.error ?? "Something went wrong");
      } else {
        setStatus("sent");
        form.reset();
      }
    } catch {
      setStatus("error");
      setError("Network error");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mt-8 grid gap-4 rounded-2xl border border-zinc-200 p-6 bg-white"
    >
      {/* Honeypot field (hidden from users) */}
      <input
        type="text"
        name="website"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm font-medium text-zinc-800">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          className="rounded-xl border border-zinc-300 px-4 py-3 outline-none focus:ring-2 focus:ring-zinc-300"
          placeholder="Your name"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="email" className="text-sm font-medium text-zinc-800">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="rounded-xl border border-zinc-300 px-4 py-3 outline-none focus:ring-2 focus:ring-zinc-300"
          placeholder="you@example.com"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm font-medium text-zinc-800">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="rounded-xl border border-zinc-300 px-4 py-3 outline-none focus:ring-2 focus:ring-zinc-300"
          placeholder="Tell me a bit about your goals, experience, and availability…"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-xl bg-zinc-900 px-6 py-3 text-white transition hover:bg-zinc-700 disabled:opacity-50"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>

      {status === "sent" && (
        <p className="text-sm text-green-700">
          Thanks! Your message has been sent.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-700">Oops: {error}</p>
      )}
    </form>
  );
}
