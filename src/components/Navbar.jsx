import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white fixed w-full z-50 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-green-400">DasturX</Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/about" className="hover:text-green-400">About</Link>
          <Link to="/courses" className="hover:text-green-400">Courses</Link>
          <Link to="/testimonials" className="hover:text-green-400">Testimonials</Link>
          <Link to="/contact" className="hover:text-green-400">Contact</Link>
          <button className="bg-green-500 px-4 py-2 rounded-lg text-black font-semibold hover:bg-green-600">
            Enroll Now
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-6 py-4 space-y-4 border-t border-gray-700">
          <Link href="/about" className="block hover:text-green-400">About</Link>
          <Link href="/courses" className="block hover:text-green-400">Courses</Link>
          <Link href="/testimonials" className="block hover:text-green-400">Testimonials</Link>
          <Link href="/contact" className="block hover:text-green-400">Contact</Link>
          <button className="w-full bg-green-500 px-4 py-2 rounded-lg text-black font-semibold hover:bg-green-600">
            Enroll Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
