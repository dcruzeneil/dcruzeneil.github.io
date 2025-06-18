import { Mail, Linkedin } from 'lucide-react';
import HoverHeading from '../components/HoverHeading';

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-24 bg-white dark:bg-[#1a1a1a] text-black dark:text-white font-poppins"
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-12">
        {/* Left: Header + Blurb */}
        <div className="md:w-1/2">
          <HoverHeading tag="contact" />

          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            Whether you are interested in collaborating on a project, have a job opportunity in mind, or just want to connect and chat about tech, feel free to reach out. I would love to hear from you!
          </p>
        </div>

        {/* Right: Contact Box */}
        <div className="md:w-1/2 w-full">
          <div className="mx-auto w-full sm:w-fit px-10 py-6 border-2 border-gray-300 dark:border-gray-700 rounded-2xl flex flex-col gap-5 items-start justify-center bg-white dark:bg-[#1a1a1a] shadow-md">
            {/* Email */}
            <a
              href="mailto:neildcruze@gmail.com"
              className="flex items-center gap-4 text-lg font-medium text-black dark:text-white hover:text-gray-600 dark:hover:text-[#39FF14] dark:hover:drop-shadow-[0_0_6px_#39FF14] transition"
            >
              <Mail className="w-6 h-6" />
              neildcruze@gmail.com
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/neildcruze"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-lg font-medium text-black dark:text-white hover:text-gray-600 dark:hover:text-[#39FF14] dark:hover:drop-shadow-[0_0_6px_#39FF14] transition"
            >
              <Linkedin className="w-6 h-6" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
