import React from 'react'
import './styles/style.css'
import { Data } from'./data/DotArr.js';
import DotContatin from '../../components/DotContatin/DotContatin';
import Search from '../../components/Search/Search';
import SelectArea from '../../components/SelectArea/SelectArea';
//产品栏目
class DotQuery extends React.Component {
    constructor(){
      super();
      this.state = {
        AllDotArr: Data
      }
    }
    // clickHandler(){
    //    this.setState({
    //
    //    })
    // }
    componentDidMount(){

    }
    render() {
        return (
            <div>
              <Search/>
              <SelectArea/>
              <DotContatin dotData={this.state.AllDotArr}/>
            </div>
        )
    }
}

export default DotQuery
