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
              left: "86.87%",
              transform: "rotate(90deg)"
            }}
          />
          <div
            className="tetris-block tetris-I tcolor-red"
            style={{
              top: `calc(var(--tetris-unit) * 11)`,
              left: "0.65%",
              transform: "rotate(90deg)"
            }}
          />
          <div
            className="tetris-block tetris-O tcolor-blue"
            style={{
              top: `calc(var(--tetris-unit) * 7.5)`,
              left: "43.6%"
            }}
          />
          <div
            className="tetris-block tetris-Z tcolor-yellow"
            style={{
              top: `calc(var(--tetris-unit) * 1)`,
              left: "23.05%",
              transform: "rotate(90deg)"
            }}
          />
          <div
            className="tetris-block tetris-L tcolor-green"
            style={{
              top: `calc(var(--tetris-unit) * 2)`,
              left: "71.9%",
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
              left: "49.4%",
              transform: "rotate(270deg)"
            }}
          />
          <div
            className="tetris-block tetris-I tcolor-yellow"
            style={{
              top: `calc(var(--tetris-unit) * 1.5)`,
              left: "13.8%",
            }}
          />
          <div
            className="tetris-block tetris-O tcolor-purple"
            style={{
              top: `calc(var(--tetris-unit) * 0.5)`,
              left: "77.5%"
            }}
          />
          <div
            className="tetris-block tetris-T tcolor-red"
            style={{
              top: `calc(var(--tetris-unit) * 11)`,
              left: "0.7%",
              transform: "rotate(90deg)"
            }}
          />
          <div
            className="tetris-block tetris-Z tcolor-green"
            style={{
              top: `calc(var(--tetris-unit) * 10.5)`,
              left: "92.6%"
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
              left: "31.2%",
              transform: "rotate(90deg)"
            }}
          />
          <div
            className="tetris-block tetris-I tcolor-blue"
            style={{
              top: `calc(var(--tetris-unit) * 9)`,
              left: "1.1%",
              transform: "rotate(90deg)"
            }}
          />
          <div
            className="tetris-block tetris-T tcolor-purple"
            style={{
              top: `calc(var(--tetris-unit) * 6)`,
              left: "79.85%",
              transform: "rotate(270deg)"
            }}
          />
          <div
            className="tetris-block tetris-T tcolor-purple"
            style={{
              top: `calc(var(--tetris-unit) * 15.55)`,
              left: "18%",
              transform: "rotate(180deg)"
            }}
          />
          <div
            className="tetris-block tetris-L tcolor-green"
            style={{
              top: `calc(var(--tetris-unit) * 10)`,
              left: "46.2%",
              transform: "rotate(90deg)"
            }}
          />
          <div
            className="tetris-block tetris-O tcolor-red"
            style={{
              top: `calc(var(--tetris-unit) * 16.55)`,
              left: "89.3%"
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
              left: "1.25%",
              transform: "rotate(90deg)"
            }}
          />
          <div
            className="tetris-block tetris-T tcolor-yellow"
            style={{
              top: `calc(var(--tetris-unit) * 15.18)`,
              left: "59.4%",
              transform: "rotate(180deg)"
            }}
          />
          <div
            className="tetris-block tetris-I tcolor-red"
            style={{
              top: `calc(var(--tetris-unit) * 8)`,
              left: "50%",
              transform: "rotate(90deg)"
            }}
          />
          <div
            className="tetris-block tetris-Z tcolor-purple"
            style={{
              top: `calc(var(--tetris-unit) * 1.5)`,
              left: "89.35%"
            }}
          />
          <div
            className="tetris-block tetris-O tcolor-green"
            style={{
              top: `calc(var(--tetris-unit) * 10.45)`,
              left: "89.35%"
            }}
          />
          <div
            className="tetris-block tetris-O tcolor-green"
            style={{
              top: `calc(var(--tetris-unit) * 16.2)`,
              left: "10.5%"
            }}
          />
          <div
            className="tetris-block tetris-L tcolor-blue"
            style={{
              top: `calc(var(--tetris-unit) * 11)`,
              left: "27.4%",
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
              left: "43.6%"
            }}
          />
          <div
            className="tetris-block tetris-I tcolor-blue"
            style={{
              top: `calc(var(--tetris-unit) * 10)`,
              left: "60.6%",
              transform: "rotate(90deg)"
            }}
          />
          <div
            className="tetris-block tetris-T tcolor-yellow"
            style={{
              top: `calc(var(--tetris-unit) * 4.5)`,
              left: "73.8%"
            }}
          />
          <div
            className="tetris-block tetris-O tcolor-purple"
            style={{
              top: `calc(var(--tetris-unit) * 9.5)`,
              left: "28.75%"
            }}
          />
          <div
            className="tetris-block tetris-Z tcolor-green"
            style={{
              top: `calc(var(--tetris-unit) * 3.5)`,
              left: "10%"
            }}
          />
        </>
      )}
    </div>
  );
}
