import { useState } from "react";

export default function HoverHeading({ tag }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <h2 
            className='text-4xl font-semibold text-left mb-6 text-black dark:text-white transition-all dark:hover:text-[#39FF14] dark:hover:drop-shadow-[0_0_6px_#39FF14]'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered ? `</${tag}>` : `<${tag}>`}
      </h2>
    );
}