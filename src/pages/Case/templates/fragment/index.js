import React from 'react';
import Image from 'Components/Image';

import style from './style.scss';

export const Fragment = ({ imgSrc }) => {
    return (
        <section className={style.fragment}>
            <div className={style.container}>
                <p>Фрагменты / концепции</p>
                <Image src={imgSrc} className={style.img}/>
            </div>
        </section>
    );
};
