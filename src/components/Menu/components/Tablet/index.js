import { Link } from 'react-router-dom';
import React, { useState, useCallback } from 'react';

import style from './style.scss';

const Desktop = ({ children }) => {
    const [isActive, setActive] = useState(false);

    const handleOpenBtnClick = useCallback(() => setActive(true), [setActive])
    const handleCloseBtnClick = useCallback(() => setActive(false), [setActive])

    return (
        <>
            <nav className={style.menu}>
                <Link to='/' className={style.logo}>Bereginia.com</Link>
                { children }
                <button className={style.btnOpenSidebar} onClick={handleOpenBtnClick}>Меню</button>
            </nav>
            {
                isActive
                &&
                <div className={style.overlay} onClick={handleCloseBtnClick}>
                    <div className={style.sidebar} onClick={(e) => e.stopPropagation()}>
                        <button className={style.btnCloseSidebar} onClick={handleCloseBtnClick}>закрыть</button>
                        <nav>
                            <ul className={style.row}>
                                <li className={style.column}>
                                    <h5 className={style.title}>Специалисты</h5>
                                    <Link to='/ivan' className={style.menuItem}>Иван Газин</Link>
                                    <Link to='/irina' className={style.menuItem}>Ирина Газин</Link>
                                </li>
                                <li className={style.column}>
                                    <h5 className={style.title}>Контакты</h5>
                                    <Link to='mailto:naturalmedical96@gmail.com'  className={style.menuItem}>naturalmedical96@gmail.com</Link>
                                    <Link to='tel:+380 67 484 93 08' className={style.menuItem}>+380 67 484 93 08</Link>
                                </li>
                            </ul>
                        </nav>
                        <div className={style.bottom}>
                            <Link to='/privacy-policy' className={style.item}>Политика конфидециальности</Link>
                            <div className={style.item}>2023. Все права защищены</div>
                        </div>
                    </div>
                </div>


            }
        </>
    );
};

export default Desktop;
