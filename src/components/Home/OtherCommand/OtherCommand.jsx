import React from 'react'
import './styles/style.css'
import { Link } from 'react-router'

let other1 = require('./images/other1.png');
let other2 = require('./images/other2.png');
let other3 = require('./images/other3.png');
let other4 = require('./images/other4.png');


//产品栏目
class OtherCommand extends React.Component {
    render() {
        return (
            <div>
              <div className="OtherCommand clearfix">
                <div className="OtherComandBox fl">
                  <a href="http://mp.weixin.qq.com/s/uxiFyIAwDtgGk0p7LenVEQ">
                      <p>每日推荐</p>
                      <img src={other1} alt="每日推荐" />
                  </a>
                </div>
                <div className="OtherComandBox fr">
                  <Link to="/livelihood">
                    <a>
                      <p>民生服务</p>
                      <img src={other2} alt="民生服务" />
                    </a>
                  </Link>
                </div>
                <div className="OtherComandBox fl">
                  <a href="http://mp.weixin.qq.com/s/k4AUW3u0UcDme9D-RCIxGg">
                    <p>跨境金融</p>
                    <img src={other3} alt="薪酬管理" />
                  </a>
                </div>
                <div className="OtherComandBox fr">
                  <Link to="/visa">
                    <a>
                      <p>签证代传递</p>
                      <img src={other4} alt="代办签证" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
        )
    }
}

export default OtherCommand
