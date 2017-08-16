import React from 'react';

require('./styles/common.css');
require('./styles/swiper.min.css');

let $ = require('jquery');
require('./js/swiper.min.js');
let pro1 = require('./images/banner2.jpg');
let pro2 = require('./images/banner3.jpg');


//产品栏目
class Banner extends React.Component {
  componentDidMount(){
    var numberOfimgs = $('.swiper-slide > img').length + 3;
    Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      slidesPerView: 1,
      paginationClickable: true,
      spaceBetween: 30,
      loop: true,
      autoplay: 3000,
      onSlideChangeEnd: function(swiper){
        if($('.swiper-slide').eq(2).hasClass('swiper-slide-active')){
          $('.swiper-slide').eq(0).clone().appendTo($('.swiper-wrapper'))
          if ($('.swiper-slide > img').length > numberOfimgs) {
            $('.swiper-slide:last').remove()
          }
        }
      }
    });
  }
  render() {
    return (
      <div>
        <div className="mod-wrap">
          <div className="l-tab-wrap index-swiper" id="index-swiper">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <a href='http://mp.weixin.qq.com/s/1D-So8U9rwXU6UCPzKJlBw' className="swiper-slide"><img className='index-img' src={pro1} /></a>
                <a href='#' className="swiper-slide"><img className='index-img' src={pro2} /></a>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Banner;
