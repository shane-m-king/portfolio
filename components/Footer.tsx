export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/80 py-[calc(var(--tetris-unit)*0.3)] text-sm text-slate-400">
      <div
        className="
          mx-auto 
          w-full 
          px-[calc(var(--tetris-unit)*0.8)]
          flex 
          items-center 
          justify-between
          max-w-[calc(var(--tetris-unit)*120)]
        "
      >
        <span>© {new Date().getFullYear()} Shane King</span>

        <span className="whitespace-nowrap">
          Built with Next.js &amp; TypeScript (
          <a
            href="https://github.com/shane-m-king/portfolio"
            className="text-nk-accent hover:text-nk-accent-soft"
            target="_blank"
            rel="noopener noreferrer"
          >
            view code
          </a>
          )
        </span>
      </div>
    </footer>
  );
}
