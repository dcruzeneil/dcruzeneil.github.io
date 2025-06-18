import { useState } from 'react';

export default function HamburgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="relative">
      {/* Hamburger Icon */}
      <div
        className="flex flex-col justify-between w-7 h-5 cursor-pointer z-50 relative"
        onClick={toggleMenu}
      >
        <span className={`h-[2px] bg-black dark:bg-white transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-[9px]' : ''}`} />
        <span className={`h-[2px] bg-black dark:bg-white transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
        <span className={`h-[2px] bg-black dark:bg-white transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
      </div>

      {/* Dropdown Menu */}
      <ul className={`absolute right-0 top-10 bg-white dark:bg-[#1a1a1a] rounded-lg shadow-md px-6 py-4 text-center text-base font-normal transition-all duration-300 ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
      >
        <li className="py-1"><a href="#about" onClick={closeMenu} className="block hover:underline hover:underline-offset-4">About</a></li>
        <li className="py-1"><a href="#skills" onClick={closeMenu} className="block hover:underline hover:underline-offset-4">Skills</a></li>
        <li className="py-1"><a href="#projects" onClick={closeMenu} className="block hover:underline hover:underline-offset-4">Projects</a></li>
        <li className="py-1"><a href="#experience" onClick={closeMenu} className="block hover:underline hover:underline-offset-4">Experience</a></li>
        <li className="py-1"><a href="#contact" onClick={closeMenu} className="block hover:underline hover:underline-offset-4">Contact</a></li>
      </ul>
    </div>
  );
}
