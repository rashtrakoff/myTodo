//For displaying the date below header

var tday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var tmonth=["January","February","March","April","May","June","July","August","September","October","November","December"];

function GetClock()
{
    var d=new Date();
    var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate();
    var nhour=d.getHours(),nmin=d.getMinutes(),ap;

    if(nhour==0){ap=" AM";nhour=12;}
    else if(nhour<12){ap=" AM";}
    else if(nhour==12){ap=" PM";}
    else if(nhour>12){ap=" PM";nhour-=12;}

    if(nmin<=9) nmin="0"+nmin;

    var clocktext=""+tday[nday]+", "+tmonth[nmonth]+" "+ndate+" "+nhour+":"+nmin+ap+"";
    document.getElementById("date").innerHTML=clocktext;
}

GetClock();
setInterval(GetClock,1000);

var list = document.querySelector("ul")
var input = document.getElementById("input1");
var close = document.getElementsByClassName("close");
var i;

list.addEventListener("click", function(ev){
    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
        list.removeChild(ev.target);
        list.appendChild(ev.target);
    }
});


input.addEventListener("keypress", function(event){
    if(event.keyCode === 13)
    {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));

        var span = document.createElement("span");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);

        list.insertBefore(li, list.firstChild);
        input.value = "";
        
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
            }
        }
    }
});








