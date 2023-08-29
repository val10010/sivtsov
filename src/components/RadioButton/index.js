import React, { forwardRef, useId } from 'react';
import { buildClassName } from 'Utils'

import style from './style.scss';

const RadioButton = forwardRef((
    {
        registerProps, id,
        className = '', classNames = {},
        isError, value, ...props
    },
    ref) => {

    const ID = useId();

    return (
        <div
            className={
                `${buildClassName(
                    ['container'], style, classNames
                )} ${className}`
            }
        >
            <input
                id={ID}
                ref={ref}
                type="radio"
                name={registerProps.name}
                value={value}
                { ...props }
                { ...registerProps }
            />
            <label htmlFor={ID}>{ value }</label>

            <span className={style.errorMessage}>{ isError }</span>
        </div>
    );
});

export default RadioButton;
