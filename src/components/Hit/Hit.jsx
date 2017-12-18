import React from 'react'

//let hit1 = require('./images/hit1.jpg');
//let hit2 = require('./images/hit2.png');
let data = [
  {
    ArticleUrl:'http://mp.weixin.qq.com/s/4P_CNNud9x1VEPkqCJRSRA',
    ImgUrl:require('./images/hit2.png'),
    text: '【国庆重磅福利来袭】9月29日、9月30日现金管理类产品等您来买，资金投资不放假！'
  },{
    ArticleUrl:'http://mp.weixin.qq.com/s/qadBpgGnx6ieF7CaGXUbhg',
    ImgUrl:require('./images/hit1.jpg'),
    text: '国庆闲钱随意存，给你活期的便捷 定期的收益！'
  },{
    ArticleUrl:'http://mp.weixin.qq.com/s/ZBYNXTcVREZUTuB0u3BAcw',
    ImgUrl:require('./images/hit1.jpg'),
    text: '【e起燃】你见过现实版隐身衣、飞行包吗？工行“e起燃”，带您体验黑科技'
  }
];
//产品栏目
class Hit extends React.Component {

    render() {
        return (
            <div>
              <div className="containt">
                {
                  data.map(function (item,index) {
                      return(
                        <a href={item.ArticleUrl} className="livelihoodA" key={index}  >
                          <div className="Livelihood-new-list clearfix">
                            <div className="livelihood-new-list-item-lift fl">
                              <img src={item.ImgUrl}/>
                            </div>
                            <div className="livelihood-new-list-item-right fl">{item.text}</div>
                          </div>
                        </a>
                      )
                  })
                }
              </div>
            </div>
        )
    }
}

export default Hit
