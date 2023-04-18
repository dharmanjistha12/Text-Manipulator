import React from 'react'

export default function About(props) {
  return (
	<div className='container'>
	  <p style={{color: props.mode==='light'?'black':'white'}}>This Site is built to provide a little help in quick text manipulation</p>
	</div>
  )
}
