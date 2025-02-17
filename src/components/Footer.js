import Link from 'next/link';
import Image from 'next/image';
import alphaLogo from '../../public/favicon.svg';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl px-4 pt-12 pb-7">
                {/* Top section: Logo, social icons, and nav links */}
                <div 
                    className="flex flex-col text-center 
                        md:flex-row md:justify-between md:text-left"
                >
                    {/* Logo and Social Icons */}
                    <div className="mb-4 md:mb-0">
                        <Link 
                            href="/"
                            className="flex flex-row items-center 
                                md:items-center space-y-1 space-x-4"
                        >
                            <Image src={alphaLogo} width={50} height={50} alt="Alpha Logo" />
                            <h1 className="font-bold text-2xl">
                                Alpha MM Inc
                            </h1>
                        </Link>

                        <div className="flex justify-start mt-10 space-x-5">
                            <Link 
                                href="/"
                                className="text-gray-300 hover:text-blue-500"
                            >
                                <svg
                                    className="w-6 h-6"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 2.75 18 18"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="sr-only">Facebook page</span>
                            </Link>
                            <Link 
                                href="/"
                                className="text-gray-300 hover:text-sky-600">
                                <svg
                                    className="w-6 h-6"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                                </svg>
                                <span className="sr-only">LinkedIn page</span>
                            </Link>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="w-full md:w-auto mt-6 md:mt-0">
                        <div 
                            className="grid grid-cols-2 gap-8 sm:gap-6 
                                sm:grid-cols-3"
                        >
                            <div>
                                <h2 
                                    className="mb-6 text-sm font-semibold 
                                        text-white uppercase"
                                >
                                    Resources
                                </h2>
                                <ul className="text-gray-300 font-thin space-y-4">
                                    <li>
                                        <Link 
                                            href="/"
                                            className="hover:underline"
                                        >
                                            Alpha MM Inc
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            href="/#services"
                                            className="hover:underline"
                                        >
                                            Services
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            href="/#contact"
                                            className="hover:underline"
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2 
                                    className="mb-6 text-sm font-semibold 
                                        text-white uppercase"
                                >
                                    Follow us
                                </h2>
                                <ul className="text-gray-300 font-thin space-y-4">
                                    <li>
                                        <Link 
                                            href=""
                                            className="hover:underline"
                                        >
                                            Facebook
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            href=""
                                            className="hover:underline"
                                        >
                                            LinkedIn
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            
                            <div>
                                <h2 
                                    className="mb-6 text-sm font-semibold 
                                        text-white uppercase"
                                >
                                    Legal
                                </h2>
                                <ul className="text-gray-300 font-thin space-y-4">
                                    <li>
                                        <Link 
                                            href="/"
                                            className="hover:underline"
                                        >
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            href="/"
                                            className="hover:underline"
                                        >
                                            Terms &amp; Conditions
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-6" />
                {/* Bottom: Copyright */}
                <div 
                    className="flex flex-col items-center sm:flex-row 
                        sm:justify-between"
                >
                    <span className="text-sm font-thin text-gray-300 text-center">
                        © {year} Alpha MM Inc. All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
}
