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
              left: `calc(var(--tetris-unit) * 23.2)`,
              transform: "rotate(90deg)"
            }}
          />
          <div
            className="tetris-block tetris-I tcolor-red"
            style={{
              top: `calc(var(--tetris-unit) * 11)`,
              left: `calc(var(--tetris-unit) * -0.8)`,
              transform: "rotate(90deg)"
            }}
          />
          <div
            className="tetris-block tetris-O tcolor-blue"
            style={{
              top: `calc(var(--tetris-unit) * 7.5)`,
              left: `calc(var(--tetris-unit) * 10.7)`
            }}
          />
          <div
            className="tetris-block tetris-Z tcolor-yellow"
            style={{
              top: `calc(var(--tetris-unit) * 1)`,
              left: `calc(var(--tetris-unit) * 5.2)`,
              transform: "rotate(90deg)"
            }}
          />
          <div
            className="tetris-block tetris-L tcolor-green"
            style={{
              top: `calc(var(--tetris-unit) * 2)`,
              left: `calc(var(--tetris-unit) * 19.2)`,
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
              left: `calc(var(--tetris-unit) * 13.18)`,
              transform: "rotate(270deg)"
            }}
          />
          <div
            className="tetris-block tetris-I tcolor-yellow"
            style={{
              top: `calc(var(--tetris-unit) * 1.5)`,
              left: `calc(var(--tetris-unit) * 3.68)`,
            }}
          />
          <div
            className="tetris-block tetris-O tcolor-purple"
            style={{
              top: `calc(var(--tetris-unit) * 0.5)`,
              left: `calc(var(--tetris-unit) * 20.68)`
            }}
          />
          <div
            className="tetris-block tetris-T tcolor-red"
            style={{
              top: `calc(var(--tetris-unit) * 11)`,
              left: `calc(var(--tetris-unit) * 0.18)`,
              transform: "rotate(90deg)"
            }}
          />
          <div
            className="tetris-block tetris-Z tcolor-green"
            style={{
              top: `calc(var(--tetris-unit) * 10.5)`,
              left: `calc(var(--tetris-unit) * 24.68)`
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
              left: `calc(var(--tetris-unit) * 7.32)`,
              transform: "rotate(90deg)"
            }}
          />
          <div
            className="tetris-block tetris-I tcolor-blue"
            style={{
              top: `calc(var(--tetris-unit) * 9)`,
              left: `calc(var(--tetris-unit) * -0.68)`,
              transform: "rotate(90deg)"
            }}
          />
          <div
            className="tetris-block tetris-T tcolor-purple"
            style={{
              top: `calc(var(--tetris-unit) * 6)`,
              left: `calc(var(--tetris-unit) * 21.31)`,
              transform: "rotate(270deg)"
            }}
          />
          <div
            className="tetris-block tetris-T tcolor-purple"
            style={{
              top: `calc(var(--tetris-unit) * 15.95)`,
              left: `calc(var(--tetris-unit) * 4.84)`,
              transform: "rotate(180deg)"
            }}
          />
          <div
            className="tetris-block tetris-L tcolor-green"
            style={{
              top: `calc(var(--tetris-unit) * 10)`,
              left: `calc(var(--tetris-unit) * 12.32)`,
              transform: "rotate(90deg)"
            }}
          />
          <div
            className="tetris-block tetris-O tcolor-red"
            style={{
              top: `calc(var(--tetris-unit) * 16.95)`,
              left: `calc(var(--tetris-unit) * 23.82)`
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
              left: `calc(var(--tetris-unit) * 0.38)`,
              transform: "rotate(90deg)"
            }}
          />
          <div
            className="tetris-block tetris-T tcolor-yellow"
            style={{
              top: `calc(var(--tetris-unit) * 15.18)`,
              left: `calc(var(--tetris-unit) * 15.8)`,
              transform: "rotate(180deg)"
            }}
          />
          <div
            className="tetris-block tetris-I tcolor-red"
            style={{
              top: `calc(var(--tetris-unit) * 8)`,
              left: `calc(var(--tetris-unit) * 12.33)`,
              transform: "rotate(90deg)"
            }}
          />
          <div
            className="tetris-block tetris-Z tcolor-purple"
            style={{
              top: `calc(var(--tetris-unit) * 1.5)`,
              left: `calc(var(--tetris-unit) * 22.84)`
            }}
          />
          <div
            className="tetris-block tetris-O tcolor-green"
            style={{
              top: `calc(var(--tetris-unit) * 10.45)`,
              left: `calc(var(--tetris-unit) * 23.83)`
            }}
          />
          <div
            className="tetris-block tetris-O tcolor-green"
            style={{
              top: `calc(var(--tetris-unit) * 16.2)`,
              left: `calc(var(--tetris-unit) * 2.78)`
            }}
          />
          <div
            className="tetris-block tetris-L tcolor-blue"
            style={{
              top: `calc(var(--tetris-unit) * 11)`,
              left: `calc(var(--tetris-unit) * 7.33)`,
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
              left: `calc(var(--tetris-unit) * 11.65)`
            }}
          />
          <div
            className="tetris-block tetris-I tcolor-blue"
            style={{
              top: `calc(var(--tetris-unit) * 10)`,
              left: `calc(var(--tetris-unit) * 16.18)`,
              transform: "rotate(90deg)"
            }}
          />
          <div
            className="tetris-block tetris-T tcolor-yellow"
            style={{
              top: `calc(var(--tetris-unit) * 4.5)`,
              left: `calc(var(--tetris-unit) * 20.68)`
            }}
          />
          <div
            className="tetris-block tetris-O tcolor-purple"
            style={{
              top: `calc(var(--tetris-unit) * 9.5)`,
              left: `calc(var(--tetris-unit) * 7.68)`
            }}
          />
          <div
            className="tetris-block tetris-Z tcolor-green"
            style={{
              top: `calc(var(--tetris-unit) * 3.5)`,
              left: `calc(var(--tetris-unit) * 2.68)`
            }}
          />
        </>
      )}
    </div>
  );
}
