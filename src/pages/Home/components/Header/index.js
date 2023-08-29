import React from 'react';
import Menu from 'Components/Menu';

import style from './style.scss';

const Header = () => {
    return (
        <header className={style.header}>
            <Menu/>
            <div className={style.container}>
                <h1 className={style.title}>
                    Независимый дизайнер инженер для блогеров, магазинов и бизнеса.
                </h1>
            </div>
        </header>
    );
};

export default Header;
