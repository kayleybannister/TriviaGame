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

        $("#start").append("<h3>" + questions[1].question + "</h3>");
        for (var j = 0; j < question[1].length; j++)

        if questions[1].choices === questions[1].correctAnswer {

            $("#start").append("<h3>" + questions[2].question + "</h3>");

        }

        else {
            $("#start").append("<h3> You guessed incorrectly! </h3>);
        }

        if questions[2].choices == questions[2].correctAnswer {

            $("#start").append("<h3>" + questions[3].question + "</h3>");

        }

        else {
            $("#start").append("<h3> You guessed incorrectly! </h3>);
        }

        if questions[3].choices == questions[3].correctAnswer {

            $("#start").append("<h3>" + questions[4].question + "</h3>");

        }

        else {
            $("#start").append("<h3> You guessed incorrectly! </h3>);
        }

    };

});

