export default function DarkModeToggle({ isDark, toggleTheme }) {
    return (
        <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded text-xl"
        >
            {isDark ? '🌙' : '☀️'}
        </button>
    )
}