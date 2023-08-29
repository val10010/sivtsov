import React from 'react';

const Image = ({ src, ...props }) => {
    if(!src) return;

    const pathWithoutExtension = src.replace(/\.[^/.]+$/, '');
    const extension = src.substring(src.lastIndexOf('.') + 1);


    return (
        <picture>
            <source srcSet={pathWithoutExtension + '.webp 1x,' + pathWithoutExtension + '@2x.webp 2x,' } type="image/webp"/>
            <img srcSet={src + ' 1x,' + pathWithoutExtension + '@2x' + extension + ' 2x,' } alt="bereginia.online" {...props}/>
        </picture>
    );
};

export default Image;
