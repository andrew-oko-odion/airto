import React from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Container, Segment, Header, Image, Modal } from 'semantic-ui-react'
import Slider from 'react-slick'
import Topnav from './Topnav'
/* import LetfNavButton from './LeftNavButton'*/
import Footer from './Footer'
import Show from './Show'
import { Link, Route } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'

class Index extends React.Component {

    constructor(props) {
	super(props);
	this.handleItemClick = this.handleItemClick.bind(this);
	this.state = { activeItem: 'home'};
    }

    handleItemClick(e, {name}) {
	console.log('Menu Item Clicked');
	this.setState({ activeItem: name });
    }
    
    render() {
	let settings = {
	    dots: false,
	    accessibility: false,
	    infinite: false,
	    speed: 500,
	    slidesToShow: 2,
	    slidesToScroll: 1,
	    responsive: [
		{
		    breakpoint: 1024,
		    settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
			infinite: true,
			dots: true
		    }
		},
		{
		    breakpoint: 600,
		    settings: {
			slidesToShow: 2,
			slidesToScroll: 2
		    }
		},
		{
		    breakpoint: 480,
		    settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		    }
		}]
	};
	    
	return (
	    <div>
		<Topnav onClick={this.handleItemClick} activeItem={this.state.activeItem} />
		<Route path="/show" exact={true} component={Show} />
		<Route path="/sign-up" exact={true} component={Signup} />
		<Route path="/login" exact={true} component={Login} />
		
		<Route path="/" exact={true} render={  () => {
			return (
			    <div>
				<Container >
				    <Header as='h2'>Ives</Header>		    
				    <Segment  padded={'very'} >
					<Slider {...settings} >
        				    <div><img src='http://placekitten.com/g/400/200' /></div>
					    <div><img src='http://placekitten.com/g/400/200' /></div>
					    <div><img src='http://placekitten.com/g/400/200' /></div>
					    <div><img src='http://placekitten.com/g/400/200' /></div>
					</Slider>
				    </Segment>
							   
							   
				    <Segment  padded={'very'} style={{ backgroundColor: 'blue' }} >
					<Slider {...settings} >
        				    <div><img src='http://placekitten.com/g/400/200' /></div>
					    <div><img src='http://placekitten.com/g/400/200' /></div>
					    <div><img src='http://placekitten.com/g/400/200' /></div>
					    <div><img src='http://placekitten.com/g/400/200' /></div>
					</Slider>
				    </Segment>
							   
							   
				    <Segment  padded={'very'} style={{ backgroundColor: 'blue' }} >
					<Slider {...settings} >
        				    <div><img src='http://placekitten.com/g/400/200' /></div>
					    <div><img src='http://placekitten.com/g/400/200' /></div>
					    <div><img src='http://placekitten.com/g/400/200' /></div>
					    <div><img src='http://placekitten.com/g/400/200' /></div>
					</Slider>
				    </Segment>   
				</Container>
			    </div>
			);
		}} />
			    
	    <Footer />
	    </div>
	);
    }

}

export default Index;

