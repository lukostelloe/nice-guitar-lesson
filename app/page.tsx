import { ContactForm } from "@/components/ContactForm";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Head from "next/head";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans text-zinc-800">
      <Head>
        {/* Basic */}
        <title>
          <h1 className="text-3xl font-bold text-zinc-900">
            Guitar Lessons in Nice
          </h1>
          Guitar Lessons in Nice
        </title>
        <meta
          name="description"
          content="Relaxed, personal guitar lessons in Nice for beginners and intermediates. Acoustic, electric & classical. First lesson free."
        />
        <link rel="canonical" href="https://niceguitarlesson.com/" />

        {/* Indexing */}
        <meta
          name="robots"
          content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Nice Guitar Lesson" />
        <meta property="og:url" content="https://niceguitarlesson.com/" />
        <meta
          property="og:title"
          content="Guitar Lessons in Nice | Acoustic, Electric & Classical"
        />
        <meta
          property="og:description"
          content="Relaxed, personal guitar lessons in Nice. First lesson free."
        />
        <meta
          property="og:image"
          content="https://niceguitarlesson.com/og/og-nice-guitar-lesson.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Guitar Lessons in Nice | Acoustic, Electric & Classical"
        />
        <meta
          name="twitter:description"
          content="Relaxed, personal guitar lessons in Nice. First lesson free."
        />
        <meta
          name="twitter:image"
          content="https://niceguitarlesson.com/og/og-nice-guitar-lesson.jpg"
        />

        {/* Hreflang (only if you have a FR page) */}
        <link
          rel="alternate"
          hrefLang="en"
          href="https://niceguitarlesson.com/"
        />
        <link
          rel="alternate"
          hrefLang="fr"
          href="https://niceguitarlesson.com/fr"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://niceguitarlesson.com/"
        />

        {/* Favicons (optional but nice) */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://niceguitarlesson.com/#business",
            name: "Nice Guitar Lesson",
            url: "https://niceguitarlesson.com/",
            image: "https://niceguitarlesson.com/og/og-nice-guitar-lesson.jpg",
            telephone: "+33 6 44 86 99 02",
            email: "hello@niceguitarlesson.com",
            priceRange: "€€",
            address: {
              "@type": "PostalAddress",
              streetAddress: "12 Rue de la Guitare",
              addressLocality: "Nice",
              postalCode: "06000",
              addressCountry: "FR",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 43.7009,
              longitude: 7.2683,
            },
            areaServed: { "@type": "City", name: "Nice" },
            sameAs: [
              "https://www.youtube.com/@elkosbeats",
              "https://open.spotify.com/artist/0k519s8KWmO2LM9Jw63dzf",
            ],
            makesOffer: [
              {
                "@type": "Offer",
                price: "30",
                priceCurrency: "EUR",
                description: "30-minute trial lesson",
                availability: "https://schema.org/InStock",
              },
            ],
            serviceType: "Guitar lessons",
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "10:00",
                closes: "19:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Saturday"],
                opens: "10:00",
                closes: "14:00",
              },
            ],
            potentialAction: {
              "@type": "ReserveAction",
              target: "https://niceguitarlesson.com/#contact",
              name: "Book a free trial lesson",
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://niceguitarlesson.com/",
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Do you offer a free trial lesson?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes — a free 30-minute first lesson to understand your goals and level.",
                },
              },
              {
                "@type": "Question",
                name: "Where are lessons held?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "In central Nice or online via video call. I can travel within central Nice by arrangement.",
                },
              },
              {
                "@type": "Question",
                name: "What styles do you teach?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Acoustic, electric, and classical guitar. We can focus on songs you love, fingerstyle, chords, reading, or technique.",
                },
              },
            ],
          }),
        }}
      />
      <iframe
        title="Map – Guitar Lessons in Nice"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!...your-place-id..."
        className="mt-6 h-64 w-full rounded-lg border"
      />

      <main className="w-full max-w-3xl px-8 py-24 text-center">
        <h2 className="text-2xl font-semibold text-zinc-900">{t("title")}</h2>
        <p className="text-lg text-zinc-600">
          Learn guitar in the heart of Nice — relaxed, personal lessons for
          beginners and intermediates
        </p>

        {/* About Me Section */}
        <section id="about" className="mt-24">
          <h2 className="text-2xl font-semibold text-zinc-900">About Me</h2>
          <h2 className="text-l font-semibold text-zinc-900">
            Guitarist, teacher, songwriter, music producer
          </h2>
          <p className="mt-4 text-zinc-600 leading-relaxed">
            Hi, I&apos;m Luke
          </p>
          <p className="mt-4 text-zinc-600 leading-relaxed">
            I have been playing music for as long as I can remember. As a kid
            there were always instruments around the house, and I was one of
            those kids who was made go to piano lessons. As a teenager I loved
            rock and punk music, and played drums with a lot of bands, but the
            guitar was the instrument that allowed me to express myself fully in
            a musical sense. I&apos;m mostly self taught, and have devoted
            hours, days, years to learning and developing my own style and way
            of expression on the guitar. I love teaching, because I can pass on
            this passion, the things I know, but also help students to find
            their unique way of playing that allows them to fully be themselves
            and play how they want to play. I love all types of music, but
            songwriting and production is my passion with music. I have written
            and released hundreds of original songs and instrumentals, and have
            even sold music to high level artists.
          </p>
        </section>
        <section id="contact" className="mt-24">
          <h2 className="text-2xl font-semibold text-zinc-900">Resources</h2>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="https://www.youtube.com/@elkosbeats"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-zinc-900 px-6 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-100 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
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
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
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
        <section id="contact" className="mt-24">
          <h2 className="text-2xl font-semibold text-zinc-900">Contact</h2>
          <p>Luke</p>
          <p>
            <a href="tel:+33644869902" className="underline underline-offset-4">
              +33 (0)6 44 86 99 02
            </a>
          </p>
          <ContactForm />
        </section>
      </main>

      <footer className="mt-auto mb-6 text-sm text-zinc-500">
        {" "}
        <p>
          <strong>Nice Guitar Lesson</strong> — Guitar lessons in Nice
        </p>
        <p>
          06200 Nice · <a href="tel:+33644869902">+33 (0)6 44 87 99 02</a>
        </p>
        © {new Date().getFullYear()} Nice Guitar Lesson · Made with ❤️ in Nice
      </footer>
    </div>
  );
}
