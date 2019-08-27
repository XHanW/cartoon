import React from 'react';
import './style.scss';


class Rightside extends React.Component {
    state = {
        imgUrl:''
    }
    componentDidMount(){
        fetch(`/product.json`)
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                    imgUrl:res.aside
                })
            })
    }
    render() {
        return (
            <div className="right-side">
                <img src={this.state.imgUrl} alt="fixed"/>
                <br />
                <a href="#">最爱幽灵公主</a>
            </div>
        )
    }
}

export default Rightside;
