/*
  Remember to use Rails to generate authenticity meta token for every form submit 
*/


/* 
   This class is to be called immediately After Sign_up is
   sumited.
*/
class AfterSignUp {
    /* Acceptance, Profile_pics, Phone_number, Activate_account, Thank_you */
    // let STEPS = 5; 

    acceptTerms(){
     $('.ui.mini.modal.accept.terms')
	    .modal('show')
	;
	console.log('terms called');
    }
    
    profilePicture(){
	console.log('profile picture called');
	$('.ui.mini.modal.profile.picture')
	    .modal('show')
	;
    }

    phoneNumber(){
	console.log('Phone number called');
	$('.ui.mini.modal.phone.number')
	    .modal('show')
	;
	/* clear form data */
	$('form').form('clear');
    }

    confirmEmail(){
	console.log('Confirm Email called');
	$('.ui.mini.modal.confirm.email')
	    .modal('show')
	;
    }

    tankYou(){
	console.log('Thank You message called');
	$('.ui.mini.modal.thank.you')
	    .modal('show')
	;
    }
    
    handleSubmit() {
	console.log("After Submit is working now");
    }

    handleValidation() {
	/* until validation is passed do not submit */
	console.log('validation in progress');
    }

    handleSkip() {
	/* Returns the next step */
	console.log('skiping a step');
    }

    
    
}


