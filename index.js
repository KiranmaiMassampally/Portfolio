document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get form values
    var name = document.getElementsByName('name')[0].value;
    var email = document.getElementsByName('email')[0].value;
    var message = document.getElementsByName('message')[0].value;

    // Here you can add code to handle form submission, such as sending data to a server
    // For demonstration purposes, let's just log the form data to the console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Clear form fields after submission
    document.getElementsByName('name')[0].value = '';
    document.getElementsByName('email')[0].value = '';
    document.getElementsByName('message')[0].value = '';
});
