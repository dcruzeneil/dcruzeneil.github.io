import { useEffect, useRef } from 'react';

export default function ExperienceEntry({ start_date, end_date, title, name, logo, description, technology, link }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative flex items-start gap-6 mb-16 opacity-0 translate-y-8 transition-all duration-700 ease-out"
    >
      {/* Date Range - stacked vertically */}
      <div className="w-32 pt-1 pl-8 text-sm font-medium text-black dark:text-white sm:flex sm:flex-col sm:items-center sm:justify-center sm:space-y-1 hidden">
        <div>{start_date}</div>
        <div className="text-black dark:text-white">to</div>
        <div>{end_date}</div>
      </div>

      {/* Timeline dot (hidden on mobile) */}
      <div className="absolute left-4 top-2 w-4 h-4 rounded-full bg-black dark:bg-[#58a6ff] border-4 border-white dark:border-[#121212] z-10 sm:block hidden" />

      {/* Timeline vertical line (hidden on mobile) */}
      <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-600 z-0 sm:block hidden" />

      {/* Content */}
      <div className="flex-1 flex flex-col sm:flex-row gap-6 sm:ml-0 ml-6">
        {/* Logo and Name */}
        <div className="flex flex-col items-center sm:items-start sm:w-36 shrink-0">
          <img src={logo} alt={title} className="w-21 h-21 object-contain rounded mb-1" />
          {name && <p className="text-s text-left text-gray-600 dark:text-gray-400">{name}</p>}
        </div>

        {/* Text Content */}
        <div className="flex-1 flex flex-col">
          <h3 className="text-base font-semibold text-black dark:text-white mb-2">{title}</h3>

          <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 mb-3 space-y-1">
            {description.map((point, i) => (
              <li key={i}>
                {point}
                {i === description.length - 1 && link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    [Link]
                  </a>
                )}
              </li>
            ))}
          </ul>

          {technology.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {technology.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-200 dark:bg-gray-700 text-xs font-medium text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
