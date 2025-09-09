import { useEffect, useState } from "react";
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
        scrolled ? "bg-[#EEF3FD]/70 backdrop-blur" : "bg-[#EEF3FD]"
      }`}
    >
      <div className="px-4 py-4 flex items-center justify-between w-full">
        <PillNav
          logo="X6"
          logoAlt="Company Logo"
          items={[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
            { label: 'Services', href: '/services' },
            { label: 'Contact', href: '/contact' }
          ]}
          activeHref="/"
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#754894"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#754894"
        />
      </div>
    </header>
  );
}
