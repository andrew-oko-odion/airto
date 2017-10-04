import React, { Component } from 'react';
import { Button, Menu, Container, Header, Search, Divider } from 'semantic-ui-react' ;
import { Link, Route, Router } from 'react-router-dom'

class Topnav extends React.Component {

    constructor(props){
	super(props);
    }
    
    render() {
	return(
	    <div>
		<Menu pointing secondary size="large" stackable={true}>
		    <Menu.Menu position="right">
			<Menu.Item name="home" as={Link} to='/' active={this.props.activeItem === 'home'} onClick={this.props.onClick} />
			<Menu.Item name='services' active={this.props.activeItem === 'services'} onClick={this.props.onClick} />
			<Menu.Item name='rentals' active={this.props.activeItem === 'rentals'} onClick={this.props.onClick} />
			<Menu.Item name='sign-up' as={Link} to='/sign-up' active={this.props.activeItem === 'sign-up'} onClick={this.props.onClick} />
			<Menu.Item name='login' as={Link} to='/login' active={this.props.activeItem === 'login'} onClick={this.props.onClick} />
		    </Menu.Menu>
		</Menu>
	    </div>
	);
    }

}

export default Topnav;
