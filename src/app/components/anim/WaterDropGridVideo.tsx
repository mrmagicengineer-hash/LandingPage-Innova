import React from "react";
import { animate, stagger } from "animejs";

// Grid de CELDAS de fondo con efecto "gota de agua": al hacer click/hover sobre
// una celda, una onda se propaga hacia afuera iluminando cada celda.
// El borde de cada celda forma la cuadrícula visible del Hero (reemplaza .grid-bg).
const GRID_WIDTH = 32;
const GRID_HEIGHT = 16;

const WaterDropGridVideo = () => {
  return (
    <div className="hero-cells-wrap">
      <CellGrid />
    </div>
  );
};

const CellGrid = () => {
  // throttle para el hover: evita relanzar la onda en cada celda que se cruza
  const lastRun = React.useRef(0);

  const ripple = (index: number) => {
    // solo anima opacity + scale => GPU (compositor), sin repaint
    animate(".hero-cell-fill", {
      opacity: [
        { to: 0.4, ease: "outSine", duration: 220 },
        { to: 0, ease: "inOutQuad", duration: 650 },
      ],
      scale: [
        { to: 1, ease: "outSine", duration: 220 },
        { to: 0.6, ease: "inOutQuad", duration: 650 },
      ],
      delay: stagger(55, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: index,
      }),
    });
  };

  // Onda de entrada al cargar: de la esquina superior-izquierda (index 0)
  // hacia la inferior-derecha.
  React.useEffect(() => {
    animate(".hero-cell-fill", {
      opacity: [
        { to: 0.4, ease: "outSine", duration: 300 },
        { to: 0, ease: "inOutQuad", duration: 700 },
      ],
      scale: [
        { to: 1, ease: "outSine", duration: 300 },
        { to: 0.6, ease: "inOutQuad", duration: 700 },
      ],
      delay: stagger(28, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: 0, // esquina superior-izquierda
      }),
    });
  }, []);

  const handle = (e: React.MouseEvent<HTMLDivElement>, throttle = false) => {
    const target = e.target as HTMLElement;
    const index = Number(target.dataset.index ?? 0);
    if (throttle) {
      const now = performance.now();
      if (now - lastRun.current < 350) return; // 1 onda cada 350ms max en hover
      lastRun.current = now;
    }
    ripple(index);
  };

  const cells = [];
  let index = 0;
  for (let y = 0; y < GRID_HEIGHT; y++) {
    for (let x = 0; x < GRID_WIDTH; x++) {
      const i = index;
      cells.push(
        <div key={i} className="hero-cell" data-index={i}>
          <span className="hero-cell-fill" data-index={i} />
        </div>
      );
      index++;
    }
  }

  return (
    <div
      onClick={(e) => handle(e)}
      onMouseOver={(e) => handle(e, true)}
      className="hero-cell-grid"
      style={{
        gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)`,
        gridTemplateRows: `repeat(${GRID_HEIGHT}, 1fr)`,
      }}
    >
      {cells}
    </div>
  );
};

export default WaterDropGridVideo;
