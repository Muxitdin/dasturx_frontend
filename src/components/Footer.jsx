import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="bg-[#202020] text-white py-10 px-6">
            <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-6">
                {/* Logo & About */}
                <div className="flex flex-col gap-3">
                    <h2 className="text-2xl font-bold text-green-500">DasturX</h2>
                    <p className="text-sm text-gray-300 max-w-xs">
                        Empower your IT career with expert-led courses and a supportive learning community.
                    </p>
                </div>

                {/* Navigation */}
                <div className="flex gap-8">
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold">Company</h3>
                        <Link to="/about" className="text-gray-400 hover:text-white">About</Link>
                        <Link to="/courses" className="text-gray-400 hover:text-white">Courses</Link>
                        <Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold">Resources</h3>
                        <Link to="#" className="text-gray-400 hover:text-white">Blog</Link>
                        <Link to="/courses" className="text-gray-400 hover:text-white">Courses</Link>
                        <Link to="#" className="text-gray-400 hover:text-white">FAQ</Link>
                    </div>
                </div>

                {/* Social Media */}
                <div className="flex gap-4">
                    <a href="#" className="text-gray-400 hover:text-white"><Instagram size={20} /></a>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-sm text-gray-400 mt-6">
                © {new Date().getFullYear()} DasturX. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
