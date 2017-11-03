


let service = () => {
     $('.ui.tiny.modal.service')
	 .modal('show')
     ;
 }
 let rental = () => {
     $('.ui.tiny.modal.rental')
	 .modal('show')
     ;
 }
 let login = () => {
     $('.ui.tiny.modal.login')
	 .modal('show')
     ;
     $('form').form('clear')
 }

 let resetPassword = () => {
     $('.ui.tiny.modal.password')
	 .modal('show')
     ;
 }

 let signup = () => {
     $('.ui.tiny.modal.signup')
	 .modal('show')
     ;
     /* clear form data */
     $('form').form('clear')

 }

 let startProfile = () => {
     $('.ui.mini.modal.startprofile')
	 .modal('show')
     ;
 }

 let showPhoneStep = () => {
     $('.ui.mini.modal.profile.pic')
	 .modal('show')
     ;
 }

 let pictureProfile = () => {
     $('.ui.mini.modal.pictureprofile')
	 .modal('show')
     ;
 }

 let handlePictureProfileChange = (e) => {
     /* let pic = $('#profile-pic["value"]');*/
     console.log('Item selected');
     console.log(e.value);
     /* let pix = $("#pix src").val();
      * console.log(pix);*/
 }

let handleSignupSubmitClick = () => console.log('Sign up button click');
let handleLoginSubmitClick = () => console.log("Login form button clicked ")
let handlePasswordRecoveryClick = () => console.log("Password reset button clicked")
let handlePictureProfileSubmit = () => console.log('Picture Profile submit button Clicked');


let  isLogin = () => {
    if ( sessionStorage.getItem("userID")) {
	console.log(sessionStorage.getItem("userEmail"));
	console.log(sessionStorage.getItem("userID"));
	console.log(sessionStorage.getItem("userAuth"));
	console.log('User is login');
	console.log(sessionStorage.getItem("userActive"));
	/* if( sessionStorage.getItem("userActive") == 'false') {
	   $('.cookie.nag')
	   .nag('show')
	   ;
	   $('.cookie.nag')
  	   .nag({
  	   key      : 'notActivated',
  	   value    : true
  	   })
  	   ;
	   }*/	 
	return true;
    }
    console.log('Error user not login yet');
    return false;
}

