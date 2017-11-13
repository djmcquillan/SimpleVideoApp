/* imports */
import React, { Component } from 'react';

/* Search bar compnent */
class SearchBar extends Component {
	//initialize component
	constructor(props){
		//call parent method super
		super(props);

		//initial state on load
		this.state = { searchTerm: '' };

		//binding
		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(searchTerm) {
		this.setState ({
			searchTerm: searchTerm
		});
	}

	onSearchBtnClicked(){
		this.props.onSearchTermChanged(this.state.searchTerm);
	}

	render() {
		return (
			<div className='search-bar'>
				<input 
					onChange={e => this.onInputChange(e.target.value)} 
					value={this.state.term}/>
					<button 
						className='glyphicon glyphicon-search search-icon'
						onClick={e => this.onSearchBtnClicked()}>
					</button>
			</div>
		);
	}
}
/* exports */
export default SearchBar;


