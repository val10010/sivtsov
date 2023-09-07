import React from 'react';
import { Link } from 'react-router-dom';
import Image from 'Components/Image';

import style from './style.scss';

export const Head = ({
    imgSrc,
    link,
    title,
    details
}) => {
    return (
        <section className={style.head}>
            <h1 className={style.title}>{ title }</h1>
            <Link to={link} className={style.link} target="_blank">{ link }</Link>
            <div className={style.details}>
                {
                    details.map(({ name, desc }) => (
                        <div className={style.column} key={name}>
                            <h4 className={style.columnTitle}>{ name }</h4>
                            <p className={style.columnDesc}>{ desc }</p>
                        </div>
                    ))
                }
            </div>
            <Image src={imgSrc} alt={title} className={style.img}/>
        </section>
    );
};
