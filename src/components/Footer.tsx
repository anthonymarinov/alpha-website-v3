import Link from 'next/link';
import Image from 'next/image';
import alphaLogo from '../../public/favicon.svg';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-gray-900">
            <hr className="border-gray-200" />
            <div className="px-4 md:px-16 pt-12 pb-10 space-y-5">
                {/* Top section: Logo, social icons, and nav links */}
                <div 
                    className="flex flex-col md:flex-row justify-between"
                >
                    {/* Logo and Social Icons */}
                    <Link 
                        href="/"
                        className="flex flex-row items-center
                            space-y-1 space-x-5"
                    >
                        <Image src={alphaLogo} width={40} height={40} alt="Alpha Logo" />
                        <h1 className="font-thin text-2xl">
                            Alpha MM Inc
                        </h1>
                    </Link>

                    <div className="flex flex-row justify-start md:justify-end space-x-5 pt-6">
                        <Link 
                            href="/"
                            className="text-gray-300">
                            <button className="hover:bg-blue-500 transition duration-500 p-2 font-semibold text-gray-300 hover:text-white inline-flex items-center space-x-2 rounded">
                            <svg className="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                            </button>
                            <span className="sr-only">Facebook page</span>
                        </Link>
                        <Link 
                            href="/"
                            className="text-gray-300 hover:text-blue-500"
                        >
                            <button className="hover:bg-blue-600 transition duration-500 p-2 font-semibold text-gray-300 hover:text-white inline-flex items-center space-x-2 rounded">
                            <svg className="w-5 h-5 fill-current" role="img" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                                <g><path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path></g>
                            </svg>
                            </button>
                            <span className="sr-only">LinkedIn page</span>
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between md:space-x-10">
                    {/* Navigation Links */}
                    <div 
                        className="flex flex-col md:flex-row text-gray-300 
                            font-thin space-y-3 md:space-x-10 md:space-y-0"
                    >
                        <Link 
                            href="/#services"
                            className="hover:underline"
                        >
                            About
                        </Link>
                        <Link 
                            href="/#services"
                            className="hover:underline"
                        >
                            Services
                        </Link>
                        <Link 
                            href="/#services"
                            className="hover:underline"
                        >
                            Projects
                        </Link>
                        <Link 
                            href="/#contact"
                            className="hover:underline"
                        >
                            Contact
                        </Link>
                        <Link 
                            href="/"
                            className="hover:underline"
                            >
                                Privacy Policy
                            </Link>
                            <Link 
                                href="/"
                                className="hover:underline"
                            >
                                Terms &amp; Conditions
                            </Link>
                    </div>

                    <span className="font-thin text-gray-300 mt-5 md:mt-0">
                        © {year} Alpha MM Inc. All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
}
