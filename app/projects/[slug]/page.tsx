import Link from "next/link";
import { getProjectBySlug } from "@/data/projects";
import TetrisBackdrop from "@/components/TetrisBackdrop";
import ProjectImageCarousel from "@/components/ProjectImageCarousel";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <>
        <div className="hidden md:block">
          <TetrisBackdrop layout="home" />
        </div>

        <div
          className="
            mx-auto
            max-w-[calc(var(--tetris-unit)*120)]
            px-[calc(var(--tetris-unit)*1.2)]
            mt-[calc(var(--tetris-unit)*1)]
          "
        >
          <h1 className="text-center text-5xl font-semibold mb-2">Project not found</h1>
          <Link href="/projects" className="block text-center text-3xl text-emerald-300 underline">
            Back to projects
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="hidden md:block">
        <TetrisBackdrop layout="project" />
      </div>

      <p className="nk-heading-pixel md:text-[calc(var(--tetris-unit)*0.4)] text-[calc(var(--tetris-unit)*1.2)] text-nk-accent uppercase">
        Project
      </p>

      <article
        className="
          relative z-5
          mx-auto
          max-w-[calc(var(--tetris-unit)*120)]
          px-[calc(var(--tetris-unit)*1.2)]
          mt-[calc(var(--tetris-unit)*0.2)]
          space-y-[calc(var(--tetris-unit)*0.8)]
        "
      >
        {/* HEADER */}
        <header className="grid gap-[calc(var(--tetris-unit)*1.2)] md:grid-cols-2 items-start">
          <div className="space-y-[calc(var(--tetris-unit)*0.6)] mt-[calc(var(--tetris-unit)*0.5)]">
            <h1 className="text-3xl font-semibold tracking-tight">
              {project.name}
            </h1>

            <p className="text-[1.1rem] text-slate-300 max-w-md">
              {project.shortDescription}
            </p>

            <div className="flex flex-wrap gap-[calc(var(--tetris-unit)*0.3)] text-[0.8rem] text-slate-300">
              <span className="rounded-full border border-nk-accent-muted/60 px-3 py-1">
                Role: {project.role}
              </span>
              <span className="rounded-full border border-nk-accent-muted/60 px-3 py-1">
                Stack: {project.techStack.join(", ")}
              </span>
            </div>

            <div className="flex gap-[calc(var(--tetris-unit)*0.4]">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="nk-btn-primary mx-3"
                >
                  View Live
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="nk-btn-ghost"
                >
                  View Code
                </a>
              )}
            </div>
          </div>

          {project.images && project.images.length > 0 && (
            <ProjectImageCarousel
              images={project.images}
              alt={project.name}
            />
          )}
        </header>

        {/* DETAILS */}
        <section className="space-y-[calc(var(--tetris-unit)*0.3)]">
          {/* OVERVIEW */}
          <div className="nk-card p-[calc(var(--tetris-unit)*0.3)] bg-slate-800/60 backdrop-blur-sm space-y-[calc(var(--tetris-unit)*0.2)] border-nk-accent-muted/60">
            <h2 className="text-xl font-semibold tracking-wide">Overview</h2>
            <p className="text-[1.1rem] text-slate-200 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* GRID */}
          <div className="grid gap-[calc(var(--tetris-unit)*0.3)] md:grid-cols-3">
            <div className="nk-card p-[calc(var(--tetris-unit)*0.4)] space-y-3 bg-slate-800/60 backdrop-blur-sm border-nk-accent-muted/60">
              <h3 className="text-[1.1rem] text-center font-semibold uppercase tracking-wide text-slate-300">
                Tech Stack
              </h3>
              <ul className="text-[0.9rem] text-slate-200 space-y-2">
                {project.techStack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>

            <div className="nk-card p-[calc(var(--tetris-unit)*0.4)] space-y-3 bg-slate-800/60 backdrop-blur-sm border-nk-accent-muted/60">
              <h3 className="text-[1.1rem] text-center font-semibold uppercase tracking-wide text-slate-300">
                Highlights
              </h3>
              <ul className="text-[0.9rem] text-slate-200 space-y-3">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="nk-card p-[calc(var(--tetris-unit)*0.4)] space-y-3 bg-slate-800/60 backdrop-blur-sm border-nk-accent-muted/60">
              <h3 className="text-[1.1rem] text-center font-semibold uppercase tracking-wide text-slate-300">
                Challenges
              </h3>
              <ul className="text-[0.9rem] text-slate-200 space-y-3">
                {project.challenges.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              {project.futureImprovements.length > 0 && (
                <>
                  <h3 className="text-[1.1rem] text-center font-semibold uppercase tracking-wide text-slate-300 border-t border-nk-accent-muted/40 pt-4 mt-4">
                    Next Steps
                  </h3>
                  <ul className="text-[0.9rem] text-slate-200 space-y-3">
                    {project.futureImprovements.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </section>

        {/* BACK LINK */}
        <div className="pt-[calc(var(--tetris-unit)*0.1)]">
          <Link
            href="/projects"
            className="nk-btn-primary w-full max-w-[calc(var(--tetris-unit)*3.2)] justify-center text-base"
          >
            Back to Projects
          </Link>
        </div>
      </article>
    </>
  );
}
