/*var timer=0;
var minute=0;
var hour=0;
setInterval(function(){
    var am=document.querySelector("#am");

    if(timer<6){
        timer++;
        var sec= document.querySelector("#sec");
        sec.innerHTML=timer;
    }
    else{
        timer=-1;
        var min=document.querySelector("#min");
        minute++;
        min.innerHTML=minute;
        if(minute==2){
            var h=document.querySelector("#hour");
            hour++;
            minute=-1;
            h.innerHTML=hour;
        }

        if(hour>=12){
            var am=document.querySelector("#am");
            am.innerHTML="PM";
        }
        else{
            am.innerHTML="AM";
        }
    }
},1000)

setInterval();*/

function displayTime(){
    var dateTime=new Date();
    var hrs=dateTime.getHours();
    var min=dateTime.getMinutes();
    var sec=dateTime.getSeconds();
    var session =document.getElementById("session");
    if(hrs>=12){
        session.innerHTML='PM';
    }
        
    else{
        session.innerHTML='AM';
    }

    document.getElementById("hour").innerHTML=hrs;
    document.getElementById("min").innerHTML=min;
    document.getElementById("sec").innerHTML=sec;
}

setInterval(displayTime,10);
