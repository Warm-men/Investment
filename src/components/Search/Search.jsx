import React from 'react'
import './styles/style.css';

let searchImg = require('./images/search.png');
class Search extends React.Component {
    render() {
        return (
            <div>
                <div className="search-box">
                    <div className="search-con">
                        <span><img src={searchImg} alt="放大镜"/></span>
                        <input type="text" placeholder="搜索"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search
