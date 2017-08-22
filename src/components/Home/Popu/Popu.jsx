import React from 'react'


//产品栏目
class Popu extends React.Component {
    render() {
        return (
            <div>
              <div className="waitingPopu">
                <div className="waitingPopuBox">
                  <div className="tip">
                    {this.props.popuText}
                  </div>
                </div>
              </div>
            </div>
        )
    }
}

export default Popu
