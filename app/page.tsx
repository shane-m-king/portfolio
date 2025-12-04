import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import TetrisBackdrop from "@/components/TetrisBackdrop";

export default function HomePage() {
  const featured = projects[0];

  return (
    <>
      <div className="hidden md:block"><TetrisBackdrop layout="home" /></div>
      <p className="nk-heading-pixel text-[1.15rem] text-nk-accent">
          SOFTWARE ENGINEER • SEATTLE
      </p>
      <section className="space-y-14 md:space-y-16 relative z-5 mt-1">
        {/* TWO-COLUMN HERO SECTION */}
        <div className="grid gap-2 md:grid-cols-[minmax(0,2fr)_minmax(0,1.8fr)] ml-[5%] max-w-[90%] items-start">
          {/* LEFT COLUMN: intro text */}
          <div className="space-y-6 mt-7">
            <h1 className="text-3xl md:text-[2.1rem] font-semibold tracking-tight max-w-[92%]">
              I build full-stack web apps with{" "}
              <span className="text-nk-accent">Next.js</span> and a focus on
              clean architecture, great UX, and game-inspired polish.
            </h1>

            <p className="text-slate-300 max-w-xl text-base md:text-base">
              Former Twitch creator turned software engineer. I love building
              game-adjacent tools, applications, and systems that feel responsive,
              intuitive, and fun to use.
            </p>
          </div>

          {/* RIGHT COLUMN: CTA panel */}
          <div className="space-y-5 mt-4 md:mt-8">
            <div className="nk-card-elevated p-4 md:p-5 flex flex-col gap-3 bg-slate-800/60 backdrop-blur-sm border-nk-accent-muted/60">
              <p className="nk-heading-pixel text-center text-lg text-slate-300 mb-1">
                START HERE
              </p>

              <p className="text-[1.1rem] text-center text-slate-300 mb-1">
                Jump into my projects to see what I've been up to, or learn a bit more about me.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/projects"
                  className="nk-btn-primary w-full justify-center text-base py-3"
                >
                  View Projects
                </Link>

                <Link
                  href="/about"
                  className="nk-btn-ghost w-full justify-center text-base py-3"
                >
                  About Me
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* FEATURED PROJECT — BELOW BOTH COLUMNS */}
        <div className="flex justify-center">
          <div className="w-full max-w-xl">
            <p className="nk-heading-pixel text-lg text-slate-400 mb-2 text-center">
              FEATURED PROJECT
            </p>
            <ProjectCard project={featured} compact />
          </div>
        </div>
      </section>
    </>
  );
}
