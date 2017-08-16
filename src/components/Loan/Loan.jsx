import React from 'react'
import './styles/style.css'


let loan1 = require('./images/loan1.png');
let loan2 = require('./images/loan2.png');
let loan3 = require('./images/loan3.png');
let loan4 = require('./images/loan4.png');


//产品栏目
class Loan extends React.Component {
    render() {
        return (
            <div>
              <div className="loanBox">
                {/*<!--个贷产品-->*/}
                <div className="loanBoxList">
                  <div className="topHeader">
                    <i>{}</i>
                    <span className="Sp-font">个贷产品</span>
                  </div>
                  <div className="loanCont clearfix">
                    <a href="http://junyu0754.com/shipin/index.php?uid=0">
                      <div className="loanContList fl">
                        <img src={loan1} alt="" />
                          <p className="Sp-font">房快贷</p>
                      </div>
                    </a>
                    <a href="http://mp.weixin.qq.com/s/lSpGqXUZuNS_gz-d6385-A">
                      <div className="loanContList fl">
                        <img src={loan2} alt="" />
                          <p className="Sp-font">公积金贷款</p>
                      </div>
                    </a>
                  </div>
                </div>
                {/*<!--便捷工具-->*/}
                <div className="loanBoxList">
                  <div className="topHeader">
                    <i>{}</i>
                    <span className="Sp-font">便捷工具</span>
                  </div>
                  <div className="loanCont clearfix">
                    <a href="http://m.icbc.com.cn/WapDynamicSite/TouchPage/Calculators/CreditCalc.aspx">
                      <div className="loanContList fl">
                        <img src={loan3} alt="" />
                          <p className="Sp-font">贷款计算器</p>
                      </div>
                    </a>
                    <a href="http://m.icbc.com.cn/wapDynamicSite/TouchPage/MoneyRate/Loan.aspx">
                      <div className="loanContList fl">
                        <img src={loan4} alt="" />
                          <p className="Sp-font">贷款利率表</p>
                      </div>
                    </a>
                  </div>
                </div>
                {/*我要贷款*/}
                <div className="goToLoan" style={{ display: 'none', width: '100%' }}>
                  <button className="Sp-font">我要贷款</button>
                </div>
              </div>
            </div>
        )
    }
}

export default Loan
