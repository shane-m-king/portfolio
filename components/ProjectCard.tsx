import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  compact?: boolean;
}

export default function ProjectCard({ project, compact }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`
        group relative block overflow-hidden
        nk-card
        bg-slate-800/60 backdrop-blur-sm
        border border-nk-accent-muted/60
        hover:border-nk-accent/80
        transition-transform transition-shadow duration-100
        hover:-translate-y-[calc(var(--tetris-unit)*0.1)]
        hover:shadow-none
        rounded-lg
      `}
    >
      {!compact && project.images?.[0] && (
        <div className="relative w-full aspect-video overflow-hidden border-b border-nk-border">
          <Image
            src={project.images[0]}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />          
        </div>
      )}

      <div className={compact
        ? "px-[calc(var(--tetris-unit)*0.5)] py-[calc(var(--tetris-unit)*0.2)] space-y-[calc(var(--tetris-unit)*0.2)]"
        : "px-[calc(var(--tetris-unit)*0.5)] py-[calc(var(--tetris-unit)*0.2)] space-y-[calc(var(--tetris-unit)*0.2)]"
      }>
        <h3 className="text-lg font-semibold tracking-tight">{project.name}</h3>
        <p className={`text-base text-slate-400 ${compact ? "line-clamp-2" : "line-clamp-3"}`}>
          {project.shortDescription}
        </p>

        <div className="mt-[calc(var(--tetris-unit)*0.4)] flex flex-wrap gap-[calc(var(--tetris-unit)*0.4)]">
          {project.tags.slice(0, 3).map((tag, idx) => (
            <span
              key={tag}
              className={idx === 0
                ? "nk-chip-accent md:text-[calc(var(--tetris-unit)*0.25)] text-[calc(var(--tetris-unit)*1)]"
                : "nk-chip md:text-[calc(var(--tetris-unit)*0.25)] text-[calc(var(--tetris-unit)*1)]"
              }
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
