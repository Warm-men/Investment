import React from 'react'

let hit1 = require('./images/hit1.jpg');
let hit2 = require('./images/hit2.png');

//产品栏目
class Hit extends React.Component {
    render() {
        return (
            <div>
              <div className="containt">

                <a href="http://mp.weixin.qq.com/s/4P_CNNud9x1VEPkqCJRSRA" className="livelihoodA">
                  <div className="Livelihood-new-list clearfix">
                    <div className="livelihood-new-list-item-lift fl">
                      <img src={hit2} />
                    </div>
                    <div className="livelihood-new-list-item-right fl">
                      【国庆重磅福利来袭】9月29日、9月30日现金管理类产品等您来买，资金投资不放假！
                    </div>
                  </div>
                </a>
                <a href="http://mp.weixin.qq.com/s/qadBpgGnx6ieF7CaGXUbhg" className="livelihoodA">
                  <div className="Livelihood-new-list clearfix">
                    <div className="livelihood-new-list-item-lift fl">
                      <img src={hit1} />
                    </div>
                    <div className="livelihood-new-list-item-right fl">
                      国庆闲钱随意存，给你活期的便捷 定期的收益！
                    </div>
                  </div>
                </a>
                <a href="http://mp.weixin.qq.com/s/ZBYNXTcVREZUTuB0u3BAcw" className="livelihoodA">
                  <div className="Livelihood-new-list clearfix">
                    <div className="livelihood-new-list-item-lift fl">
                      <img src={hit1} />
                    </div>
                    <div className="livelihood-new-list-item-right fl">
                      【e起燃】你见过现实版隐身衣、飞行包吗？工行“e起燃”，带您体验黑科技
                    </div>
                  </div>
                </a>

              </div>
            </div>
        )
    }
}

export default Hit
