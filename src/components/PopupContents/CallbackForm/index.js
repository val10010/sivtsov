import React from 'react';
import { CallbackForm as CallbackFormComponent } from 'Components/CallbackForm';

import style from './style.scss';

export const CallbackForm = ({ key, props }) => {
    return (
        <div key={key} className={style.container}>
            <CallbackFormComponent btnOnClick={props.btnonclick} />
        </div>
    );
};
