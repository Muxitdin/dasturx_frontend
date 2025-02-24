import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const teachers = [
    {
        name: "Jogn Doe",
        subject: "Senior Front-end Engineer",
        image: "https://via.placeholder.com/150",
    },
    {
        name: "John Doe",
        subject: "Senior Back-end Engineer",
        image: "https://via.placeholder.com/150",
    },
    {
        name: "Doe John",
        subject: "Senior Full-stack Engineer",
        image: "https://via.placeholder.com/150",
    },
];

const About = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white py-12 px-6">
            {/* About Section */}
            <section className="max-w-5xl mx-auto text-center mb-12">
                <h1 className="text-4xl font-bold text-green-500 mt-14 mb-4">About DasturX</h1>
                <p className="text-lg text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, labore?dolor sit amet,
                    consectetur adipisicing elit. Dolores, labore?dolor sit amet, consectetur adipisicing elit. Dolores,
                    labore?dolor sit amet, consectetur adipisicing elit. Dolores, labore?.
                </p>
            </section>

            {/* Teachers Section */}
            <section className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold text-green-500 mb-6">Our Mentors</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {teachers.map((teacher, index) => (
                        <div
                            key={index}
                            className="bg-[#202020] rounded-2xl w-64 p-6 shadow-lg hover:scale-105 transition"
                        >
                            <img
                                src={teacher.image}
                                alt={teacher.name}
                                className="rounded-full w-24 h-24 mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold">{teacher.name}</h3>
                            <p className="text-sm text-gray-300">{teacher.subject}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Location Section */}
            <section className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-green-500 mb-6">Where are we located?</h2>
                <p className="text-lg text-gray-300 mb-4">Our center is located in Namangan, Uzbekistan.</p>
                <div className="h-96 w-full rounded-lg overflow-hidden">
                    <MapContainer center={[41.006779864408685, 71.6632102797268]} zoom={13} className="h-full w-full">
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[41.006779864408685, 71.6632102797268]}>
                            <Popup>DasturX IT Center</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </section>
        </div>
    );
};

export default About;
