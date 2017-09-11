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
                        <span>资讯</span>开学季工行陪您e起燃
                      </li>
                      <li>
                        <span>资讯</span>理财节持续进行
                      </li>
                      <li>
                        <a href="http://mp.weixin.qq.com/s/ymkTkn2vIeaXDiuD4NqGGA"><span>资讯</span>工银理财热点在售</a>
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
