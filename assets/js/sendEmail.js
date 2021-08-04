function sendMail(contactForm){
    emailjs.send("service_9xpd5g2","MatthewElstone",{
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request":contactForm.projectsummary.value
    })
    .then(
        function(response){
            console.log("SUCCESS")
        },
        function(error){
            console.log("FAILED",error);
        });
    return false;    
}