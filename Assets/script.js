

// var questions = [$('#q1'), $('#q2'), $('#q3'), $('#q4'), $('#q5'), $('#q6'), $('#q7'), $('#q8'), $('#q9'), $('#q10')]

// console.log(questions.value('#q2'));


$(document).ready(function () {
    var questionsArr = [
        {
            question: "question1 text",
            answerA: {
                text: "answerA text",
                correct: false,
            },
            answerB: {
                text: "answerB text",
                correct: false,
            },
            answerC: {
                text: "answerC text",
                correct: true,
            },
            answerD: {
                text: "answerD text",
                correct: false,
            }
        },
        {
            question: "question2 text",
            answerA: {
                text: "answerA text",
                correct: true,
            },
            answerB: {
                text: "answerB text",
                correct: false,
            },
            answerC: {
                text: "answerC text",
                correct: false,
            },
            answerD: {
                text: "answerD text",
                correct: false,
            }
        }, {
            question: "question2 text",
            answerA: {
                text: "answerA text",
                correct: true,
            },
            answerB: {
                text: "answerB text",
                correct: false,
            },
            answerC: {
                text: "answerC text",
                correct: false,
            },
            answerD: {
                text: "answerD text",
                correct: false,
            }
        }, {
            question: "question2 text",
            answerA: {
                text: "answerA text",
                correct: true,
            },
            answerB: {
                text: "answerB text",
                correct: false,
            },
            answerC: {
                text: "answerC text",
                correct: false,
            },
            answerD: {
                text: "answerD text",
                correct: false,
            }
        }
    ]

    /* <a href="#" class="list-group-item list-group-item-action" id="question-text"></a>
        <a href="#false" class="list-group-item list-group-item-action list-group-item-info" id="choiceA">
        </a>
        <a href="#false" class="list-group-item list-group-item-action list-group-item-info" id="choiceB">
        </a>
        <a href="#true" class="list-group-item list-group-item-action list-group-item-info" id="choiceC">
        </a>
        <a href="#false" class="list-group-item list-group-item-action list-group-item-info" id="choiceD">
        </a> */

    // what we reference to get to the next question
    var currentQIndex = 0;

    //hides questions until 'Begin Quiz' button is clicked
    // $(".questions").hide();
    $("#timer").text("120 seconds")
    // $(".badge").hide();
    //  listens for 'click' on 'btn-start'/Begin Quiz and then executes the following code block
    $("#btn-start").on("click", function () {
        //call function to start timer
        // $(".badge").show();
        //hides 'quiz-start' card
        $("#quiz-start").hide();

        var questionEl = $("<a>");
        var choiceAEl = $("<a>");
        var choiceBEl = $("<a>");
        var choiceCEl = $("<a>");
        var choiceDEl = $("<a>");
        questionEl.addClass("list-group-item list-group-item-action");

        if (questionsArr[0].answerA.correct === true) {
            choiceAEl.addClass("correct list-group-item list-group-item-action list-group-item-info")
            //add eventlistener for correct
        } else {
            choiceAEl.addClass("incorrect list-group-item list-group-item-action list-group-item-info")
            //subtract time
        }

        if (questionsArr[0].answerB.correct === true) {
            choiceBEl.addClass("correct list-group-item list-group-item-action list-group-item-info")
        } else {
            choiceBEl.addClass("incorrect list-group-item list-group-item-action list-group-item-info")
        }

        if (questionsArr[0].answerC.correct === true) {
            choiceCEl.addClass("correct list-group-item list-group-item-action list-group-item-info")
        } else {
            choiceCEl.addClass("incorrect list-group-item list-group-item-action list-group-item-info")
        }

        if (questionsArr[0].answerD.correct === true) {
            choiceDEl.addClass("correct list-group-item list-group-item-action list-group-item-info")
        } else {
            choiceDEl.addClass("incorrect list-group-item list-group-item-action list-group-item-info")
        }

        // $('#q1').show();
        questionEl.text(questionsArr[0].question);
        choiceAEl.text(questionsArr[0].answerA.text);
        choiceBEl.text(questionsArr[0].answerB.text);
        choiceCEl.text(questionsArr[0].answerC.text);
        choiceDEl.text(questionsArr[0].answerD.text);

        var qContainer = $("#question-container");
        qContainer.append(questionEl);
        qContainer.append(choiceAEl);
        qContainer.append(choiceBEl);
        qContainer.append(choiceCEl);
        qContainer.append(choiceDEl);

        // var oldQ = [];
        // var currentQ = [];

        // $.each(questions, function (i) {
        //     // questions[i].show();
        //     $('#true').on("click", function () {
        //         oldQ = questions[i].hide();
        //         currentQ = questions[i++].show();
        //     })
        //     console.log(oldQ);
        //     console.log(currentQ);
        // })

    })


    // for (let i = 0; i < questions.length; i++) {

    //     console.log(questions[i]);
    //     // var showQ = questions[i].show();
    //     $('#true').on("click", function () {
    //         $('#q1').hide();
    //         oldQ = questions[i].hide();
    //         currentQ = questions[i++].show();
    //     })
    //     return oldQ;
    //     return currentQ;
    // }
})
