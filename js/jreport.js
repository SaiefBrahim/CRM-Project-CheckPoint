var dark = document.getElementById("dark");
var pp = document.getElementById("pp");
var ppp = document.getElementById("ppp");
var not = document.querySelectorAll(".notification");
var des = document.querySelectorAll(".desc");
var td = document.getElementsByTagName('td');
var label = document.getElementsByTagName('label')
var moon = document.getElementById('moon')

document.body.style.backgroundColor = "white";
dark.addEventListener("click", godark);
function godark() {
  if (document.body.style.backgroundColor == "white") {
    document.body.style.backgroundColor = "black";
    moon.style.color ="#ca2e55"
    for (var i = 0; i < td.length; i++) {
      td[i].style.color = "#fff";
    }
    for (var i = 0; i < label.length; i++) {
        label[i].style.color = "#fff";
      }
  } 
  else {
    document.body.style.backgroundColor = "white";
    moon.style.color ="#fff"
    for (var i = 0; i < td.length; i++) {
      td[i].style.color = "#000";
    }
    for (var i = 0; i < label.length; i++) {
        label[i].style.color = "#000";
      }
  }
}

var imei = document.getElementById('imei');
var table = document.getElementById("table");
var trow = table.rows;
var i=0;
var tdet;
var invalue

imei.addEventListener('keyup', search)
imei.addEventListener('change', search)
function search() {
    for (i=0; i < trow.length; i++) {
        tdet = trow[i].cells[2];
        invalue = tdet.innerText;
        if (invalue.indexOf(imei.value) > -1) {
          trow[i].style.display = "";
        } else {
          trow[i].style.display = "none";
        }
      
    }
  }


var cname = document.getElementById('cname')
var y=0;
cname.addEventListener('keyup', csearch)
cname.addEventListener('change', csearch)
function csearch() {
    for (y=0; y < trow.length; y++) {
        tdet = trow[y].cells[4];
        invalue = tdet.innerText;
        if (invalue.toUpperCase().indexOf(cname.value.toUpperCase()) > -1) {
          trow[y].style.display = "";
        } else {
          trow[y].style.display = "none";
        }
      
    }
  }





var log = document.getElementById("logout");
log.addEventListener("click", logoutt);
function logoutt() {
window.location.replace("index.html");
}