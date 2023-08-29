import React from 'react';
import { RecordForInterview as RecordForInterviewComponent } from 'Components/RecordForInterview';

import style from './style.scss';

export const RecordForInterview = ({ key, props }) => {
    return (
        <div key={key} className={style.container}>
            <RecordForInterviewComponent btnOnClick={props.btnonclick} {...props} />
        </div>
    );
};
