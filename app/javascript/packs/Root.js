import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Carousel from 'nuka-carousel'
import Decorators from 'nuka-carousel'

class Root extends React.Component {
    constructor(props){
	super(props);
    }
    
    render() {
	return (
	    <div>
		<div className="ui container">
			<h2 className="ui header"> Event space in Yaba, Lagos </h2>
			<a href="/items/categories" >See all</a>
		    <Carousel slidesToShow={4} cellSpacing={5} dragging={true} decorators={Carousel.getDefaultProps().decorators.slice(0, 2)}  cellSpacing={20} >
		    <a href="/profiles/rental" className="ui image">
			<div >
			    <img src="/assets/jenny"/>
			    <h4 className="ui grey header">
				N40k Nice shoes hello world  hello world This is cool
				<p> cool place </p>
			    </h4>
			    <div className="ui star rating"></div>
			</div>
		    </a>
		    <div className="ui image">
			<img src="/assets/matthew"/>
			<h4 className="ui grey header">
			    Hello I am Matthew
			</h4>
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
			<h4 className="ui header"> Nice shoes </h4>
		    </div>
		</Carousel>
		</div>

		<div className="ui container">
		    <h2 className="ui header">
			Event space in Surulere, Lagos
		    </h2>
		    <Carousel slidesToShow={5} cellSpacing={5} dragging={true} decorators={Carousel.getDefaultProps().decorators.slice(0, 2)} cellSpacing={20} >
		    <div className="ui image">
			<img src="/assets/jenny"/>
			<h4 className="ui header"> Nice shoes hello world  hello world This is cool</h4>
		
		    </div>
		    <div className="ui image">
			<img src="/assets/matthew"/>
			<p> Hello I am Matthew </p>
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
			<h4 className="ui header"> Nice shoes </h4>
		    </div>
		</Carousel>
		</div>
	    </div>
	);
    }
    
}

export default Root;
