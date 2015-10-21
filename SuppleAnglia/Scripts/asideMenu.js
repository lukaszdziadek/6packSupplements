

$(function(){

    $("#lista").addClass("zamkniete");

    var mainCategory = $("#lista");




    //$("#lista > li").click(function (event) {
    //    event.stopPropagation();
    //    alert("hello LI pierwszy");
    //});

    $("#pierwszyDzial").click(function () {
        alert("kliknales li pierwszy");

        $("#pierwszyDzial > ul").toggle("blind",500);
    });


    $("#lista li ul > li").click(function (event) {

       
       
        if (mainCategory.hasClass("zamkniete")) {
            alert("Asdsad");
            event.stopPropagation();
            alert(event.isPropagationStopped());

        }
        else {
            //mainCategory.removeClass("otwarte");
            //mainCategory.addClass("zamkniete");
        };


    });


    //$("#lista li:first-child").click(function (event){
    //    event.stopPropagation();
    //});

});

