import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import ContactForm from "../components/ContactForm";
import coverImg from "../../public/images/building1.jpg";
import LAImg from "../../public/images/los-angeles.jpg";
import businessCard from "../../public/images/business-card.jpg";
import newConstruction from "../../public/images/new-construction.svg";
import existingConstruction from "../../public/images/existing-construction.svg";
import freeEstimates from "../../public/images/free-estimates.svg";
import waterproofing from "../../public/images/waterproofing.svg";
import reseal from "../../public/images/reseal.svg";
import stairs from "../../public/images/stairs.svg";
import railing from "../../public/images/railing.svg";
import walkway2 from "../../public/images/walkway2.jpg";
import deck3 from "../../public/images/deck3.jpg";
import stairway from "../../public/images/stairway.jpg";
import deck from "../../public/images/deck.jpg";
import walkway from "../../public/images/walkway.jpg";
import landing from "../../public/images/landing.jpg";
import deck2 from "../../public/images/deck2.jpg";
import balcony from "../../public/images/balcony.jpg";

export default function Home() {
  return (
    <main>
        <Head>
            <title>Alpha MM Inc</title>
        </Head>

        <section className="relative h-screen">
            <Image
                src={coverImg}
                alt="Home Background Image"
                layout="fill"
                objectFit="cover"
                // Place the image behind other content and allow clicks to pass through.
                className="absolute inset-0 pointer-events-none"
            />
            <div className="absolute inset-0 bg-black opacity-40 pointer-events-none"></div>
            <div 
                className="relative z-10 flex h-full flex-col items-center 
                    justify-center text-white px-4"
            >
                <h1 className="text-4xl font-bold text-center">
                    DECKS. STAIRS. BALCONIES. PATIOS.
                </h1>
                <p className="mt-4 text-lg text-center max-w-2xl">
                    Alpha MM Inc is a leading decking contracting company based in Los Angeles, California, specializing in protecting decks, balconies, patios, stairways, and walkways from water.
                </p>
                <Link
                    href="/#about"
                    className="mt-6 rounded bg-transparent border px-6 py-2 text-lg 
                        font-medium hover:bg-sky-800 transition duration-200"
                >
                    Read About Us ➜
                </Link>
            </div>
        </section>

        <section className="pt-10 bg-white">
            <div className="max-w-screen-xl container grid md:grid-cols-3
                            justify-center items-center gap-5 items-stretch mx-auto 
                            p-5"
            >
                <div className="max-w-sm p-6 bg-sky-950 border border-gray-200 rounded-lg shadow-sm">
                    <Image src={newConstruction} alt="New Construction" width="40" className="mb-2"></Image>
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white">New Construction</h5>
                    <p className="mb-3 font-normal text-gray-200">
                        We waterproof new construction! We can provide a finished surface using one of our surface coatings and paint finishes, or leave the surface unfinished for later/other surface finishes, such as tile.
                    </p>
                </div>

                <div className="max-w-sm p-6 bg-sky-950 border border-gray-200 rounded-lg shadow-sm">
                    <Image src={existingConstruction} alt="Existing Construction" width="40" className="mb-2"></Image>
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white">Existing Construction</h5>
                    <p className="mb-3 font-normal text-gray-200">
                        We repair existing construction! We diagnose, repair, replace, and reseal failing or leaking surfaces. We can finish the surface using one of our surface coatings and paint finishes, or leave the surface unfinished for later/other surface finishes, such as tile.
                    </p>
                </div>

                <div className="max-w-sm p-6 bg-sky-950 border border-gray-200 rounded-lg shadow-sm">
                    <Image src={freeEstimates} alt="Free Estimates" width="40" className="mb-2"></Image>
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white">Free Estimates</h5>
                    <p className="mb-3 font-normal text-gray-200">
                        We provide free estimates for your projects! Choose Alpha MM Inc for your waterproofing needs! Contact us today!
                    </p>
                </div>
            </div>
        </section>

        <section id="about" className="py-10 bg-white">
            <div className="max-w-screen-xl container items-center justify-center mx-auto px-5">
                <h2 className="text-sky-600 text-xl mb-5">WHO WE ARE</h2>
                <h3 className="text-black text-3xl font-bold mb-5">High quality work at competitive prices.</h3>
                <p className="text-gray-600">
                    Alpha MM Inc is a trusted leader in waterproofing and surface protection services, proudly serving Los Angeles and surrounding areas for over 20 years. We specialize in safeguarding decks, balconies, patios, stairways, and walkways from the elements, ensuring lasting durability and aesthetic appeal.
                </p>
                <br/>
                <p className="text-gray-600">
                    With a commitment to excellence, our team combines expert craftsmanship with the highest quality materials to deliver tailored solutions for both residential and commercial properties. From new construction to repairing existing structures, we offer a range of services, including surface repair, waterproof coatings, surface finishes, and resealing, all designed to extend the life of your investment.
                </p>
                <br/>
                <p className="text-gray-600">
                    At Alpha MM Inc, customer satisfaction is our top priority. Our dedication to quality, reliability, and competitive pricing has earned us a reputation as one of the top contractors for waterproofing needs in Southern California. Whether you're looking to protect a new project or repair a leaky surface, we are here to help you every step of the way.
                </p>
                <br/>
                <p className="text-gray-600">
                    Choose Alpha MM Inc for your next waterproofing project, and experience the lasting quality and customer service that comes from our highly experienced team.
                </p>
                <br/>
                <br/>
                <div className="grid md:grid-cols-2 items-center gap-5">
                    <div>
                        <Image src={businessCard} className="shadow-lg mb-5" width="500" alt="Business Card"/>
                    </div>
                    <div>
                        <h3 className="text-black text-3xl font-bold mb-5">The business card that started it all.</h3>
                        <p className="text-gray-600">
                            We developed our iconic business card over 20 years ago, and it has become universally recognizable in the waterproofing industry ever since.
                        </p>
                        <div className="mt-10">
                            <Link href="#contact" className="mt-6 rounded bg-sky-600 border px-4 py-2 text-md 
                                hover:bg-sky-800 transition duration-200">
                                Contact Us Today ➜
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative h-screen">
            <Image
                src={LAImg}
                alt="LA Background Image"
                layout="fill"
                objectFit="cover"
                // Place the image behind other content and allow clicks to pass through.
                className="absolute inset-0 pointer-events-none"
            />
            <div className="absolute inset-0 bg-black opacity-40 pointer-events-none"></div>
            <div 
                className="relative z-10 flex h-full flex-col items-center 
                    justify-center text-white px-4"
            >
                <h1 className="text-4xl font-bold text-center">
                    Serving Excellence For Over 20 Years.
                </h1>
                <Link
                    href="/#projects"
                    className="mt-6 rounded bg-transparent border px-6 py-2 text-lg 
                        font-medium hover:bg-sky-800 transition duration-200"
                >
                    View Our Work ➜
                </Link>
            </div>
        </section>

        <section id="services" className="py-10 bg-white">
            <div className="max-w-screen-xl container items-center justify-center mx-auto px-5 pb-5">
                <h2 className="text-sky-600 text-xl mb-5">WHAT WE DO</h2>
                <h3 className="text-black text-3xl font-bold mb-5">No more leaking ever. High quality work that will last.</h3>
                <p className="text-gray-600">
                    When you need high-quality work at competitive prices, we have it covered. Alpha MM Inc. specializes in safeguarding decks, balconies, patios, stairways, and walkways from the elements, ensuring lasting durability and aesthetic appeal.
                    We use a high-quality fiberglass waterproofing system with non-skid and non-slip finishes. No more leaking, 10 years guaranteed.
                </p>
            </div>
            <div className="max-w-4xl mx-auto px-5 m-10">
                <div className="text-center">
                    <h2 className="font-semibold text-3xl text-gray-900">Quality Services</h2>
                    <p className="max-w-md mx-auto mt-2 text-gray-500">See how our high quality services can help your project progress smoothly and last.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 mt-10">
                    <div className="flex gap-4 items-start">
                        <Image src={waterproofing} width="40" alt="Waterproofing" />
                        <div>
                            <h3 className="text-black font-semibold text-xl">Waterproofing</h3>
                            <p className="mt-1 text-gray-500">We waterproof new and existing construction with our fiberglass waterproofing system. Choose one of our finishes, or use your own alternative finish.
                            </p>
                        </div>
                    </div>


                    <div className="flex gap-4 items-start">
                        <Image src={reseal} width="40" alt="Reseal" />
                        <div>
                            <h3 className="text-black font-semibold text-xl">Repair & Reseal</h3>
                            <p className="mt-1 text-gray-500">We repair leaking surfaces, replace rotten wood and rusted railing posts, and reseal with our fiberglass waterproofing system.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 items-start">
                        <Image src={stairs} width="40" alt="Stairs" />
                        <div>
                            <h3 className="text-black font-semibold text-xl">Stairs & Pre-Cast Steps</h3>
                            <p className="mt-1 text-gray-500">We repair existing stairways and replace damaged pre-cast steps, and reseal to protect against leaks.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 items-start">
                        <Image src={railing} width="40" alt="Railings" />
                        <div>
                            <h3 className="text-black font-semibold text-xl">Metal Railing Repair</h3>
                            <p className="mt-1 text-gray-500">We fix damaged and rusted metal railing posts that leak, replace the rotten wood underneath them, and seal them against moisture.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <section id="projects" className="pb-10 bg-white">
            <div className="max-w-screen-xl container items-center justify-center mx-auto px-5 pb-5">
                <h2 className="text-sky-600 text-xl mb-5">OUR WORK</h2>
                <h3 className="text-black text-3xl font-bold mb-5">Over 20 years worth of projects.</h3>
                <p className="text-gray-600">
                    Our extensive portfolio covers both commercial and residential construction. With thousands of completed projects, we have the experience you need.
                    Here are some examples of our past work:
                </p>
            </div>

            <div className="max-w-screen-xl container grid md:grid-cols-3 gap-5 
                            justify-center items-center mx-auto px-5 pt-5">
                <Image src={walkway2} alt="Walkway 2" className="shadow" />
                <Image src={deck3} alt="Deck 3" className="shadow" />
                <Image src={stairway} alt="Stairway" className="shadow" />
                <Image src={deck} alt="Deck" className="shadow" />
                <Image src={walkway} alt="Walkway" className="shadow" />
                <Image src={landing} alt="Landing" className="shadow" />
                <Image src={deck2} alt="Deck 2" className="shadow" />
                <Image src={balcony} alt="Balcony" className="shadow" />
            </div>
        </section>

        <section id="contact" className="min-h-screen bg-gradient-to-r from-sky-600 via-sky-800 to-sky-900">
            <div className="relative container flex flex-col min-h-screen px-6 py-12 mx-auto max-w-screen-xl">
                <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
                    <div className="text-white lg:w-1/2 lg:mx-6">
                        <h1 className="text-2xl font-semibold capitalize lg:text-3xl">Contact Us</h1>

                        <p className="max-w-xl mt-3">Alpha MM Inc is ready to answer your questions and help your project get started with a free estimate. We look forward to connecting with you soon!</p>

                        <div className="mt-6 space-y-5 md:mt-8">
                            <p className="flex items-start -mx-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>

                                <span className="mx-2 text-white truncate w-72">
                                    Los Angeles, CA
                                </span>
                            </p>

                            <p className="flex items-start -mx-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>

                                <span className="mx-2 text-white truncate w-72">(818) 517-5053</span>
                            </p>
                
                            <p className="flex items-start -mx-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>

                                <span className="mx-2 text-white truncate w-72">contact@alphamminc.com</span>
                            </p>
                        </div>
    
                        <div className="mt-3 md:mt-8">
                            <h3 className="text-white">Follow us!</h3>

                            <div className="flex mt-2 -mx-1.5 ">
                                <Link className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-800" href="https://www.facebook.com/alphamminc/">
                                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z" fill="currentColor" />
                                    </svg>
                                </Link>
                                
                                <Link className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-700" href="/">
                                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z" fill="currentColor" />
                                        <path d="M7.2 9.6001H4V19.2001H7.2V9.6001Z" fill="currentColor" />
                                        <path d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z" fill="currentColor" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    <ContactForm/>
                    
                </div>
            </div>
        </section>
    </main>
  );
}
