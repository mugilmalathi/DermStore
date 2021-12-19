document.querySelector('.continue').addEventListener('click', signup);

var arr = JSON.parse(localStorage.getItem('signupDatabase')) || [];
function signup(){
    var fullname = document.querySelector('.fullnameBox').value;
    var email = document.querySelector('.emailBox').value;
    var confirmemail = document.querySelector('.confirmemailBox').value;
    var password = document.querySelector('.passwordBox').value;
    var confirmpassword = document.querySelector('.confirmpasswordBox').value;
    var cellphone = document.querySelector('.cellphoneBox').value;
    var referral = document.querySelector('.referralBox').value;

    var obj = {
        fullname:fullname,
        email:email,
        confirmemail:confirmemail,
        password:password,
        confirmpassword:confirmpassword,
        cellphone:cellphone,
        referral:referral
    }

    arr.push(obj);
    localStorage.setItem('signupDatabase', JSON.stringify(arr));
}


// arr.map(function(e){
//     if(e.email == e.confirmemail && e.password == e.confirmpassword){
//         window.location.href = 'index.html';
//     }
//     else{
//         document.querySelector('#msg').textContent = 'Please Check your email & password..!'
//     }
// })
        


JSON.parse(localStorage.getItem('fb'));
var facebook = document.querySelector('#facebook').addEventListener('click', function(){
    var fb = window.location.href = 'https://www.facebook.com/';
    localStorage.setItem('fb', json.stringify(fb))
})

var google = document.querySelector('#google').addEventListener('click', function(){
    window.location.href = 'https://accounts.google.com/ServiceLogin/identifier?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin';
})

document.querySelector('.continue').addEventListener('click', function(){
    window.location.href = 'login.html';
})