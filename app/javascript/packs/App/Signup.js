import React, { Component } from 'react'
import { Button, Checkbox, Form, Container } from 'semantic-ui-react'


class Signup extends Component {

    constructor(props){
	super(props);
    }

    render() {
	return (
	    <Container>
		<Form>
		    <Form.Field>
			<label>First Name</label>
			<input placeholder='First Name' />
		    </Form.Field>
		    
		    <Form.Field>
			<label>Last Name</label>
			<input placeholder='Last Name' />
		    </Form.Field>

		    <Form.Field>
			<label>Email</label>
			<input placeholder='Email' />
		    </Form.Field>
		    
		    <Form.Field>
			<label>Password</label>
			<input placeholder='Password' />
		    </Form.Field>
		    
		<Form.Field>
		    <Checkbox label='I agree to the Terms and Conditions' />
		</Form.Field>
		<Button type='submit'>Submit</Button>
	    </Form>
	    </Container>
	);
    }
}

export default Signup;
