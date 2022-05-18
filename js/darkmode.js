var dark = document.getElementById('dark');
var pp = document.getElementById('pp');
var ppp = document.getElementById('ppp');
var not = document.querySelectorAll('.notification')
var des =  document.querySelectorAll('.desc')
document.body.style.backgroundColor ='white'
dark.addEventListener('click', godark)
function godark(){

    if(document.body.style.backgroundColor == 'white'){
    document.body.style.backgroundColor='black';
    pp.style.color='#fff'
    ppp.style.color='#fff'
    for(var i=0;i<not.length;i++){
        not[i].style.color='#fff'
    }
    for(var i=0;i<not.length;i++){
        des[i].style.color='#fff'
    }
}
else{
    document.body.style.backgroundColor='white';
    pp.style.color='#000'
    ppp.style.color='#000'
    for(var i=0;i<not.length;i++){
        not[i].style.color='#1a6fff'
    }
    for(var i=0;i<not.length;i++){
        des[i].style.color='#1a6fff'
    }
}
    
}