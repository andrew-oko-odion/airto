

    /* Steps instance */
   //  step = new Step;

class Items {    
    addNewItem(){     
	$('.ui.mini.modal.listing.terms')
	    .modal('show')
	;
	console.log('Listing accept terms Clicked');
    }

    /* 
       Set a cookie after acceptance so they only come to step1 
       Destroy the cookie after they submit. 
    */
    
    step1(){	
	console.log('Step 1 clicked');
	$(".ui.mini.modal.listing")
	    .modal('hide');	
	$('.start-button')
	    .hide()
	;
	$('.details_form')
	    .show();
	;
    }

    viewPictures(){
	$('.ui.fullscreen.modal.viewpictures')
	    .modal('show')
	;
    }

      next(){	
	console.log('Step 1 clicked');
	$(".ui.mini.modal.listing")
	    .modal('hide');	
	$('.start-button')
	    .hide()
	;
	  $('.details_form')
	    .show();
	  ;
      }
    
    checkAccepted() {
	if ($.cookie('ItemsAcceptTerms')){
	    this.step1();
	}
    }
    revmovActiveStep() {
            $('.ui.steps .step').removeClass('active');
    }
    acceptTerms() {
	console.log("Accept terms");
	$('.ui.mini.modal.listing.terms')
	    .modal('hide')
	;

	$.cookie('ItemsAcceptTerms', 'Accept Terms');
	this.step1();
    }   
    step1(){	
	console.log('Step 1 clicked');
	$(".ui.mini.modal.listing")
	    .modal('hide');	
	$('.start-button')
	    .hide()
	;
	$('.details_form')
	    .show();
	;
    }
    locationListing(){
	console.log('Form Location clicked');
	$('.describe.listing')
	    .show()
	;
	$('.facility.listing')
	    .hide()
	;
	$('.steping .description').addClass('teal').removeClass('thin');
	
	// move Side Step 
	$('.ui.steps .step').removeClass('active');
	$('.steps .step.describe').addClass('active');
    }
    facilityListing() {
	console.log('Form Facility clicked');
	$('.describe.listing')
	    .hide()
	;
	$('.rule.listing')
	    .hide()
	;
	$('.facility.listing')
	    .show()
	;
	$('.steping .description').addClass('teal').removeClass('thin');
	
	// move Side Step 
	$('.ui.steps .step').removeClass('active');
	$('.steps .step.facility').addClass('active');
    }
    ruleListing() {
	console.log('Rule Listing clicked');
	$('.facility.listing')
	    .hide()
	;
	$('.describe.listing')
	    .hide()
	;
	$('.photo.listing')
	    .hide()
	;
	$('.rule.listing')
	    .show()
	;
	$('.steping .facility').addClass('teal').removeClass('thin');

	// move Side Step 
	$('.ui.steps .step').removeClass('active');
	$('.steps .step.rule').addClass('active');
    }
    photoListing() {
	console.log('Photo Listing clicked');
	$('.rule.listing')
	    .hide()
	;
	$('.describe.listing')
	    .hide()
	;
	$('.rule.listing')
	    .hide()
	;
	$('.photo.listing')
	    .show()
	;
	$('.steping .rule').addClass('teal').removeClass('thin');

	// move Side Step 
	$('.ui.steps .step').removeClass('active');
	$('.steps .step.photo').addClass('active');
    }
    
    
}

document.addEventListener('turbolinks:load', () => {
    
$('.form.space').form({
    inline : true,
    on: 'blur',
    fields: {
 	name: {
 	    identifier: 'space[name]',
 	    rules: [
 		{
 		    type   : 'empty',
 		    prompt : 'Please enter your name'
 		}
 	    ]
 	},
 	description: {
 	    identifier: 'space[description]',
 	    rules: [
 		{
 		    type   : 'empty',
 		    prompt : 'Please Describe your event space'
 		}
 	    ]
 	},
 	location: {
 	    identifier: 'space[location]',
 	    rules: [
 		{
 		    type   : 'empty',
 		    prompt : 'Please add a location'
 		}
 	    ]
 	},
 	fee: {
 	    identifier: 'space[fee]',
 	    rules: [
 		{
 		    type   : 'empty',
 		    prompt : 'Please enter a fee'
 		}
 	    ]
 	},
 	guest_capacity: {
 	    identifier: 'space[guest_capacity]',
 	    rules: [
 		{
 		    type   : 'empty',
 		    prompt : 'Please enter guest capacity'
 		}
 	    ]
 	},
	category: {
 	    identifier: 'space[category]',
 	    rules: [
 		{
 		    type   : 'empty',
 		    prompt : 'Please select Category'
 		}
 	    ]
 	}
    }
});

    $('.form.space .submit')
	.api({
	    action: 'add space',
	    method: 'POST',
	    loadingDuration: 3000,
	    serializeForm: true,
	    dataType: 'json',
	    cache: false,
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

		// settings.data.space.name = capFirstCharacter(settings.data.space.name).trim();
		// settings.data.space.location = capFirstCharacter(settings.data.space.location).trim();
		// settings.data.space.fee = settings.data.space.fee.trim();
		// settings.data.space.guest_capacity = settings.data.space.guest_capacity.trim();
		settings.data.space.user_id = currentUser.id;
		// hard code ID in 
		settings.data.space.id = 1
		console.log(settings.data.space.id);
		console.log(settings.data.space);
		// console.log(settings.data.space.name);
		return settings;
	    },
	    beforeXHR: function(xhr) {
		// adjust XHR with additional headers
		xhr.setRequestHeader ('X-User-Email', currentUser.authentication_token);
		xhr.setRequestHeader ('X-User-Token', currentUser.email);
		return xhr;
	    },
	    onResponse: function(response) {
		console.log('Space - Stage1: Stage 1 completed');
		console.log(response);
	    },
	    onSuccess: function(response) {
		console.log('OnSuccess: ' + response);
	    },
	    onFailure: function(json, element, xhr) {
		console.log('onFailure: ' + json);
		$(".form.space").form("add errors", [ 'Problem processing you data at this time' ]);
	    }
	});    
});
