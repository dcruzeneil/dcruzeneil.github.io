import { useState, useRef, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export default function FilterDropdown({ title, options, selected, setSelected }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)){
            setIsOpen(false);
        }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleOption = (option) => {
    if (selected.includes(option)) {
      setSelected(selected.filter((item) => item !== option));
    } else {
      setSelected([...selected, option]);
    }
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-between items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-sm font-medium text-gray-800 dark:text-gray-200 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition"
      >
        {title}
        <FaChevronDown className="w-3 h-3" />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-48 bg-white dark:bg-[#1e1e1e] border border-gray-200 dark:border-gray-700 rounded-md shadow-lg max-h-64 overflow-auto">
          <ul className="py-2 text-sm">
            {options.map((option) => (
              <li
                key={option}
                onClick={() => toggleOption(option)}
                className={`cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  selected.includes(option) ? 'font-semibold bg-gray-100 dark:bg-gray-700' : ''
                }`}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
