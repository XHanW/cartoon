import React from "react";

const Img = ({
    id,
    src,
    alt,
    active,
    className
}) => {
    return (
        <img style={{ opacity: active === `active${id}` ? `1` : `0`, display: active === `active${id}` ? `block` : `none` }} className={className} src={src} alt={alt} />
    );
};
export default Img;
