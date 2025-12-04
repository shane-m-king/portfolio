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
        transition-transform transition-shadow
        duration-100
        hover:-translate-y-[1px]
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
          {/* faint overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      )}

      <div className={compact ? "p-2.5 space-y-1.5" : "p-3 space-y-2"}>
        <h3 className="text-lg font-semibold tracking-tight">
          {project.name}
        </h3>
        <p
          className={`
            text-base text-slate-400
            ${compact ? "line-clamp-2" : "line-clamp-3"}
          `}
        >
          {project.shortDescription}
        </p>

        <div className="mt-2 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag, idx) => (
            <span
              key={tag}
              className={idx === 0 ? "nk-chip-accent text-[0.8rem]" : "nk-chip text-[0.8rem]"}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
