import React from 'react';
import './styles/style.css';

class SelectArea extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectArea: ''
        }
    }
    onClickHandler(){
        let that = this;//绑定组件this对象
        const ul = document.getElementById('ulCont');//获取ul对象
        const ul_lis = ul.getElementsByTagName('li');//获取li对象
        let val;//保存li的属性值
        let BorderLeft = '20px';//li底部描边的位置
        const len = ul_lis.length;
        for (let i = 0;i < len; i++) {
            ul_lis[i].onclick = function(){
                let _this = this;
                let leftCount = 80 * i;
                val = _this.getAttribute('datatype');
                that.setState({
                    selectArea: val//保存li的属性值
                });
                BorderLeft = leftCount + 20;
                let Border = document.getElementById('Border');
                Border.style.left = BorderLeft.toString() + 'px';
                _this.getElementsByTagName('div')[0].style.color = '#23b3ff';
                for(let j=0;j<len;j++){
                  if(j!=i){
                    ul_lis[j].getElementsByTagName('div')[0].style.color = '#323232';
                  }
                }
            }
        }
        that.props.selectAreaFn(this.state.selectArea);

    }
    componentDidMount(){
        this.onClickHandler();
    }
    render() {
        return (
            <div>
                <div className="SelectArea-box">
                    <div className="SelectArea-cont">
                        <i id="Border">{}</i>
                        <ul id="ulCont">
                            <li onClick={this.onClickHandler.bind(this)} datatype="全部">
                              <div className="areaName">全部</div>
                            </li>
                            <li onClick={this.onClickHandler.bind(this)} datatype="罗湖">
                                <div className="areaName">罗湖区</div>
                            </li>
                            <li onClick={this.onClickHandler.bind(this)} datatype="福田">
                              <div className="areaName">福田区</div>
                            </li>
                            <li onClick={this.onClickHandler.bind(this)} datatype="南山">
                              <div className="areaName">南山区</div>
                            </li>
                            <li onClick={this.onClickHandler.bind(this)} datatype="盐田">
                              <div className="areaName">盐田区</div>
                            </li>
                            <li onClick={this.onClickHandler.bind(this)} datatype="龙岗">
                              <div className="areaName">龙岗区</div>
                            </li>
                            <li onClick={this.onClickHandler.bind(this)} datatype="宝安">
                              <div className="areaName">宝安区</div>
                            </li>
                            <li onClick={this.onClickHandler.bind(this)} datatype="光明">
                              <div className="areaName">光明新区</div>
                            </li>
                            <li onClick={this.onClickHandler.bind(this)} datatype="坪山">
                              <div className="areaName">坪山新区</div>
                            </li>
                            <li onClick={this.onClickHandler.bind(this)} datatype="龙华">
                              <div className="areaName">龙华新区</div>
                            </li>
                            <li onClick={this.onClickHandler.bind(this)} datatype="大鹏">
                              <div className="areaName">大鹏新区</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default SelectArea
