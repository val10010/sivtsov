import { buildClassName } from 'Utils'
import React, { forwardRef } from 'react';

import style from './style.scss';

const Textarea = forwardRef(({ classNames = {}, className, isValid, isError, ...props }, ref) => {
    return (
        <div
            className={
                `${buildClassName(
                    ['wrapper', isError && 'error', isValid && 'valid'], style, classNames
                )} ${className}`
            }
        >
           <textarea className={style.textarea} { ...props} ref={ref} >
           </textarea>
            <span className={style.errorMessage}>{ isError }</span>
        </div>

    );
});

export default Textarea;
