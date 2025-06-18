import profilePic from '../assets/profile_pic.jpg';
import githubIcon from '../assets/github.png';
import linkedinIcon from '../assets/linkedin.png';
import githubIconDark from '../assets/github_dark.png';
import linkedinIconDark from '../assets/linkedin_dark.png';
import middlebury from '../assets/midd_logo.png';
import uwc from '../assets/uwc_mahindra_logo.jpeg';
import ScrollButton from '../components/ScrollButton';

export default function About({ isDark }) {
  return (
    <section id="about" className="relative flex flex-col md:flex-row justify-center items-center gap-12 min-h-screen px-6 md:px-24 bg-white dark:bg-[#1a1a1a] text-black dark:text-white font-mono">
      {/* Profile Picture */}
      <div className="w-64 h-64 md:w-96 md:h-96 flex-shrink-0 rounded-full overflow-hidden shadow-md mt-[120px] sm:mt-0">
        <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
      </div>

      {/* Text Content */}
      <div className="text-center md:text-left max-w-xl">
        <p className="text-lg font-semibold text-gray-600 dark:text-gray-300 dark:hover:text-[#39FF14] dark:hover:drop-shadow-[0_0_6px_#39FF14]">Hello, I'm</p>
        <h1 className="text-4xl md:text-5xl font-bold my-2 dark:hover:text-[#39FF14] dark:hover:drop-shadow-[0_0_6px_#39FF14]">Neil Dcruze</h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 dark:hover:text-[#39FF14] dark:hover:drop-shadow-[0_0_6px_#39FF14]">Systems Programmer | ML/AI Engineer | Web Developer</p>
        <p className="text-base text-black dark:text-white mb-6 max-w-md mx-auto md:mx-0 dark:hover:text-[#39FF14] dark:hover:drop-shadow-[0_0_6px_#39FF14]">
            I build software across the stack, from C-based OS tools to ML pipelines to full-stack web apps. I focus on clean code, reliable systems, and smooth integration. 
        </p>

         {/* Education Logos */}
        <div className="text-lg font-semibold flex flex-col justify-center md:justify-start gap-4 my-4">
          {/* Middlebury College */}
          <div className="flex items-center gap-4">
            <img 
              src={middlebury} 
              alt="Middlebury College" 
              className="w-12 h-12 object-cover rounded-full" 
            />
            <div className="flex flex-col">
              <span className="text-base font-medium text-black dark:text-white dark:hover:text-[#39FF14] dark:hover:drop-shadow-[0_0_6px_#39FF14]">
                Middlebury College
              </span>
              <span className="text-sm text-black dark:text-white font-normal dark:hover:text-[#39FF14] dark:hover:drop-shadow-[0_0_6px_#39FF14]">
                BA Computer Science, Math Minor
              </span>
              <span className="text-xs text-gray-800 dark:text-white font-normal dark:hover:text-[#39FF14] dark:hover:drop-shadow-[0_0_6px_#39FF14]">
              2021 - 2025
              </span>
            </div>
          </div>

          {/* UWC Mahindra College */}
          <div className="flex items-center gap-4">
            <img 
              src={uwc} 
              alt="UWC Mahindra College" 
              className="w-12 h-12 object-cover rounded-full" 
            />
            <div className="flex flex-col">
              <span className="text-base font-medium text-black dark:text-white dark:hover:text-[#39FF14] dark:hover:drop-shadow-[0_0_6px_#39FF14]">
                UWC Mahindra College
              </span>
              <span className="text-sm text-black dark:text-white font-normal dark:hover:text-[#39FF14] dark:hover:drop-shadow-[0_0_6px_#39FF14]">
                IB Diploma Programme
              </span>
              <span className="text-xs text-gray-800 dark:text-white font-normal dark:hover:text-[#39FF14] dark:hover:drop-shadow-[0_0_6px_#39FF14]">
                2019 - 2021
              </span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center md:justify-start gap-4 mb-6">
          <a
            href="/assets/resume.pdf"
            className="btn btn-color-2 border border-gray-700 dark:border-gray-300 py-2 px-5 rounded-full font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
            target="_blank" rel="noopener noreferrer"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="btn btn-color-1 bg-black text-white dark:bg-white dark:text-black py-2 px-5 rounded-full font-medium transition-all"
          >
            Contact Info
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-4 mb-6 md:mb-0">
          <img
            src={isDark ? linkedinIconDark : linkedinIcon}
            alt="LinkedIn"
            className="w-10 h-10 cursor-pointer hover:opacity-70 transition"
            onClick={() => window.open('https://linkedin.com/in/neildcruze', '_blank')}
          />
          <img
            src={isDark ? githubIconDark : githubIcon}
            alt="GitHub"
            className="w-10 h-10 cursor-pointer hover:opacity-70 transition"
            onClick={() => window.open('https://github.com/dcruzeneil', '_blank')}
          />
        </div>
      </div>
      <div className="absolute bottom-3 right-6 sm:block hidden">
        <ScrollButton direction="down" targetId="skills" />
      </div>
    </section>
  );
}