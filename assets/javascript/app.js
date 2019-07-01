//VARIABLES

var correctCounter = 0;
var incorrectCounter = 0;
var unansweredQuestions = 0;

//sets the time remaining for each question to 10 seconds
var timeLeft = 10;

//creating object for all the questions and their corresponding choices and correct answers
var questions = [{
    question: "What is my middle name?",
    choices: ["Alice", "Elizabeth", "Allison", "Emily"],
    correctAnswer: "Allison"
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

//need a timer function to countdown for each question using a function and if/else statements
function countdown()
{
    
};

//function for clicking Start - begins the entire game
$("#start").on("click", function(){

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
        $("#questions").append("<h3>" + questions[i].question + "</h3>");

        for (var j = 0; j < questions[i].choices.length; j++) {
            $("#questions").append("<input type='radio' name='question-" + i + "' value='" + questions[i].choices[j] + "'>" + questions[i].choices[j]);
        };
    };

});

