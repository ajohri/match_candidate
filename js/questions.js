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

    json_loc = 'https://rawgit.com/gregchang/match_candidate/gh-pages/questions_list.json'

    // $.getJSON(json_loc, function(data) {
    //     alert(data);
    // });

    $.ajax({
        dataType: "jsonp",
        url: json_loc,
    }).done(function(data) {
        alert("lol");
    });

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
