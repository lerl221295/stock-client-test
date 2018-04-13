import React, {Component} from 'react'
import {Router, Route} from 'react-router'
import Stock from './modules/stock/containers/StockContainer'


const notFound = () => <h1> not found </h1>
class Routes extends Component {
	render = () => (
		<Router history={this.props.history}>
			<Route path="stock" component={Stock}/>
			<Route path="*" component={notFound}/>
		</Router>
	)
}

export default Routes