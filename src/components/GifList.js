import React from 'react'

const GifList = (props) => {

  const gifLIs = props.gifs.map((gif, index) => <li key={index}><img src={gif}/></li>)

  return(
      <ul>
      	{gifLIs}
      </ul>
    )}

export default GifList;
