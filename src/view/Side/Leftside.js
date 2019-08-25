import React from 'react';
// import debounce from 'lodash.debounce';
import './style.scss';

const content = ["经典回顾", "新番追击", "激动人心", "情节再现", "会员专享", "在线查询", "漫画世界"]
class Leftside extends React.Component {
    state = {
        isShow: false
    }
    handleOnClick = (e) => {
        this.setState({
            isShow: !this.state.isShow
        })
    }
    render() {
        return (
            <div className="left-side" style={{ transform: this.state.isShow ? 'translate(0,-50%)' : '' }}>
                <ul>
                    {content.map((p, i) => <li key={i}><a href="#">{p}</a></li>)}
                </ul>
                <p className="click" onClick={this.handleOnClick}>点我</p>
            </div>
        )
    }
}

export default Leftside;
