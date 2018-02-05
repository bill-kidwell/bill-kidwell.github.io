import React from 'react';
import Link from 'gatsby-link'

const Header = ({location}) => {
    let isRoot = location.pathname === '/';
    let link = (
        <Link to={'/'}>
            Gatsby Starter Blog
        </Link>
    );
    return isRoot ? (
        <h1>{link}</h1>
    ) : (
        <h3>{link}</h3>
    );
}

export default Header;