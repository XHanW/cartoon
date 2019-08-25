import React from "react";

const SliderNav = ({
    id,
    name,
    type,
    active,
    onClick
}) => {
    return (
        <div onClick={onClick} id={id} style={{ borderTop: active === `active${id}` ? `2px solid #ccc` : ``}}>
                <p id={id}>
                    <a id={id}>{name}</a>
                    <br />
                    <a id={id}>{type}</a>
                </p>
        </div>
    );
};
export default SliderNav;
