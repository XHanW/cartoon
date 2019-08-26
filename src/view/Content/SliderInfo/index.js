import React from "react";
import { connect } from 'react-redux';
import { showImges } from 'redux/actions';

import Card from 'component/Card/index';
import Img from "component/Img";
import SliderNav from './SliderNav';

import { contents, imgs } from "component/data";
import "./style.scss";

class SliderInfo extends React.Component {
  state = {
    id: 0
  }
  componentDidMount() {
    this.timer = setInterval(() => this.props.dispatch(showImges(`${++this.state.id}`)
    ), 2500)
  }
  componentWillUnmount() {
    this.timer && clearInterval(this.timer)
  }

  handleOnClick = e => {
    this.props.dispatch(showImges(`${e.target.id}`))
    this.setState({
      id: e.target.id
    })
  }
  render() {
    return (
      <Card>
        <span className="slider-img">
          <div className="imgbox">
            {imgs.map((p, i) => <Img id={i} active={this.props.active} key={i} src={p} alt={p} />)}
          </div>
          <div className="log-reg"><a>点击登陆</a></div>
          <div style={{ top: '22%' }} className="log-reg"><a>点击注册</a></div>
        </span>
        {contents[0].map((p, i) => <SliderNav id={i} active={this.props.active} onClick={this.handleOnClick} key={i} name={p} type={contents[1][i]} />)}
        <aside>
          <p>关注我们</p>
          xxxxxxxxxxx@163.com
        </aside>
      </Card>
    );
  }
}

export default connect(state => ({ active: state.show.showImges, showId: state.show.showIds }))(SliderInfo);
