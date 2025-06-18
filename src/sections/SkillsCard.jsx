import { FaLaptopCode } from 'react-icons/fa';

export default function SkillsCard() {
  return (
    <div className="flex-1 p-6 bg-white dark:bg-[#1e1e1e] rounded-xl shadow-md">
      <div className="flex items-center gap-3 mb-4">
        <FaLaptopCode className="text-xl" />
        <h3 className="text-xl font-semibold">Technical Skills</h3>
      </div>

      {/* Programming Languages */}
      <div className="mb-5">
        <p className="text-sm font-semibold mb-1 text-gray-600 dark:text-gray-400">Programming Languages</p>
        <div className="flex flex-wrap gap-2">
          {["C", "C++", "Python", "JavaScript", "TypeScript"].map((lang, i) => (
            <span key={i} className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-800 text-blue-900 dark:text-white text-xs font-medium">
              {lang}
            </span>
          ))}
        </div>
      </div>

      {/* Frameworks & Libraries */}
      <div className="mb-5">
        <p className="text-sm font-semibold mb-1 text-gray-600 dark:text-gray-400">Frameworks & Libraries</p>
        <div className="flex flex-wrap gap-2">
          {["React", "Next.js", "Node.js", "Django", "PyTorch"].map((tool, i) => (
            <span key={i} className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-800 text-green-900 dark:text-white text-xs font-medium">
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Databases */}
      <div className="mb-5">
        <p className="text-sm font-semibold mb-1 text-gray-600 dark:text-gray-400">Databases</p>
        <div className="flex flex-wrap gap-2">
          {["PostgreSQL", "SQLite", "SQL"].map((db, i) => (
            <span key={i} className="px-3 py-1 rounded-full bg-yellow-100 dark:bg-yellow-800 text-yellow-900 dark:text-white text-xs font-medium">
              {db}
            </span>
          ))}
        </div>
      </div>

      {/* Tools & Platforms */}
      <div>
        <p className="text-sm font-semibold mb-1 text-gray-600 dark:text-gray-400">Tools & Platforms</p>
        <div className="flex flex-wrap gap-2">
          {["Git", "Linux", "Docker", "GitHub Actions", "LaTeX", "Bash"].map((item, i) => (
            <span key={i} className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-800 text-purple-900 dark:text-white text-xs font-medium">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
