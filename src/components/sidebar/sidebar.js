import React from 'react';
//import Link from 'gatsby-link'
import Footer from '../footer';
import MiniPosts from './miniPosts';

import uknowledge from './UKnowledge_logo.png';
import functionaljs from './FunctionJS-pres.png';

const pubs = [
    { 
        title: "MiSFIT: Mining Software Fault Information & Trends",
        subtitle: "CS Dissertation",
        date: "April 2015", 
        url: "https://uknowledge.uky.edu/cs_etds/33/",
        image:  uknowledge
    }
];

const presents = [
    { 
        title: "Functional Programming with JavaScript",
        subtitle: "KY JavaScript User Group",
        date: "Sept 2017", 
        url: "/presentations/functionaljs",
        image:  functionaljs
    }
];



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


            <h2>Presentations</h2>
            <MiniPosts links={presents} />

            <h2>Publications</h2>
            <MiniPosts links={pubs} />
            
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