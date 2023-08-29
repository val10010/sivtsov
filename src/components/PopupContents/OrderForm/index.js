import React from 'react';
import { OrderForm as OrderFormComponent } from 'Components/OrderForm';

import style from './style.scss';

export const OrderForm = ({ key, props }) => {
    return (
        <div key={key} className={style.container}>
            <OrderFormComponent btnOnClick={props.btnonclick} { ...props} />
        </div>
    );
};
