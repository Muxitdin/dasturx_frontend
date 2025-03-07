import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-[#121212] to-[#1a1a1a] text-white py-8 px-6">
            <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-8 border-b border-gray-700 pb-6">
                {/* Logo & About */}
                <div className="flex flex-col gap-3 max-w-sm">
                    <h2 className="text-3xl font-extrabold text-green-500">DasturX</h2>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        Empower your IT career with expert-led courses and a supportive learning community.
                    </p>
                </div>

                {/* Navigation */}
                <div className="flex gap-12">
                    <div className="flex flex-col gap-3">
                        <h3 className="font-semibold text-lg text-gray-200">Company</h3>
                        <Link to="/about" className="text-gray-400 hover:text-green-400 transition">
                            About
                        </Link>
                        <Link to="/courses" className="text-gray-400 hover:text-green-400 transition">
                            Courses
                        </Link>
                        <Link to="/contact" className="text-gray-400 hover:text-green-400 transition">
                            Contact
                        </Link>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className="font-semibold text-lg text-gray-200">Resources</h3>
                        <Link to="#" className="text-gray-400 hover:text-green-400 transition">
                            Blog
                        </Link>
                        <Link to="/courses" className="text-gray-400 hover:text-green-400 transition">
                            Courses
                        </Link>
                        <Link to="#" className="text-gray-400 hover:text-green-400 transition">
                            FAQ
                        </Link>
                    </div>
                </div>

                {/* Social Media */}
                <div className="flex gap-5">
                    <a href="#" className="text-gray-400 hover:text-green-400 transition">
                        <Instagram size={24} />
                    </a>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-sm text-gray-500 mt-6">
                © {new Date().getFullYear()} DasturX. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
