import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends React.Component {
	constructor(){
		super()

		this.state = {
			gifs: []
		}

		this.handleSubmit = this.handleSubmit.bind(this)
	}


	handleSubmit(inputValue) {
		console.log("this is me logging", inputValue)
		fetch("http://api.giphy.com/v1/gifs/search?q=" + inputValue + "&api_key=dc6zaTOxFJmzC")
		.then(res => res.json())
		.then(json => json.data.slice(0,3))
		.then(jsonarray => jsonarray.map(gif => gif.embed_url))
		.then(newarray => this.setState({gifs: newarray}))
	}

	render(){
		return(
			<div>
				<GifSearch handleSubmit={this.handleSubmit} />
				<GifList gifs={this.state.gifs}/>
			</div>
		)
	}

}

export default GifListContainer