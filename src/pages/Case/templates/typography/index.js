import React from 'react';
import { css, Global } from '@emotion/react';

import style from './style.scss';

export const Typography = ({ fonts, details }) => {
    const fontImports = fonts.map((font) => {
        return `@import url("https://fonts.googleapis.com/css2?family=${font.family}:wght@${font.weight.join(';')}");`;
    }).join('\n');

    const typographyStyle = css`
        ${fontImports}
    `;

    return (
        <>
            <Global styles={typographyStyle}/>
            <section className={style.container}>
                <p className={style.desc}>Ключевые акценты проекта [особенности]</p>
                <div className={style.fontContainer}>
                    {
                        fonts.map(({ family }) => (
                            <p className={style.font} style={{ fontFamily: family }}>{ family }</p>
                        ))
                    }
                </div>
                <div className={style.details}>
                    <div className={style.column}>
                        <p className={style.columnTitle}>Типографика</p>
                    </div>
                    {
                       details.map((data) => (
                           <div className={style.column}>
                               {
                                   data.title && data.title.map((item) => (
                                       <p className={style.columnTitle}>{ item }</p>
                                   ))
                               }
                               {
                                   data.desc && data.desc.map((item) => (
                                       <p className={style.columnDesc}>{ item }</p>
                                   ))
                               }
                           </div>
                       ))
                    }
                </div>
            </section>
        </>
    );
};
