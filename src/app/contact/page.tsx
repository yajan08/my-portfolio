import ContactForm from "@/components/ContactForm";
import AboutSection from "@/components/AboutSection";
import Link from "next/link";

const interests = [
  "Chess",
  "Table Tennis",
  "Puzzles",
  "Football",
  "Reading",
  "Brainstorming",
  "Volunteering",
];

export default function ContactPage() {
  return (
    <div className="w-full max-w-5xl mx-auto py-8 sm:py-10 space-y-12 sm:space-y-14">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-[var(--color-ink-light)] hover:text-[var(--color-muted-orange)] transition-colors group"
      >
        <span className="transform group-hover:-translate-x-1 transition-transform">{"<-"}</span>
        Home
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
        <div className="space-y-10">
          <AboutSection />

          <section className="space-y-4" data-reveal>
            <h2 className="text-sm tracking-[0.4em] uppercase text-[var(--color-ink-light)]">
              Interests
            </h2>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <span key={interest} className="tag">
                  {interest}
                </span>
              ))}
            </div>
          </section>

          <section className="space-y-4" data-reveal>
            <h2 className="text-sm tracking-[0.4em] uppercase text-[var(--color-ink-light)]">
              Contact
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="contact-card">
                <span className="contact-label">Phone</span>
                <a href="tel:+919551993889" className="contact-value">
                  +91 9551993889
                </a>
              </div>
              <div className="contact-card">
                <span className="contact-label">Email</span>
                <a href="mailto:yajanmehta@gmail.com" className="contact-value">
                  yajanmehta@gmail.com
                </a>
              </div>
              <div className="contact-card">
                <span className="contact-label">GitHub</span>
                <a
                  href="https://github.com/yajan08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-value"
                >
                  GitHub
                  <span className="contact-link-icon">{"->"}</span>
                </a>
              </div>
              <div className="contact-card">
                <span className="contact-label">LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/yajan-mehta-9220442b2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-value"
                >
                  LinkedIn
                  <span className="contact-link-icon">{"->"}</span>
                </a>
              </div>
              <div className="contact-card">
                <span className="contact-label">Instagram</span>
                <a
                  href="https://instagram.com/nuvue.clicks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-value"
                >
                  Instagram
                  <span className="contact-link-icon">{"->"}</span>
                </a>
              </div>
            </div>
          </section>
        </div>

        <div className="surface" data-reveal>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
