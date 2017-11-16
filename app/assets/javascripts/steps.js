
/* cookie based step */
class Step {
    /* initialize cookie */
    constructor(no, name) {
    }

    /* Holds the ID of the current step */
    // Returns the step ID
    current(){
	// use as a refrence point for next and prevoius
    }
    // Moves the step count 
    goToStem(){	
    }
    /* gets the ID of the Next step */
    next(){
	// checks if the is an extra step from the constrcttor initialization and 
	// set cookie of the current step
	// returns the ID of the next step 
    }
    /* return the ID of the Previous step */
    prev(){
	// checks if a cookie step is save and Goes to it
	// returns the ID of the previous step 
    }
    onStepComplete(){
	// callback for a single completed step
    }
    onComplete(){
	// Callback to call if All steps is completed. 
    }
    
    onCancel(){
	/* Callback that Clears all previous cookies */
	this.destroy();
    }
    onSkip(){
	// Skip an optional Step
	currentStep = this.current();
	goToStem(currentStep.next());
    }

    destroy(){
    }
    
}
