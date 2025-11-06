import { ContactForm } from "@/components/ContactForm";
import { useTranslations } from "next-intl";
import Head from "next/head";
import Faq from "@/components/Faq";
import AboutMe from "@/components/AboutMe";
import Resources from "@/components/Resources";
import Contact from "@/components/Contact";

export default function Home() {
  const t = useTranslations("homepage");
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
          content="Relaxed, personal guitar lessons in Nice for all levels. Acoustic, electric & classical."
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

      <main className="w-full max-w-3xl px-8 py-24 text-center">
        <h2 className="text-2xl font-semibold text-zinc-900">{t("title")}</h2>
        <p className="text-lg text-zinc-600">{t("intro")}</p>

        <section id="about" className="mt-24">
          <AboutMe />
        </section>
        <section id="contact" className="mt-24">
          <Resources />
        </section>
        <section id="contact" className="mt-24">
          <Contact />
        </section>
        <section id="faq" className="mt-24">
          <Faq />
        </section>
      </main>

      <footer className="flex flex-col items-center justify-center mb-6 text-sm text-zinc-500 text-center">
        <p>
          <strong>Nice Guitar Lesson</strong>
        </p>
        <p>
          06200 Nice ·{" "}
          <a href="tel:+33644869902" className="underline underline-offset-2">
            +33 (0)6 44 87 99 02
          </a>
        </p>
        <p>© {new Date().getFullYear()} · Made with ❤️ in Nice</p>
      </footer>
    </div>
  );
}
