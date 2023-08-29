import React from 'react';
import Button from 'Components/Button';

import style from './style.scss';

const TariffPlanTeacher = ({
        id,
        price,
        number,
        onClick,
        children,
        className = ''
    }) => {

    return (
        <div className={`${style.container} ${className}`}>
            <p className={style.number}>
                { number }
            </p>
            { children }
            <div className={style.priceBlock}>
                ціна:
                <p className={style.price}>{ price }</p>
            </div>
            <Button
                onClick={() => onClick(id)}
                className={style.button}
            >
                ПРИДБАТИ
            </Button>
        </div>
    );
};

export default TariffPlanTeacher;
