import React from 'react'
import './styles/style.css'
import { Link } from 'react-router'
import Popu from '../Popu/Popu';

let $ = require('jquery');

let pro1 = require('./images/account.png');
let pro2 = require('./images/pro1.png');
let pro3 = require('./images/pro22.png');
let pro4 = require('./images/pro6.png');
let pro5 = require('./images/pro4.png');
let pro6 = require('./images/pro3.png');
let pro7 = require('./images/pro77.png');
let pro8 = require('./images/more.png');

//产品栏目
class Pro extends React.Component {
    constructor(){
      super();
      this.state = {
        isWarning: false
      }
    }
    showSaveCover() {
      let self = this;
      this.setState({
        isWarning: true
      });
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        self.setState({
          isWarning: false
        });
      }, 3000);
    }
    render() {
        return (
            <div>
              <div className="ProductionBox clearfix">
                <ul>
                  <li>
                    <a  href="http://mp.weixin.qq.com/s/t2AwYILXK521DltOE12R9g">
                      <div>
                        <img src={pro1} alt="个人账户" />
                      </div>
                      <p>个人账户</p>
                    </a>
                  </li>
                  <li>
                    <a href="http://mp.weixin.qq.com/s/iIrhkeHv_XA8UZoaJvGzNQ">
                      <div>
                        <img src={pro2} alt="存款" />
                      </div>
                      <p>特色存款</p>
                    </a>
                  </li>
                  <li>
                    <Link to="/loan">
                      <a href="#">
                        <div>
                          <img src={pro3} alt="贷款" />
                        </div>
                        <p>个人贷款</p>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/financing">
                      <a href="#">
                        <div>
                          <img src={pro4} alt="理财产品" />
                        </div>
                        <p>理财产品</p>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <a href="http://m.icbc.com.cn/ICBC/%E5%9F%BA%E9%87%91/default.htm">
                      <div>
                        <img src={pro5} alt="基金" />
                      </div>
                      <p>基金</p>
                    </a>
                  </li>
                  <li>
                    <a href="http://m.icbc.com.cn/ICBC/%e4%bf%9d%e9%99%a9/default1.htm">
                      <div>
                        <img src={pro6} alt="保险" />
                      </div>
                      <p>保险</p>
                    </a>
                  </li>
                  <li>
                    <a href="http://m.freeairnet.cn/portal/home?cpid=106&gid=0&nid=0&hid=232&from=singlemessage&isappinstalled=0">
                      <div>
                        <img src={pro7} alt="贵金属" />
                      </div>
                      <p>金银投资</p>
                    </a>
                  </li>
                  <li>
                    <a href="http://mp.weixin.qq.com/s/xT9CuOAWfSFp-Y54IYzSFQ">
                      <div>
                        <img src={pro8} alt="热门" />
                      </div>
                      <p>热门</p>
                    </a>
                  </li>
                </ul>
              </div>
              {/*敬请期待*/}
              <div
                style={{ display: this.state.isWarning ? "block" : "none" }}
              ><Popu popuText="敬请期待"/></div>
            </div>
        )
    }


}

export default Pro
