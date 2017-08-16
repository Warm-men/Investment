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
                        <span>资讯</span>热烈庆祝“零售资讯”上线
                      </li>
                      <li>
                        <span>资讯</span>热烈庆祝“零售资讯”上线
                      </li>
                      <li>
                        <span>资讯</span>热烈庆祝“零售资讯”上线
                      </li>
                      <li>
                        <span>资讯</span>热烈庆祝“零售资讯”上线
                      </li>
                      <li>
                        <span>资讯</span>热烈庆祝“零售资讯”上线
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
