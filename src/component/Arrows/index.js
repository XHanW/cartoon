import React from 'react';
import './style.scss';

const Arrows = ({onClick,content}) => {
    return <span className="arrows" onClick={onClick}>{content}</span>
}
export default Arrows;
