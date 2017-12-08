import React from 'react'
import './styles/style.css'

let $ = require('jquery');

let hotTopic = require('./images/hotTopic.png');


//产品栏目
class Headlines extends React.Component {
    componentDidMount(){
      setInterval(function () {
        $('.maquee').find("ul").animate({
          marginTop : "-30px"
        },500,function(){
          $(this).css({marginTop : "0px"}).find("li:first").appendTo(this);
        })
      },3000);
    }
    render() {
        return (
            <div>
              <div className="hotTopic clearfix">
                <div className="hotTopicLeft fl">
                  <img src={hotTopic} alt="hotTopic" />
                </div>
                <div className="hotTopicRight fl">
                  <div className="maquee">
                    <ul>
                      <li>
                        <a href="https://mp.weixin.qq.com/s/H-a-oyxnxzHVxD3XV2ukdQ"><span>资讯</span>【新品推荐】工银挂钩指数型理财产品又来一批新成员了</a>
                      </li>
                      <li>
                        <a href="http://mp.weixin.qq.com/s/E9QbvKE_gslMkgKxyvk_Pw"><span>资讯</span>【工银理财节】距"感恩优享,重阳聚惠"理财节还有4天,带您一起步步登高！</a>
                      </li>
                      <li>
                        <a href="http://mp.weixin.qq.com/s/HMWZeWoL06IQMkOlbmmcBQ"><span>资讯</span>【明星大联盟】个人“三利”产品，收益稳健递增的好帮手！</a>
                      </li>
                      <li>
                        <a href="http://mp.weixin.qq.com/s/OFU-qBnvay_eHkCDMv5HLw"><span>资讯</span>【流动资金管理专家】工银e灵通——7*24小时全天候为您服务！</a>
                      </li>
                      <li>
                        <a href="http://mp.weixin.qq.com/s/EqRx2hBeisy6exHWRBez7g"><span>资讯</span>迎国庆，庆中秋，第二届工银理财节倒计时6天，带你一起“燃”！</a>
                      </li>
                      <li>
                        <span>资讯</span>开学季工行陪您e起燃
                      </li>
                      <li>
                        <span>资讯</span>理财节持续进行
                      </li>
                      <li>
                        <a href="http://mp.weixin.qq.com/s/ymkTkn2vIeaXDiuD4NqGGA"><span>资讯</span>工银理财热点在售</a>
                      </li>
                    </ul>
                  </div>

                </div>
              </div>
            </div>
        )
    }
    clickHandler() {
      $('.waitingPopu').fadeIn(500);
      setTimeout(function(){
        $('.waitingPopu').fadeOut();
      },2000)
    }
}

export default Headlines
