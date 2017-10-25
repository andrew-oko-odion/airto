
class Items {
    addNewItem(){     
	$('.ui.mini.modal.listing.terms')
	    .modal('show')
	;
	console.log('Listing accept terms Clicked');
    }


    step1(){
	console.log('Step 1 clicked');
	$(".ui.mini.modal.listing")
	    .modal('hide');
	
	$('.start-button')
	    .hide();
	
	$('.details_form')
	    .show();
	;
	// $('.ui.tiny.modal.step1')
	// 	 .modal('show')
	// ;
    }

    acceptTerms() {
	console.log("Accept terms");
    }


}
