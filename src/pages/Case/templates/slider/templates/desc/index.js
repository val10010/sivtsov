import React from 'react';
import { Link } from 'react-router-dom';

import style from './style.scss';

export const Desc = ({ details }) => {
    return (
        <section key={details.project} className={style.container}>
            <div className={style.row}>
                <p>О поекте</p>
                <p className={style.details}>{ details.project }</p>
            </div>
            <div className={style.row}>
                <p>Про процесс</p>
                <p className={style.details}>{ details.process }</p>
            </div>
            <div className={style.row}>
                <p>Отзыв</p>
                <Link
                    to={details.reviewLink}
                    className={style.link}
                >
                    смотреть видео
                </Link>
            </div>
        </section>
    );
};
