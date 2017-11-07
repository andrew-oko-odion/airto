
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

    
    acceptTerms() {
	console.log("Accept terms");
	sessionStorage.setItem('terms', 'terms');
	$('.ui.mini.modal.listing.terms')
	    .modal('hide')
	;
	this.step1();
    }
}

