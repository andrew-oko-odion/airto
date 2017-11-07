import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Root from './Root'

document.addEventListener('turbolinks:load', () => {
    
    ReactDOM.render(
	<Root />,
	document.querySelector('.carousel')
    )
    
})
