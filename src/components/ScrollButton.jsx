export default function ScrollButton({ direction = "down", targetId = "" }) {
  const handleClick = () => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      history.pushState(null, "", `#${targetId}`);
    }
  };

  const isUp = direction === "up";
  const arrowPath = isUp
    ? "M5 15l7-7 7 7"
    : "M19 9l-7 7-7-7";

  return (
    <button
      onClick={handleClick}
      className="group bg-transparent border border-gray-400 dark:border-gray-500 rounded-full p-3 hover:bg-black dark:hover:bg-[#39FF14] transition"
      aria-label={`Scroll ${direction}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-gray-700 dark:text-white group-hover:text-white group-hover:dark:text-black animate-bounce transition-colors"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={arrowPath} />
      </svg>
    </button>
  );
}
