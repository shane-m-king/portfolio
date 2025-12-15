import Link from "next/link";

export default function Navbar() {
  return (
    <header
      className="
        border-b 
        border-nk-border 
        bg-slate-950/80 
        backdrop-blur-md 
        sticky 
        top-0 
        z-20
      "
    >
      <nav
        className="
          mx-auto
          w-full
          flex
          items-center
          justify-between
          px-[calc(var(--tetris-unit)*0.8)]
          py-[calc(var(--tetris-unit)*0.1)]
          max-w-[calc(var(--tetris-unit)*120)]
        "
      >
        {/* LEFT SIDE (PROFILE + NAME) */}
        <Link href="/" className="flex items-center gap-[calc(var(--tetris-unit)*0.4)]">
          <div
            className="
              relative 
              rounded-md 
              overflow-hidden 
              md:w-[calc(var(--tetris-unit)*1.3)] w-[calc(var(--tetris-unit)*5)]
              md:h-[calc(var(--tetris-unit)*1.3)] h-[calc(var(--tetris-unit)*4)]
            "
          >
            <img
              src="/images/ProfilePictureZoomed.png"
              alt="Shane King"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="flex flex-col leading-tight">
            <span
              className="
                font-medium
                md:text-xl text-lg
              "
            >
              Shane King
            </span>

            <span
              className="
                text-slate-400
                md:text-lg text-base
              "
            >
              Software Engineer
            </span>
          </div>
        </Link>

        {/* RIGHT SIDE NAV LINKS */}
        <div
          className="
            flex 
            items-center 
            gap-[calc(var(--tetris-unit)*1.2)]
            md:text-xl text-lg
          "
        >
          <div className="border-l border-nk-border md:h-[calc(var(--tetris-unit)*1.1)] h-[calc(var(--tetris-unit)*4)]" />

          <Link href="/projects" className="hover:text-nk-accent">
            Projects
          </Link>

          <div className="border-l border-nk-border md:h-[calc(var(--tetris-unit)*1.1)] h-[calc(var(--tetris-unit)*4)]" />

          <Link href="/about" className="hover:text-nk-accent">
            About
          </Link>

          <div className="border-l border-nk-border md:h-[calc(var(--tetris-unit)*1.1)] h-[calc(var(--tetris-unit)*4)]" />

          <Link href="/contact" className="hover:text-nk-accent">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
