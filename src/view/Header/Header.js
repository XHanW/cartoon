import React from "react";
import "./style.scss";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="lang">
          <a href="#">中文</a>
          <a href="#">英文</a>
          <a href="#">日文</a>
        </div>
        <div className="login">
          <form>
            <label>
              <input type="text" placeholder="用户名" />
            </label>
            <label>
              <input type="password" placeholder="密码" />
            </label>
            <label>
              <input type="button" value="登陆" />
            </label>
          </form>
        </div>
      </div>
    );
  }
}

export default Header;
