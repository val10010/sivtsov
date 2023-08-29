import React from 'react';
import Image from 'Components/Image';

import style from './style.scss';

const Idea = () => {
    return (
        <section className={style.container}>
            <h3 className={style.title}>
                <span className={style.name}>Цель [1]</span>
                Я ставлю перед собой задачу - наполнить
                интернет пространство качественным и дорогим дизайном. Превратить его в настоящее искусство логики и проектирования.
            </h3>
            <Image src="../../../../../images/idea.jpg" alt="idea" align="right"/>
        </section>
    );
};

export default Idea;
