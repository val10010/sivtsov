import { buildClassName } from 'Utils'
import React, { useCallback, useState } from 'react';

import style from './style.scss';

const Burger = ({ checked = false, classNames = {}, onClick }) => {
    const [isChecked, setChecked] = useState(false);

    const onChange = useCallback(() =>
            onClick ? onClick() : setChecked(!isChecked)
        ,[onClick, setChecked, isChecked])

    return (
        <label className={`${buildClassName(['label'], style, classNames)}`} >
            <input checked={onClick ? checked : isChecked} type="checkbox" onChange={onChange}/>
            <span className={`${buildClassName(['line'], style, classNames)}`} />
        </label>
    );
};

export default Burger;
