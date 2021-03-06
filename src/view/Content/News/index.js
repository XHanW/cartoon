import React from 'react';
import Card from '../../../component/Card';
import Title from '../../../component/Title';
import Arrows from '../../../component/Arrows';
import TitleContent from '../../../component/TitleContent';
import imgUrl from '../../../static/product.json';
import sc8 from '../../../static/sc8.jpg';
import { title } from '../../../component/data';
import './style.scss';

const text = [
    [
        "《女子落语》今夏将有新动向",
        "四格漫画《琴浦小姐》完结",
        "海贼王》784话图透"
    ],
    [
        '「飙速宅男」一番赏主题周边',
        '“V-Star”化身最强声优英雄，替流浪“喵汪”星人呐喊',
        '中二祭日语翻唱比赛结果揭晓'
    ]
];
const sliderimg = [
    { src: imgUrl.sc1, name: '宫崎骏' },
    { src: imgUrl.sc2, name: '犬夜叉' },
    { src: imgUrl.sc3, name: '海贼王' },
    { src: imgUrl.sc4, name: '柯南' },
    { src: imgUrl.sc5, name: '浪客剑心' },
    { src: imgUrl.sc6, name: '全金属狂潮' },
    { src: imgUrl.sc7, name: '蜡笔小新' },
    { src: sc8, name: '超电磁炮' },
    { src: imgUrl.sc9, name: '飞轮少年' },
    { src: imgUrl.sc10, name: '火影忍者' }
];

class News extends React.Component {
    state = {
        moveNum: 2
    }
    leftMove = () => {
        if(this.state.moveNum >= 5) return false
        this.setState(preState => ({
            moveNum: preState.moveNum + 1
        })
        )
    }
    rightMove = () => {
        if(this.state.moveNum <= 0) return false
        this.setState(preState => ({
            moveNum: preState.moveNum - 1
        })
        )
    }
    // style={this.state.moveNum >= 5 ? { display: 'none' } : {}}
    render() {
        const setLeft = -(this.state.moveNum * 80);
        return (
            <Card>
                <div className="news-left">
                    <div><Title currentcontent="news" title={title.news} /></div>
                    <TitleContent shows={'showNews'} currentitle={'公告'} content={text[0]} />
                    <TitleContent shows={'showNews'} currentitle={'动态'} content={text[1]} />
                </div>
                <div className="news-right">
                    <p>便捷服务</p>
                    <div className="news-slider">
                        <Arrows onClick={this.leftMove} content={'<'}/>
                        <div className="slidebox">
                            <div style={{ left: `${setLeft}px` }} className="imgbox">
                                {sliderimg.map((content, i) => <div style={{ order: { i } }} key={i}><img src={content.src} /><p>{content.name}</p></div>)}
                            </div>
                        </div>
                        <Arrows onClick={this.rightMove} content={'>'}/>
                    </div>
                </div>
            </Card>
        )
    }
}

export default News;
