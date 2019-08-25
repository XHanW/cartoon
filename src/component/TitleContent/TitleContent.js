import React from "react";
import { connect } from 'react-redux';
import Img from '../Img';
import Arrows from '../Arrows/index';
import More from '../More/index';
import ListContent from '../ListContent';

import './style.scss'


class TitleContent extends React.Component {
    render() {
        const { content, currentitle, shows, about, html, imgs, handleLeft, handleRight } = this.props;
        return (
            <React.Fragment>
                {imgs && <ul className="show-content_one" style={{ display: this.props.show[shows] === `${currentitle}` ? 'flex' : `none` }}>
                    <Arrows onClick={handleLeft} content={'<'} />
                    {currentitle === '头像'
                        &&
                        imgs.map((p, i) => <Img id={i} active={this.props.show.showImg} key={i} src={p} alt={p} />)
                    }
                    <Arrows onClick={handleRight} content={'>'} />
                </ul>
                }
                {html && <ul className="show-content" style={{ display: this.props.show[shows] === `${currentitle}` ? 'block' : `none`, marginRight: '100px' }}>
                    <p>重点资料</p>
                    {currentitle === '资料' &&
                        html['资料'].map((p, i) => <ListContent content={p} key={i} />)
                    }
                    {currentitle === '会员功能'
                        &&
                        html['推荐'].map((p, i) => <ListContent content={p} key={i} />)
                    }
                </ul>
                }

                <ul style={{ display: about ? 'block' : this.props.show[shows] === `${currentitle}` ? 'block' : `none` }} className="show-content">
                    {content.map((p, i) => <ListContent content={p} key={i} />)}
                    <More />
                </ul>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => ({ show: state.show });
export default connect(mapStateToProps
)(TitleContent);
