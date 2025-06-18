import { useState } from 'react';

export default function HoverTag({ tag, href }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a
            href={href}
            className='hover:underline hover:underline-offset-8 hover:text-gray-900 dark:hover:text-[#39FF14] transition-all dark:hover:drop-shadow-[0_0_6px_#39FF14]'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered ? `</${tag}>` : `<${tag}>`}
        </a>
    );
}
