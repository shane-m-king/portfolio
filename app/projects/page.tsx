import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import TetrisBackdrop from "@/components/TetrisBackdrop";

export default function ProjectsPage() {
  return (
    <>
      <TetrisBackdrop layout="projects"/>
      <section className="space-y-6">
        <header className="space-y-2">
          <p className="nk-heading-pixel text-lg uppercase tracking-[0.25em] text-nk-accent">
            Projects
          </p>
          <p className="text-[1.1rem] text-slate-300 max-w-xl ml-[1%]">
            A selection of full-stack, backend, and frontend projects built with
            Next.js, Node, React, and modern tooling.
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-3 ml-[1%] max-w-[98%]">
          {projects.map((project) => (
           <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
