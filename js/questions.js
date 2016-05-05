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
        if (questions[i]["qtopic"] == "abortion") {

            $("#questions_abortion").after("<input id=\"ex19\" type=\"text\" data-provide=\"slider\" data-slider-ticks=\"[1, 2, 3, 4, 5]\" data-slider-min=\"1\" data-slider-max=\"5\" data-slider-step=\"1\" data-slider-value=\"5\" data-slider-tooltip=\"hide\"></input>");
        }
        //$("#topic_poverty").after('<input id="ex19" type="text" data - provide = "slider" data - slider - ticks = "[1, 2, 3, 4, 5]" data - slider - min = "1"data - slider - max = "5"data - slider - step = "1" data - slider - value = "5" data - slider - tooltip = "hide" / > ');
        //alert(qlist["questions_list"][0]["question"]);
    }
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
