import { useState, useEffect } from 'react';
import ExperienceEntry from '../components/ExperienceEntry';
import FilterDropdown from '../components/FilterDropdown';
import experienceData from '../data/experience.json';
import ScrollButton from '../components/ScrollButton';
import HoverHeading from '../components/HoverHeading';

const FILTER_OPTIONS = ['Work', 'Education', 'Research'];

export default function Experience() {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (selectedTypes.length === 0) {
      setFilteredData(experienceData); // Show all if nothing selected
    } else {
      const filtered = experienceData.filter(entry =>
        entry.type.some(type => selectedTypes.includes(type))
      );
      setFilteredData(filtered);
    }
  }, [selectedTypes]);

  const removeFilter = (tag) => {
    setSelectedTypes(prev => prev.filter(t => t !== tag));
  };

  const clearFilters = () => {
    setSelectedTypes([]);
  };

  const isFilterActive = selectedTypes.length > 0;

  return (
    <section id="experience" className="relative py-32 lg:py-24 px-6 md:px-24 bg-white dark:bg-[#1a1a1a] text-black dark:text-white font-poppins">
      <div className="absolute top-30 right-6 sm:block hidden">
        <ScrollButton direction="up" targetId="projects" />
      </div> 

      <HoverHeading tag="experience" />

      <div className="flex flex-col sm:flex-row sm:items-start sm:gap-12">
        {/* Left: Filter Dropdown */}
        <div className="mb-6 sm:mb-0">
          <FilterDropdown
            title="Filter"
            options={FILTER_OPTIONS}
            selected={selectedTypes}
            setSelected={setSelectedTypes}
          />
        </div>

        {/* Right: Active Filter Tags and Experience Entries */}
        <div className="flex-1">
          {/* Selected Filters as Bubbles */}
          <div className="flex flex-wrap gap-3 items-center mb-6">
            {selectedTypes.map(tag => (
              <span
                key={tag}
                className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 text-sm rounded-full"
              >
                {tag}
                <button onClick={() => removeFilter(tag)} className="font-bold px-1">×</button>
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

          {/* Experience Entries */}
          <div className="pl-2 sm:pl-8">
            {filteredData.map((item, index) => (
              <ExperienceEntry key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
