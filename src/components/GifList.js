import React from 'react'

const GifList = (props) => {

	// <li key={index}><img src={gif.images.original.url} ></img></li>
	// image way above

  const gifLIs = props.gifs.map((gif, index) => <li key={index}><iframe src={gif.embed_url} width="480" height="271" frameBorder="0" className="giphy-embed"></iframe></li>)

  return(
      <ul>
      	{gifLIs}
      </ul>
    )}

export default GifList;



