import React from 'react';

const Footer = (props) => (
    <section id="footer">
        <ul className="icons">
            <li><a href="https://twitter.com/billyrkidwell" className="fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="https://www.facebook.com/bill.kidwell" className="fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="fa-rss"><span className="label">RSS</span></a></li>
            <li><a href="mailto:kidwell.bill@gmail.com" className="fa-envelope"><span className="label">Email</span></a></li>
        </ul>
        <p className="copyright">&copy; Bill Kidwell. Design: <a href="http://html5up.net">HTML5 UP</a>.</p>
    </section>
);

export default Footer;