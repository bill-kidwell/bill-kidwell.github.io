import React from 'react';
import PropTypes from 'prop-types';

import avatar from '../../img/avatar.png';

const Header = ({ title, subtitle, path, date }) => {
    return (
        <header>
            <div className="title">
                <h2><a href={path}>{title}</a></h2>
                <h3>{subtitle}</h3>
            </div>
            <div className="meta">
                <time className="published" dateTime="{date}">{date}</time>
                <a href="/about" className="author">
                    <span className="name">
                        Bill Kidwell
                    </span>
                    <img src={avatar} alt="" />
                </a>
            </div>
        </header>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    path: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
};

export default Header;
