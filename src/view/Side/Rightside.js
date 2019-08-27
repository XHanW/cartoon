import React from 'react';
import './style.scss';
import imgUrl from '../../static/product.json';

class Rightside extends React.Component {
    render() {
        return (
            <div className="right-side">
                <div className="imgbox">
                    <img src={imgUrl.aside} alt="最爱幽灵公主" />
                </div>
                <a href="#">最爱幽灵公主</a>
            </div>
        )
    }
}

export default Rightside;
