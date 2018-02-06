import React from 'react';
import Link from 'gatsby-link'

const Header = ({ location }) => {
    return (
        <div id="header">
            <h1>
                <Link to={'/'}>
                    Gatsby Starter Blog
                </Link>
            </h1>
        </div>
    );
}

export default Header;