let signOut = () => {
    console.log('Logout button Clicked');
    if ( isLogin()) {
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




$(document).ready( () =>  {

    $('.dropdown')
	.dropdown()
    ;

    $('.checkbox')
	.checkbox()
    ;

    if (isLogin()) {
	$('.item.navLogin').hide();
	$('.item.navSignup').hide();
	$('.item.navLogout').show();
	if (sessionStorage.getItem("userActive") == 'false'){
	    $('.cookie.nag')
		.nag('show')
	    ;
	    /* 
	     * 	     $('.cookie.nag')
	     * 		 .nag({
	     * 		     key      : 'notActivated',
	     * 		     value    : true
	     * 		 })
	     * 	     ;
	     * 	     */
	}
    }

    
    /* initialize classes */
    afterSignup = new AfterSignUp;
    item = new Items;
    
    /* $.fn.api.settings.successTest = function(response) {
       if (response && response.active) {
     *         return response.active;
       }
       return false;
     * };*/

     $.fn.api.settings.api = {
	 'signin user'   : '/users/sign_in.json',
	 'signout user'  : '/users/delete',
	 'register user' : '/users.json'
     };

     $('.ui .item').on('click', function() {
         $('.ui .item').removeClass('active');
         $(this).addClass('active');
     });

     /* 
	Returns the current_user data from session
	eg current_user.firstname; 
      */
     /* let current_user = {   
      *     userEmail  :  sessionStorage.getItem("userEmail"),
      *     userID     :  sessionStorage.getItem("userID"),
      *     userAuth   :  sessionStorage.getItem("userAuth"),
      *     active     :  sessionStorage.getItem("userActive")
      * }*/

     /* 
	Returns false  if user is not login
      */


    $('.form.loginform .submit').form({
	inline : true,
	on: 'blur',
	// onSuccess: login_user,
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
    })
				.api({
				    action: 'signin user',
				    method: 'POST',
				    serializeForm: true,
				    dataType: 'json',
				    debug: true,
				    cache: false,
				    ContentType: "application/json",
				    verbose: true,
				    data: {
				    },
				    beforeSend: function(settings) {
					// Create POST Data.
					    // settings.data = {
						/* user: JSON.stringify({
						   // success: true,    // Change this to true|false
						   // message: 'message',
						   }),*/
						// delay: 1
					// };
					console.log(settings.data);
					return settings;
				    },
				    onResponse: function(response) {
					// make some adjustments to response
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
    
    

     
     


    // let loginForm =  $('.form.loginform');
    // let loginEmail = loginForm.form('get value', 'email');
    // let loginPassword = loginForm.form('get value', 'password');
    

    /* let login_user = () => {
       let email = $('.loginform #email').val();
       let password = $('.loginform #password').val();
       
       const loginUrl = '/users/sign_in.json'
       fetch(loginUrl, {
       method: 'POST',
       cache: false,
       headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
       },
       body: JSON.stringify(
       { "user": {
       email: email,
       password: password
       }
       })
       })
       .then((response) => {
       if (response.status == 401){
       // $('.loginform .error.message')	
       $("#loginError").html('<p> Invalid username or password </p>');
       console.log('Invalid username or password');
       console.log('Fighting error messages');
       }
       else {	    
       response.json().then( function(data) {
       sessionStorage.userEmail = data.email;
       sessionStorage.userAuth =  data.authentication_token;
       sessionStorage.userID = data.id;
       sessionStorage.userActive = data.active;
       console.log(data);
       
       $('.item.navLogin').hide();
       $('.item.navSignup').hide();
       $('.item.navLogout').show();
       console.log(sessionStorage.getItem("userEmail"));
       console.log(sessionStorage.getItem("userActive"));
       
       if (sessionStorage.getItem("userActive") == 'false'){
       $('.cookie.nag')
       .nag('show')
       ;
       }
       // Hide modal After successfull network request passe
       $('.ui.tiny.modal.login')
       .modal('hide')
       ;
       console.log('Form submited successfully');
       
       
       })
       }	
       })
       .catch((error)  => {
       console.log('Request failure: ', error);
       }
       );	
     * }
     */

    
    let handleChekBox = () => {
	$('.ui.checkbox')
	    .checkbox();
    }

     /* let sidenav =  () => {
      *      $('.ui.top.sidebar')
      * 	 .sidebar('setting', 'transition', 'overlay')
      * 	 .sidebar('toggle')
      *      ;
      *  }*/



     $('.ui.search')
	 .search({
	     apiSettings: {
		 url: '//localhost:3000/jobs/autocomplete.json?query={query}'
	     },
	     fields: {
		 results : 'items',
		 title   : 'title',
		 url     : 'url'
	     },
	     minCharacters : 1,
	     debug: true
	 })
     ;

     $('.ui.checkbox')
	 .checkbox()
     ;




     /* Validate Login form */
     // $('.ui.form.loginform').form({
     // 	 inline : true,
     // 	 on: 'blur',
     // 	 onSuccess: login_user,
     // 	 fields: {
     //         email: {
     // 		 identifier: 'email',
     // 		 rules: [{
     //                 type: 'empty',
     //                 prompt: 'Please enter your email address'
     // 		 },              {
     // 		     type: 'email',
     // 		     prompt: 'Please enter a valid email'
     // 		 }]
     //         },
     // 	     password: {
     // 		 identifier: 'password',
     // 		 rules: [
     // 		     {
     // 			 type   : 'empty',
     // 			 prompt : 'Please enter your password'
     // 		     }
     // 		 ]
     // 	     }
     // 	 }
     // });


     /* format Birthday */
     let formatBirthday = () => {
	 let day = $(".signupform #day").val();
	 if ( day.trim().length == 1 ){ 
	     day = "0".concat(day);	 
	 }
	 let month = $(".signupform #month").val(); 
	 let year = $(".signupform #year").val(); 
	 return year + '-' + month + '-' + day;
     }

     let capFirstCharacter = (name) => {
	 name = name.split('');
	 firstCharacter = name.shift();
	 name.unshift(firstCharacter.toUpperCase());
	 name = name.join('');
	 return name; 
     }

     /* After user frontend validation Signup user */
     let signup_user  = () => {
	 /* formating values */
	 let firstname = capFirstCharacter(($(".signupform #firstname").val()).trim());
	 let lastname = capFirstCharacter(($(".signupform #lastname").val()).trim());
	 let email = (($(".signupform #email").val()).trim()).toLowerCase();
	 let password = ($(".signupform #password").val()).trim();
	 let birthday = formatBirthday(); 

	 console.log('Sign up Form submited');
	 const signupUrl = "/users.json";
	 fetch(signupUrl, {
	     method: 'POST',
	     cache: false,
	     headers: {
		 'Accept': 'application/json',
		 'Content-Type': 'application/json',
	     },
	     body: JSON.stringify(
		 { "user": {
		     email: email,
		     password: password,
		     firstname: firstname,
		     lastname: lastname,
		     birthday: birthday
		 }
		 })
	 }).then((response) => {	     
	     response.json().then(function(data) {
		 sessionStorage.userEmail = data.email;
		 sessionStorage.userAuth =  data.authentication_token;
		 sessionStorage.userID = data.id;
		 sessionStorage.userActive = data.active;
		 console.log(data);
		 console.log(sessionStorage.getItem("userEmail"));
		 $('#navLogin').hide();
		 $('#navSignup').hide();
		 $('#navLogout').show();

		 afterSignup.acceptTerms();
		 console.log('You account created successfully');
		 $('.ui.tiny.modal.signup')
		     .modal('hide')
		 ;
		 /* Show Email accout activation reminder */	     
		 $('.cookie.nag')
		     .nag('show')
		 ;
		 /* Call Accept terms modal */

	     }); 
	 })
	   .catch((error)  => {
	       console.log('Request failure: ', error);
	   }
	   );
     }


     let passwordResetUser  = () => {
	 let email = (($(".signupform #email").val()).trim()).toLowerCase();
	 console.log('Password Reset form sent');
	 const passwordResetUrl = "/users/password.json";
	 fetch(passwordResetUrl, {
	     method: 'POST', 
	     cache: false,
	     headers: {
		 'Accept': 'application/json',
		 'Content-Type': 'application/json',
	     },
	     body: JSON.stringify(
		 { "user": {
		     email: email
		 }
		 })
	 }).then((response) => {	     
	     response.json().then(function(data) {
		 console.log('An Email with Reset instruction sent successfully');
		 $('.ui.tiny.modal.passwordReset')
		     .modal('hide')
		 ;	    
		 picture_profile();

		 /* Show Email accout activation reminder */	     
		 /* $('.cookie.nag')
		    .nag('show')
		    ;*/
	     }); 
	 })
	   .catch((error)  => {
	       console.log('Request failure: ', error);
	   }
	   );
     }

     $('.ui.form.passwordresetform').form({
	 inline : true,
	 onSuccess: passwordResetUser,
	 fields: {
             email: {
		 identifier: 'email',
		 rules: [{
                     type: 'empty',
                     prompt: 'Please enter your email address'
		 },              {
		     type: 'email',
		     prompt: 'Please enter a valid email'
		 }]
             }
	 }
     });

    
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
	// ContentType: "application/json",
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
    
});
