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
        <TetrisBackdrop layout="projects"/>
        <div>
          <h1 className="text-xl font-semibold mb-2">Project not found</h1>
          <Link href="/projects" className="text-sm text-emerald-300 underline">
            Back to projects
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <TetrisBackdrop layout="project"/>
      <p className="nk-heading-pixel text-lg text-nk-accent uppercase ml-4">Project</p>
      <article className="space-y-12 max-w-[90%] mx-auto mt-2">
        <header className="grid gap-6 md:grid-cols-2 items-start">
          <div className="space-y-4 mt-10 ml-15">
            <h1 className="text-3xl md:text-3xl font-semibold tracking-tight">
              {project.name}
            </h1>

            <p className="text-[1.1rem] text-slate-300 max-w-md">
              {project.shortDescription}
            </p>

            <div className="flex flex-wrap gap-3 text-[0.8rem] text-slate-300">
              <span className="rounded-full border border-nk-accent-muted/60 px-3 py-1">
                Role: {project.role}
              </span>
              <span className="rounded-full border border-nk-accent-muted/60 px-3 py-1">
                Stack: {project.techStack.join(", ")}
              </span>
            </div>
        
            <div className="flex gap-3 text-sm">
              {project.liveUrl && (
                <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="nk-btn-primary"
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
              <ProjectImageCarousel images={project.images} alt={project.name} />
            )}
          
        </header>
        <section className="space-y-4 max-w-[95%] mx-auto">

          {/* OVERVIEW */}
          <div className="nk-card p-6 bg-slate-800/60 backdrop-blur-sm space-y-4 border-nk-accent-muted/60">
            <h2 className="text-xl font-semibold tracking-wide">Overview</h2>
            <p className="text-[1.1rem] text-slate-200 leading-relaxed">
              {project.longDescription}
            </p>
          </div>
        
          {/* GRID OF SECTIONS */}
          <div className="grid gap-6 md:grid-cols-3">
        
            <div className="nk-card p-6 bg-slate-800/60 backdrop-blur-sm space-y-3 border-nk-accent-muted/60">
              <h3 className="text-[1.1rem] text-center font-semibold uppercase tracking-wide text-slate-300">Tech Stack</h3>
              <ul className="text-[0.9rem] text-slate-200 space-y-2">
                {project.techStack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
        
            <div className="nk-card p-6 bg-slate-800/60 backdrop-blur-sm space-y-3 border-nk-accent-muted/60">
              <h3 className="text-[1.1rem] text-center font-semibold uppercase tracking-wide text-slate-300">Highlights</h3>
              <ul className="text-[0.9rem] text-slate-200 space-y-3">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
        
            <div className="nk-card p-6 bg-slate-800/60 backdrop-blur-sm space-y-3 border-nk-accent-muted/60">
              <h3 className="text-[1.1rem] text-center font-semibold uppercase tracking-wide text-slate-300">Challenges</h3>
              <ul className="text-[0.9rem] text-slate-200 space-y-3">
                {project.challenges.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {project.futureImprovements.length > 0 && (
                <>
                  <h3 className="text-[1.1rem] text-center font-semibold uppercase tracking-wide text-slate-300 border-t border-nk-accent-muted/40 pt-4 mt-4">Next Steps</h3>
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
      </article>
      <Link
        href="/projects"
        className="nk-btn-primary w-full justify-center text-base py-3 max-w-[10rem] mt-6 ml-7"
      >
        Back to Projects
      </Link>      
    </>
  );
}
