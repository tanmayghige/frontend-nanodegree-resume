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
};


var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%",bio.name);
$("#header").prepend(formattedName);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
$("#topContacts").append(formattedEmail);

var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
$("#topContacts").append(formattedGithub);

var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
$("#topContacts").append(formattedLocation);

var formattedPic = HTMLbioPic.replace("%data%",bio.bioPic);
$("#header").append(formattedPic);

var formattedMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#header").append(formattedMsg);

$("#header").append(HTMLskillsStart);

for (var i = 0; i < bio.skills.length; i++) {
    var formattedSkills = HTMLskills.replace("%data%",bio.skills[i]);
    $("#skills").append(formattedSkills);
};

var work = {};

work.employer = "lorem ipsum";
work.title = "dolor sit amet";
work.years = "November 1994-Future";
work.location = "Mumbai, India";
work.description = "Integer gravida lacus nec arcu vehicula, ac commodo est ornare.";

var formattedEmployer = HTMLworkEmployer.replace("%data%",work.employer);
var formattedTitle = HTMLworkTitle.replace ("%data%",work.title);
var formattedDates = HTMLworkDates.replace ("%data%",work.years);
var formattedLocation = HTMLworkLocation.replace("%data%",work.location);
var formattedDescription = HTMLworkDescription.replace("%data%",work.description);

$("#workExperience").append(HTMLworkStart);
$(".work-entry:last").append(formattedEmployer + formattedTitle);
$(".work-entry:last").append(formattedDates);
$(".work-entry:last").append(formattedLocation);
$(".work-entry:last").append(formattedDescription);














