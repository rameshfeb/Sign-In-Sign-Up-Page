function validation()
{
    var username = document.forms["signup"]["usernamesignup"].value;
    if (document.signup.usernamesignup.value == ""){
        document.getElementById('usernameerror').style.color= "red";
        document.getElementById('usernameerror').innerHTML = "Please Enter Your Name";
        return false;
    }
    if ((username.length<=2)||(username.length>20)){
        document.getElementById('usernameerror').style.color = "red";
        document.getElementById('usernameerror').innerHTML = "Name Should Be Above 2 & Below 20 --> " +username;
        return false;
    }
    if (!/^[a-zA-Z]*$/g.test(document.signup.usernamesignup.value)) {
        document.getElementById('usernameerror').style.color="red";
        document.getElementById('usernameerror').innerHTML= "Invalid Name Please Check Your Input --> " +username;
        return false;
    }else{
        document.getElementById("usernameerror").innerHTML ="";
    }

    var useremail = document.getElementById("emailsignup").value;
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (document.signup.emailsignup.value == ""){
        document.getElementById('useremailerror').style.color="red";
        document.getElementById('useremailerror').innerHTML = "Please Enter Your E-Mail ID";
        return false;
    }
    if (reg.test(document.signup.emailsignup.value) == false) {
        document.getElementById("useremailerror").style.color = "red";
        document.getElementById("useremailerror").innerHTML = "Invalid EMail ->" +useremail;
        return false;
    }else{
        document.getElementById("useremailerror").innerHTML ="";
    }

    if (document.signup.dobsignup.value == ""){
        document.getElementById('doberror').style.color="red";
        document.getElementById('doberror').innerHTML = "Please Choose Your Date Of Birth";
        return false;
    }else{
        document.getElementById("doberror").innerHTML ="";
    }

    var userpassword = document.getElementById("passwordsignup").value;
    if (document.signup.passwordsignup.value == ""){
        document.getElementById('passworderror').style.color="red";
        document.getElementById('passworderror').innerHTML = "Please Choose Your Password";
        return false;
    }
    if ((userpassword.length<=4)||(userpassword.length>20)){
        document.getElementById('passworderror').style.color = "red";
        document.getElementById('passworderror').innerHTML = "Password Should Be Above 4 & Below 20 --> " +userpassword;
        return false;
    }
    if (!/^[a-zA-Z]*$/g.test(document.signup.passwordsignup.value)) {
        document.getElementById('passworderror').style.color="red";
        document.getElementById('passworderror').innerHTML= "Password Should Be Only Alphabets";
        return false;
    }else{
        document.getElementById("passworderror").innerHTML ="";
    }

    if (document.signup.passwordsignup_confirm.value == ""){
        document.getElementById('cnfpassworderror').style.color="red";
        document.getElementById('cnfpassworderror').innerHTML = "Please ReType Your Password";
        return false;
    }else{
        document.getElementById("cnfpassworderror").innerHTML ="";
    }

    if(document.signup.passwordsignup.value == document.signup.passwordsignup_confirm.value){
        document.getElementById("cnfpassworderror").style.color = "green";
        document.getElementById("cnfpassworderror").innerHTML ="Password matched, And Your Details Regsitered Successfully!!";
        return false;
    }else{
        document.getElementById("cnfpassworderror").style.color = "red";
        document.getElementById("cnfpassworderror").innerHTML ="Password Doesn't matching";
        return false;
    }
}

function loginvalidation() {

    var useremail = document.getElementById("username").value;
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (document.signin.username.value == ""){
        document.getElementById('usernameerrorsignin').style.color="red";
        document.getElementById('usernameerrorsignin').innerHTML = "Please Enter Your E-Mail ID";
        return false;
    }
    if (reg.test(document.signin.username.value) == false) {
        document.getElementById("usernameerrorsignin").style.color = "red";
        document.getElementById("usernameerrorsignin").innerHTML = "Invalid EMail ->" +useremail;
        return false;
    }else{
        document.getElementById("usernameerrorsignin").innerHTML ="";
    }

    var userpasswordsignin = document.getElementById("password").value;
    if (document.signin.password.value == ""){
        document.getElementById('passworderrorsignin').style.color="red";
        document.getElementById('passworderrorsignin').innerHTML = "Please Type Your Password";
        return false;
    }
    if ((userpasswordsignin.length<=4)||(userpasswordsignin.length>20)){
        document.getElementById('passworderrorsignin').style.color = "red";
        document.getElementById('passworderrorsignin').innerHTML = "Invalid Password";
        return false;
    }
    if (!/^[a-zA-Z]*$/g.test(document.signin.password.value)) {
        document.getElementById('passworderrorsignin').style.color="red";
        document.getElementById('passworderrorsignin').innerHTML= "Invalid Password";
        return false;
    }else{
        document.getElementById("passworderrorsignin").innerHTML ="";
    }
}