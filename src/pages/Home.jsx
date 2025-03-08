import React from "react";
import { FaArrowRight, FaCode, FaLaptopCode, FaServer, FaMobileAlt } from "react-icons/fa";

const featuredCourses = [
    {
        title: "Front-end Development",
        description: "Master HTML, CSS, JavaScript and modern frameworks like React",
        icon: <FaLaptopCode className="text-green-500 text-4xl" />,
        level: "Beginner to Advanced",
    },
    {
        title: "Back-end Development",
        description: "Build robust server-side applications with Java/Node.js and databases",
        icon: <FaServer className="text-green-500 text-4xl" />,
        level: "Intermediate",
    },
    {
        title: "UI/UX Design",
        description: "Create visually stunning and user-friendly interfaces",
        icon: <FaMobileAlt className="text-green-500 text-4xl" />,
        level: "Beginner to Advanced",
    },
];

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Junior Developer",
        image: "https://via.placeholder.com/150",
        text: "The courses at DasturX completely transformed my career path. I went from knowing nothing about coding to landing my first developer job in just 6 months.",
    },
    {
        name: "Alex Chen",
        role: "Full-stack Engineer",
        image: "https://via.placeholder.com/150",
        text: "The mentorship I received at DasturX was exceptional. The instructors truly care about your growth and provide real-world projects that prepare you for the industry.",
    },
];

const Home = () => {
    return (
        <div className="min-h-screen text-white px-6 mx-auto p-12">
            {/* Hero Section */}
            <section className="max-w-6xl mx-auto flex flex-col gap-14 md:flex-row items-center justify-between py-20 relative">
                <div className="absolute inset-0 bg-green-500 opacity-5 rounded-3xl blur-3xl"></div>
                <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0 relative z-10">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
                            Start Your Coding
                        </span>
                        <br />
                        Journey Today
                    </h1>
                    <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                        Learn in-demand programming skills from industry experts and transform your career with DasturX.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <button className="px-8 py-3 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300">
                            Get Started
                        </button>
                        <button className="px-8 py-3 border border-green-500/30 rounded-full font-medium hover:bg-green-500/10 transition-all duration-300">
                            Explore Courses
                        </button>
                    </div>
                </div>
                <div className="hidden md:w-1/2 md:block relative">
                    <div className="w-full h-80 md:h-96 rounded-2xl bg-[#202020] border border-green-500/10 relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <FaCode className="text-9xl text-green-500/20" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#121212] to-transparent h-1/3"></div>
                    </div>
                </div>
            </section>

            {/* Featured Courses Section */}
            <section className="max-w-6xl mx-auto md:py-20 pt-0 relative">
                <div className="absolute inset-0 bg-green-500 opacity-5 rounded-3xl blur-3xl -z-10"></div>
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 mb-4">
                        Featured Courses
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-8 rounded-full"></div>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Expertly crafted courses to help you master the latest technologies and programming languages.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredCourses.map((course, index) => (
                        <div
                            key={index}
                            className="bg-[#202020] rounded-2xl p-8 shadow-xl hover:shadow-green-500/10 
                                      hover:translate-y-[-8px] transition-all duration-300 border border-green-500/10"
                        >
                            <div className="mb-6">{course.icon}</div>
                            <h3 className="text-2xl font-semibold mb-3">{course.title}</h3>
                            <p className="text-gray-300 mb-4">{course.description}</p>
                            <span className="inline-block bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-sm">
                                {course.level}
                            </span>
                            <div className="mt-6">
                                <a
                                    href="#"
                                    className="flex items-center text-green-400 hover:text-green-300 transition-colors"
                                >
                                    <span className="mr-2">Learn more</span>
                                    <FaArrowRight size={14} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Statistics Section */}
            <section className="max-w-6xl mx-auto py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                    <div className="bg-[#202020] rounded-2xl p-8 border border-green-500/10">
                        <h3 className="text-4xl font-bold text-green-500 mb-2">500+</h3>
                        <p className="text-gray-300">Students Taught</p>
                    </div>
                    <div className="bg-[#202020] rounded-2xl p-8 border border-green-500/10">
                        <h3 className="text-4xl font-bold text-green-500 mb-2">20+</h3>
                        <p className="text-gray-300">Expert Instructors</p>
                    </div>
                    <div className="bg-[#202020] rounded-2xl p-8 border border-green-500/10">
                        <h3 className="text-4xl font-bold text-green-500 mb-2">15+</h3>
                        <p className="text-gray-300">Specialized Courses</p>
                    </div>
                    <div className="bg-[#202020] rounded-2xl p-8 border border-green-500/10">
                        <h3 className="text-4xl font-bold text-green-500 mb-2">95%</h3>
                        <p className="text-gray-300">Job Placement</p>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="max-w-6xl mx-auto py-20 relative">
                <div className="absolute inset-0 bg-green-500 opacity-5 rounded-3xl blur-3xl -z-10"></div>
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 mb-4">
                        Student Success Stories
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-8 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-[#202020] rounded-2xl p-8 shadow-xl border border-green-500/10 relative"
                        >
                            <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 text-green-500/20 text-7xl font-serif">
                                "
                            </div>
                            <p className="text-gray-300 mb-6 relative z-10">{testimonial.text}</p>
                            <div className="flex items-center">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full mr-4 border border-green-500/30"
                                />
                                <div>
                                    <h4 className="font-semibold">{testimonial.name}</h4>
                                    <p className="text-green-400 text-sm">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Сall to action Section */}
            <section className="max-w-5xl mx-auto text-center py-16 mb-8">
                <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 rounded-3xl p-12 border border-green-500/20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your journey?</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Join thousands of students who have transformed their careers with DasturX.
                    </p>
                    <button className="px-8 py-4 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 text-lg">
                        Enroll Now
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Home;
