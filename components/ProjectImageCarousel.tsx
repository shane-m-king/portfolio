"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";

interface Props {
  images: string[];
  alt: string;
}

export default function ProjectImageCarousel({ images, alt }: Props) {
  const [index, setIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);
  const next = () => setIndex((prev) => (prev + 1) % images.length);

  const handlers = useSwipeable({
    onSwipedLeft: next,
    onSwipedRight: prev,
    preventScrollOnSwipe: true,
    trackTouch: true,
    trackMouse: false,
  });

  const src = images[index];

  useEffect(() => {
    if (!isZoomed) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsZoomed(false);
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isZoomed, images.length]);

  return (
    <>
      {/* CAROUSEL */}
      <div className="flex flex-col items-center gap-[calc(var(--tetris-unit)*0.1)] w-full">
        {/* IMAGE WRAPPER */}
        <div
          {...handlers}
          className="
            relative
            w-full md:max-w-[calc(var(--tetris-unit)*11)] max-w-[calc(var(--tetris-unit)*28)]
            aspect-[16/9]
            rounded-lg border border-nk-accent-muted/60 overflow-hidden
            shadow-[0_0_calc(var(--tetris-unit)*0.6)_rgba(34,197,94,0.15)]
            cursor-zoom-in
          "
          onClick={() => setIsZoomed(true)}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover transition-opacity duration-300"
          />
        </div>

        {/* ARROWS */}
        {images.length > 1 && (
          <div className="flex items-center justify-center md:gap-[calc(var(--tetris-unit)*0.5)] gap-[calc(var(--tetris-unit)*1.25)] md:mt-[calc(var(--tetris-unit)*0.1)] mt-[calc(var(--tetris-unit)*0.5)]">
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="
                md:text-xs text-base font-pixel tracking-wide
                bg-slate-900/70 hover:bg-slate-800/90
                border border-nk-accent-muted/60
                text-slate-200
                rounded-full md:w-[calc(var(--tetris-unit)*1)] w-[calc(var(--tetris-unit)*2.5)]
                md:h-[calc(var(--tetris-unit)*1)] h-[calc(var(--tetris-unit)*2.5)]
                flex items-center justify-center
                backdrop-blur-sm
                transition
                cursor-pointer
              "
            >←</button>

            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="
                md:text-xs text:xl font-pixel tracking-wide
                bg-slate-900/70 hover:bg-slate-800/90
                border border-nk-accent-muted/60
                text-slate-200
                rounded-full md:w-[calc(var(--tetris-unit)*1)] w-[calc(var(--tetris-unit)*2.5)]
                md:h-[calc(var(--tetris-unit)*1)] h-[calc(var(--tetris-unit)*2.5)]
                flex items-center justify-center
                backdrop-blur-sm
                transition
                cursor-pointer
              "
            >→</button>
          </div>
        )}

        {/* DOTS */}
        {images.length > 1 && (
          <div className="flex md:gap-[calc(var(--tetris-unit)*0.25)] gap-[calc(var(--tetris-unit)*0.4)] md:mt-[calc(var(--tetris-unit)*0.15)] mt-[calc(var(--tetris-unit)*0.5]">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={(e) => { e.stopPropagation(); setIndex(i); }}
                className={`
                  md:w-[calc(var(--tetris-unit)*0.2)] w-[calc(var(--tetris-unit)*0.8)]
                  md:h-[calc(var(--tetris-unit)*0.2)] h-[calc(var(--tetris-unit)*0.8)]
                  rounded-full transition
                  ${index === i ? "bg-emerald-400 scale-125" : "bg-slate-600 hover:bg-slate-500"}
                `}
              />
            ))}
          </div>
        )}
      </div>

      {/* LIGHTBOX MODAL */}
      {isZoomed && (
        <div
        {...handlers}
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 p-[calc(var(--tetris-unit)*0.3)]"
          onClick={() => setIsZoomed(false)}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="
              relative w-full md:max-w-[calc(var(--tetris-unit)*22)] max-w-[calc(var(--tetris-unit)*30)] aspect-[16/9]
              rounded-lg overflow-hidden
              border border-nk-accent-muted/70
              bg-slate-950
            "
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain"
              sizes="(min-width: 1024px) 70vw, 100vw"
            />

            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={() => setIsZoomed(false)}
              className="
                absolute top-[calc(var(--tetris-unit)*0.25)] right-[calc(var(--tetris-unit)*0.25)]
                rounded-full px-[calc(var(--tetris-unit)*0.25)] py-[calc(var(--tetris-unit)*0.15)]
                text-xs font-medium
                bg-slate-900/80 hover:bg-slate-800
                border border-nk-accent-muted/70
                text-slate-100
                backdrop-blur-sm
                transition
                cursor-pointer
              "
            >
              Close
            </button>

            {/* MODAL ARROWS */}
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prev}
                  className="
                    absolute left-[calc(var(--tetris-unit)*0.25)] top-1/2 -translate-y-1/2
                    rounded-full
                    w-[calc(var(--tetris-unit)*1.4)] h-[calc(var(--tetris-unit)*1.4)]
                    flex items-center justify-center
                    bg-slate-900/80 hover:bg-slate-800
                    border border-nk-accent-muted/70
                    font-pixel
                    text-slate-200 text-xs
                    backdrop-blur-sm
                    transition
                    cursor-pointer
                  "
                >←</button>

                <button
                  type="button"
                  onClick={next}
                  className="
                    absolute right-[calc(var(--tetris-unit)*0.25)] top-1/2 -translate-y-1/2
                    rounded-full
                    w-[calc(var(--tetris-unit)*1.4)] h-[calc(var(--tetris-unit)*1.4)]
                    flex items-center justify-center
                    bg-slate-900/80 hover:bg-slate-800
                    border border-nk-accent-muted/70
                    font-pixel
                    text-slate-200 text-xs
                    backdrop-blur-sm
                    transition
                    cursor-pointer
                  "
                >→</button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
