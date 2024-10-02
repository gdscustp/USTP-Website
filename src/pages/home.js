import React, { useEffect } from 'react';
import NavigationBar from "../components/navBar";
import Footer from "../components/footer";
import './home.css';
import About from '../assets/sample.png';
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <NavigationBar />
            <main>
                <header className="banner">
                    <h1>Building Good Things,&nbsp;<span id="gradient">Together!</span></h1>
                    <p id="tagline">Rorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <button>
                        Learn More
                    </button>
                </header>

                <section className="section-1">
                    <div className="section-1-container">
                        <div className="about-content">
                            <div className="about-left">
                                <img src={About} alt='About us' />
                            </div>
                            <div className="about-right">
                                <h2>Lorem ipsum dolor sit amet</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.</p>
                                <div style={{ width: 494 }}>
                                    <Link to="/aboutus">
                                        <button>Read More</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="team">
                            <div className="team-left">
                                <h2>Lorem ipsum dolor sit amet</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.</p>
                            </div>
                            <div className="team-right">
                                <img src={About} alt='About us' />
                            </div>
                        </div>
                    </div>
                </section>

                {}
                <section className="trusted" data-aos="fade-up">
                    <h1>Trusted by People</h1>
                    <div className="trusted-logos">
                        <img src={require('../assets/picturetest.jpg')} alt="pic 1" />
                        <img src={require('../assets/picturetest.jpg')} alt="pic 2" />
                        <img src={require('../assets/picturetest.jpg')} alt="pic 3" />
                        <img src={require('../assets/picturetest.jpg')} alt="pic 4" />
                    </div>
                </section>

                <section className="gallery" data-aos="fade-up">
                    <h1>Inspiring members</h1>
                </section>

                <section className="wtsup" data-aos="fade-up">
                    <h1>What's up?</h1>
                </section>

                <section className="cta" data-aos="fade-up">
                    <h1>CTA</h1>
                </section>
            </main>
            <Footer />
        </>
    );
}
