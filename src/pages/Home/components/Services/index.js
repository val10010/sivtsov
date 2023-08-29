import React, { useId } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from 'Main/constants';

import style from './style.scss';

const Services = () => {
    return (
        <section className={style.container}>
            <div className={style.top}>
                <p className={style.count}>Услуги [{ SERVICES.length }]</p>
                <Link className={style.link}>смотреть процесс работы</Link>
            </div>
            <ul className={style.list}>
                {
                    SERVICES.map(({ name, value }) => (
                        <li key={useId()} className={style.listItem}>
                            <p className={style.itemName}>{ name }</p>
                            <p className={style.itemValue}>{ value }</p>
                        </li>
                    ))
                }
            </ul>
        </section>
    );
};

export default Services;
