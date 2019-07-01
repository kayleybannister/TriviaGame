//VARIABLES
var correctCounter = 0;
var incorrectCounter = 0;
var intervalId;
var clockRunning = false;
var timeLeft = 10;

var questions = [{
    question: "Who are the Duke and Duchess of Sussex?",
    choices: ["Prince William and Kate Middleton", "Queen Elizabeth and Prince Phillip", "Barack and Michelle Obama", "Prince Harry and Meghan Markle"],
    correctAnswer: "Prince Harry and Meghan Markle"
},
{
    question: "What state is home to Clark Hill Lake?",
    choices: ["South Carolina", "Georgia", "Florida", "Tennessee"],
    correctAnswer: "Georgia"
},
{
    question: "What state was Big Little Lies filmed in?",
    choices: ["Georgia", "California", "Washington", "Orengon"],
    correctAnswer: "California"
},
{
    question: "Who is the head football coach for the University of Georgia?",
    choices: ["Dabo Swinney", "Mark Richt", "Nick Saban", "Kirby Smart"],
    correctAnswer: "Kirby Smart"
}];






//FUNCTIONS

//function for clicking Start - begins the entire game
$("#start").on("click", function(){

    $("#start-timer").append(timeLeft--);

    for (var i = 0; i < questions.length; i++) {

        $("#start").append("<h3>" + questions[i].question + "<BR><br>" + "CHOICES: <br>"+ questions[i].choices + "</h3>");
    };


});

