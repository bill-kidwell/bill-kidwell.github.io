import React from 'react';
//import Link from 'gatsby-link'
import Footer from '../footer';

const Sidebar = ({ location }) => {
    return (
        <section id="sidebar">
            <section id="intro">
                <a href="#" className="logo"><img src="images/logo.jpg" alt="" /></a>
                <header>
                    <h2>Gatsby Starter Blog</h2>
                    <p>Another fine responsive site template by <a href="http://html5up.net">HTML5 UP</a></p>
                </header>
            </section>
            
            <section className="blurb">
                <h2>About</h2>
                <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod amet placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at phasellus sed ultricies.</p>
                <ul className="actions">
                    <li><a href="#" className="button">Learn More</a></li>
                </ul>
            </section>

            <Footer />

        </section>
    );
}

export default Sidebar;