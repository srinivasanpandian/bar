import React, { useEffect } from 'react';
import './Home.css';
import Elysium_Video from '../../assests/video/elysiumBannerVideo.mp4';
import Header from '../../components/Header/Header';
import TypewriterText from '../../components/TypewriterText/TypewriterText';
import ScrollableText from '../../components/ScrollableText/ScrollableText';
import GallerySlider from '../../components/GallerySlider/GallerySlider';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    useEffect(() => {
        // Intersection Observer for scroll-triggered animations
        const observerOptions = {
            threshold: 0.3, // Trigger when 30% of section is visible
            rootMargin: '0px 0px -50px 0px' // Slight offset for better timing
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const section = entry.target;
                    const sectionClass = section.className.split(' ')[0]; // Get first class name
                    
                    console.log('Section intersecting:', sectionClass); // Debug log
                    
                    // Add animation class based on section type
                    if (sectionClass.includes('about-section')) {
                        section.classList.add('animate-about');
                        console.log('Added animate-about class');
                    } else if (sectionClass.includes('event-section')) {
                        section.classList.add('animate-event');
                        console.log('Added animate-event class');
                    } else if (sectionClass.includes('menu-section')) {
                        section.classList.add('animate-menu');
                        console.log('Added animate-menu class to:', section);
                    } else if (sectionClass.includes('gallery-section')) {
                        section.classList.add('animate-gallery');
                        console.log('Added animate-gallery class');
                    } else if (sectionClass.includes('contact-section')) {
                        section.classList.add('animate-contact');
                        console.log('Added animate-contact class');
                    }
                    
                    // Stop observing after animation is triggered
                    observer.unobserve(section);
                }
            });
        }, observerOptions);

        // Observe all sections
        const sections = document.querySelectorAll('.about-section, .event-section, .menu-section, .gallery-section, .contact-section');
        sections.forEach(section => {
            observer.observe(section);
        });

        // Cleanup function
        return () => {
            sections.forEach(section => {
                observer.unobserve(section);
            });
        };
    }, []);

    const words = [
        'delicious food',
        'spicy flavors',
        'fresh ingredients',
        'authentic taste',
        'culinary excellence'
    ];

    const eventWords = [
        'birthday',
        'corporate event',
        'dj party',
        'wedding',
        'anniversary'
    ];

    const menuWords = [
        'Fusion',
        'Skewers',
        'curry',
        'Pantry picks',
        'wraps',
        'Pizza',
        'Finger bite',
        'Wings',
        'starters',
        'Sea Food',
        'Momos',
    ];

    const galleryWords = [
        'restaurant interior',
        'dining area',
        'bar area',
        'private dining',
        'outdoor seating',
        'chef\'s kitchen'
    ];

    return (
        <div>
            <Header />

            {/* ! Banner Section */}
            <div className="container-fluid video-container">
                <video src={Elysium_Video} autoPlay muted loop />
                <div className="hero-content">
                    <h1 className="restaurant-name">ELYSIUM</h1>
                    <p className="tagline">#DRINK #DINE</p>
                    <div className="hero-buttons">
                        <button className="btn btn-primary">RESERVE TABLE</button>
                        <button className="btn btn-outline">VIEW DETAILS</button>
                    </div>
                </div>
            </div>

            {/* ! About Section */}
            <section className="about-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6">
                            <div className="about-content">
                                <h2 className="about-heading">EXPERIENCE THE SOUL OF INDIA IN THE HEART OF DALLAS</h2>
                                <h3 className="about-subheading">
                                    Desserts, & enjoy
                                    <TypewriterText words={words} />
                                </h3>
                                <p className="about-para">
                                    Welcome to Elysium, a place where taste, tradition, and innovation unite. Nestled in the heart of Dallas, we offer a dynamic blend of bold Indian flavors and modern flair. Experience a fresh take on classic Indian dishes, ideal for everything from casual lunches to family gatherings and special occasions. Whether you're here for an intimate meal or a grand celebration, Elysium is the perfect spot to indulge in a vibrant culinary adventure.
                                </p>
                                <button className="btn btn-primary">VIEW MENU</button>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="about-image">
                                <div className="image-background"></div>
                                <img src={require('../../assests/images/home/about/about-img.avif')} alt="Elysium Restaurant Interior" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ! Menu Section */}
            <section className="menu-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="menu-content">
                                <h2 className="menu-heading">EXPLORE OUR MENU</h2>
                                <h3 className="menu-subheading">
                                    Discover & Enjoy Our
                                    <TypewriterText words={menuWords} />
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center">
                        {/* <!-- 1 --> */}
                        <div className="col-12 col-lg-6 mb-0 mb-sm-4">
                            <div className="row">
                                <div className="col-12 col-sm-6 big mb-3 mb-sm-0">
                                    <img src={require('../../assests/images/home/menu/skewers.jpg')} alt="Fusion" />
                                    <div className="menu-overlay">
                                        <h4 className='menu-items-name'>Skewers</h4>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <div className="row">
                                        <div className="col-12 small mb-3">
                                            <img src={require('../../assests/images/home/menu/fingerBites.jpg')} alt="Skewers" />
                                            <div className="menu-overlay">
                                                <h4 className='menu-items-name'>Finger bite</h4>
                                            </div>
                                        </div>
                                        <div className="col-12 small mb-3 mb-sm-0">
                                            <img src={require('../../assests/images/home/menu/pizza.webp')} alt="Curry" />
                                            <div className="menu-overlay">
                                                <h4 className='menu-items-name'>Pizza</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- 2 --> */}
                        <div className="col-12 col-lg-6 mb-0 mb-sm-4">
                            <div className="row">
                                <div className="col-12 col-sm-6 order-2 order-sm-1">
                                    <div className="row">
                                        <div className="col-12 small mb-3">
                                            <img src={require('../../assests/images/home/menu/curry.jpeg')} alt="Pantry Picks" />
                                            <div className="menu-overlay">
                                                <h4 className='menu-items-name'>Curry</h4>
                                            </div>
                                        </div>
                                        <div className="col-12 small mb-3 mb-sm-0">
                                            <img src={require('../../assests/images/home/menu/starters.jpg')} alt="Wraps" />
                                            <div className="menu-overlay">
                                                <h4 className='menu-items-name'>Starters</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-12 col-sm-6 big mb-3 mb-sm-0 order-1 order-sm-2"
                                >
                                    <img src={require('../../assests/images/home/menu/wings.jpg')} alt="Pizza" />
                                    <div className="menu-overlay">
                                        <h4 className='menu-items-name'>Wings</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* ! Scrollable Text Section */}
            <ScrollableText
                backgroundColor="#141414"
                textColor="#FED659"
                content={[
                    'Savor', 'authentic', 'Indian', 'cuisine', 'in', 'Dallas', 'heart', 'of', 'Texas', 'culture'
                ]}
            />

            {/* ! Event Section */}
            <section className="event-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="event-content">
                                <h2 className="event-heading">TAKE A SEAT</h2>
                                <h3 className="event-subheading">
                                    Relax, & Enjoy
                                    <TypewriterText words={eventWords} />
                                </h3>
                                <p className="event-para">
                                    Sit back, relax, and let the party begin! Take a seat and immerse yourself in the lively atmosphere filled with great music, delicious food, and unforgettable moments. Whether you're catching up with friends or making new ones, this is the perfect place to unwind and enjoy every beat of the celebration. Let go of your worries and embrace the fun – it's time to party!
                                </p>
                                <button className="btn btn-primary">JOIN THE PARTY</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="gallery-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="gallery-content">
                                <h2 className="gallery-heading">EXPLORE OUR GALLERY</h2>
                                <h3 className="gallery-subheading">
                                    Discover & Experience Our
                                    <TypewriterText words={galleryWords} />
                                </h3>
                            </div>
                        </div>
                    </div>

                    <GallerySlider />
                </div>
            </section>

            {/* ! Scrollable Text Section */}
            <ScrollableText />

            <div className='contact-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='contact-content'>
                                <h2 className='contact-heading'>Do Follow Us On Instagram For All Latest Updates On Upcoming Events</h2>
                                <div className='social-buttons'>
                                    <button className='social-btn facebook-btn'>
                                        <i className='fab fa-facebook-f social-icon'></i>
                                        <span className='social-text'>FOLLOW ELYSIUM ON FACEBOOK</span>
                                    </button>
                                    <button className='social-btn instagram-btn'>
                                        <i className='fab fa-instagram social-icon'></i>
                                        <span className='social-text'>FOLLOW ELYSIUM ON INSTAGRAM</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ! Footer Section */}
            <Footer />
        </div>
    );
};

export default Home;