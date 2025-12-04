type Layout = "home" | "projects" | "project" | "about" | "contact";

export default function TetrisBackdrop({ layout }: { layout: Layout }) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      {/* HOME PAGE */}
      {layout === "home" && (
        <>
          <div
            className="tetris-block tetris-T tcolor-purple"
            style={{
              top: `calc(var(--tetris-unit) * 9)`,
              left: `calc(var(--tetris-unit) * 24)`,
              transform: "rotate(90deg)"
            }}
          />

          <div
            className="tetris-block tetris-I tcolor-red"
            style={{
              top: `calc(var(--tetris-unit) * 8)`,
              left: `calc(var(--tetris-unit) * 3)`,
              transform: "rotate(90deg)",
            }}
          />

          <div
            className="tetris-block tetris-O tcolor-blue"
            style={{
              top: `calc(var(--tetris-unit) * 10)`,
              left: `calc(var(--tetris-unit) * 13)`,
            }}
          />

          <div
            className="tetris-block tetris-Z tcolor-yellow"
            style={{
              top: `calc(var(--tetris-unit) * 1)`,
              left: `calc(var(--tetris-unit) * 9)`,
              transform: "rotate(90deg)",
            }}
          />

          <div
            className="tetris-block tetris-L tcolor-green"
            style={{
              top: `calc(var(--tetris-unit) * 4)`,
              left: `calc(var(--tetris-unit) * 17)`,
            }}
          />

          <div
            className="tetris-block tetris-I tcolor-red"
            style={{
              top: `calc(var(--tetris-unit) * 1)`,
              left: `calc(var(--tetris-unit) * 25)`,
            }}
          />
        </>
      )}

      {/* PROJECTS PAGE */}
      {layout === "projects" && (
        <>
          <div
            className="tetris-block tetris-L tcolor-blue"
            style={{
              top: `calc(var(--tetris-unit) * 8)`,
              left: `calc(var(--tetris-unit) * 15)`,
              transform: "rotate(270deg)"
            }}
          />

          <div
            className="tetris-block tetris-I tcolor-yellow"
            style={{
              top: `calc(var(--tetris-unit) *3)`,
              left: `calc(var(--tetris-unit) * 5)`,
              transform: "rotate(90deg)",
            }}
          />

          <div
            className="tetris-block tetris-O tcolor-purple"
            style={{
              top: `calc(var(--tetris-unit) * 0.5)`,
              left: `calc(var(--tetris-unit) * 21)`,
            }}
          />

          <div
            className="tetris-block tetris-T tcolor-red"
            style={{
              top: `calc(var(--tetris-unit) * 9)`,
              left: `calc(var(--tetris-unit) * 3)`,
              transform: "rotate(90deg)"
            }}

          />
          <div
            className="tetris-block tetris-Z tcolor-green"
            style={{
              top: `calc(var(--tetris-unit) * 9)`,
              left: `calc(var(--tetris-unit) * 24)`,
            }}
          />
        </>
      )}

       {/* PROJECT PAGE */}
      {layout === "project" && (
        <>
          <div
            className="tetris-block tetris-Z tcolor-yellow"
            style={{
              top: `calc(var(--tetris-unit) * 2)`,
              left: `calc(var(--tetris-unit) * 11)`,
              transform: "rotate(90deg)"
            }}
          />

          <div
            className="tetris-block tetris-I tcolor-blue"
            style={{
              top: `calc(var(--tetris-unit) * 9)`,
              left: `calc(var(--tetris-unit) * 3)`,
              transform: "rotate(90deg)"
            }}
          />

          <div
            className="tetris-block tetris-T tcolor-purple"
            style={{
              top: `calc(var(--tetris-unit) * 6)`,
              left: `calc(var(--tetris-unit) * 26)`,
              transform: "rotate(270deg)"
            }}
          />

          <div
            className="tetris-block tetris-T tcolor-purple"
            style={{
              top: `calc(var(--tetris-unit) * 16)`,
              left: `calc(var(--tetris-unit) * 8)`,
              transform: "rotate(180deg)"
            }}
          />

          <div
            className="tetris-block tetris-L tcolor-green"
            style={{
              top: `calc(var(--tetris-unit) * 11)`,
              left: `calc(var(--tetris-unit) * 16)`,
              transform: "rotate(90deg)"
            }}
          />

          <div
            className="tetris-block tetris-O tcolor-red"
            style={{
              top: `calc(var(--tetris-unit) * 18)`,
              left: `calc(var(--tetris-unit) * 26)`,
            }}
          />
        </>
      )}

      {/* ABOUT PAGE */}
      {layout === "about" && (
        <>
          <div
            className="tetris-block tetris-T tcolor-yellow"
            style={{
              top: `calc(var(--tetris-unit) * 4)`,
              left: `calc(var(--tetris-unit) * 5)`,
              transform: "rotate(90deg)"
            }}
          />

          <div
            className="tetris-block tetris-T tcolor-yellow"
            style={{
              top: `calc(var(--tetris-unit) * 16)`,
              left: `calc(var(--tetris-unit) * 16)`,
              transform: "rotate(180deg)"
            }}
          />

          <div
            className="tetris-block tetris-I tcolor-red"
            style={{
              top: `calc(var(--tetris-unit) * 6)`,
              left: `calc(var(--tetris-unit) * 16)`,
              transform: "rotate(90deg)"
            }}
          />

          <div
            className="tetris-block tetris-Z tcolor-purple"
            style={{
              top: `calc(var(--tetris-unit) * 1)`,
              left: `calc(var(--tetris-unit) * 26)`,
            }}
          />

          <div
            className="tetris-block tetris-O tcolor-green"
            style={{
              top: `calc(var(--tetris-unit) * 12)`,
              left: `calc(var(--tetris-unit) * 27)`,
            }}
          />

          <div
            className="tetris-block tetris-O tcolor-green"
            style={{
              top: `calc(var(--tetris-unit) * 17)`,
              left: `calc(var(--tetris-unit) * 4)`,
            }}
          />

          <div
            className="tetris-block tetris-L tcolor-blue"
            style={{
              top: `calc(var(--tetris-unit) * 11)`,
              left: `calc(var(--tetris-unit) * 9)`,
              transform: "rotate(90deg)"
            }}
          />
        </>
      )}

      {/* CONTACT PAGE */}
      {layout === "contact" && (
        <>
          <div
            className="tetris-block tetris-L tcolor-red"
            style={{
              top: `calc(var(--tetris-unit) * 2)`,
              left: `calc(var(--tetris-unit) * 14)`,
            }}
          />

          <div
            className="tetris-block tetris-I tcolor-blue"
            style={{
              top: `calc(var(--tetris-unit) * 8)`,
              left: `calc(var(--tetris-unit) * 20)`,
              transform: "rotate(90deg)"
            }}
          />

          <div
            className="tetris-block tetris-T tcolor-yellow"
            style={{
              top: `calc(var(--tetris-unit) * 2)`,
              left: `calc(var(--tetris-unit) * 26)`,
            }}
          />

          <div
            className="tetris-block tetris-O tcolor-purple"
            style={{
              top: `calc(var(--tetris-unit) * 9)`,
              left: `calc(var(--tetris-unit) * 8)`,
            }}
          />

          <div
            className="tetris-block tetris-Z tcolor-green"
            style={{
              top: `calc(var(--tetris-unit) * 3)`,
              left: `calc(var(--tetris-unit) * 2)`,
            }}
          />
        </>
      )}
    </div>
  );
}
