import React from 'react';
import Image from 'Components/Image';

import style from './style.scss';

export const Img = ({ imgSrc }) => {
    return (
        <div>
            <Image key={imgSrc} src={imgSrc} className={style.img}/>
        </div>
    );
};
