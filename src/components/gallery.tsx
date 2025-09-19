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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Description */}
          <div>
            <h2 className="text-5xl font-extrabold text-blue-700 mb-4 leading-tight">
              Gallery
            </h2>
            <div className="w-16 h-1 bg-blue-500 rounded mb-6" />
            <p className="text-lg mb-6 leading-relaxed text-gray-700">
              Embark on a visual journey with{" "}
              <span className="font-bold text-red-600">X6 Drinks</span>!
              Explore our exclusive gallery and discover the bold design,
              refreshing spirit, and energetic vibe of every product.
              <span className="text-blue-500 font-semibold">
                Your next adventure starts here!
              </span>
            </p>
          </div>

          {/* Right: Gallery */}
          <div className="flex flex-col items-center justify-center">
            <div
              className="relative flex items-center justify-center w-full max-w-[400px]"
              style={{ height: "min(80vw, 400px)" }}
            >
              {/* 3D stack */}
              {images.map((img, idx) => {
                const isTop = idx === currentIdx;
                const offset =
                  (idx - currentIdx + images.length) % images.length;
                const rotateY = offset * 10;
                const scale = 1 - offset * 0.07;
                const y = offset * 20;
                const zIndex = images.length - offset;
                const boxShadow = isTop
                  ? "0 8px 32px rgba(23,40,162,0.18), 0 0 0 4px #E0F2FE"
                  : "0 4px 24px rgba(23,40,162,0.10)";

                return (
                  <div
                    key={img.src}
                    className="group w-full h-full absolute"
                    style={{ zIndex }}
                  >
                    <motion.img
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
                        objectFit: "contain",
                      }}
                    />
                    {/* Tooltip caption on hover */}
                    <div
                      className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 
                              bg-white bg-opacity-90 px-2 py-0.5 rounded-lg shadow 
                              text-[#1728A2] font-medium text-[10px] md:text-sm 
                              text-center opacity-0 group-hover:opacity-100 
                              transition-opacity duration-300"
                      style={{ zIndex: 100 }}
                    >
                      {img.caption}
                    </div>
                  </div>
                );
              })}
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
      </div>
    </section>
  );
}
