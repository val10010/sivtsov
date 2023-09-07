import React from 'react';
import Menu from 'Components/Menu';
import * as Templates from './templates';

import { CASE_CONTENT } from './constants';

import style from './style.scss';

const Case = ({ id }) => {
    return (
        <main>
            <div className={style.container}>
                <Menu/>
            </div>

            {
                CASE_CONTENT[id].map((data, index) =>
                    <div key={data.template + index}>
                        { Templates[data.template](data) }
                    </div>
                )
            }
        </main>
    );
};

export default Case;
