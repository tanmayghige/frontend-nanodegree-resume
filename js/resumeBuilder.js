//$("#main").append("Tanmay Ghige");

//var awesomeThoughts = "I am Tanmay and I am AWESOME!";
//console.log(awesomeThoughts);
//var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
//$("#main").append(funThoughts);

var formattedName = HTMLheaderName.replace("%data%","Tanmay Ghige");
var formattedRole = HTMLheaderRole.replace("%data%","Web Developer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);