import React from 'react';
import './styles/style.css';

const DotUrl = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxace036fbb4b7b7ac&redirect_uri=http%3A%2F%2Fwxdis3972.visachina.cn%2Findex&response_type=code&scope=snsapi_base&state=123&connect_redirect=1#wechat_redirect";
//产品栏目
class DotContatin extends React.Component {
    constructor(props){
      super();
      this.state = {
         ItemDotArr: props.dotData
      }
    }
    render() {
        return (
          <div>
            <div className="visaBox">
              <div className="Service-Network">
                <div>
                  {
                    this.state.ItemDotArr.map(function (item,index) {
                      return (
                        <div className="service-cont-box" key={index}>
                          <a href={DotUrl} >
                            <div className="service-cont-list clearfix">
                              <div className="service-cont-list-right fl">
                                <p>{item.dotName}</p>
                                <div>
                                  <i className="iconfont">&#xe63c;</i>
                                  {item.address}
                                </div>
                              </div>
                              <div className="service-cont-list-left fr">
                                <a href={item.tel}>
                                  <i className="iconfont">&#xe600;</i>
                                </a>
                              </div>
                            </div>
                            <label>
                              <div className="clickTo">
                                <span>点击办理</span>
                              </div>
                            </label>
                          </a>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default DotContatin
