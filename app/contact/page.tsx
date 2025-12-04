import TetrisBackdrop from "@/components/TetrisBackdrop";

export default function ContactPage() {
  return (
    <>
      <TetrisBackdrop layout="contact" />
      <p className="text-center nk-heading-pixel text-2xl uppercase tracking-[0.25em] text-nk-accent">
        Contact
      </p>
      <section className="grid md:grid-cols-2 gap-8 items-start max-w-5xl place-items-center mx-auto py-10 px-4 relative z-10 mt-9">
        {/* LEFT COLUMN */}
        <div className="mt-10 space-y-6">
          <h1 className="text-3xl font-semibold tracking-tight">
            Let's get in touch.
          </h1>

          <p className="text-slate-300 text-xl leading-relaxed max-w-md">
            I'm always excited to connect with teams building thoughtful, 
            well-designed products. Whether you're hiring, collaborating, 
            or just want to talk software, feel free to reach out.
          </p>

          <p className="text-slate-300 text-xl leading-relaxed max-w-md">
            The best way to contact me is via email.
          </p>
        </div>

        {/* RIGHT COLUMN: CONTACT CARD */}
        <div className="nk-card p-6 space-y-4 max-w-sm w-full bg-slate-800/60 backdrop-blur-sm border border-nk-accent-muted/60">

          <h2 className="text-2xl text-center font-semibold tracking-wide mb-8">
            Connect with me
          </h2>

          {/* EMAIL */}
          <a
            href="mailto:shane.m.king94@gmail.com"
            className="text-lg nk-btn-primary w-full text-center"
          >
            Email Me
          </a>

          {/* LINKEDIN */}
          <a
            href="https://linkedin.com/in/shane-m-king"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg nk-btn-ghost w-full text-center"
          >
            LinkedIn
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/shane-m-king"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg nk-btn-ghost w-full text-center"
          >
            GitHub
          </a>

          {/* RESUME */}
          <a
            href="/Shane-King-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg nk-btn-ghost w-full text-center"
          >
            View Resume
          </a>
        </div>
      </section>
    </>
  );
}
