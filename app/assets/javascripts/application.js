// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require rails-ujs
//= require swiper
//= require jquery.slick
//= require_tree .



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
 
 let  isLogin = () => {
     if ( sessionStorage.getItem("userID")) {
	 console.log(sessionStorage.getItem("userEmail"));
	 console.log(sessionStorage.getItem("userID"));
	 console.log(sessionStorage.getItem("userAuth"));
	 console.log('User is login');
	 console.log(getItem("userActive"));
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
     if ( isLogin() == true ) {
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
	 $('#navLogin').show();
	 $('#navSignup').show();
	 $('#navLogout').hide();

	 /* Clear Email nag after logout */
	 $('.cookie.nag')
	     .hide()
	 ;
	 
	 window.setTimeout( () => window.location.replace = "/", 3000);
	 console.log('redirected to home completed');
     }
 }
 
 let login_user = () => {
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
     }).then((response) => {	     
	 response.json().then(function(data) {
	     sessionStorage.userEmail = data.email;
	     sessionStorage.userAuth =  data.authentication_token;
	     sessionStorage.userID = data.id;
	     sessionStorage.userActive = data.active;
             console.log(data);
	     $('#navLogout').show();
	     $('#navLogin').hide();
	     $('#navSignup').hide();
	     console.log(sessionStorage.getItem("userEmail"));
	     console.log(sessionStorage.getItem("userActive"));

	     /* Hide modal After successfull network request passed */
	     $('.ui.tiny.modal.login')
		 .modal('hide')
	     ;
	     console.log('Form submited successfully');
	 }); 
     })
       .catch((error)  => {
	   console.log('Request failure: ', error);
       }
       );
 }

 let handleSignupSubmitClick = () => console.log('Sign up button click');
 let handleLoginSubmitClick = () => console.log("Login form button clicked ")
 let handlePasswordRecoveryClick = () => console.log("Password reset button clicked")
 let handlePictureProfileSubmit = () => console.log('Picture Profile submit button Clicked');

 
 /* let handleChekBox = () => {
  *     $('.ui.checkbox')
    .checkbox();
  * }*/

 /* let sidenav =  () => {
  *      $('.ui.top.sidebar')
  * 	 .sidebar('setting', 'transition', 'overlay')
  * 	 .sidebar('toggle')
  *      ;
  *  }*/
 


$('.ui.checkbox')
  .checkbox()
;

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
 
 $('.dropdown')
     .dropdown()
 ;


/* Validate Login form */
 $('.ui.form.loginform').form({
     inline : true,
     onSuccess: login_user,
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
         },
	 password: {
             identifier: 'password',
             rules: [
		 {
		     type   : 'empty',
		     prompt : 'Please enter your password'
		 }
             ]
	 }
     }
 });


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
	     console.log('You account created successfully');
	     $('.ui.tiny.modal.startprofile')
		 .modal('hide')
	     ;	    
	     
	     startProfile();

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
 

 $('.ui.form.signupform').form({
     inline : true,
     onFailure: () => {console.log('Signup Form validation failed')},
     onSuccess: signup_user,
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
 });

 
 /* $(document).ready( () =>  {*/

     /* if ( isLogin() == true && sessionStorage.getItem("userActive") == 'false'){
 	$('#navLogin').hide();
 	$('#navSignup').hide();
 	$('#navLogout').show();

	$('.cookie.nag')
  	.nag({
  	key      : 'notActivated',
  	value    : true
  	})
  	;
      * }*/
     /* if (isLogin() == true) {
  	$('#navLogout').show();
	$('#navLogin').hide();
  	$('#navSignup').hide();
      * }*/
 /* });*/





