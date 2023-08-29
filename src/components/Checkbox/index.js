import { buildClassName } from 'Utils'
import React, { forwardRef, useId } from 'react';

import style from './style.scss';

const Checkbox = forwardRef(({ className, classNames = {}, children, registerProps, isError }, ref) => {
    const ID = useId();

    return (
       <div
           className={
             `${buildClassName(
                 ['container'], style, classNames
             )} ${className}`
           }
       >
           <div className={style.wrapper}>
               <input
                   ref={ref}
                   type="checkbox"
                   id={registerProps.name + ID}
                   { ...registerProps }
               />
               <span className={style.checkbox} />
           </div>
           <label htmlFor={registerProps.name + ID} className={`${style.label}`}>
               { children }
           </label>
           <span className={style.errorMessage}>{ isError }</span>
       </div>
    );
});

export default Checkbox;
