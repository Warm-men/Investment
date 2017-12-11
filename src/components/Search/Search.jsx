import React from 'react'
import './styles/style.css';

let searchImg = require('./images/search.png');
class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value : ''
        }
    }
    componentWillUpdate(nextProps, nextState){

    }
    changeHandler(e) {
      // 实时同步数据
        this.setState({
            value: e.target.value
        });
      //const value = this.state.value;
      this.props.submitFn(e.target.value);
    }
    keyUpHandler(e) {
      const value = this.state.value;
      if (e.keyCode === 13 && value.trim()) {
        // 提交并清空数据
        this.props.submitFn(e.target.value);
      }
    }
    render() {
        return (
            <div>
                <div className="search-box">
                    <div className="search-con">
                        <span><img src={searchImg} alt="放大镜"/></span>
                        <input
                          value={this.state.value}
                          onChange={this.changeHandler.bind(this)}
                          onKeyUp={this.keyUpHandler.bind(this)}
                          placeholder="搜索"
                        />

                    </div>
                </div>
            </div>
        )
    }
}

export default Search
