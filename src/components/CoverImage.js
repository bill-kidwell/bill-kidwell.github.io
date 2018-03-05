import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const CoverImage = ({path, cover}) => {
    if (cover == null) return null;
    return (
        <a href={path} className="image featured">
            <Img sizes={cover.childImageSharp.sizes} />
        </a>
    );
};

CoverImage.propTypes = {
    path: PropTypes.string.isRequired,
    cover: PropTypes.object.isRequired
};

export default CoverImage;