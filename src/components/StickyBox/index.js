import { DeviceContext } from 'Contexts/Device/DeviceContext';
import React, {cloneElement, useEffect, useState, useRef, Children, useContext} from 'react';

import style from './style.scss';

const StickyBox = ({ children, menuItems }) => {
    const { isDesktop } = useContext(DeviceContext);
    const [activeIndex, setActiveIndex] = useState(0);
    const contentRefs = useRef([]);
    const itemsRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            const itemsHeight = isDesktop ? 20 : itemsRef.current?.offsetHeight + 2 || 0;
            const index = contentRefs.current.reduce((closestIndex, ref, idx) => {
                const rect = ref.getBoundingClientRect();
                const prevRect = contentRefs.current[idx - 1]?.getBoundingClientRect();

                if (idx === 0) {
                    return rect.bottom - itemsHeight <= window.innerHeight ? idx : -1;
                } else if (prevRect && prevRect.bottom - itemsHeight <= 0 && rect.bottom - itemsHeight > 0) {
                    return idx;
                } else {
                    return closestIndex;
                }
            }, -1);

            if (index !== activeIndex) {
                setActiveIndex(index);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [activeIndex]);

    const handleMenuItemClick = (index) => {
        setActiveIndex(index);
        const itemsHeight = isDesktop ? 0 : itemsRef.current?.offsetHeight + 2 || 0;
        const targetPosition = contentRefs.current[index].offsetTop - itemsHeight;

        window.scrollTo({
            top: targetPosition
        });
    };

    return (
        <div className={style.container}>
            <ul className={style.items} ref={itemsRef}>
                {
                    menuItems.map(({item}, index) => (
                        <li
                            key={item}
                            onClick={() => handleMenuItemClick(index)}
                            className={`${style.item} ${index === activeIndex ? style.active : ''}`}
                        >
                            { item }
                        </li>
                    ))
                }
            </ul>

            {
                cloneElement(children, {
                    className: ` ${style.content || ''} ${children?.props?.className || ''}`,
                    children: Children.map(children.props.children, (child, index) => (
                        <div
                            key={index}
                            ref={(element) => (contentRefs.current[index] = element)}
                        >
                            { child }
                        </div>
                    ))
                })
            }
        </div>
    );
};

export default StickyBox;
