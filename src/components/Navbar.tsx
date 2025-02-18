'use client'

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import alphaLogo from '../../public/favicon.svg';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef<HTMLDivElement | null>(null);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            }
            else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: Event) => {
            if (event.target instanceof Node) {
                if (navRef.current && !navRef.current.contains(event.target)) {
                    setIsOpen(false);
                };
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav 
            ref={navRef} 
            className={`
                border-gray-200 fixed w-full top-0 left-0 right-0 z-50
                transition-colors duration-300
                ${scrolled ? 'bg-black/60' : 'bg-transparent'}
            `}
        >
            <div 
                className="max-w-screen-2xl mx-auto flex flex-wrap items-end 
                    justify-between mx-auto p-5"
            >
                <Link 
                    href="/"
                    className="flex items-end space-x-3 rtl:space-x-reverse
                        space-y-1"
                >
                    <Image src={alphaLogo} width={40} height={40} alt="Alpha Logo" />
                    <h1 className="font-thin text-2xl">
                        Alpha MM Inc
                    </h1>
                </Link>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 
                        justify-center text-sm text-white rounded-lg md:hidden 
                        hover:bg-blue-950 focus:outline-none focus:ring-2 
                        focus:ring-gray-200"
                    aria-controls="navbar-default"
                    aria-expanded={isOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>

                <div
                    className={`${isOpen ? "" : "hidden"} w-full md:block md:w-auto`}
                    id="navbar-default"
                >
                    <ul 
                        className="font-thin text-md flex flex-col p-4 md:p-0 mt-4 
                            bg-blue-950 md:bg-transparent border border-gray-100 
                            rounded-sm md:flex-row md:space-x-10 rtl:space-x-reverse 
                            md:mt-0 md:border-0"
                    >
                        <li>
                            <Link 
                                onClick={() => setIsOpen(false)}
                                href="/"
                                className="block py-2 px-3 text-white rounded-sm 
                                    hover:bg-gray-100 hover:text-blue-950 
                                    md:hover:bg-transparent md:border-0 
                                    md:hover:underline md:hover:text-white md:p-0"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                                onClick={() => setIsOpen(false)}
                                href="/#about"
                                className="block py-2 px-3 text-white rounded-sm 
                                hover:bg-gray-100 hover:text-blue-950 
                                md:hover:bg-transparent md:border-0 md:hover:underline 
                                md:hover:text-white md:p-0"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link 
                                onClick={() => setIsOpen(false)}
                                href="/#services"
                                className="block py-2 px-3 text-white rounded-sm 
                                hover:bg-gray-100 hover:text-blue-950 
                                md:hover:bg-transparent md:border-0 md:hover:underline 
                                md:hover:text-white md:p-0"
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link 
                                onClick={() => setIsOpen(false)}
                                href="/#services"
                                className="block py-2 px-3 text-white rounded-sm 
                                hover:bg-gray-100 hover:text-blue-950 
                                md:hover:bg-transparent md:border-0 md:hover:underline 
                                md:hover:text-white md:p-0"
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link 
                                onClick={() => setIsOpen(false)}
                                href="/#contact"
                                className="block py-2 px-3 text-white rounded-sm 
                                hover:bg-gray-100 hover:text-blue-950 
                                md:hover:bg-transparent md:border-0 md:hover:underline 
                                md:hover:text-white md:p-0"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
