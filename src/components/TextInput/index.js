import { buildClassName } from 'Utils'
import React, { forwardRef } from 'react';

import style from './style.scss';

const Input = forwardRef(({ className, classNames = {}, isError, isValid, ...props }, ref) => {
    return (
        <div
            className={
                `${buildClassName(
                ['wrapper', isError && 'error', isValid && 'valid'], style, classNames
                )} ${className}`
            }
        >
            <input
                ref={ref}
                type="text"
                className={`${style.input}`}
                { ...props}
            />
            <span className={style.errorMessage}>{ isError }</span>
        </div>
    );
});

export default Input;
