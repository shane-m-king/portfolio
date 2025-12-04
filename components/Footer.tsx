export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/80 py-4 text-sm text-slate-400">
      <div className="container mx-auto px-4 flex justify-between">
        <span>© {new Date().getFullYear()} Shane King</span>
        <span>
          Built with Next.js &amp; TypeScript (
            <a 
              href="https://github.com/shane-m-king/portfolio"
              className="text-nk-accent hover:text-nk-accent-soft"
              target="_blank"
              rel="noopener noreferrer"
            >
              view code
            </a>)
        </span>
      </div>
    </footer>
  );
}
