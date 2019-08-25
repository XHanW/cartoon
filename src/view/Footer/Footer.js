import React from 'react';
import './style.scss';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-top">
                    <ul>
                        <li>服务热线：0755-566xxxx</li>
                    </ul>
                </div>
                <div className="footer-content">
                    <div>
                        <ul>
                            |<li>网站</li>
                            |<li>版权声明</li>
                            |<li>使用条款</li>
                            |<li>相关</li>
                            |<li>联系我们</li>
                        </ul>
                        <p>Copyright@ XXX</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;
