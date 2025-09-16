import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Gallery() {
  const images = [
    {
      src: "/can.png",
      caption: "Experience the Power: X6 Can - Front View",
    },
    {
      src: "/canBack.png",
      caption: "Unleash the Energy: X6 Can - Back View",
    },
    {
      src: "/trayBox.png",
      caption: "24 Cans, Endless Possibilities: X6 Traybox",
    },
  ];

  const [currentIdx, setCurrentIdx] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleNext = () => {
    setCurrentIdx((idx) => (idx + 1) % images.length);
    setIsDragging(false);
  };
  const handlePrev = () => {
    setCurrentIdx((idx) => (idx - 1 + images.length) % images.length);
    setIsDragging(false);
  };

  return (
    <section className="py-20 px-4 bg-[#EFF5FD]">
      <div className="container mx-auto">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-[#1728A2] uppercase mb-10 text-center tracking-tight"
          style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
        >
          Gallery
        </h2>
        <div className="flex flex-col items-center justify-center">
          <div
            className="relative flex items-center justify-center w-full max-w-[400px] md:max-w-[400px] sm:max-w-[320px]"
            style={{ height: "min(80vw, 400px)" }}
          >
            {/* Improved 3D Stack/Deck */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              {images.map((img, idx) => {
                const isTop = idx === currentIdx;
                const offset =
                  (idx - currentIdx + images.length) % images.length;
                // 3D rotation for depth
                const rotateY = offset * 10;
                const scale = 1 - offset * 0.07;
                const y = offset * 20;
                const zIndex = images.length - offset;
                const boxShadow = isTop
                  ? "0 8px 32px rgba(23,40,162,0.18), 0 0 0 4px #E0F2FE"
                  : "0 4px 24px rgba(23,40,162,0.10)";
                return (
                  <motion.img
                    key={img.src}
                    src={img.src}
                    alt={img.caption}
                    drag={isTop ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragStart={() => setIsDragging(true)}
                    onDragEnd={(e, info) => {
                      setIsDragging(false);
                      if (info.offset.x > 100) handlePrev();
                      else if (info.offset.x < -100) handleNext();
                    }}
                    initial={{
                      scale,
                      y,
                      rotateY,
                      zIndex,
                      opacity: offset < 3 ? 1 : 0,
                    }}
                    animate={{
                      scale: isTop && isDragging ? 1.05 : scale,
                      y,
                      rotateY,
                      zIndex,
                      opacity: offset < 3 ? 1 : 0,
                      boxShadow,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      delay: offset * 0.07,
                    }}
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      borderRadius: "24px",
                      boxShadow,
                      cursor: isTop ? "grab" : "default",
                      zIndex,
                      background: "#fff",
                      transformStyle: "preserve-3d",
                      maxWidth: "100%",
                      maxHeight: "100%",
                    }}
                  />
                );
              })}
              {/* Caption for top card */}
              <motion.div
                className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white bg-opacity-80 px-2 py-1 rounded-xl shadow text-[#1728A2] font-bold text-center text-xs md:text-base"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                {images[currentIdx].caption}
              </motion.div>
              {/* Controls */}
              <button
                className="absolute left-1 top-1/2 -translate-y-1/2 bg-white rounded-full shadow px-2 py-1 text-[#1728A2] font-bold hover:bg-[#E0F2FE] text-base md:text-xl"
                style={{ pointerEvents: "auto" }}
                onClick={handlePrev}
                aria-label="Previous"
              >
                &#8592;
              </button>
              <button
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-white rounded-full shadow px-2 py-1 text-[#1728A2] font-bold hover:bg-[#E0F2FE] text-base md:text-xl"
                style={{ pointerEvents: "auto" }}
                onClick={handleNext}
                aria-label="Next"
              >
                &#8594;
              </button>
              {/* Animated swipe/drag/click hint for top card */}
              <AnimatePresence>
                <motion.div
                  key={currentIdx}
                  className="absolute top-4 left-1/2 -translate-x-1/2 flex flex-col items-center"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 0.8, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-[#1728A2] text-lg md:text-2xl animate-bounce">
                    &#8594;
                  </span>
                  <span className="text-[#1728A2] text-xs md:text-sm mt-1">
                    Swipe or drag
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          {/* Instruction text below deck */}
          <div className="mt-8 flex justify-center">
            <div
              className="text-[#1728A2] text-[10px] md:text-xs font-normal text-center tracking-tight"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                letterSpacing: "0.01em",
              }}
            >
              Discover more: <span className="font-semibold">Swipe, drag,</span>{" "}
              or <span className="font-semibold">tap the arrows</span> to browse
              our gallery!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
