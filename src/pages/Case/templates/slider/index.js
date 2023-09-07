import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import * as Templates from './templates';
import SliderComponent from 'Components/Slider';

import style from './style.scss';

export const Slider = ({ details, info, link }) => {
    const [activeSlide, setActiveSlide] = useState(0);

    const handleActiveSlide = useCallback((index) => setActiveSlide(index), [setActiveSlide]);

    return (
        <section className={style.slider}>
            <div className={style.sliderHead}>
                <p>
                    { info }
                </p>
                <Link to={link} className={style.link} target="_blank">смотреть онлайн</Link>
            </div>
            <SliderComponent
                reviews={details}
                className={style.sliderContainer}
                handleActiveSlide={handleActiveSlide}
            >
                {
                    details.map((data) => (
                        Templates[data.template](data)
                    ))
                }
            </SliderComponent>
            <div className={style.sliderBottom}>
                <p>
                    { activeSlide + 1 }<span className={style.slideLength}> / { details.length }</span>
                </p>
                <p>
                    {
                        details[activeSlide].name
                    }
                </p>
            </div>
        </section>
    );
};
