import React from 'react';

import PropTypes from 'prop-types';

export const GifGripItem = ({ title, url }) => {

    return (
        <div className="card animate__animated animate__bounce">
            <img src={ url } alt={ title }/>
            <p>{ title }</p>
        </div>
    )
}

GifGripItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}