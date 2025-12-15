import TetrisBackdrop from "@/components/TetrisBackdrop";

export default function ContactPage() {
  return (
    <>
      <div className="hidden md:block">
        <TetrisBackdrop layout="contact" />
      </div>

      <p className="nk-heading-pixel md:text-[calc(var(--tetris-unit)*0.4)] text-[calc(var(--tetris-unit)*1.2)] uppercase tracking-[0.25em] text-nk-accent text-center">
        Contact
      </p>

      <section
        className="
          relative z-10
          mt-[calc(var(--tetris-unit)*2.6)]
          mx-auto
          max-w-[calc(var(--tetris-unit)*60)]
          px-[calc(var(--tetris-unit)*1)]
          place-items-center
        "
      >
        <div
          className="
            grid
            md:grid-cols-2
            items-start
            gap-[calc(var(--tetris-unit)*1.2)]
          "
        >
          {/* LEFT COLUMN */}
          <div className="space-y-[calc(var(--tetris-unit)*0.6)] mt-[calc(var(--tetris-unit)*0.4)]">
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

          {/* RIGHT COLUMN */}
          <div className="flex justify-center md:justify-end">
            <div
              className="
                nk-card
                w-full
                md:max-w-[calc(var(--tetris-unit)*8)] max-w-[calc(var(--tetris-unit)*24)]
                p-[calc(var(--tetris-unit)*0.5)]
                space-y-[calc(var(--tetris-unit)*0.4)]
                bg-slate-800/60
                backdrop-blur-sm
                border-nk-accent-muted/60
              "
            >
              <h2 className="text-2xl text-center font-semibold tracking-wide mb-4">
                Connect with me
              </h2>

              <a
                href="mailto:shane.m.king94@gmail.com"
                className="nk-btn-primary w-full text-center text-lg"
              >
                Email Me
              </a>

              <a
                href="https://linkedin.com/in/shane-m-king"
                target="_blank"
                rel="noopener noreferrer"
                className="nk-btn-ghost w-full text-center text-lg"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/shane-m-king"
                target="_blank"
                rel="noopener noreferrer"
                className="nk-btn-ghost w-full text-center text-lg"
              >
                GitHub
              </a>

              <a
                href="/Shane-King-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="nk-btn-ghost w-full text-center text-lg"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
