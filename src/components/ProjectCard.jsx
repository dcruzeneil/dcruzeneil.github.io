export default function ProjectCard({ name, image, description, link, domain, technology }) {
    const tags = [...domain, ...technology];
    return (
        <div className="bg-white dark:bg-[#1e1e1e] rounded-xl shadow-md overflow-hidden transition hover:shadow-lg hover:-translate-y-1 duration-200">
            <img 
                src={image}
                alt={name}
                className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{name}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium px-2 py-1 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{description}</p>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline"
                >
                    URL    
                </a>
            </div>
        </div>
    );
}