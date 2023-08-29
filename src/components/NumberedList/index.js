import React from 'react';
import { buildClassName } from 'Utils'

import style from './style.scss';

const NumberedList = ({ list, className = '', classNames = {} }) => {
    return (
        <ol className={`${buildClassName(
            ['items'], style, classNames
        )} ${className}`}>
            {
                list.map(item => <li key={item} className={buildClassName(['item'], style, classNames)}>{ item }</li>)
            }
        </ol>
    );
};

export default NumberedList;
