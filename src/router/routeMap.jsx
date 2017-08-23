import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from '../components/Main'
import Home from '../components/Home/Home'
import Financing from '../components/Financing/Financing'

import Livelihood from '../components/Livelihood/Livelihood'
import Loan from '../components/Loan/Loan'
import Visa from '../components/Visa/Visa'
import DailyRecommend from '../components/DailyRecommend/DailyRecommend'
import NotFound from '../components/NotFound'

let time = 0;

class RouteMap extends React.Component {
    updateHandle() {
        console.log(time++);
    }
    render() {
        return (
            <Router history={this.props.history} onUpdate={this.updateHandle.bind(this)}>
              <Route path='/' component={App}>
                <IndexRoute component={Home}/>
                <Route path='financing' component={Financing}/>
                <Route path='loan' component={Loan}/>
                <Route path='livelihood' component={Livelihood}/>
                <Route path='visa' component={Visa}/>
                <Route path='dailyRecommend' component={DailyRecommend}/>
                <Route path="*" component={NotFound}/>
              </Route>
            </Router>
        )
    }
}

export default RouteMap
