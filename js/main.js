$().ready(function() {
        
        $("#contacteg").validate({
            rules: {
                firstname: "required",
                lastname: "required",
                
               
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 2
                },
            },
            messages: {
               
                firstname: {
                    required: "Please enter your First Name",
                    minlength: "Your first name must be at least 3 characters"
                },
                lastname: {
                    required: "Please enter your Last Name",
                    minlength: "Your last name must be at least 2 characters"
                },
                
                email: "Please enter a valid email address",
                message: "Please enter a message",
            }
        });

    $(function() {
        $( "#accordion" ).accordion();
    });

        $( "#accordion" ).accordion({
            collapsible: true
    });

        $( "#accordion" ).accordion({
            heightStyle: "content"
});


});