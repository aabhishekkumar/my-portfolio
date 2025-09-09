export default function HoverBox({ title, text, color }) {
  return (
    <div
      className={`w-full sm:w-64 p-4 rounded-md shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 ${color}`}
    >
      <h3 className="font-extrabold text-2xl sm:text-3xl">{title}</h3>
      <p className="text-sm mt-2 text-gray-700">{text}</p>
      <div className="text-right text-xl">→</div>
    </div>
  );
}
