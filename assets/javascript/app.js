//VARIABLES
var correctCounter = 0;
var incorrectCounter = 0;
var intervalId;
var clockRunning = false;
var timeLeft = 10;

var questions = [{
    question: "What is my middle name?",
    choices: ["Alice", "Elizabeth", "Allison", "Emily"],
    correctAnswer: 2
},
{
    question: "What state is home to Clark Hill Lake?",
    choices: ["South Carolina", "Georgia", "Florida", "Tennessee"],
    correctAnswer: 1
},
{
    question: "What state was Big Little Lies filmed in?",
    choices: ["Georgia", "California", "Washington", "Orengon"],
    correctAnswer: 1
},
{
    question: "Who is the head football coach for the University of Georgia?",
    choices: ["Dabo Swinney", "Mark Richt", "Nick Saban", "Kirby Smart"],
    correctAnswer: 3
}];






//FUNCTIONS

//function for clicking Start - begins the entire game
$("#start").on("click", function(){

    for (var i = 0; i < questions.length; i++) {
        $("#start").append("<h3>" + questions[i].question + "</h3>");

        for (var j = 0; j < questions[i].choices.length; j++) {
            $("#start").append("<input type='radio' name='question-" + i + "' value='" + questions[i].choices[j] + "'>" + questions[i].choices[j]);
        }
    };

});

