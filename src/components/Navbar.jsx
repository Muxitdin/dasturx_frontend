import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-[#121212] shadow-lg border-b border-green-500/10">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link
                    to="/"
                    className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600"
                >
                    DasturX
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link to="/" className="text-white hover:text-green-400 transition-colors duration-300">
                        Home
                    </Link>
                    <Link to="/about" className="text-white hover:text-green-400 transition-colors duration-300">
                        About
                    </Link>
                    <Link to="/contact" className="text-white hover:text-green-400 transition-colors duration-300">
                        Contact
                    </Link>
                    <button className="px-6 py-2.5 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300">
                        Enroll Now
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white hover:text-green-400 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-[#121212]/95 backdrop-blur-sm px-6 py-6 space-y-5 border-t border-green-500/10 animate-fadeIn">
                    <Link
                        to="/"
                        className="block py-2 text-white hover:text-green-400 transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className="block py-2 text-white hover:text-green-400 transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        About
                    </Link>
                    <Link
                        to="/contact"
                        className="block py-2 text-white hover:text-green-400 transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        Contact
                    </Link>
                    <button
                        className="w-full mt-4 px-6 py-2.5 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300"
                        onClick={() => setIsOpen(false)}
                    >
                        Enroll Now
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
