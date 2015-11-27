


$(function () {
    var nameContainer = $("#nameContainer");
    var mailContainer = $("#mailContainer");
    var messageContainer = $("#messageContainer");


    $("#btnSendForm").click(function () {
        var responseCaptcha = grecaptcha.getResponse();

        if (nameContainer.hasClass("has-success") && mailContainer.hasClass("has-success") && messageContainer.hasClass("has-success")) {
            if (responseCaptcha.length > 0) {
                $.ajax({
                    url: "http://localhost:57342/Home/Contact",
                    type: 'POST',
                    data: JSON.stringify({ "Imie": $("#nameInput").val(), "EmailAddress": $("#emailInput").val(), "Message": $("#message").val() }),
                    contentType: 'application/json; charset=utf-8',
                    success: function (data) {
                        $("#btnSendForm").submit();
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        //console.log("error: "+errorThrown);
                    }
                });
            } else {
                alert("Please resolve captcha");
                return false;
            }
        } else {
            alert("Please fill form");
            return false;
        };
    });

    $("#emailInput").keyup(function () {
        validateEmail($(this).val()) ? changeStateClass(mailContainer, true) : changeStateClass(mailContainer, false);     
    });

    $("#nameInput").keyup(function () {
        checkRequired($(this).val().length) ? changeStateClass(nameContainer, true) : changeStateClass(nameContainer, false);
    });

    $("#message").keyup(function () {
        checkRequired($(this).val().length) ? changeStateClass(messageContainer, true) : changeStateClass(messageContainer, false);
    });

});




function checkRequired(length) {
    if (length > 2) {
        return true;
    } else {
        return false;
    };
};

function changeStateClass(control,validState) {
    if (!validState) {
        $(control).removeClass("has-success");
        $(control).addClass("has-error");
    } else {
        $(control).removeClass("has-error");
        $(control).addClass("has-success");
    };
};

function validateEmail(email) {

    var re = /\S+@\S+\.\S/;
    return re.test(email);
};