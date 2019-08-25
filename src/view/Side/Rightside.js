import React from 'react';
import './style.scss';
import aside from 'static/aside.jpg';

class Rightside extends React.Component {
    render() {
        return (
            <div className="right-side">
                <img src={aside} alt="fixed"/>
                <br />
                <a href="#">最爱幽灵公主</a>
            </div>
        )
    }
}

export default Rightside;
