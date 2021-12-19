document.querySelector('#loginacc').addEventListener('click', signIn);

var arr = JSON.parse(localStorage.getItem('signupDatabase'));

function signIn(){
    var email = document.querySelector('.emailBox').value;
    var password = document.querySelector('.passwordBox').value;

    // if(email == "admin" && password == "admin"){
    //     // window.location.href = "admin.html";
    // }
    // else{
        // for(var i=0; i<arr.length; i++){
        //     if(arr[i].email == email && arr[i].password == password){
        //         // window.location.href = "index.html";
        //         console.log("Here")
        //         break;
        //     }
        //     else{
        //        if(arr[i].email != email && arr[i].password != password){
        //             alert("Please check your email or password..!");
        //             break;
        //         }
        //     }
        // }
    // }
    arr.map(function(e){
        if(e.email != email && e.password != password){
            var msg = document.querySelector('#msg');
            msg.textContent = "Please check your email or password..!";
            
        }
        else if(e.email == email && e.password == password){
            window.location.href = "account.html";
        }
    })
}

var facebook = document.querySelector('#facebook').addEventListener('click', function(){
    window.location.href = 'https://www.facebook.com/';
})

var google = document.querySelector('#google').addEventListener('click', function(){
    window.location.href = 'https://accounts.google.com/ServiceLogin/identifier?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin';
})

document.querySelector('.continue').addEventListener('click', function(){
    window.location.href = 'register.html'
})