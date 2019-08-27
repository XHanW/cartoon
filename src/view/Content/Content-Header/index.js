import React from "react";
import { connect } from 'react-redux';
import { showTab } from '../../../store/actions';
import Card from '../../../component/Card/index';
import ListContent from "../../../component/ListContent";

import { navs, menus } from "../../../component/data";
import "./style.scss";

class InfoHeader extends React.Component {

  handleMouseOver = e => {
    const name = e.target.innerHTML;
    this.props.dispatch(showTab(name))
  };

  Tab = content => {
    let menus
    try {
      menus = Object.keys(content).map(p => content[p]);
      if (menus.length === 0) return false;
      return (
        <div className="tab">
          <div className="tab-list">
            {menus.map((p, i) => {
              return (
                <div key={i} className="tab-list-ul">
                  <ul>
                    {Array.from(p).map((k, i) => {
                      return <ListContent key={i} content={k} />;
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      );
    } catch{
      console.log()
    }
    //   let menus = Object.keys(content).forEach(p => content[p]); //undefined
  };

  render() {
    return (
      <Card>
        <div className="content-top-header">
          <h1 className="title">动漫前线</h1>
          <div className="help">
            <span>热线：0755-566xxxx</span>
            <input type="text" placeholder="请输入关键词" />
            <button>搜索</button>
          </div>
        </div>
        <div className="menu">
          <ul className="menu-ul">
            {navs.map((p, i) => (
              <ListContent
                key={i}
                className={"menu-li"}
                content={p}
                handleMouseOver={this.handleMouseOver}
                handleMouseOut={this.handleMouseOut}
              />
            ))}
          </ul>
          {this.Tab(menus[`${this.props.name}`])}
        </div>
      </Card>
    );
  }
}

export default connect(state => ({ name: state.show.showTab }))(InfoHeader)
