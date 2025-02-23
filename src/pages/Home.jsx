import React from "react";
import { Laptop, MessageCircleQuestion, BookOpenCheck, Users, PenTool, CodeXml, ChevronDown } from "lucide-react";
import { useState } from "react";

const Home = () => {
    const [openFAQ, setOpenFAQ] = useState(null);
    
    const faqs = [
        {
            question: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptatum.",
        },
        {
            question: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.?",
            answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptatum.",
        },
        {
            question: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.?",
            answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptatum.",
        },
    ];

    return (
        <div className="relative wrapper min-h-full flex flex-col justify-center items-center">
            <section className="hero min-h-full min-w-full flex gap-20 flex-col items-center justify-center text-center">
                <div className="hero_upper flex flex-col items-center justify-center gap-6 mt-40">
                    <h1 className="text-4xl font-bold font-heading text-green-500">
                        Empower Your IT Career with DasturX
                    </h1>
                    <p className="text-lg font-text text-white">
                        Join our community of learners and experts to enhance your skills and achieve your career goals
                        in the IT industry.
                    </p>
                    <button className="w-[145px] h-[52px] rounded-full bg-green-500 text-black text-lg font-bold font-text hover:bg-green-500 transition-all duration-300 ease-in-out">
                        Sign Up Now
                    </button>
                </div>
                <div className="hero_lower flex flex-col items-center w-full max-w-5xl px-6">
                    <p className="text-3xl font-bold text-white text-center mb-6">Why Choose DasturX?</p>
                    <div className="flex flex-wrap justify-center gap-6">
                        {[
                            {
                                icon: Laptop,
                                title: "Expert Instructors",
                                text: "Learn from industry leaders with real-world experience.",
                            },
                            {
                                icon: BookOpenCheck,
                                title: "Comprehensive Courses",
                                text: "Access a wide range of courses tailored to your skills.",
                            },
                            {
                                icon: MessageCircleQuestion,
                                title: "Community Support",
                                text: "Engage with a vibrant community of learners and mentors.",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center gap-3 bg-[#202020] rounded-2xl h-[220px] w-[260px] p-6 shadow-lg hover:scale-105 transition"
                            >
                                <item.icon className="text-green-500 w-12 h-12" />
                                <h2 className="text-xl font-semibold text-white">{item.title}</h2>
                                <p className="text-sm text-gray-300">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="w-full max-w-6xl px-6 py-16">
                <h2 className="text-3xl font-bold text-white text-center mb-6">Popular Courses</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {[
                        {
                            title: "Full-Stack Web Development",
                            icon: CodeXml,
                            desc: "Master React, Node.js, and databases.",
                        },
                        {
                            title: "UI-UX design",
                            icon: PenTool,
                            desc: "Learn Figma, Adobe, and design principles.",
                        },
                        {
                            title: "English for IT",
                            icon: Users,
                            desc: "Improve your English for IT and business.",
                        },
                    ].map((course, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center gap-3 bg-[#202020] rounded-2xl h-[220px] w-[260px] p-6 shadow-lg hover:scale-105 transition"
                        >
                            <course.icon className="text-green-500 w-12 h-12" />
                            <h3 className="text-xl font-semibold text-white">{course.title}</h3>
                            <p className="text-sm text-gray-300">{course.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="w-full max-w-6xl px-6 py-16">
                <h2 className="text-3xl font-bold text-white text-center mb-6">What Our Students Say</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {[
                        {
                            name: "Teshavoy",
                            text: "lorem ipsum dolor sit amet, consectetur adipiscing elit!",
                            img: "/alexander-hipp-iEEBWgY_6lA-unsplash.jpg",
                        },
                        {
                            name: "Boltavoy",
                            text: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                            img: "/alexander-hipp-iEEBWgY_6lA-unsplash.jpg",
                        },
                        {
                            name: "Teshavoy",
                            text: "lorem ipsum dolor sit amet, consectetur adipiscing elit!",
                            img: "/alexander-hipp-iEEBWgY_6lA-unsplash.jpg",
                        },
                    ].map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-[#202020] rounded-2xl p-6 shadow-lg w-[300px] text-center hover:scale-105 transition"
                        >
                            <img
                                src={testimonial.img}
                                className="w-16 h-16 rounded-full mx-auto mb-3"
                                alt={testimonial.name}
                            />
                            <p className="text-gray-300">"{testimonial.text}"</p>
                            <h4 className="text-green-500 font-bold mt-2">- {testimonial.name}</h4>
                        </div>
                    ))}
                </div>
            </section>
            <section className="w-full max-w-5xl px-6 py-16">
                <h2 className="text-3xl font-bold text-white text-center mb-6">Frequently Asked Questions</h2>
                <div className="bg-[#202020] p-8 rounded-lg shadow-lg">
                    {faqs.map((faq, index) => (
                        <div key={index} className="mb-4 border-b border-gray-600 pb-3">
                            <button
                                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                                className="flex justify-between w-full text-lg text-green-500 font-semibold cursor-pointer"
                            >
                                {faq.question}
                                <ChevronDown
                                    className={`w-6 h-6 transition-transform ${openFAQ === index ? "rotate-180" : ""}`}
                                />
                            </button>
                            {openFAQ === index && <p className="text-gray-300 mt-2">{faq.answer}</p>}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
