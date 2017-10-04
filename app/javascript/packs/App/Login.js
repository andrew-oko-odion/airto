import React from 'react'
import { Button, Checkbox, Form, Container } from 'semantic-ui-react'

class Login extends React.Component {

    constructor(props){
	super(props);
	this.state = { name: '', email: '', token: '', id: '', password: ''};
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
    }

    login() {
	const loginUrl = '/users/sign_in.json'
	fetch(loginUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
		{ "user": {
                    email: this.state.email,
		    password: this.state.password
		}
		})
        }).then((response) => {
	    console.log('Request success: ', response.json())
	})
	  .catch((error)  =>
	      console.log('Request failure: ', error.json())
	  );
    }

    handleChange(event) {
	event.preventDefault();
	event.preventDefault();
	const value = event.target.value;
	const name = event.target.name;
	
	console.log('value ' + value);
	console.log('Name ' + name);
	this.setState({
	    [name]: value
	});
	/* this.setState({ [name]: value });*/
    }

    handleSubmit() {
	this.login();
    }

    render() {
	return (
	    <Container>
		<Form onSubmit={this.handleSubmit} >
		    <Form.Field>
			<label>Email</label>
			<input placeholder='Email' name="email" value={this.state.email} onChange={this.handleChange} />
		    </Form.Field>
		    <Form.Field>
			<label>Password</label>
			<input placeholder='password' name="password" value={this.state.password} type='password' onChange={this.handleChange} />
		    </Form.Field>
		    <Form.Field>
			<Checkbox label='I agree to the Terms and Conditions' />
		    </Form.Field>
		    <Button type='submit'>Login</Button>
		</Form>
	    </Container>
	);
    }
}

export default Login;
