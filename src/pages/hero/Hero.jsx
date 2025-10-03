import React, { useEffect, useState } from "react";
import { FaMapPin, FaPassport, FaRegIdCard } from "react-icons/fa";
import picture from "../../asset/images/ceo2.jpg";
import maldives from "../../asset/images/maldives.jpg";
import zanzibar from "../../asset/images/Zanzibar.jpg";
import southy from "../../asset/images/south africa.jpg";

const travelImages = [
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80",
    "https://upload.wikimedia.org/wikipedia/commons/7/73/Nigerian_International_Passport_2015.jpg",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1504384308090-9ee23c0d7c4a?auto=format&fit=crop&w=1470&q=80",
];

const Hero = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % travelImages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // 🔹 Handle resizing for iframe

    useEffect(() => {
        const handleMessage = (event) => {
            if (event.origin !== "https://firstchoice19travels.myreservationagent.com/") return;

            if (
                event.data &&
                typeof event.data === "object" &&
                "frameHeight" in event.data
            ) {
                const frameHeight = event.data.frameHeight;

                const iframe = document.getElementById("Subscription");
                if (iframe) {
                    iframe.style.height = `${frameHeight}px`;
                }
            }
        };

        window.addEventListener("message", handleMessage);
        return () => {
            window.removeEventListener("message", handleMessage);
        };
    }, []);


    return (
        <>
            {/* Hero Section */}
            <section
                id="home"
                className="relative h-screen flex flex-col justify-center items-center text-center px-4 bg-black overflow-hidden"
            >
                {travelImages.map((img, i) => (
                    <img
                        key={i}
                        src={img}
                        alt="Travel background"
                        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                        loading="lazy"
                    />
                ))}

                <div className="relative bg-black bg-opacity-50 p-6 rounded-lg max-w-3xl text-white z-20">
                    <h1 className="text-4xl md:text-5xl font-bold italic mb-4">
                        Your Dream Vacation Starts Here – Expert Travel Planning Tailored Just for You
                    </h1>
                    <p className="mb-6 text-lg md:text-xl">
                        Let us handle the details, so you can enjoy unforgettable travel experiences. Personalized
                        itineraries, expert advice, and stress-free planning.
                    </p>
                    <a
                        href="https://wa.me/2349081601321"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-sky-700 hover:bg-sky-800 text-white font-semibold py-3 px-8 rounded-full transition"
                    >
                        Plan Your Trip
                    </a>
                </div>
            </section>

            {/* 🔹 Flight Booking Section */}
            <section id="book-flights" className="py-20 bg-sky-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-sky-800 text-center mb-12">Book Your Flight With Us</h2>
                    <div className="flex justify-center">
                        <iframe
                            id="Subscription"
                            style={{width: "100%", height: "500px", overflow: "hidden"}}
                            frameBorder={0}
                            src="https://firstchoice19travels.myreservationagent.com/widget"
                            scrolling="yes"
                            allow="popup"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section id="services" className="py-20 bg-sky-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-sky-800 text-center mb-12">Our Services</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Service 1 */}
                        <div className="flex flex-col items-center text-center p-6 shadow-md rounded-lg bg-white">
                            <FaMapPin className="h-10 w-10 text-sky-500 mb-3"/>
                            <h3 className="font-bold text-lg mb-2">Custom Itinerary Planning</h3>
                            <p className="text-sm text-gray-700">
                                We design personalized itineraries based on your interests, budget, and travel style.
                                From flights and
                                accommodations to activities and tours, we take care of everything.
                            </p>
                        </div>

                        {/* Service 2 */}
                        <div className="flex flex-col items-center text-center p-6 shadow-md rounded-lg bg-white">
                            <FaPassport className="h-10 w-10 text-sky-500 mb-3"/>
                            <h3 className="font-bold text-lg mb-2">Passport Processing</h3>
                            <p className="text-sm text-gray-700">
                                We assist with smooth and stress-free international passport application and renewal.
                                Our team ensures
                                accurate documentation and timely submission, saving you time and hassle.
                            </p>
                        </div>

                        {/* Service 3 */}
                        <div className="flex flex-col items-center text-center p-6 shadow-md rounded-lg bg-white">
                            <FaRegIdCard className="h-10 w-10 text-sky-500 mb-3"/>
                            <h3 className="font-bold text-lg mb-2">Visa Processing</h3>
                            <p className="text-sm text-gray-700">
                                Get expert guidance on tourist and travel visa applications for various countries. We
                                handle
                                documentation, appointments, and updates to simplify the entire process.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Destinations */}
            <section id="destinations" className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-7xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-sky-800 text-center mb-12">Explore Top
                        Destinations</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Destination 1 */}
                        <div className="flex justify-center">
                            <div className="w-96 rounded-lg overflow-hidden shadow-md bg-white">
                                <div className="bg-white h-72 flex items-center justify-center">
                                    <img src={southy} alt="South Africa"
                                         className="max-h-full max-w-full object-contain"/>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-sky-700">South Africa</h3>
                                    <p className="text-sm text-gray-600">
                                        Discover the rich culture, wildlife safaris, and breathtaking landscapes of
                                        South Africa.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Destination 2 */}
                        <div className="flex justify-center">
                            <div className="w-96 rounded-lg overflow-hidden shadow-md bg-white">
                                <img src={maldives} alt="Maldives" className="w-full h-72 object-contain"/>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-sky-700">Maldives</h3>
                                    <p className="text-sm text-gray-600">A dreamy escape with pristine beaches and
                                        luxury resorts.</p>
                                </div>
                            </div>
                        </div>

                        {/* Destination 3 */}
                        <div className="flex justify-center">
                            <div className="w-96 rounded-lg overflow-hidden shadow-md bg-white">
                                <img src={zanzibar} alt="Zanzibar" className="w-full h-72 object-contain"/>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-sky-700">Zanzibar</h3>
                                    <p className="text-sm text-gray-600">
                                        An exotic island paradise known for spice tours, beaches, and culture.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Testimonials */}
            <section id="testimonials" className="py-20 bg-sky-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-sky-800 text-center mb-12">What Our Clients
                        Say</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Testimonial 1 */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <p className="text-gray-700 italic mb-4">
                                “Firstchoice19travels planned the perfect honeymoon for us! Everything was seamless, and
                                we had the trip
                                of a lifetime.”
                            </p>
                            <p className="font-bold text-sky-800">— Mr Ayo</p>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <p className="text-gray-700 italic mb-4">
                                “I highly recommend Firstchoice19travels. Their expertise and attention to detail made
                                our family
                                vacation unforgettable.”
                            </p>
                            <p className="font-bold text-sky-800">— Ms. Glory</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About */}
            <section id="about" className="py-20 bg-sky-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-sky-800 text-center mb-12">About
                        Firstchoice19Travels</h2>

                    <div className="grid md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
                        {/* Left side: Image + Name */}
                        <div className="flex flex-col items-center md:items-start space-y-3">
                            <img
                                src={picture}
                                alt="Founder of Firstchoice19Travels"
                                className="rounded-2xl shadow-lg w-full max-w-sm object-cover"
                            />
                            <div className="text-center md:text-left">
                                <p className="text-xl font-semibold text-sky-800">Omotolani .A. Lawal</p>
                                <p className="text-sm text-gray-600 italic">Managing Director</p>
                            </div>
                        </div>

                        {/* Right side: About text */}
                        <div className="space-y-6 text-left">
                            <p className="text-lg text-gray-700">
                                At Firstchoice19Travels, we believe travel is about creating meaningful memories and
                                fostering
                                connections across cultures. With our years of industry experience, our expert team
                                ensures every
                                journey is personalized and stress-free.
                            </p>

                            <p className="text-lg text-gray-700">
                                We are passionate about travel and dedicated to creating unique, personalized
                                experiences for our
                                clients. With years of experience exploring the globe, we offer expert advice and
                                meticulous planning to
                                ensure your trip is seamless and memorable.
                            </p>

                            <p className="text-lg text-gray-700">
                                Our mission is to transform your travel dreams into reality. Whether you're seeking a
                                relaxing beach
                                getaway, an adventurous trek, or a cultural immersion, we're here to handle every
                                detail.
                            </p>

                            <p className="text-lg text-gray-700 font-semibold italic">
                                Ready to start your journey? Let’s make your next adventure unforgettable!
                            </p>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
};

export default Hero;


