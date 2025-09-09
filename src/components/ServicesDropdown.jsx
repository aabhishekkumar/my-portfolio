import { useState } from "react";
import HoverBox from "./HoverBox";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function ServicesDropdown() {
  const [open, setOpen] = useState(false);

  const items = [
    {
      title: "Design",
      text: "UI/UX design that delights users.",
      color: "bg-yellow-100 hover:bg-yellow-200",
    },
    {
      title: "Development",
      text: "Robust frontend and backend solutions.",
      color: "bg-green-100 hover:bg-green-200",
    },
    {
      title: "Marketing",
      text: "Helping your brand grow fast.",
      color: "bg-blue-100 hover:bg-blue-200",
    },
  ];

  return (
    <div
      className="relative"
      // Desktop: hover opens dropdown
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Trigger */}
      <button
        className="flex items-center gap-1 text-gray-800 font-medium hover:text-[#EF2168]"
        aria-haspopup="true"
        aria-expanded={open}
        // Mobile: click toggles dropdown
        onClick={() => setOpen(!open)}
      >
        Services
        {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute left-1/2 top-full mt-3 flex flex-col md:flex-row gap-4 bg-white p-4 shadow-lg rounded-md z-50 transform -translate-x-1/2 w-64 md:w-auto transition-all duration-300 ease-in-out">
          {items.map((item, idx) => (
            <HoverBox key={idx} {...item} />
          ))}
        </div>
      )}
    </div>
  );
}
