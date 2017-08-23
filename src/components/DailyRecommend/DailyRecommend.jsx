import React from 'react'
let mainImg = require('./images/dr.jpg');

//产品栏目
class DailyRecommend extends React.Component {
    render() {
        return (
            <div>
              <img src={mainImg} alt="" style={{ width: '100%' }} />
            </div>
        )
    }
}

export default DailyRecommend
