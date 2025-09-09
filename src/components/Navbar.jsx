import { Link } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";
import NavDropdown from "./NavDropdown";
import { useState } from "react";
import ServicesDropdown from "./ServicesDropdown";

export default function Navbar() {
  const [isDarkButton, setIsDarkButton] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm border-b-gray-950">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-8 py-4">
        
        {/* Left Logo */}
        <div className="flex-shrink-0">
          <img src="/img/logo-light.svg" alt="Leo0" className="h-12 w-auto" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-gray-800 font-medium">
          <Link to="/work" className="hover:text-[#EF2168]">Work</Link>
          <ServicesDropdown />
          <Link to="/clients" className="hover:text-[#EF2168]">Clients</Link>
          <NavDropdown />
          <Link to="/knowledge" className="hover:text-[#EF2168]">Knowledge</Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={() => setIsDarkButton(!isDarkButton)}
            aria-label="Toggle button theme"
            className={`p-2 rounded-full transition ${
              isDarkButton
                ? "bg-[#EF2168] text-white"
                : "hover:bg-[#EF2168] text-gray-800"
            }`}
          >
            {isDarkButton ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          {/* Contact Button (hidden on small screens) */}
          <Link
            to="/contact"
            className="hidden sm:inline px-6 py-2 bg-black text-white font-medium rounded-sm shadow hover:bg-gray-900 transition"
          >
            Contact
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="md:hidden flex flex-col gap-4 px-4 py-6 bg-white shadow">
          <Link to="/work" onClick={() => setMobileOpen(false)}>Work</Link>
          <Link to="/clients" onClick={() => setMobileOpen(false)}>Clients</Link>
          <Link to="/knowledge" onClick={() => setMobileOpen(false)}>Knowledge</Link>
          <Link to="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
