import Image from "next/image";
import Link from "next/link";
import coverImg from "../../public/images/building1.jpg";
import LAImg from "../../public/images/los-angeles.jpg";
import businessCard from "../../public/images/business-card.jpg";
import newConstruction from "../../public/images/new-construction.svg";
import existingConstruction from "../../public/images/existing-construction.svg";
import freeEstimates from "../../public/images/free-estimates.svg";

export default function Home() {
  return (
    <main>
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
                    <Image src={existingConstruction} alt="New Construction" width="40" className="mb-2"></Image>
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white">Existing Construction</h5>
                    <p className="mb-3 font-normal text-gray-200">
                        We repair existing construction! We diagnose, repair, replace, and reseal failing or leaking surfaces. We can finish the surface using one of our surface coatings and paint finishes, or leave the surface unfinished for later/other surface finishes, such as tile.
                    </p>
                </div>

                <div className="max-w-sm p-6 bg-sky-950 border border-gray-200 rounded-lg shadow-sm">
                    <Image src={freeEstimates} alt="New Construction" width="40" className="mb-2"></Image>
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white">Free Estimates</h5>
                    <p className="mb-3 font-normal text-gray-200">
                        We provide free estimates for your projects! Choose Alpha MM Inc for your waterproofing needs! Contact us today!
                    </p>
                </div>
            </div>
        </section>

        <section className="py-10 bg-white">
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
    </main>
  );
}
