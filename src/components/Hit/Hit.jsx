import React from 'react'

let hit1 = require('./images/hit1.jpg');



//产品栏目
class Hit extends React.Component {
    render() {
        return (
            <div>
              <div className="containt">
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
