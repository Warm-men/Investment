import React from 'react';
import './styles/style.css';
import { Link } from 'react-router';


let visa = require('./images/visa.jpg');
let service = require('./images/Customer-service.png');

//产品栏目
class Visa extends React.Component {
    constructor(){
      super();
      this.state = {
         showType: false
      }
    }
    clickHandler(){
       this.setState({
         showType: !this.state.showType
       })
    }
    render() {
        return (
            <div>
              {/*客服链接*/}
              <div className="Customer-service">
                <a href="http://html.ecqun.com/kf/sdk/openwin.html?corpid=6287319&cstype=rand&mode=0&cskey=2ika79Q4s1DID1RJo6&scheme=0">
                  <img src={service} alt="联系客服"/>
                  <p>联系客服</p>
                </a>
              </div>
              <div className="visaBox">
                <div className="headBox">
                  <a href="http://v2.rabbitpre.com/m/reAf6rk?lc=3&sui=7Zkfw7Q3&from=groupmessage&isappinstalled=0#from=share">
                    <img src={visa} />
                  </a>
                </div>
                <div className="brief-introduction Sp-font-family">
                  签证代传递服务是指我行合作的第三方专业服务机构为客户申请各国签证提供代办服务。我行通过指定营业网点在客户和第三方专业服务机构之间传递签证申请资料及费用。我行仅负责收取客户相关资料并进行传递，不负责签证材料的审核、出签与否、签证代传递业务投诉和纠纷处理。
                </div>
                <div className="check-box">
                  {/*服务网点*/}
                  <Link to="/dotQuery">
                    <div  className="check">
                      <div>
                        <span>服务网点</span>
                        <i className="iconfont">&#xe612;</i>
                      </div>
                    </div>
                  </Link>
                  {/*个人查询*/}
                  <a href="http://wxdis3972.visachina.cn/index?userCenter=&code=001ZvnZy1bhOAe0GyOXy18fHZy1ZvnZF&state=123#/userCenter"  className="check">
                    <div>
                      <span>签证进度查询</span>
                      <i className="iconfont">&#xe612;</i>
                    </div>
                  </a>
                  {/*银行查询*/}
                  <a  href="http://wxdis3972.visachina.cn/index#/icbcLogin" className="check">
                    <div>
                      <span>银行查询</span>
                      <i className="iconfont">&#xe612;</i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
        )
    }
}

export default Visa
