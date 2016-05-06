function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var categories = getParameterByName('categories');




$(document).ready(function() {

    // Candidate positions
    var colbert = [1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1];
    var santorum = [4, 2, 3, 5, 4, 2, 3, 5, 4, 2, 3, 5, 4, 2, 3, 5, 4, 2, 3, 5, 4, 2, 3, 5, 4, 2, 3, 5, 4, 2, 3, 5, 4, 2, 3, 5];

    var answer_array = sessionStorage.getItem('myArray');
    //alert(answer_array);

    var poverty_num = -1;
    var education_num = -1;
    var abortion_num;
    var deathpenalty_num;
    var security_num;
    var healthcare_num;
    var climatechange_num;
    var immigration_num;
    var guncontrol_num;

    for (var i = 1; i < 36; i++) {
        if(answer_array[i] != null) {

        }
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
