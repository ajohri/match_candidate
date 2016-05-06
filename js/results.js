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

    var poverty_num1 = -1;
    var education_num1 = -1;
    var abortion_num1 = -1;
    var deathpenalty_num1 = -1;
    var security_num1 = -1;
    var healthcare_num1 = -1;
    var climatechange_num1 = -1;
    var immigration_num1 = -1;
    var guncontrol_num1 = -1;
    
    var poverty_num2 = -1;
    var education_num2 = -1;
    var abortion_num2 = -1;
    var deathpenalty_num2 = -1;
    var security_num2 = -1;
    var healthcare_num2 = -1;
    var climatechange_num2 = -1;
    var immigration_num2 = -1;
    var guncontrol_num2 = -1;

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
