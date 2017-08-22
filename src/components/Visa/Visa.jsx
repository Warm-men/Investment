import React from 'react'
import './styles/style.css'

let visa = require('./images/visa.jpg');


//产品栏目
class Visa extends React.Component {
    render() {
        return (
            <div>

              <div className="visaBox">
                <div className="headBox">
                  <img src={visa} />
                </div>
                <div className="brief-introduction Sp-font-family">
                  签证代传递服务是指我行合作的第三方专业服务机构为客户申请各国签证提供代办服务。我行通过指定营业网点在客户和第三方专业服务机构之间传递签证申请资料及费用。我行仅负责收取客户相关资料并进行传递，不负责签证材料的审核、出签与否、签证代传递业务投诉和纠纷处理。
                </div>
                <div className="Service-Network">
                  <div className="sn-title">服务网点</div>
                  {/*红围营业部*/}
                  <div className="service-cont-box" >
                    <a href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxace036fbb4b7b7ac&redirect_uri=http%3A%2F%2Fwxdis3972.visachina.cn%2Findex&response_type=code&scope=snsapi_base&state=123&connect_redirect=1#wechat_redirect" >
                      <div className="service-cont-list clearfix">
                        <div className="service-cont-list-right fl">
                          <p>红围营业部</p>
                          <div>
                            <i className="iconfont">&#xe63c;</i>
                            深圳市罗湖区解放路信兴广场附楼UG109、110
                          </div>
                        </div>
                        <div className="service-cont-list-left fr">
                          <a href="tel:0755-82414552">
                            <i className="iconfont">&#xe600;</i>
                          </a>
                        </div>
                      </div>
                      <a>
                        <div className="clickTo">
                          <span>点击办理</span>
                          <i className="iconfont">&#xe612;</i>
                        </div>
                      </a>
                    </a>
                  </div>
                  {/*和平支行*/}
                  <div className="service-cont-box" >
                    <a href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxace036fbb4b7b7ac&redirect_uri=http%3A%2F%2Fwxdis3972.visachina.cn%2Findex&response_type=code&scope=snsapi_base&state=123&connect_redirect=1#wechat_redirect" >
                      <div className="service-cont-list clearfix">
                        <div className="service-cont-list-right fl">
                          <p>和平支行</p>
                          <div>
                            <i className="iconfont">&#xe63c;</i>
                            深圳市罗湖区嘉宾路4051号金威大夏首层104房
                          </div>
                        </div>
                        <div className="service-cont-list-left fr">
                          <a href="tel:0755-25588366">
                            <i className="iconfont">&#xe600;</i>
                          </a>
                        </div>
                      </div>
                      <a>
                        <div className="clickTo">
                          <span>点击办理</span>
                          <i className="iconfont">&#xe612;</i>
                        </div>
                      </a>
                    </a>

                  </div>
                </div>
                <div className="empty20"></div>
              </div>
            </div>
        )
    }
}

export default Visa
