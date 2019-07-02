//VARIABLES
var correctCounter = 0;
//var that gets the user's selection for each question
var userPick;
//sets the time remaining for each question to 40 seconds (10 for each question)
var timeLeft = 40;
//creating object for all the questions and their corresponding choices and correct answers
var intervalId;
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
    choices: ["Georgia", "California", "Washington", "Oregon"],
    correctAnswer: "California"
},
{
    question: "Who is the head football coach for the University of Georgia?",
    choices: ["Dabo Swinney", "Mark Richt", "Nick Saban", "Kirby Smart"],
    correctAnswer: "Kirby Smart"
}];
//==========================================================================

$("#start").on("click", startSurvey);

$(document).on("checked", "name=question-3", evaluate);

//==========================================================================

//FUNCTIONS

//need a timer function to countdown the timeLeft using a function and if/else statement
function timer() {
    intervalId = setInterval(countDown, 1000);
}

function countDown() {
    timeLeft--;
    $("#timer").text(timeLeft);

    if (timeLeft <= 0) {
        alert("TIME IS UP!");
        evaluate();
        clearInterval(intervalId);
    }
};

function startSurvey() {

    timer();

    $("#start").remove();
    for (var i = 0; i < questions.length; i++) {
        $("#questions").append("<h3>" + questions[i].question + "</h3>");
        for (var j = 0; j < questions[i].choices.length; j++) {
            $("#questions").append("<input type='radio' name='question-" + i + "' value='" + questions[i].choices[j] + "'>" + questions[i].choices[j]);
        };
    };
};

function evaluate() {
    var ansPicked = $("input:checked");

    for (let i = 0; i < questions.length; i++) {
        
        if(ansPicked[i].value === questions[i].correctAnswer) {
            correctCounter++;
        }
    };
    $("#correct").text(correctCounter);
    $("#incorrect").text(questions.length - correctCounter);
}