import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import TetrisBackdrop from "@/components/TetrisBackdrop";

export default function ProjectsPage() {
  return (
    <>
      <div className="hidden md:block">
        <TetrisBackdrop layout="projects" />
      </div>

      <section
        className="
          relative z-10
          mx-auto
          max-w-[calc(var(--tetris-unit)*120)]
          space-y-[calc(var(--tetris-unit)*0.8)]
        "
      >
        {/* HEADER */}
        <header className="space-y-[calc(var(--tetris-unit)*0.6)]">
          <p className="nk-heading-pixel md:text-[calc(var(--tetris-unit)*0.4)] text-[calc(var(--tetris-unit)*1.2)] uppercase tracking-[0.25em] text-nk-accent">
            Projects
          </p>

          <p className="text-xl text-slate-300 max-w-[calc(var(--tetris-unit)*36)]">
            A selection of full-stack, backend, and frontend projects built with
            Next.js, Node, React, and modern tooling.
          </p>
        </header>

        {/* PROJECT GRID */}
        <div
          className="
            grid
            gap-[calc(var(--tetris-unit)*0.5)]
            md:grid-cols-3
          "
        >
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
