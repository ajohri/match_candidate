function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var categories = getParameterByName('abortion');

$(document).ready(function() {


    var questions = qlist["questions_list"];

    for (var i = 0; i < questions.length; i++) {
        // $("h2").after("<div><input id='ex19' type='text' data-provide='slider' data-slider-ticks='[1, 2, 3, 4, 5]'' data-slider-ticks-labels='['Least Importance', ' ', ' ', ' ', Most Importance]' data-slider-min='1' data-slider-max='5' data-slider-step='1' data-slider-value='5' data-slider-tooltip='hide' /></div>");
        //     }
        if (questions[i]["qtopic"] == "poverty") {
            $("#slider_poverty").append("<input id=\"ex19\" type=\"text\" data-provide=\"slider\" data-slider-ticks=\"[1, 2, 3, 4, 5]\" data-slider-min=\"1\" data-slider-max=\"5\" data-slider-step=\"1\" data-slider-value=\"1\" data-slider-tooltip=\"hide\"></input><br><br>");
            $("#questions_poverty").append(questions[i]["question"] + "<br><br>");
            $("#slider_poverty").after("<p></p><br>");
        }

        if (questions[i]["qtopic"] == "education") {
            $("#slider_education").append("<input id=\"ex19\" type=\"text\" data-provide=\"slider\" data-slider-ticks=\"[1, 2, 3, 4, 5]\" data-slider-min=\"1\" data-slider-max=\"5\" data-slider-step=\"1\" data-slider-value=\"1\" data-slider-tooltip=\"hide\"></input><br><br>");
            $("#questions_education").append(questions[i]["question"] + "<br><br>");
            $("#slider_education").after("<p></p><br>");
        }

        if (questions[i]["qtopic"] == "abortion") {
            $("#slider_abortion").append("<input id=\"ex19\" type=\"text\" data-provide=\"slider\" data-slider-ticks=\"[1, 2, 3, 4, 5]\" data-slider-min=\"1\" data-slider-max=\"5\" data-slider-step=\"1\" data-slider-value=\"1\" data-slider-tooltip=\"hide\"></input><br><br>");
            $("#questions_abortion").append(questions[i]["question"] + "<br><br>");
            $("#slider_abortion").after("<p></p><br>");
        }

        if (questions[i]["qtopic"] == "death penalty") {
            $("#slider_deathpenalty").append("<input id=\"ex19\" type=\"text\" data-provide=\"slider\" data-slider-ticks=\"[1, 2, 3, 4, 5]\" data-slider-min=\"1\" data-slider-max=\"5\" data-slider-step=\"1\" data-slider-value=\"1\" data-slider-tooltip=\"hide\"></input><br><br>");
            $("#questions_deathpenalty").append(questions[i]["question"] + "<br><br>");
            $("#slider_deathpenalty").after("<p></p><br>");
        }

        if (questions[i]["qtopic"] == "security") {
            $("#slider_security").append("<input id=\"ex19\" type=\"text\" data-provide=\"slider\" data-slider-ticks=\"[1, 2, 3, 4, 5]\" data-slider-min=\"1\" data-slider-max=\"5\" data-slider-step=\"1\" data-slider-value=\"1\" data-slider-tooltip=\"hide\"></input><br><br>");
            $("#questions_security").append(questions[i]["question"] + "<br><br>");
            $("#slider_security").after("<p></p><br>");
        }
        if (questions[i]["qtopic"] == "healthcare") {
            $("#slider_healthcare").append("<input id=\"ex19\" type=\"text\" data-provide=\"slider\" data-slider-ticks=\"[1, 2, 3, 4, 5]\" data-slider-min=\"1\" data-slider-max=\"5\" data-slider-step=\"1\" data-slider-value=\"1\" data-slider-tooltip=\"hide\"></input><br><br>");
            $("#questions_healthcare").append(questions[i]["question"] + "<br><br>");
            $("#slider_healthcare").after("<p></p><br>");
        }
        if (questions[i]["qtopic"] == "climate change") {
            $("#slider_climatechange").append("<input id=\"ex19\" type=\"text\" data-provide=\"slider\" data-slider-ticks=\"[1, 2, 3, 4, 5]\" data-slider-min=\"1\" data-slider-max=\"5\" data-slider-step=\"1\" data-slider-value=\"1\" data-slider-tooltip=\"hide\"></input><br><br>");
            $("#questions_climatechange").append(questions[i]["question"] + "<br><br>");
            $("#slider_climatechange").after("<p></p><br>");
        }
        if (questions[i]["qtopic"] == "gun control") {
            $("#slider_guncontrol").append("<input id=\"ex19\" type=\"text\" data-provide=\"slider\" data-slider-ticks=\"[1, 2, 3, 4, 5]\" data-slider-min=\"1\" data-slider-max=\"5\" data-slider-step=\"1\" data-slider-value=\"1\" data-slider-tooltip=\"hide\"></input><br><br>");
            $("#questions_guncontrol").append(questions[i]["question"] + "<br><br>");
            $("#slider_guncontrol").after("<p></p><br>");
        }
        if (questions[i]["qtopic"] == "immigration") {
            $("#slider_immigration").append("<input id=\"ex19\" type=\"text\" data-provide=\"slider\" data-slider-ticks=\"[1, 2, 3, 4, 5]\" data-slider-min=\"1\" data-slider-max=\"5\" data-slider-step=\"1\" data-slider-value=\"1\" data-slider-tooltip=\"hide\"></input><br><br>");
            $("#questions_immigration").append(questions[i]["question"] + "<br><br>");
            $("#slider_immigration").after("<p></p><br>");
        }

        //$("#topic_poverty").after('<input id="ex19" type="text" data - provide = "slider" data - slider - ticks = "[1, 2, 3, 4, 5]" data - slider - min = "1"data - slider - max = "5"data - slider - step = "1" data - slider - value = "5" data - slider - tooltip = "hide" / > ');
        //alert(qlist["questions_list"][0]["question"]);
    }

    // $("#main_questions_container").append("<a href=\"importance.html\" class=\"btn btn-info\" role=\"button\" style=\"position: absolute; left: 20%; right: 20%; bottom: 5%;\">Next</a>");

    if (categories != null) {

        var i;
        for (i = 0; i <= 5; i++) {
            if (categories.indexOf(i) >= 0) {
                // document.getElementById(i).style.display = "inline";
            }
        }
    } else {
        var i;
        for (i = 0; i <= 5; i++) {
            // document.getElementById(i).style.display = "inline";
        }
    }
});
