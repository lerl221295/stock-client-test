import React, { Component } from 'react'
import Loading from '../../common/Loading'
import {
	Table,
	TableBody,
	TableHeader,
	TableHeaderColumn,
	TableRow,
	TableRowColumn,
	TableFooter
} from 'material-ui/Table'
import {TextField, IconButton} from 'material-ui';
import { Grid, Row, Col } from 'react-flexbox-grid';
import SearchIcon from 'material-ui/svg-icons/action/search';

const Panel = ({loading, stock, search_text, changeSearchText, search}) => {
	return(
		<Grid>
			<Row>
				<TextField
      				hintText="Busque sus productos"
      				value={search_text}
      				onChange={({target: {value}}) => changeSearchText(value)}
      				onKeyPress={({key}) => {
      					if(key === "Enter") search();
      				}}
    			/>
    			<IconButton tooltip="Buscar" onClick={search}>
      				<SearchIcon />
    			</IconButton>
			</Row>
			{do {
				if(loading) (<Loading/>);
				else (
					<Row>
						<Table>
				        	<TableHeader displaySelectAll={false} adjustForCheckbox={false}>
				            	<TableRow>
				              		<TableHeaderColumn>Codigo de producto</TableHeaderColumn>
				              		<TableHeaderColumn>Nombre del producto</TableHeaderColumn>
				              		<TableHeaderColumn>Entradas</TableHeaderColumn>
				              		<TableHeaderColumn>Salidas</TableHeaderColumn>
				              		<TableHeaderColumn>Items en Stock</TableHeaderColumn>
				            	</TableRow>
				         	</TableHeader>
				          	<TableBody displayRowCheckbox={false}>
								{
									stock.map(({entries, outs, product_name, product_code, available_items}, i) => (
										<TableRow key={i}>
				              				<TableRowColumn>
				              					{product_code}
				              				</TableRowColumn>
				              				<TableRowColumn>
				              					{product_name}
				              				</TableRowColumn>
				              				<TableRowColumn>
				              					{entries}
				              				</TableRowColumn>
				              				<TableRowColumn>
				              					{outs}
				              				</TableRowColumn>
				              				<TableRowColumn className="stock-quantity">
				              					{do {
				              						if(available_items === null) "Fuera de Stock";
				              						else available_items;
				              					}}
				              				</TableRowColumn>
				              			</TableRow>
									))
								}
				          	</TableBody>
				        </Table>
					</Row>
				)
			}}
		</Grid>
	);
}


export default Panel