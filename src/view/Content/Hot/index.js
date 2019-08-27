import React from "react";
import Card from '../../../component/Card/index';
import TitleContent from '../../../component/TitleContent/TitleContent';
import More from '../../../component/More/index';
import "./style.scss";

const hot = {
    title: [
        "最新",
        "经典动漫",
        "新番动漫",
        "漫画热点",
        "动漫前沿",
        "实时追踪"
    ],
    content: [
        "12岁少女论文抗议游戏性别歧视",
        "韩国版《死亡笔记》定妆照",
        "樱井光新作《Fate/Labyrinth》开载",
        "《海贼王》下周休刊",
        "《四月是你的谎言》结局解读",
        "《横乳版开胸衣》强大威力"
    ]
};

const content = [
    "丧心病狂！你选左边，还是右边？",
    "二次元少女咸湿百合图集",
    "《路人女主》霞之丘诗羽图集",
    "「闪乱神乐」葛城手办",
    "一集日本动画要花多少钱？",
    "《K》动画2期没开播就先来杀必死",
    "真实版“后宫学校”的开学典礼",
    "部分人看到是透明的裙子",
    "黑暗恐怖动画电影一览",
    "一集日本动画要花多少钱？"
]
export default class Hot extends React.Component {
    createHotlist = (arg, i) => {
        return (
            <div key={i} className="cartoon-hot-info-list">
                <span>{arg}</span>
                <li><a href=".">{hot['content'][i]}</a></li>
            </div>
        )
    }
    createHotLists = () => hot['title'].map(this.createHotlist);

    render() {
        return (
            <Card>
                <React.Fragment>
                    <div className="cartoon-hot">
                        <p>动漫热讯</p>
                        <div className="cartoon-hot-info">
                            {this.createHotLists()}
                            <More />
                        </div>
                    </div>
                    <div className="cartoon-about">
                        <p>相关咨讯</p>
                        <TitleContent about={'block'} content={content} />
                    </div>
                </React.Fragment>
            </Card>
        );
    }
}
