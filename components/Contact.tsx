import { ContactForm } from "./ContactForm";

function Contact() {
  return (
    <>
      <h2 className="text-2xl font-semibold text-zinc-900">Contact</h2>
      <p>
        <a href="tel:+33644869902" className="underline underline-offset-4">
          +33 (0)6 44 86 99 02
        </a>
      </p>
      <ContactForm />
    </>
  );
}

export default Contact;
