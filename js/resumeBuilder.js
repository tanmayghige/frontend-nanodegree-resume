//$("#main").append("Tanmay Ghige");

//var awesomeThoughts = "I am Tanmay and I am AWESOME!";
//console.log(awesomeThoughts);
//var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
//$("#main").append(funThoughts);

var bio = {
    name : "Tanmay Ghige",
    role : "Web Developer",
    contacts : {
        mobile : 1234567890,
        email : "thghige@gmail.com",
        github :"tanmayghige",
        location :"Mumbai"
    },
    welcomeMessage : "Welcome to my Resume",
    skills : ["awesomeness","delivering things","cryogenic sleep","saving the universe"],
    bioPic : "images/fry.jpg"
}

var formattedName = HTMLheaderName.replace("%data%","Tanmay Ghige");
var formattedRole = HTMLheaderRole.replace("%data%","Web Developer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);