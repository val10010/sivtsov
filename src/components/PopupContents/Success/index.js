import React from 'react';

import style from './style.scss';

export const Success = ({ key }) => {
    return (
        <div key={key} className={style.container}>
            <p className={style.infoTitle}>Спасибо, ваши данные успешно отправленны!</p>
            <p className={style.infoSubtitle}>С вами свяжутся ближайшее время.</p>
        </div>
    );
};
