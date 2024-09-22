import NavigationBar from "../components/navBar";
import Footer from "../components/footer";
import './home.css'
import About from '../assets/sample.png'
import { Link } from "react-router-dom";
//import { Parallax } from "@react-spring/parallax";
import MemberCard from "../components/memberCard";


export default function Home() {

    return (
        <>
            <title>GDSC USTP</title>
            <NavigationBar />
            <main>

                <header className="banner">


            
                    <h1>Building Good Things,&nbsp;<span id="gradient">Together!</span></h1>
                    <p id="tagline">Rorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                    <button>
                        Learn More
                    </button>

                </header>

                <section>

                </section>



                <section className="section-1">

                    <div className="section-1-container">

                        <div className="about-content">
                            <div className="about-left">
                                <img src={About} alt='About us' />
                            </div>

                            <div className="about-right">

                                <h2>Lorem ipsum dolor sit amet</h2>

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.
                                </p>
                                <div style={{ width: 494 }}>

                                    <Link to="/aboutus">

                                        <button>
                                            Read More
                                        </button>

                                    </Link>
                                </div>


                            </div>
                        </div>

                        <div className="team">
                            <div className="team-left">
                                <h2>Lorem ipsum dolor sit amet</h2>

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.
                                </p>

                            </div>

                            <div className="team-right">
                                <img src={About} alt='About us' />



                            </div>
                        </div>

                    </div>




                </section>


                <section className="partners">
                    <h1>Trusted by People</h1>
                </section>
                <section className="events">

                </section>

                <section className="gallery">
                    <h1>Inspiring members</h1>
                </section>




                <section className="news">
                    <h1>What's up?</h1>

                </section>

                <section className="cta">
                    <h1>CTA</h1>
                </section>
            </main>
            <Footer />
        </>

    )
}