import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const teachers = [
    {
        name: "Jogn Doe",
        subject: "Senior Front-end Engineer",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyP62RjdtcYgudg0AhQvEOKf75k1zlUvNtTw&s",
        social: {
            linkedin: "#",
            github: "#",
            twitter: "#",
        },
    },
    {
        name: "John Doe",
        subject: "Senior Back-end Engineer",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyP62RjdtcYgudg0AhQvEOKf75k1zlUvNtTw&s",
        social: {
            linkedin: "#",
            github: "#",
            twitter: "#",
        },
    },
    {
        name: "Doe John",
        subject: "Senior Full-stack Engineer",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyP62RjdtcYgudg0AhQvEOKf75k1zlUvNtTw&s",
        social: {
            linkedin: "#",
            github: "#",
            twitter: "#",
        },
    },
];

const About = () => {
    return (
        <div className="min-h-screen text-white py-12 px-6 ">
            {/* Hero Section */}
            <section className="max-w-5xl mx-auto text-center mb-20 relative">
                <div className="absolute inset-0 bg-green-500 opacity-5 rounded-3xl blur-3xl"></div>
                <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 mt-14 mb-6 relative z-10">
                    About DasturX
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-8 rounded-full"></div>
                <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, labore? Dolor sit amet,
                    consectetur adipisicing elit. Dolores, labore? Dolor sit amet, consectetur adipisicing elit.
                    Dolores, labore?
                </p>
            </section>

            {/* Teachers Section */}
            <section className="max-w-6xl mx-auto text-center mb-24 relative py-12">
                <div className="absolute inset-0 bg-green-500 opacity-5 rounded-3xl blur-3xl -z-10"></div>
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 mb-10">
                    Our Mentors
                </h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {teachers.map((teacher, index) => (
                        <div
                            key={index}
                            className="bg-[#202020] rounded-2xl w-72 p-8 shadow-xl hover:shadow-green-500/10 
                            hover:translate-y-[-8px] transition-all duration-300 border border-green-500/10"
                        >
                            <div className="relative mb-6">
                                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-full blur-md opacity-20"></div>
                                <img
                                    src={teacher.image}
                                    alt={teacher.name}
                                    className="rounded-full w-28 h-28 mx-auto object-cover border-2 border-green-500/30 p-1 relative"
                                />
                            </div>
                            <h3 className="text-2xl font-semibold mb-2">{teacher.name}</h3>
                            <p className="text-md text-gray-300 mb-4">{teacher.subject}</p>
                            <div className="flex justify-center space-x-4 text-gray-400">
                                <a href={teacher.social.linkedin} className="hover:text-green-400 transition-colors">
                                    <FaLinkedin size={20} />
                                </a>
                                <a href={teacher.social.github} className="hover:text-green-400 transition-colors">
                                    <FaGithub size={20} />
                                </a>
                                <a href={teacher.social.twitter} className="hover:text-green-400 transition-colors">
                                    <FaTwitter size={20} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Location Section */}
            <section className="max-w-5xl mx-auto text-center mb-16 relative py-12">
                <div className="absolute inset-0 bg-green-500 opacity-5 rounded-3xl blur-3xl -z-10"></div>
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 mb-6">
                    Where to Find Us
                </h2>
                <div className="flex items-center justify-center gap-2 text-lg text-gray-300 mb-8">
                    <FaMapMarkerAlt className="text-green-500" />
                    <p>Our center is located in Namangan, Uzbekistan</p>
                </div>
                <div className="h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border border-green-500/20">
                    <MapContainer
                        center={[41.006779864408685, 71.6632102797268]}
                        zoom={14}
                        className="h-full w-full"
                        scrollWheelZoom={false}
                    >
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[41.006779864408685, 71.6632102797268]}>
                            <Popup className="text-black">
                                <strong>DasturX IT Center</strong>
                                <br />
                                Come visit us!
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
                <div className="mt-8 inline-block">
                    <a
                        href="https://maps.google.com/?q=41.006779864408685,71.6632102797268"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-full 
                                font-medium hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300
                                flex items-center justify-center gap-2 group"
                    >
                        <FaMapMarkerAlt />
                        <span>Get Directions</span>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default About;
