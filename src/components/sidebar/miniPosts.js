import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link'

import avatar from '../../img/avatar.png';

const MiniPost = ({title, subtitle, date, url, image}) => (
    <article className="mini-post">
        <header>
            <h3><a href={url}>{title}</a></h3>
            <h4>{subtitle}</h4>
            <time className="published" dateTime={date}>{date}</time>
            <a href="/about" className="author"><img src={avatar} alt="Bill Kidwell" /></a>
        </header>
        <a href={url} className="image"><img src={image} alt="" /></a>
    </article>
); 

MiniPost.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string,
    url: PropTypes.string.isRequired,
    image: PropTypes.any.isRequired
};


const MiniPosts = ({links}) => {

    return (
        <section>
            <div className="mini-posts">
                {links.map( (link, index) => {
                    return (
                    <MiniPost key={index} 
                        title={link.title}
                        subtitle={link.subtitle} 
                        date={link.date} 
                        url={link.url} 
                        image={link.image} />
                    );
                })}
            </div>
      </section>
    )
}

export default MiniPosts;