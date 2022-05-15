submit = document.getElementById('submit');
email = document.getElementById('email');
password = document.getElementById('password');
rem = document.getElementById('rem');
not= document.getElementById('not');

submit.addEventListener('click', sub);
function sub(){
    if(email.value == "demo@demo.com" && password.value == "pass")
    {
        if(rem.checked == true)
        {
        window.location.replace("dashboard.html");
        }
        else
        {
        window.location.href="dashboard.html";
        }
    }
    else
    {
        not.style.display="none"
        not.offsetWidth;
        not.style.display="block"
    }
}
