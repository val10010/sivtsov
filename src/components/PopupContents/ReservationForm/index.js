import React from 'react';
import { ReservationForm as ReservationFormComponent } from 'Components/ReservationForm';

import style from './style.scss';

export const ReservationForm = ({ key, props }) => {
    return (
        <div key={key} className={style.container}>
            <ReservationFormComponent btnOnClick={props.btnonclick} { ...props} />
        </div>
    );
};
