$(document).ready(function(){


    // ES5 v. ES6

    
	const STORAGE_KEY= 'formData';
    

    $('#editButton').click(function(){
    	// Hide the maiin view, show the form
    	$('#mainView').addClass('hidden');
    	$('#editForm').removeClass('hidden');

    	//Take text in html
    	// Put it in the form
    	$('#titleInput').val( $('#titleText').text() );
    	$('#paragraphInput').val( $('#paragraphText').text() );
    });

    $('#submitButton').click(function(event){
    	event.preventDefault();

    	//Hide the form,show the main view
        $('#editForm').addClass('hidden');
    	$('#mainView').removeClass('hidden');
    	
    	// Take the value wsin the form
    	// Put them in/Replace the text in html
    	const updatedPageContent={
    		title: $('#titleInput').val(),
    		text: $('#paragraphInput').val()
    	};

    	sessionStorage.setItem(STORAGE_KEY,JSON.stringify(updatedPageContent));

    	console.log(updatedPageContent);

    	$('#titleText').text( $('#titleInput').val() );
    	$('#paragraphText').text( $('#paragraphInput').val() ); 
    });

    $('#cancelButton').click(function(){

    	// Hide the form, show the main view
        $('#editForm').addClass('hidden');
    	$('#mainView').removeClass('hidden');
    	console.log('Cancel');
    });
    


});