import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import logo from "../../assets/images/Logo.svg";

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200 shadow-sm">
            <div className="container mx-auto p-8">
                <div className="lg:flex justify-between gap-10">

                    {/* LEFT SECTION */}
                    <div className="lg:w-2/5">
                        <a href="#" className="inline-block">
                            <img className="h-12 w-auto" src={logo} alt="CareerGoti" />
                        </a>

                        <p className="mt-3 max-w-sm text-gray-500">
                            Join 31,000+ learners and never miss new tips, tutorials, and updates.
                        </p>

                        {/* SOCIAL ICONS */}
                        <div className="flex mt-6 gap-4">
                            <a
                                href="#"
                                className="p-2 rounded-lg bg-gray-100 hover:bg-primary hover:text-white transition shadow-sm"
                                aria-label="Facebook"
                            >
                                <FaFacebook size={20} />
                            </a>

                            <a
                                href="#"
                                className="p-2 rounded-lg bg-gray-100 hover:bg-primary hover:text-white transition shadow-sm"
                                aria-label="Github"
                            >
                                <FaGithub size={20} />
                            </a>
                        </div>
                    </div>

                    {/* RIGHT SECTION */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 mt-10 lg:mt-0">

                        <div>
                            <h3 className="text-gray-800 uppercase font-semibold text-sm mb-3">
                                About
                            </h3>

                            <FooterLink text="Company" />
                            <FooterLink text="Community" />
                            <FooterLink text="Careers" />
                        </div>

                        <div>
                            <h3 className="text-gray-800 uppercase font-semibold text-sm mb-3">
                                Team Diary
                            </h3>

                            <FooterLink text="Blog" />
                            <FooterLink text="Our Services" />
                            <FooterLink text="Free Job Alerts" />
                        </div>

                        <div>
                            <h3 className="text-gray-800 uppercase font-semibold text-sm mb-3">
                                Terms & Conditions
                            </h3>

                            <FooterLink text="Privacy Policy" />
                            <FooterLink text="Contact Us" />
                        </div>

                        <div>
                            <h3 className="text-gray-800 uppercase font-semibold text-sm mb-3">
                                Contact
                            </h3>

                            <p className="text-gray-600 text-sm hover:text-primary transition cursor-pointer">
                                +1 526 654 8965
                            </p>
                            <p className="text-gray-600 text-sm hover:text-primary transition cursor-pointer">
                                example@email.com
                            </p>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-gray-300" />

                <p className="text-center text-gray-500 text-sm">
                    © CareerGoti {new Date().getFullYear()} — All rights reserved
                </p>
            </div>
        </footer>
    );
};

// 🔹 Reusable link component with hover + primary color
const FooterLink = ({ text }) => (
    <a
        href="#"
        className="block text-sm text-gray-600 hover:text-primary transition"
    >
        {text}
    </a>
);

export default Footer;
