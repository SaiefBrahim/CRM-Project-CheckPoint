var dark = document.getElementById("dark");
var pp = document.getElementById("pp");
var ppp = document.getElementById("ppp");
var not = document.querySelectorAll(".notification");
var des = document.querySelectorAll(".desc");
document.body.style.backgroundColor = "white";
dark.addEventListener("click", godark);
function godark() {
  if (document.body.style.backgroundColor == "white") {
    document.body.style.backgroundColor = "black";
    // pp.style.color = "#fff";
    // ppp.style.color = "#fff";
    // for (var i = 0; i < not.length; i++) {
    //   not[i].style.color = "#fff";
    // }
    // for (var i = 0; i < not.length; i++) {
    //   des[i].style.color = "#fff";
    // }
  } 
  else {
    document.body.style.backgroundColor = "white";
    // pp.style.color = "#000";
    // ppp.style.color = "#000";
    // for (var i = 0; i < not.length; i++) {
    //   not[i].style.color = "#1a6fff";
    // }
    // for (var i = 0; i < not.length; i++) {
    //   des[i].style.color = "#1a6fff";
    // }
  }
}

var add = document.getElementById('add')
var form = document.getElementById('form')
var submit =document.getElementById('sub')
var hint4 = document.getElementById('hint4')

add.addEventListener('click', adding)
function adding(){
    form.style.display= "flex"
    sub.style.display="flex"
    add.style.display="none"
    hint4.style.display="flex"
}

var fair = document.getElementById('fair')
var warranty = document.getElementById('warranty')
fair.addEventListener('change', statusf)
function statusf(){
  if(fair.checked){
    warranty.value = "Warranty"
  }
}

var damaged = document.getElementById('damaged')
damaged.addEventListener('change', statusd)
function statusd(){
  if(damaged.checked){
    warranty.value = "Out of Warranty"
  }
}
var not = document.getElementById('not')
var model = document.getElementById('model')
var imei = document.getElementById('imei')
var customer = document.getElementById('cname')
var table = document.getElementById('table')
var inc = 3;
var pref = "JN2022-";
sub.addEventListener('click', post)
function post(){
  if (imei.value == "" || warranty.value == "" || cname.value ==""){
    not.innerHTML = '<i class="fa-solid fa-xmark"></i> Please Fill All Credentials'
    not.style.display="none"
    not.offsetWidth;
    not.style.display="block"
  }
  else if (table.rows[0].cells[2].innerHTML == imei.value){

    not.style.display="none"
    not.offsetWidth;
    not.innerHTML = '<i class="fa-solid fa-xmark"></i> Job is Already Opened'
    not.style.display="block"
  }
  else{
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  inc++;
  cell1.innerHTML = String(pref+inc)
  cell2.innerHTML = String(model.value);
  cell3.innerHTML = String(imei.value);
  cell4.innerHTML = String(warranty.value);
  cell5.innerHTML = String(cname.value);
  }

  
}

var log = document.getElementById("logout");
log.addEventListener("click", logoutt);
function logoutt() {
    window.location.replace("index.html");
}