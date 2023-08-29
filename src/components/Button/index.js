import React from 'react';
import { Link } from 'react-router-dom';

import style from './style.scss';

const Button = ({ children, href, variant, className, color, ...props }) => {
    return (
        href
            ?
            <Link
                to={href}
                className={`${style.button} ${style[variant] || ''} ${className || ''} ${props.disabled ? style.disabled : ''}`}
                { ...props}
            >
                { children }
            </Link>
            :
            <button
                className={`${style.button} ${style[variant] || ''} ${className || ''} ${props.disabled ? style.disabled : ''}`}
                { ...props}
            >
                { children }
            </button>
    );
};

export default Button;
