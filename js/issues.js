$(document).ready(function() {

    var answer_array = sessionStorage.getItem('myArray');
    //alert(answer_array);

    //Colbert overall percetage
    var overall_num1 = -1;

    //Santorum overall percentage
    var overall_num2 = -1;

    //Issue percentages
    // step's num 
    var poverty_num1 = -1;
    var education_num1 = -1;
    var abortion_num1 = -1;
    var deathpenalty_num1 = -1;
    var security_num1 = -1;
    var healthcare_num1 = -1;
    var climatechange_num1 = -1;
    var immigration_num1 = -1;
    var guncontrol_num1 = -1;
    // rick's num 
    var poverty_num2 = 1;
    var education_num2 = 1;
    var abortion_num2 = 1;
    var deathpenalty_num2 = 1;
    var security_num2 = 1;
    var healthcare_num2 = 1;
    var climatechange_num2 = 1;
    var immigration_num2 = 1;
    var guncontrol_num2 = 1;
    var step = " - Stephen Colbert" ; 
    var rick = " - Rick Santorum"; 
	var i; 
// setting percentage 
		document.getElementById(0).innnerHTML = (poverty_num1 > poverty_num2) ? poverty_num1 : poverty_num2 + "%";
        document.getElementById(1).innnerHTML = (education_num1 > education_num2) ? education_num1 : education_num2 + "%";
        document.getElementById(2).innnerHTML = (abortion_num1 > abortion_num2) ? abortion_num1 : abortion_num2  + "%";
        document.getElementById(3).innnerHTML = (deathpenalty_num1 > deathpenalty_num2) ? deathpenalty_num1 : deathpenalty_num2 + "%";
        document.getElementById(4).innnerHTML = (security_num1 > security_num2) ? security_num1 : security_num2  + "%";
        document.getElementById(5).innnerHTML = (healthcare_num1 > healthcare_num2) ? healthcare_num1 : healthcare_num2  + "%";
        document.getElementById(6).innnerHTML = (climatechange_num1 > climatechange_num2) ?climatechange_num1 : climatechange_num2  + "%";
        document.getElementById(7).innnerHTML = (immigration_num1> immigration_num2) ? immigration_num1: immigration_num2  + "%";
        document.getElementById(8).innnerHTML = (guncontrol_num1 > guncontrol_num2) ? guncontrol_num1 : guncontrol_num2 + "%";
// setting name 
    document.getElementById(10).innnerHTML += (poverty_num1 > poverty_num2) ? step : rick ;
    document.getElementById(11).innnerHTML += (education_num1 > education_num2) ? step : rick ;
    document.getElementById(12).innnerHTML += (abortion_num1 > abortion_num2)? step : rick ;
    document.getElementById(13).innnerHTML +=(deathpenalty_num1 > deathpenalty_num2)? step : rick ;
    document.getElementById(14).innnerHTML +=(security_num1 > security_num2) ? step : rick ;
    document.getElementById(15).innnerHTML +=(healthcare_num1 > healthcare_num2)? step : rick ;
    document.getElementById(16).innnerHTML +=(climatechange_num1 > climatechange_num2)? step : rick ;
    document.getElementById(17).innnerHTML +=(immigration_num1> immigration_num2) ? step : rick ;
    document.getElementById(18).innnerHTML +=(guncontrol_num1 > guncontrol_num2)? step : rick ;
});
