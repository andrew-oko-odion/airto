
 let startButton = () => {     
     $(".ui.mini.modal.listing")
	//  .modal({inverted: true})
	 .modal('show')
     ;
     console.log('Button Clicked');
 }


let step1 = () => {
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

