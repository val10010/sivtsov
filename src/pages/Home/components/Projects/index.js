import React, { useId } from 'react';
import Image from 'Components/Image';
import { Link } from 'react-router-dom';
import { PROJECTS } from 'Main/constants';

import style from './style.scss';

const Projects = () => {
    return (
        <section className={style.container}>
            <p className={style.count}> Проекты [{PROJECTS.length}] </p>
            <ul className={style.projects}>
                {
                    PROJECTS.map(({name, desc, imgSrc, modifier, link}) => (
                        <li key={useId()} className={`${style.item} ${style[modifier]}`}>
                            <Link to={link}>
                                <Image className={style.itemImg} src={imgSrc} alt={name} />
                                <p className={style.itemDesc}>
                                    <span className={style.name}>{ name }</span>
                                    <span className={style.desc}>{ desc }</span>
                                </p>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </section>
    );
};

export default Projects;
