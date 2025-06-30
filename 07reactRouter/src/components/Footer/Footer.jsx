import React from 'react'
import { Link } from 'react-router-dom'; // Used for internal navigation without reloading

// Functional component for Footer
export default function Footer() {
    return (
        // Main footer container
        <footer className="bg-white border-y">
            {/* Content wrapper with padding and max width */}
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">

                {/* Top section: logo and links */}
                <div className="md:flex md:justify-between">

                    {/* Logo section */}
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                                className="mr-3 h-16"
                                alt="Logo"
                            />
                        </Link>
                    </div>

                    {/* Link sections: Resources, Follow us, Legal */}
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">

                        {/* Resources Links */}
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:underline">About</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Follow Us Links */}
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://github.com/hiteshchoudhary"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <Link to="/" className="hover:underline">Discord</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Legal Links */}
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline">Terms &amp; Conditions</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Horizontal divider */}
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />

                {/* Bottom section: copyright and social */}
                <div className="sm:flex sm:items-center sm:justify-between">

                    {/* Copyright */}
                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2023
                        <a href="https://hiteshchoudhary.com/" className="hover:underline"> hiteshchoudhary</a>. All Rights Reserved.
                    </span>

                    {/* Social media icons */}
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">

                        {/* Each icon is a link using <Link to="#"> and an SVG icon */}

                        {/* Facebook */}
                        <Link to="#" className="text-gray-500 hover:text-gray-900">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 8 19">
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </Link>

                        {/* Discord */}
                        <Link to="#" className="text-gray-500">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 21 16">
                                <path d="...discord path..." />
                            </svg>
                            <span className="sr-only">Discord community</span>
                        </Link>

                        {/* Twitter */}
                        <Link to="#" className="text-gray-500">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 17">
                                <path fillRule="evenodd" clipRule="evenodd" d="...twitter path..." />
                            </svg>
                            <span className="sr-only">Twitter page</span>
                        </Link>

                        {/* GitHub */}
                        <Link to="#" className="text-gray-500">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" clipRule="evenodd" d="...github path..." />
                            </svg>
                            <span className="sr-only">GitHub account</span>
                        </Link>

                        {/* Dribbble */}
                        <Link to="#" className="text-gray-500">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" clipRule="evenodd" d="...dribbble path..." />
                            </svg>
                            <span className="sr-only">Dribbble account</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
