import HoverBox from "./HoverBox";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function NavDropdown() {
  const [open, setOpen] = useState(false);

  const items = [
    {
      title: "About Us.",
      text: "We are super-efficient yet humble to serve you!",
      color: "bg-pink-100 hover:bg-pink-200",
    },
    {
      title: "Team.",
      text: "We are proud of our experienced and accomplished team!",
      color: "bg-purple-100 hover:bg-purple-200",
    },
    {
      title: "Career.",
      text: "Can you offer such experience?",
      color: "bg-sky-100 hover:bg-sky-200",
    },
  ];

  return (
    <div
      className="relative"
      // Desktop hover
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Button with hover + click toggle for mobile */}
      <button
        onClick={() => setOpen(!open)} // Mobile click
        className="flex items-center gap-1 text-gray-800 font-medium hover:text-[#EF2168]"
        aria-haspopup="true"
        aria-expanded={open}
      >
        About
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
