import Image from "next/image";
import Link from "next/link";
import coverImg from "../../public/images/building1.jpg";
import LAImg from "../../public/images/los-angeles.jpg";
import businessCard from "../../public/images/business-card.jpg";

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
                <p className="mt-4 text-xl text-center">
                Alpha MM Inc is a leading decking contracting company based in Los Angeles, California, specializing in protecting decks, balconies, patios, stairways, and walkways from water.
                </p>
                <Link
                    href="/#about"
                    className="mt-6 rounded bg-transparent border px-6 py-2 text-lg 
                        font-medium hover:bg-green-800 transition duration-200"
                >
                    VIEW OUR WORK ➜
                </Link>
            </div>
        </section>

        <section className="py-5 bg-white">
            <div className="container text-center">
            <div className="row g-4">
                <div className="col-md-4">
                <div className="card shadow border-0">
                    <div className="card-body">
                    <h1 className="display-4 mb-3">🏗️</h1>
                    <h2 className="h4 fw-bold">New Construction</h2>
                    <p className="mt-3">We waterproof new construction! We can provide a finished surface using one of our surface coatings and paint finishes, or leave the surface unfinished for later/other surface finishes, such as tile.</p>
                    </div>
                </div>
                </div>
                <div className="col-md-4">
                <div className="card shadow border-0">
                    <div className="card-body">
                    <h1 className="display-4 mb-3">🛠️</h1>
                    <h2 className="h4 fw-bold">Existing Construction</h2>
                    <p className="mt-3">We repair existing construction! We diagnose, repair, replace, and reseal failing or leaking surfaces. We can finish the surface using one of our surface coatings and paint finishes, or leave the surface unfinished for later/other surface finishes, such as tile.</p>
                    </div>
                </div>
                </div>
                <div className="col-md-4">
                <div className="card shadow border-0">
                    <div className="card-body">
                    <h1 className="display-4 mb-3">📞</h1>
                    <h2 className="h4 fw-bold">Free Estimates</h2>
                    <p className="mt-3">We provide free estimates for your projects! Choose Alpha MM Inc for your waterproofing needs! Contact us today!</p>
                    </div>
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
                    href="/#about"
                    className="mt-6 rounded bg-transparent border px-6 py-2 text-lg 
                        font-medium hover:bg-green-800 transition duration-200"
                >
                    READ ABOUT US ➜
                </Link>
            </div>
        </section>

        <section className="py-5 bg-light">
            <div className="container d-flex flex-column flex-lg-row align-items-center text-center text-lg-start">
            <div className="flex-shrink-0 mb-4 mb-lg-0">
                <Image src={businessCard} className="img-fluid shadow-lg" alt="Business Card"/>
            </div>
            <div className="ms-lg-5">
                <h2 className="h3 fw-bold">The Business Card That Started It All.</h2>
                <p className="mt-3">Have a new project that needs waterproofing? Have a leaky or damaged walking surface? We've got you covered. We provide the highest quality service with competitive pricing.</p>
                <a href="/contact/" className="btn btn-primary mt-4">CONTACT US TODAY ➜</a>
            </div>
            </div>
        </section>
        </main>
  );
}
