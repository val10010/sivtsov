import React from 'react';
import { Link } from 'react-router-dom';
import Image from 'Components/Image';

import style from './style.scss';

export const Animation = ({ bgcolor, color, imgSrc, link }) => {
    return (
        <section style={{ background: bgcolor, color: color }} className={style.animation}>
            <div className={style.head}>
                <p>Анимации</p>
                <Link to={link} target="_blank" className={style.link}>смотреть онлайн</Link>
            </div>
            <Image src={imgSrc} className={style.img}/>
        </section>
    );
};
