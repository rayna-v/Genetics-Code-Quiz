

var questions = [$('#q1'), $('#q2'), $('#q3'), $('#q4'), $('#q5'), $('#q6'), $('#q7'), $('#q8'), $('#q9'), $('#q10')]

// console.log(questions.value('#q2'));

$(document).ready(function () {
    //hides questions until 'Begin Quiz' button is clicked
    $(".questions").hide();
    //  listens for 'click' on 'btn-start'/Begin Quiz and then executes the following code block
    $("#btn-start").on("click", function () {
        //call function to start timer

        //hides 'quiz-start' card
        $("#quiz-start").hide();
        $('#q1').show();

        var oldQ = [];
        var currentQ = [];

        $.each(questions, function (i) {
            // questions[i].show();
            $('#true').on("click", function () {
                oldQ = questions[i].hide();
                currentQ = questions[i++].show();
            })
            return oldQ;
            return currentQ;
        })

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
