import React, { useState, useEffect, useRef } from 'react';
import './GallerySlider.css';

const GallerySlider = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [autoSlide, setAutoSlide] = useState(true);
    const sliderRef = useRef(null);
    const trackRef = useRef(null);

    const originalImages = [
        { src: require('../../assests/images/home/gallery/gallery-1.jpg'), alt: 'Restaurant Interior' },
        { src: require('../../assests/images/home/gallery/gallery-2.jpg'), alt: 'Dining Area' },
        { src: require('../../assests/images/home/gallery/gallery-1.jpg'), alt: 'Bar Area' },
        { src: require('../../assests/images/home/gallery/gallery-2.jpg'), alt: 'Private Dining' },
        { src: require('../../assests/images/home/gallery/gallery-1.jpg'), alt: 'Outdoor Seating' },
        { src: require('../../assests/images/home/gallery/gallery-2.jpg'), alt: 'Chef\'s Kitchen' },
        { src: require('../../assests/images/home/gallery/gallery-1.jpg'), alt: 'Wine Cellar' },
        { src: require('../../assests/images/home/gallery/gallery-2.jpg'), alt: 'Lounge Area' },
        { src: require('../../assests/images/home/gallery/gallery-1.jpg'), alt: 'Kitchen View' },
        { src: require('../../assests/images/home/gallery/gallery-2.jpg'), alt: 'Event Space' }
        // You can add more images here - it will work with any number!
    ];

    // Create infinite loop by duplicating first 3 images at the end
    // This works with any number of images (n images)
    const duplicateCount = 3; // Number of images to duplicate for seamless loop
    const images = [...originalImages, ...originalImages.slice(0, duplicateCount)];

    // Auto-slide functionality with seamless infinite loop
    useEffect(() => {
        if (!autoSlide) return;

        const interval = setInterval(() => {
            if (trackRef.current) {
                const currentScroll = trackRef.current.scrollLeft;
                const maxScroll = trackRef.current.scrollWidth - trackRef.current.clientWidth;

                // Responsive item width based on screen size
                let itemWidth = 420; // Default desktop
                if (window.innerWidth <= 375) {
                    itemWidth = 206; // 200px + 6px gap
                } else if (window.innerWidth <= 480) {
                    itemWidth = 228; // 220px + 8px gap
                } else if (window.innerWidth <= 576) {
                    itemWidth = 260; // 250px + 10px gap
                } else if (window.innerWidth <= 768) {
                    itemWidth = 292; // 280px + 12px gap
                } else if (window.innerWidth <= 991) {
                    itemWidth = 365; // 350px + 15px gap
                }

                const duplicateWidth = duplicateCount * itemWidth;

                if (currentScroll >= maxScroll - duplicateWidth) {
                    // Smoothly reset to beginning
                    trackRef.current.scrollLeft = 0;
                } else {
                    // Move to next image
                    trackRef.current.scrollLeft += itemWidth;
                }
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [autoSlide, duplicateCount]);

    // Mouse events for dragging
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        setScrollLeft(trackRef.current.scrollLeft);
        setAutoSlide(false);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
        setAutoSlide(true);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        setAutoSlide(true);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();

        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        trackRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <div className="gallery-slider">
            <div
                className="slider-container"
                ref={sliderRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                <div className="slider-track" ref={trackRef}>
                    {images.map((image, index) => (
                        <div key={index} className="slider-item">
                            <img src={image.src} alt={image.alt} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GallerySlider; 