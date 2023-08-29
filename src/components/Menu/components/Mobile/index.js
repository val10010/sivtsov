import { smoothScrollTo } from 'Utils';
import { Link } from 'react-router-dom';
import { useLockBodyScroll } from 'Hooks';
import { css, Global } from '@emotion/react';
import { PROJECTS, SERVICES } from 'Main/constants'
import React, { useState, useCallback } from 'react';
import { CSSTransition } from 'react-transition-group';

import style from './style.scss';

const Mobile = () => {
    const [isActive, setActive] = useState(false);

    useLockBodyScroll(isActive);

    const handleCloseBtnClick = useCallback(() => setActive(false), [setActive])
    const handleOpenBtnClick = useCallback(() => setActive(true), [setActive])
    const handleItemMenuClick = useCallback((id) => {
        setActive(false);
        smoothScrollTo(id);
    }, [setActive, smoothScrollTo]);

    const menuTransitionStyles = css`
      .menu-enter {
        top: -100%;
      }

      .menu-enter-active {
        top: 0;
        transition: top 0.3s ease-in-out;
      }

      .menu-exit {
        top: 0;
      }

      .menu-exit-active {
        top: -100%;
        transition: top 0.3s ease-in-out;
      }
   `;

    return (
       <>
           <Global styles={menuTransitionStyles} />
           <nav className={`${style.menu}`}>
               <Link to='/' className={style.logo}>Sivtsov</Link>
               <button  className={style.openBtn} onClick={handleOpenBtnClick}>Меню</button>
           </nav>

           {
               <CSSTransition
                   in={isActive}
                   timeout={300}
                   classNames="menu"
                   unmountOnExit
               >
                   <>
                       <div className={`${style.menuBox}`} >
                           <button  className={style.closeBtn} onClick={handleCloseBtnClick}>закрыть</button>
                           <nav>
                               <div className={style.menuItem}>
                                   <Link
                                       to='/'
                                   >
                                       Проекты
                                   </Link>
                                   <span>[ { PROJECTS?.length } ]</span>
                               </div>
                              <div className={style.menuItem}>
                                  <Link
                                      to='/'
                                  >
                                      Услуги
                                  </Link>
                                  <span>[ { SERVICES?.length } ]</span>
                              </div>
                           </nav>
                           <div className={style.bottom}>
                                <div className={style.col}>
                                    <h4 className={style.title}>Контакты [2]</h4>
                                    <Link className={style.bottomItem} to="/">sivtscompany@gmail.com</Link>
                                    <Link className={style.bottomItem} to="/">+(380) 66 107 32 87</Link>
                                </div>
                               <div className={style.col}>
                                   <h4 className={style.title}>Социальные сети [3]</h4>
                                   <Link className={style.bottomItem} to="/">Instagram</Link>
                                   <Link className={style.bottomItem} to="/">Telegram</Link>
                                   <Link className={style.bottomItem} to="/">Behance</Link>
                               </div>
                           </div>
                       </div>
                   </>
               </CSSTransition>
           }
       </>
    );
};

export default Mobile;
