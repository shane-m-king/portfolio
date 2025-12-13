type Layout = "home" | "projects" | "project" | "about" | "contact";

export default function TetrisBackdrop({ layout }: { layout: Layout }) {
  return (
    <div
      className="
        pointer-events-none 
        absolute 
        inset-0 
        -z-10
        w-full
        h-full
        px-[calc(var(--tetris-unit)*0.8)]
        max-w-[calc(var(--tetris-unit)*120)]
        mx-auto
      "
    >
      {/* HOME PAGE */}
      {layout === "home" && (
        <>
          <div
            className="tetris-block tetris-T tcolor-purple"
            style={{
              top: `calc(var(--tetris-unit) * 10)`,
              left: `calc(var(--tetris-unit) * 25.5)`,
              transform: "rotate(90deg)"
            }}
          />
          <div
            className="tetris-block tetris-I tcolor-red"
            style={{
              top: `calc(var(--tetris-unit) * 11)`,
              left: `calc(var(--tetris-unit) * 1.5)`,
              transform: "rotate(90deg)"
            }}
          />
          <div
            className="tetris-block tetris-O tcolor-blue"
            style={{
              top: `calc(var(--tetris-unit) * 7.5)`,
              left: `calc(var(--tetris-unit) * 13)`
            }}
          />
          <div
            className="tetris-block tetris-Z tcolor-yellow"
            style={{
              top: `calc(var(--tetris-unit) * 1)`,
              left: `calc(var(--tetris-unit) * 7.5)`,
              transform: "rotate(90deg)"
            }}
          />
          <div
            className="tetris-block tetris-L tcolor-green"
            style={{
              top: `calc(var(--tetris-unit) * 2)`,
              left: `calc(var(--tetris-unit) * 21.5)`,
              transform: "rotate(90deg)"
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
              left: `calc(var(--tetris-unit) * 15.5)`,
              transform: "rotate(270deg)"
            }}
          />
          <div
            className="tetris-block tetris-I tcolor-yellow"
            style={{
              top: `calc(var(--tetris-unit) * 1.5)`,
              left: `calc(var(--tetris-unit) * 5)`,
            }}
          />
          <div
            className="tetris-block tetris-O tcolor-purple"
            style={{
              top: `calc(var(--tetris-unit) * 0.5)`,
              left: `calc(var(--tetris-unit) * 23)`
            }}
          />
          <div
            className="tetris-block tetris-T tcolor-red"
            style={{
              top: `calc(var(--tetris-unit) * 11)`,
              left: `calc(var(--tetris-unit) * 1.5)`,
              transform: "rotate(90deg)"
            }}
          />
          <div
            className="tetris-block tetris-Z tcolor-green"
            style={{
              top: `calc(var(--tetris-unit) * 10.5)`,
              left: `calc(var(--tetris-unit) * 26)`
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
              left: `calc(var(--tetris-unit) * 11.65)`,
              transform: "rotate(90deg)"
            }}
          />
          <div
            className="tetris-block tetris-I tcolor-blue"
            style={{
              top: `calc(var(--tetris-unit) * 9)`,
              left: `calc(var(--tetris-unit) * 3.65)`,
              transform: "rotate(90deg)"
            }}
          />
          <div
            className="tetris-block tetris-T tcolor-purple"
            style={{
              top: `calc(var(--tetris-unit) * 6)`,
              left: `calc(var(--tetris-unit) * 25.65)`,
              transform: "rotate(270deg)"
            }}
          />
          <div
            className="tetris-block tetris-T tcolor-purple"
            style={{
              top: `calc(var(--tetris-unit) * 15.7)`,
              left: `calc(var(--tetris-unit) * 8.15)`,
              transform: "rotate(180deg)"
            }}
          />
          <div
            className="tetris-block tetris-L tcolor-green"
            style={{
              top: `calc(var(--tetris-unit) * 11)`,
              left: `calc(var(--tetris-unit) * 16.65)`,
              transform: "rotate(90deg)"
            }}
          />
          <div
            className="tetris-block tetris-O tcolor-red"
            style={{
              top: `calc(var(--tetris-unit) * 18.7)`,
              left: `calc(var(--tetris-unit) * 26.18)`
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
              left: `calc(var(--tetris-unit) * 4.65)`,
              transform: "rotate(90deg)"
            }}
          />
          <div
            className="tetris-block tetris-T tcolor-yellow"
            style={{
              top: `calc(var(--tetris-unit) * 15.85)`,
              left: `calc(var(--tetris-unit) * 16.15)`,
              transform: "rotate(180deg)"
            }}
          />
          <div
            className="tetris-block tetris-I tcolor-red"
            style={{
              top: `calc(var(--tetris-unit) * 8)`,
              left: `calc(var(--tetris-unit) * 13.65)`,
              transform: "rotate(90deg)"
            }}
          />
          <div
            className="tetris-block tetris-Z tcolor-purple"
            style={{
              top: `calc(var(--tetris-unit) * 1.5)`,
              left: `calc(var(--tetris-unit) * 24.15)`
            }}
          />
          <div
            className="tetris-block tetris-O tcolor-green"
            style={{
              top: `calc(var(--tetris-unit) * 10.45)`,
              left: `calc(var(--tetris-unit) * 23.15)`
            }}
          />
          <div
            className="tetris-block tetris-O tcolor-green"
            style={{
              top: `calc(var(--tetris-unit) * 14.85)`,
              left: `calc(var(--tetris-unit) * 4.15)`
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
              top: `calc(var(--tetris-unit) * 2.5)`,
              left: `calc(var(--tetris-unit) * 14)`
            }}
          />
          <div
            className="tetris-block tetris-I tcolor-blue"
            style={{
              top: `calc(var(--tetris-unit) * 10)`,
              left: `calc(var(--tetris-unit) * 18.5)`,
              transform: "rotate(90deg)"
            }}
          />
          <div
            className="tetris-block tetris-T tcolor-yellow"
            style={{
              top: `calc(var(--tetris-unit) * 4.5)`,
              left: `calc(var(--tetris-unit) * 23)`
            }}
          />
          <div
            className="tetris-block tetris-O tcolor-purple"
            style={{
              top: `calc(var(--tetris-unit) * 9.5)`,
              left: `calc(var(--tetris-unit) * 9)`
            }}
          />
          <div
            className="tetris-block tetris-Z tcolor-green"
            style={{
              top: `calc(var(--tetris-unit) * 3.5)`,
              left: `calc(var(--tetris-unit) * 4)`
            }}
          />
        </>
      )}
    </div>
  );
}
