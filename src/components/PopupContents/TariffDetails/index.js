import React from 'react';

import style from './style.scss';

export const TariffDetails = ({ key }) => {
    return (
        <div key={key} className={style.container}>
            <p className={style.infoTitle}>После окончания курса вы можете продолжать заниматься с терапевтом индивидуально в формате онлайн занятий.</p>
            <div className={style.content}>
                <p className={style.item}>
                    <span className={style.price}>3000 грн. / 74€</span>
                    цена за 5 занятий
                </p>
                <p className={style.item}>
                    <span className={style.price}>800 грн. / 20€</span>
                    цена за 1 занятие
                </p>
            </div>
        </div>
    );
};
