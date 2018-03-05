import React from 'react';
//import Link from 'gatsby-link'
import Footer from '../footer';
import MiniPosts from './miniPosts';

const Sidebar = ({ location }) => {
    return (
        <section id="sidebar">
            <section id="intro">
                <a href="#" className="logo"><img src="images/logo.jpg" alt="" /></a>
                <header>
                    <h2>Welcome!</h2>
                </header>
            </section>

            <section className="blurb">
                <p>Thank you for visiting.  Please take the time to leave a comment below.  I am always interested in learning more about readers, and how I can improve the content here.</p>
            </section>

            <h3>Publications</h3>
            <MiniPosts />
            
            <section className="blurb">
                <h2>Bio</h2>
                <p>I am a software engineer, architect and scholar.  I write this blog to share what I have learned, and to meet others with similar interests.</p>
                <ul className="actions">
                    <li><a href="/about" className="button">Learn More</a></li>
                </ul>
            </section>

            <Footer />

        </section>
    );
}

export default Sidebar;