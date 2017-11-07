import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Carousel from 'nuka-carousel'
import Decorators from 'nuka-carousel'


export default class ViewPictures extends React.Component {
    constructor(props){
	super(props);
    }
    
    render() {
	return (
	    <div>
		<div className="ui container">
		    <h2 className="ui header"> Event space in Yaba, Lagos </h2>
		<Carousel  dragging={true} decorators={Carousel.getDefaultProps().decorators.slice(0, 2)}  cellAllign={"center"} framePadding={"20px"} >
		    <div className="ui image">
			    <img src="/assets/jenny"/>
		    </div>
		    <div className="ui image">
			<img src="/assets/matthew"/>
		    </div>
		    <div className="ui image">
			<img src="/assets/background1"/>
		    </div>
		    <div className="ui image">
			<img className="ui image" src="/assets/stevie"/>
		    </div>
		    <div className="ui image">
			<img src="/assets/stevie"/>
		    </div>
		    <div className="ui image">
			<img  src="/assets/stevie"/>
		    </div>
		    <div className="ui image">
			<img  src="/assets/stevie"/>
		    </div>
		    <div className="ui image">
			<img  src="/assets/stevie"/>
		    </div>
		</Carousel>
		</div>
	    </div>
	);
    }
    
}


document.addEventListener('turbolinks:load', () => {
    
    ReactDOM.render(
	<ViewPictures />,
	document.querySelector('.view-pictures')
    )
    
})
