import React from 'react'
import './styles/style.css'


let Livelihood1 = require('./images/livelihood1.jpg');
let Livelihood2 = require('./images/livelihood2.jpg');
let Livelihood3 = require('./images/livelihood3.jpg');
let Livelihood4 = require('./images/livelihood4.jpg');


//产品栏目
class Livelihood extends React.Component {
    render() {
        return (
            <div>
              <div className="containt">
                <a href="http://mp.weixin.qq.com/s/aD7Rr3dQmA24MnqruFs7UA" className="livelihoodA">
                  <div className="Livelihood-new-list clearfix">
                    <div className="livelihood-new-list-item-lift fl">
                      <img src={Livelihood4} />
                    </div>
                    <div className="livelihood-new-list-item-right fl">
                      紧急！最后两周！你必须注意的事情！
                    </div>
                  </div>
                </a>
                <a href="http://mp.weixin.qq.com/s/xmLi78blEeeikft9dbQmcA" className="livelihoodA">
                  <div className="Livelihood-new-list clearfix">
                    <div className="livelihood-new-list-item-lift fl">
                      <img src={Livelihood1} />
                    </div>
                    <div className="livelihood-new-list-item-right fl">
                      2017年公积金变动提醒
                    </div>
                  </div>
                </a>
                <a href="http://mp.weixin.qq.com/s/w0N_XRKBMmc6mxLbs-6etg" className="livelihoodA">
                  <div className="Livelihood-new-list clearfix">
                    <div className="livelihood-new-list-item-lift fl">
                      <img src={Livelihood2} />
                    </div>
                    <div className="livelihood-new-list-item-right fl">
                      如何通过全国住房公积金异地转移接续平台将异地公积金转入深圳？
                    </div>
                  </div>
                </a>
                <a href="http://mp.weixin.qq.com/s/lYj_gjmJqqsD2ptrg2GeYg" className="livelihoodA">
                  <div className="Livelihood-new-list clearfix">
                    <div className="livelihood-new-list-item-lift fl">
                      <img src={Livelihood3} />
                    </div>
                    <div className="livelihood-new-list-item-right fl">
                      深圳金融社保卡十问
                    </div>
                  </div>
                </a>
              </div>
            </div>
        )
    }
}

export default Livelihood
