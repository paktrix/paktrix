import React, { useEffect, useRef, useState } from 'react';
import '../HomePage/HomeSlider.css';
import { FaChevronLeft, FaChevronRight, FaPencilRuler } from "react-icons/fa";

const slides = [
    {
        image: require("../../assets/images/carouselimages/printed-corrugated-box.png"),
        title: "Multi Colour Corrugated Packaging",
        tagline: "Custom style, corrugated strength"
    },
    {
        image: require("../../assets/images/carouselimages/corrugated-printed-box.png"),
        title: "Corrugated Flexo Printed\nBox",
        tagline: "Secure, simple and sustainable"
    },
    {
        image: require("../../assets/images/carouselimages/saree box textile.jpg"),
        title: "Textile Saree Boxes",
        tagline: "Timeless Designs, Inspired by Tradition"
    },
    {
        image: require("../../assets/images/carouselimages/corrugated-sheets.png"),
        title: "Corrugated Separators",
        tagline: "Packaging that protects"
    },
    {
        image: require("../../assets/images/carouselimages/Pharmaceutical packaging pill box.jpg"),
        title: "Pharma Packaging",
        tagline: "Guarding Quality, Delivering Care"
    },
    {
        image: require("../../assets/images/carouselimages/pizza-box.jpg"),
        title: "Custom Food Packaging",
        tagline: "Designed to impress, built to protect"
    },
    {
        image: require("../../assets/images/carouselimages/Luxury Folding Boxes.png"),
        title: "Premium Folding Boxes",
        tagline: "The Right Box For Every Business"
    },
];

function HomeSlider() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);
    const timeoutRef = useRef(null);

    useEffect(() => {
        startAutoSlide();
        return () => clearTimeout(timeoutRef.current);
    }, [currentIndex]);

    const startAutoSlide = () => {
        setFade(true);
        timeoutRef.current = setTimeout(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentIndex((prevIndex) =>
                    prevIndex === slides.length - 1 ? 0 : prevIndex + 1
                );
            }, 300);
        }, 4000);
    };

    const goToNext = () => {
        clearTimeout(timeoutRef.current);
        setFade(false);
        setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            );
        }, 300);
    };

    const goToPrev = () => {
        clearTimeout(timeoutRef.current);
        setFade(false);
        setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? slides.length - 1 : prevIndex - 1
            );
        }, 300);
    };

    const currentSlide = slides[currentIndex];

    return (
        <div className='container mb-5 mt-3 mt-lg-4'>
            <div className='homeslider_bg p-4 p-lg-5 rounded-4 position-relative slider-wrapper'>

                <div className="arrow left-arrow" onClick={goToPrev}>
                    <FaChevronLeft className="arrow-icon" />
                </div>
                <div className="arrow right-arrow" onClick={goToNext}>
                    <FaChevronRight className="arrow-icon" />
                </div>

                <div className='row gy-4'>

                    <div className="col-12 col-lg-6 text-white position-relative d-flex flex-column justify-content-between">
                        <div className={`text-slide ${fade ? "fade-in-right" : "fade-out-right"} d-flex flex-column justify-content-between h-100`}>

                            <div className="recycle-icons-wrapper d-flex justify-content-center justify-content-lg-start ms-0 ms-lg-5">
                                <div className="recycle-icon">
                                    <img
                                        src={require("../../assets/images/Eco Friendly Logo.png")}
                                        className="img-fluid"
                                        alt="Eco Friendly Logo"
                                    />
                                </div>
                                <div className="recycle-icon-dotts">
                                    <img
                                        src={require("../../assets/images/dotts.png")}
                                        className="img-fluid"
                                        alt="Dots"
                                    />
                                </div>
                            </div>

                            <div className="content-text text-center text-lg-start ms-0 ms-lg-5 mb-0 mb-lg-5">
                                <h1 className="title-glow mb-4">
                                    {currentSlide.title.split("\n").map((line, i) => (
                                        <div key={i}>{line}</div>
                                    ))}
                                </h1>
                                <p className="tagline text-uppercase">{currentSlide.tagline}</p>
                            </div>

                        </div>
                    </div>

                    <div className='col-12 col-lg-6 d-flex flex-column align-items-center'>
                        <div className={`image-glow ${fade ? 'fade-in' : 'fade-out'}`}>
                            <img
                                src={currentSlide.image}
                                className='img-fluid w-100 h-100 object-fit-cover rounded-4'
                                alt={currentSlide.title}
                            />
                        </div>

                        <div className={`d-flex align-items-center text-white fw-medium mt-4 ruler-slide ${fade ? "fade-in" : "fade-out"}`}>
                            <div className="Ruler-icon-wrapper me-2">
                                <FaPencilRuler className="Ruler-icon" />
                            </div>
                            <span className='ruler-tittle'>Customizable Size And Design Options</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default HomeSlider