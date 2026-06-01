$(document).ready(function () {
    $("#registerBtn").click(function () {

        $("#message").html(
            "<b>Registration Successful!</b>"
        );
    });

    $("#hideBtn").click(function () {

        $("#eventCard").fadeOut(1000);
    });
    $("#showBtn").click(function () {

        $("#eventCard").fadeIn(1000);
    });

    $("#frameworkBenefit").text(
        "React and Vue make large applications easier to manage using reusable components and efficient UI updates."
    );

});