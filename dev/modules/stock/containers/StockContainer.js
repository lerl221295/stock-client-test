import React, { Component } from 'react'
import Panel from '../presentationals/Panel'
import API_URL from '../../../API_URL'

class Stock extends Component {
	constructor(props){
		super(props);
		this.state = {
			loading: false,
			search_text: "",
			stock: []
		}
	}

	getStock = async () => {
		let uri = "/stock";
		if(this.state.search_text) uri+= `?product_name=${this.state.search_text}&product_code=${this.state.search_text}`;
		this.setState({loading:true});
		const stock = await fetch(`${API_URL}${uri}`)
			.then(response => response.json());
		this.setState({stock, loading: false});
	}

	changeSearchText = search_text => this.setState({search_text});

	componentWillMount = () => this.getStock();

	render = () => (
		<Panel
			loading={this.state.loading}
			stock={this.state.stock}
			search_text={this.state.search_text}
			changeSearchText={this.changeSearchText}
			search={this.getStock}
		/>
	)
}

export default Stock;