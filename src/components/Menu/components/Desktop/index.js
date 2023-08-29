import { Link } from 'react-router-dom';
import React from 'react';

import style from './style.scss';

const Desktop = ({ children }) => {

    return (
        <nav className={style.menu}>
            <Link to='/' className={style.logo}>Sivtsov</Link>
            <div className={style.container}>
                <Link to='https://t.me/AndyFiss' className={style.item}>оставить заявку</Link>
                <div>
                    <Link to='/' className={style.item}>Проекты</Link>
                    <Link to='/' className={style.item}>Услуги</Link>
                    <Link to='/' className={style.item}>Контакты</Link>
                </div>
            </div>
        </nav>
    );
};

export default Desktop;
