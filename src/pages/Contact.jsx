import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaCheck } from "react-icons/fa";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle the form submission
        console.log(formData);
        // Show success message
        setIsSubmitted(true);
        // Reset form
        setFormData({ name: "", email: "", subject: "", message: "" });
        // Hide success message after 3 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    return (
        <div className="min-h-screen text-white py-12 px-6 pt-28">
            {/* Hero Section */}
            <section className="max-w-5xl mx-auto text-center mb-16 relative">
                <div className="absolute inset-0 bg-green-500 opacity-5 rounded-3xl blur-3xl"></div>
                <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 mb-6 relative z-10">
                    Get in Touch
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-8 rounded-full"></div>
                <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                    Have questions about our courses or want to learn more about DasturX? We're here to help you start
                    your journey in tech.
                </p>
            </section>

            {/* Contact Information + Form Section */}
            <section className="max-w-6xl mx-auto mb-20">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Contact Information */}
                    <div className="lg:w-2/5">
                        <div className="bg-[#202020] rounded-2xl p-8 shadow-xl border border-green-500/10 h-full">
                            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 mb-6">
                                Contact Information
                            </h2>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="bg-green-500/10 p-3 rounded-full mr-4">
                                        <FaMapMarkerAlt className="text-green-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Our Location</h3>
                                        <p className="text-gray-300">Namangan, Uzbekistan</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-green-500/10 p-3 rounded-full mr-4">
                                        <FaPhone className="text-green-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Phone Number</h3>
                                        <p className="text-gray-300">+998 90 553 56 79</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-green-500/10 p-3 rounded-full mr-4">
                                        <FaEnvelope className="text-green-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Email Address</h3>
                                        <p className="text-gray-300">info@dasturx.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-green-500/10 p-3 rounded-full mr-4">
                                        <FaClock className="text-green-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Working Hours</h3>
                                        <p className="text-gray-300">Mon - Fri: 9:00 AM - 9:00 PM</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 p-6 bg-green-500/5 rounded-xl border border-green-500/10">
                                <h3 className="font-semibold mb-2">Follow Us</h3>
                                <p className="text-gray-300 text-sm mb-4">
                                    Connect with us on social media for updates and tech insights
                                </p>
                                <div className="flex space-x-4">
                                    <a
                                        href="#"
                                        className="bg-[#202020] p-2 rounded-full border border-green-500/20 hover:border-green-500/50 transition-all"
                                    >
                                        <svg
                                            className="w-5 h-5 text-green-400"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </a>
                                    <a
                                        href="#"
                                        className="bg-[#202020] p-2 rounded-full border border-green-500/20 hover:border-green-500/50 transition-all"
                                    >
                                        <svg
                                            className="w-5 h-5 text-green-400"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                                        </svg>
                                    </a>
                                    <a
                                        href="#"
                                        className="bg-[#202020] p-2 rounded-full border border-green-500/20 hover:border-green-500/50 transition-all"
                                    >
                                        <svg
                                            className="w-5 h-5 text-green-400"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </a>
                                    <a
                                        href="#"
                                        className="bg-[#202020] p-2 rounded-full border border-green-500/20 hover:border-green-500/50 transition-all"
                                    >
                                        <svg
                                            className="w-5 h-5 text-green-400"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:w-3/5">
                        <div className="bg-[#202020] rounded-2xl p-8 shadow-xl border border-green-500/10">
                            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 mb-6">
                                Send Us a Message
                            </h2>

                            {isSubmitted ? (
                                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 text-center">
                                    <FaCheck className="mx-auto text-green-500 text-4xl mb-4" />
                                    <h3 className="text-xl font-semibold mb-2">Message Sent Successfully!</h3>
                                    <p className="text-gray-300">
                                        Thank you for reaching out. We'll get back to you as soon as possible.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="block text-sm font-medium text-gray-300 mb-1"
                                            >
                                                Your Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-[#161616] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent transition-all"
                                                placeholder="Johnbek"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block text-sm font-medium text-gray-300 mb-1"
                                            >
                                                Your Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-[#161616] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent transition-all"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="subject"
                                            className="block text-sm font-medium text-gray-300 mb-1"
                                        >
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-[#161616] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent transition-all"
                                            placeholder="I'm interested in your courses"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium text-gray-300 mb-1"
                                        >
                                            Your Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows="6"
                                            className="w-full bg-[#161616] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent transition-all"
                                            placeholder="I would like to know more about..."
                                        ></textarea>
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            className="px-8 py-3 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 w-full md:w-auto"
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="max-w-5xl mx-auto mb-16 relative">
                <div className="absolute inset-0 bg-green-500 opacity-5 rounded-3xl blur-3xl -z-10"></div>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-8 rounded-full"></div>
                </div>

                <div className="space-y-4">
                    <div className="bg-[#202020] rounded-xl p-6 border border-green-500/10">
                        <h3 className="text-xl font-semibold mb-2">What courses do you offer?</h3>
                        <p className="text-gray-300">
                            We offer a range of programming courses including Front-end Development, Back-end
                            Development, Mobile App Development, and more. Each course is designed to provide hands-on
                            experience and real-world skills.
                        </p>
                    </div>

                    <div className="bg-[#202020] rounded-xl p-6 border border-green-500/10">
                        <h3 className="text-xl font-semibold mb-2">Do I need prior experience to join?</h3>
                        <p className="text-gray-300">
                            Many of our courses are designed for beginners with no prior experience. However, some
                            advanced courses may require basic programming knowledge. Check the specific course
                            prerequisites or contact us if you're unsure.
                        </p>
                    </div>

                    <div className="bg-[#202020] rounded-xl p-6 border border-green-500/10">
                        <h3 className="text-xl font-semibold mb-2">How long are the courses?</h3>
                        <p className="text-gray-300">
                            Course durations vary depending on the subject and level. Most of our comprehensive programs
                            range from 3 to 6 months, while specialized workshops might be shorter. Each course page
                            provides specific information about duration.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
