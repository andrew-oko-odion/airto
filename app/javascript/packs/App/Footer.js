import React from 'react';
import { Divider, Container } from 'semantic-ui-react';


class Footer extends React.Component {    
    constructor(props){
	super(props);
    }
    
    render() {
	return (
	    <div>
		<Divider />
		<Container>
		    <p> hello footer </p>
		</Container>
	    </div> 
	);
    }
}

export default Footer;

