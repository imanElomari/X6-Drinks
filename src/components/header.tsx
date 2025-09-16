import { useEffect, useState } from "react";
// Make sure PillNav.tsx exists in the same folder, or update the path if it's elsewhere
import PillNav from "./PillNav";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full m-0 p-0 border-b border-gray-300 transition-colors duration-300 ${
        scrolled ? "bg-[#EFF5FD]/70 backdrop-blur" : "bg-[#EFF5FD]"
      }`}
    >
      <div className="flex items-center justify-between w-full px-8 py-0">
        <PillNav
          logo="X6"
          logoAlt="Company Logo"
          items={[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Services", href: "/services" },
            { label: "Contact", href: "/contact" },
          ]}
          activeHref="/"
          className="w-full"
          ease="power2.easeOut"
          baseColor="#1728A2"
          pillColor="#EFF5FD"
          hoveredPillTextColor="#EFF5FD"
          pillTextColor="#1728A2"
          initialLoadAnimation={false}
        />
      </div>
    </header>
  );
}
