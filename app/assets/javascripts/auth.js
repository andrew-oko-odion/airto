
/* 
   Remember DOM manipulation is not to be done here. For a clean and decoupled Design, DOM manipulations like
   DOM node show or hide that accompany Auth, should be done where the instance of this class  is called 
*/

class Auth {
    /* checks if user is signed in */
    /* returns true if user is signed in or false if otherwise */
    isSignedIn(){	
	if ( sessionStorage.getItem('userEmail')) {
	    return true;
	}
	return false;
    }
    
    /* Predicate function */
    /* returns users SESSION data if user is login */
    currentUser(){
	if (isSignedIn()) {
	    let user = { 
		userFirstname: '',
		userLastname: '',
		userEmail: '',
		userBirthday: '',
		userAuth: '',
		userID: ''
	    };
	    return user;
	}
	return false;
    }

    capFirstCharacter(name){
	name = name.split('');
	firstCharacter = name.shift();
	name.unshift(firstCharacter.toUpperCase());
	name = name.join('');
	return name; 
    }
    
    /* returns false, else destroy user SESSION */
    signOut(){
	console.log('Logout button Clicked');
	if ( isSignedIn()) {
	    const logoutUrl = '/users/sign_out.json'
	    fetch(logoutUrl, {
		method: 'DELETE',
		cache: false,
		headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
		    'X-User-Token': sessionStorage.getItem("userAuth"),
		    'X-User-Email': sessionStorage.getItem("userEmail")
		}
	    });

	    sessionStorage.setItem("userEmail","");
	    sessionStorage.setItem("userAuth","");
	    sessionStorage.setItem("userID","");
	    $('.item.navLogin').show();
	    $('.item.navSignup').show();
	    $('.item.navLogout').hide();

	    /* Clear Email nag after logout*/
	    if ( sessionStorage.getItem("userActive") == 'false') {
		$('.cookie.nag')
		    .hide()
		;
	    }
	    
	    window.setTimeout( () => window.location.replace = "/", 3000);
	    console.log('redirected to home completed');
	}
    }

    
    loginUserByEmail(){
	/* Validate Login supplied Data */
	$('.form.loginform .submit').form({
	    inline : true,
	    on: 'blur',
	    fields: {
		email: {
		    identifier: "user[email]",
		    rules: [{
			type: 'empty',
			prompt: 'Please enter your email address'
		    },              {
			type: 'email',
			prompt: 'Please enter a valid email'
		    }]
		},
		password: {
		    identifier: "user[password]",
		    rules: [
			{
			    type   : 'empty',
			    prompt : 'Please enter your password'
			}
		    ]
		}
	    }
	}).api({
	    action: 'signin user',
	    method: 'POST',
	    serializeForm: true,
	    dataType: 'json',
	    debug: true,
	    cache: false,
	    verbose: true,
	    data: {
	    },
	    beforeSend: function(settings) {
		console.log(settings.data.user);
		return settings;
	    },
	    onResponse: function(response) {
		console.log(response.data);
		return response;
	    },
	    onSuccess: function(json) {
		console.log('Data Available');
		console.log(json);
	    },
	    onFailure: function(json, element, xhr) {
		console.log('onFailure');
		console.log(json, 'Failed! Should be an Object.');
		console.log(json.data, 'Data Failed');
		console.log(xhr);
	    },
	});	
    }

    /* Handle user Signup */
    /* call loginUserByEmail() after successful signup */
    signupUserByEmail(){
	// Validates and Sign-up New User 
	$(".form.signupform .submit").form({
	    inline : true,
	    on: 'blur',
	    fields: {
		lastname: {
		    identifier: 'lastname',
		    rules: [{
			type: 'empty',
			prompt: 'Last name is required'
		    }]
		},
		firstname: {
		    identifier: 'firstname',
		    rules: [{
			type: 'empty',
			prompt: 'First name is required'
		    }]
		},
		email: {
		    identifier: 'email',
		    rules: [{
			type: 'empty',
			prompt: 'Email is required'
		    },
			    {
				type: 'email',
				prompt: 'Please enter a valid email'
			    }]
		},
		day: {
		    identifier: 'day',
		    rules: [{
			type: 'empty',
			prompt: 'Please enter day'
		    },
			    { 
				type: 'integer',
				prompt: 'number digit only'
			    },
			    { 
				type: 'integer[1..31]',
				prompt: 'invalid day'
			    }]
		},
		month: {
		    identifier: 'month',
		    rules: [{
			type: 'empty',
			prompt: 'Please enter month'
		    }]
		},
		year: {
		    identifier: 'year',
		    rules: [{
			type: 'empty',
			prompt: 'Please enter year'
		    },
			    {
				type: 'exactLength[4]',
				prompt: 'should be {ruleValue} characters long'
			    },
			    { 
				type: 'integer',
				prompt: 'Number digits only'
			    }
		    ]
		},
		password: {
		    identifier: 'password',
		    rules: [
			{
			    type   : 'empty',
			    prompt : 'Please enter a password'
			},		 
			{
			    type   : 'minLength[6]',
			    prompt : 'Your password must be at least {ruleValue} characters'
			}
		    ]
		},	 
		terms: {
		    identifier: 'terms',
		    rules: [
			{
			    type   : 'checked',
			    prompt : 'Please Check this box'
			}
		    ]
		}

	    }
	}).api({
	    action: 'register user',
	    method: 'POST',
	    serializeForm: true,
	    dataType: 'json',
	    debug: true,
	    cache: false,
	    verbose: true,
	    data: {
	    },
	    beforeSend: function(settings) {

		let capFirstCharacter = (name) => {
		    name = name.split('');
		    firstCharacter = name.shift();
		    name.unshift(firstCharacter.toUpperCase());
		    name = name.join('');
		    return name; 
		}

		let birthday = () => {
		    let day = (settings.data.day).trim();
		    let month = (settings.data.month).trim();
		    let year = (settings.data.year).trim();
		    if ( day.length == 1 ){ 
			day = "0".concat(day);
			console.log("Not Default: " + year + '-' + month + '-' + day);
			return (year + '-' + month + '-' + day);
		    }
		    else{
			console.log("default: " + year + '-' + month + '-' + day);
			return (year + '-' + month + '-' + day);
		    }
		}	    
		settings.data.user.birthday = birthday();
		settings.data.user.firstname = capFirstCharacter(settings.data.user.firstname).trim();
		settings.data.user.lastname = capFirstCharacter(settings.data.user.lastname).trim();
		settings.data.user.email = settings.data.user.email.trim();
		settings.data.user.password = settings.data.user.password.trim();
		
		console.log(settings.data.user);
		console.log(settings.data.user.firstname);
		return settings;
	    },
	    onResponse: function(response) {
		console.log(response.data);
		return response;
	    },
	    onSuccess: function(json) {
		console.log('Data Available');
		console.log(json);
	    },
	    onFailure: function(json, element, xhr) {
		console.log('onFailure');
		console.log(json, 'Failed! Should be an Object.');
		console.log(json.data, 'Data Failed');
		console.log(xhr);
	    },
	});

    }

}
