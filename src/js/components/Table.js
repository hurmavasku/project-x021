import React, { Component } from "react";
import ReactDOM from "react-dom";
import DynamicTable from '@atlaskit/dynamic-table';

export class Table extends Component {

	constructor(props) {
		super(props);
		this.state = { 
			head: {},
			rows: [],
			ready: false
		};
	}

	componentDidMount() {

		fetch('https://data.hawaii.gov/api/views/cieb-g5na/rows.json')
		.then(results => {
			return results.json();
		}).then(data => {

			this.setState({head: {
				cells: data.meta.view.columns.map(function(head){
					return {
						key: head.fieldName,
						content: head.name,
        				isSortable: true,
						colspan: 1,
						width: 30
					}
				})
			}});

			this.setState({rows: data.data.map(function(row){ 
								console.log(row)
								return {
									key: row[0], cells:[{
										key: "notes",
										content: row[1],
										colspan: 1
									},{
										key: "month_year",
										content: row[2],
										colspan: 1
									},{
										key: "notes",
										content: row[3],
										colspan: 1
									},{
										key: "civilian_labor_force",
										content: row[4],
										colspan: 1
									},{
										key: "civilian_labor_force",
										content: row[5],
										colspan: 1
									},{
										key: "civilian_labor_force",
										content: row[6],
										colspan: 1
									},{
										key: "civilian_labor_force",
										content: row[7],
										colspan: 1
									},{
										key: "civilian_labor_force",
										content: row[8],
										colspan: 1
									},{
										key: "civilian_labor_force",
										content: row[9],
										colspan: 1
									},{
										key: "civilian_labor_force",
										content: row[10],
										colspan: 1
									},{
										key: "civilian_labor_force",
										content: row[11],
										colspan: 1
								    },{
										key: "civilian_labor_force",
										content: row[12],
										colspan: 1
									},{
										key: "civilian_labor_force",
										content: row[13],
										colspan: 1

									}]
								}
							})
						});
			

			this.setState({ready: true});
		})

	console.log(this.state.data);
}

render(){
	console.log(this.state.data);
	let caption = "hurma";
	return(

	<div>
	Hello I am a table
	{	this.state.ready ?
		<DynamicTable
	          caption={caption}
	          head={this.state.head}
	          rows={this.state.rows}
	          rowsPerPage={5}
	          defaultPage={1}
	          loadingSpinnerSize="large"
	          isLoading={false}
	          isFixedSize
	          defaultSortKey="term"
	          defaultSortOrder="ASC"
	          onSort={() => console.log('onSort')}
	          onSetPage={() => console.log('onSetPage')}
	        /> : "Data loading"
	}

		</div>


	)
}
}


const wrapper_table = document.getElementById("my_table");
wrapper_table ? ReactDOM.render(<Table />, wrapper_table) : false;