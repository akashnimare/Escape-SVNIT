$(document).ready(function(){
            JBCountDown({
            secondsColor : "#ffdc50",
            secondsGlow  : "none",

            minutesColor : "#9cdb7d",
            minutesGlow  : "none",

            hoursColor   : "#378cff",
            hoursGlow    : "none",

            daysColor    : "#ff6565",
            daysGlow     : "none",

            startDate   : (new Date(2014,10,6,00,0,0)).getTime() /1000,
            endDate     : (new Date(2017,5,19,17,0,0)).getTime() /1000,
            now         : (new Date()).getTime()/1000
            });
            });