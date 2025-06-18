import { useState } from 'react';
import projectsData from '../data/projects.json';
import ProjectCard from '../components/ProjectCard';
import FilterDropdown from '../components/FilterDropdown';
import ScrollButton from '../components/ScrollButton';
import HoverHeading from '../components/HoverHeading';

export default function Projects() {
  const allDomains = [...new Set(projectsData.flatMap(p => p.domain))];
  const allTech = [...new Set(projectsData.flatMap(p => p.technology))];

  const [selectedDomains, setSelectedDomains] = useState([]);
  const [selectedTech, setSelectedTech] = useState([]);

  const isFilterActive = selectedDomains.length > 0 || selectedTech.length > 0;

  const filteredProjects = projectsData.filter((project) => {
    const matchesDomain =
      selectedDomains.length === 0 || selectedDomains.some(tag => project.domain.includes(tag));
    const matchesTech =
      selectedTech.length === 0 || selectedTech.some(tag => project.technology.includes(tag));
    return matchesDomain && matchesTech;
  });

  const removeFilter = (type, value) => {
    if (type === 'domain') setSelectedDomains(selectedDomains.filter(tag => tag !== value));
    else if (type === 'tech') setSelectedTech(selectedTech.filter(tag => tag !== value));
  };

  const clearFilters = () => {
    setSelectedDomains([]);
    setSelectedTech([]);
  };

  return (
    <section id="projects" className="relative py-24 px-6 md:px-24 bg-white dark:bg-[#1a1a1a] text-black dark:text-white font-poppins">
      <div className="absolute top-30 right-6 sm:block hidden">
        <ScrollButton direction="up" targetId="skills" />
      </div> 
      
      <HoverHeading tag='projects' />

      {/* Dropdown Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <FilterDropdown
          title="Filter by Domain"
          options={allDomains}
          selected={selectedDomains}
          setSelected={setSelectedDomains}
        />
        <FilterDropdown
          title="Filter by Technology"
          options={allTech}
          selected={selectedTech}
          setSelected={setSelectedTech}
        />
      </div>

      {/* Active Filters Display */}
      <div className="flex flex-wrap gap-3 items-center mb-6">
        {[...selectedDomains.map(tag => ({ type: 'domain', tag })), ...selectedTech.map(tag => ({ type: 'tech', tag }))].map(({ type, tag }) => (
          <span
            key={`${type}-${tag}`}
            className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 text-sm rounded-full"
          >
            {tag}
            <button onClick={() => removeFilter(type, tag)} className="font-bold px-1">×</button>
          </span>
        ))}
        {isFilterActive && (
          <button
            onClick={clearFilters}
            className="text-sm px-4 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-full"
          >
            Clear All Filters
          </button>
        )}
      </div>

      {/* Project Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => <ProjectCard key={project.name} {...project} />)
        ) : (
          <p className="text-sm text-gray-600 dark:text-gray-400">No projects match the selected filters.</p>
        )}
      </div>
      <div className="absolute bottom-0 right-6 sm:block hidden">
            <ScrollButton direction="down" targetId="experience" />
      </div>
    </section>
  );
}
