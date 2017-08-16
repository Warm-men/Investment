import React from 'react'
import './styles/style.css'


let financing1 = require('./images/financing1.png');
let financing2 = require('./images/financing2.png');
let financing3 = require('./images/financing3.png');
let financing4 = require('./images/financing4.png');


//产品栏目
class Financing extends React.Component {
    render() {
        return (
            <div>
              <div className="containt">
                <div className="listBox">
                  <a href="http://mp.weixin.qq.com/s/5UgNanXKIWPB-Z5JOSxxSg">
                    <div className="listCont clearfix">
                      <div className="listContLeft fl">
                        <img src={financing1} alt="" />
                      </div>
                      <div className="listContRight fl">
                        <p>保本理财</p>
                        <span>投资期限：35天-364天</span>
                        <span>预期收益：3.2%-3.7%</span>
                      </div>
                    </div>
                  </a>
                  <a href="http://mp.weixin.qq.com/s/zGlCCIaXQnbM3utYOPN9BQ">
                    <div className="listCont clearfix">
                      <div className="listContLeft fl">
                        <img src={financing2} alt="" />
                      </div>
                      <div className="listContRight fl">
                        <p>现金管理</p>
                        <span>投资期限：无固定期限</span>
                        <span>预期收益：最高至3.5%</span>
                      </div>
                    </div>
                  </a>
                  <a href="http://mp.weixin.qq.com/s/qhJRgIMnv8QR6tMQPNOeRw">
                    <div className="listCont clearfix">
                      <div className="listContLeft fl">
                        <img src={financing3} alt="" />
                      </div>
                      <div className="listContRight fl">
                        <p>优选主题</p>
                        <span>投资期限：中长期投资</span>
                        <span>预期收益：最高至4.75%</span>
                      </div>
                    </div>
                  </a>
                  <a href="http://m.icbc.com.cn/wapDynamicSite/TouchPage/Money/Search.aspx">
                    <div className="listCont clearfix">
                      <div className="listContLeft fl">
                        <img src={financing4} alt="" />
                      </div>
                      <div className="listContRight fl">
                        <p>更多理财</p>
                        <span>投资期限：期限多样</span>
                        <span>预期收益：见具体产品</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
        )
    }
}

export default Financing
