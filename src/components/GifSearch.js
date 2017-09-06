import React from 'react'

class GifSearch extends React.Component {

	constructor(props){
		super(props)

		this.state = {
			  inputValue: ""
		}

		this.handleChange = this.handleChange.bind(this)

		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(event) {
		console.log(event.target.value)
		this.setState({inputValue: event.target.value})
	}

	handleSubmit(event){
		event.preventDefault()
		this.props.handleSubmit(this.state.inputValue)
	}

	render(){
		return(
	  	  <form onSubmit={this.handleSubmit}>
		      <input type="text" onChange={this.handleChange} value={this.state.inputValue}/>
		      <input type="submit" value="get gifs :)" />
	      </form>
    	)
	}


}

export default GifSearch;