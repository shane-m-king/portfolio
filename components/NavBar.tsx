import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-nk-border bg-slate-950/80 backdrop-blur-md sticky top-0 z-20">
      <nav className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-14 h-14 rounded-md overflow-hidden">
              <img
                src="/images/ProfilePictureZoomed.png"
                alt="Shane King"
                className="object-cover w-full h-full"
              />
            </div>
          <div className="flex flex-col leading-tight">
            <span className="text-lg md:text-xl font-medium">Shane King</span>
            <span className="text-[0.9rem] text-slate-400">
              Software Engineer
            </span>
          </div>
        </Link>
        <div className="flex gap-6 text-sm md:text-lg">
          <div className="border-l border-nk-border"></div>
          <Link href="/projects" className="hover:text-nk-accent">
            Projects
          </Link>
          <div className="border-l border-nk-border"></div>
          <Link href="/about" className="hover:text-nk-accent">
            About
          </Link>
          <div className="border-l border-nk-border"></div>
          <Link href="/contact" className="hover:text-nk-accent">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
