import React from 'react'
import './styles/style.css'
import { Data } from'./data/DotArr.js';
import DotContatin from '../../components/DotContatin/DotContatin';
import Search from '../../components/Search/Search';
import SelectArea from '../../components/SelectArea/SelectArea';
//产品栏目
class DotQuery extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        DotArr: []
      }
    }
    submitFn(value){
        if ( value == '全部' ){
            this.setState({
                DotArr: Data
            });
        }else{
            const AllDotArr = Data;//网点库数组
            const hitValue = value;//搜索框关键字
            let searchDotArr = [];//搜索关键字后得到的搜索结果数组
            let searchIdotAnswar;//网点关键字
            let searchAreaAnswar;//地址关键字
            AllDotArr.map(function (item,index) {
                searchIdotAnswar = new RegExp(hitValue).test(item.dotName);//遍历网点库数组网点名称是否包含该关键字的网点对象；
                searchAreaAnswar = new RegExp(hitValue).test(item.address);//遍历网点库数组网点地址是否包含该关键字的网点对象；
                if (searchIdotAnswar || searchAreaAnswar){
                    searchDotArr.push(AllDotArr[index]);
                }
            });
            //搜索关键字得到的数组，传给this.state.DotArr更新列表
            this.setState({
                DotArr: searchDotArr
            });
        }

    }
    selectAreaFn(value){
        this.submitFn(value);
    }
    componentDidMount(){
        this.setState({
            DotArr: Data
        })
    }
    render() {
        return (
            <div>
              <Search submitFn={this.submitFn.bind(this)} searchVal={this.state.searchVal}/>
              <SelectArea selectAreaFn={this.selectAreaFn.bind(this)} />
              <DotContatin dotData={this.state.DotArr}/>
            </div>
        )
    }
}

export default DotQuery
