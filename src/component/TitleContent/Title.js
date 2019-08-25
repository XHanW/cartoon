import React from "react";
import { connect } from 'react-redux';
import { showNews, showServer } from '../../redux/actions';

import './style.scss'

class Title extends React.Component {
    handleOnClick = e => {
        if (this.props.currentcontent === "news") {
            this.props.dispatch(showNews(e.target.innerHTML))
            return;
        }
        this.props.dispatch(showServer(e.target.innerHTML))
    }
    render() {
        const { title, currentcontent, fontSize } = this.props;
        return (
            <ul className="title">
                {title.map((p, i) =>
                    <li style={{ fontSize: { fontSize } }} currentcontent={currentcontent === 'news' ? 'news' : 'server'} key={i}>
                        <a style={currentcontent === 'news' ? { color: this.props.show.showNews === `${title[i]}` ? ' #004080' : '#333' } : { color: this.props.show.showServer === `${title[i]}` ? ' #004080' : '#333', fontSize: this.props.show.showServer === `${title[i]}` ? '20px' : '' }} onClick={this.handleOnClick}>
                            {title[i]}
                        </a>
                    </li>)
                }
            </ul>
        )
    }
}
const mapStateToProps = (state) => ({ show: state.show });
export default connect(mapStateToProps
)(Title);
