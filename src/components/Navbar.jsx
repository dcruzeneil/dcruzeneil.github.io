import HamburgerMenu from './HamburgerMenu';
import DarkModeToggle from './DarkModeToggle';
import HoverTag from './HoverTag';

export default function Navbar({ isDark, toggleTheme }) {
  return (
    <nav className="flex justify-between items-center px-12 py-6 bg-white dark:bg-[#1a1a1a] text-black dark:text-white fixed top-0 left-0 w-full z-50 font-mono">
      {/* Left: Logo */}
      <div className="text-3xl font-semibold tracking-tight dark:hover:text-[#39FF14] dark:hover:drop-shadow-[0_0_6px_#39FF14]">&lt;Neil Dcruze&gt;</div>

      {/* Middle: Desktop Links */}
      <ul className="hidden md:flex gap-12 text-lg font-normal">
        <li>
          <HoverTag tag="about" href="#about"/>
        </li>
        <li>
          <HoverTag tag="skills" href="#skills"/>
        </li>
        <li>
          <HoverTag tag="projects" href="#projects" />
        </li>
        <li>
          <HoverTag tag="experience" href="#experience" />
        </li>
        <li>
          <HoverTag tag="contact" href="#contact" />
        </li>
      </ul>

      {/* Right: Toggle + Hamburger */}
      <div className="flex items-center gap-6">
        <div className="hidden md:block">
          <DarkModeToggle isDark={isDark} toggleTheme={toggleTheme}/>
        </div>
        <div className="md:hidden flex items-center gap-4">
          <HamburgerMenu />
          <DarkModeToggle isDark={isDark} toggleTheme={toggleTheme} />
        </div>
      </div>
    </nav>
  );
}
