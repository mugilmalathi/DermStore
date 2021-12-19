
var mycart = JSON.parse(localStorage.getItem("cartItems")) || [];

var sum=0;
    for(var i=0 ; i<mycart.length ; i++){
         sum =  (i+1) * (mycart[i].price);
        
    }
document.querySelector("#subtotal").textContent = sum;
displaycart(mycart);

function displaycart(mycart){

    document.querySelector("tbody").textContent = "";

    mycart.map(function (elem , index){    
  
        var div1 = document.createElement("div");
    div1.setAttribute("id" , "div1")
    
    
    var pic = document.createElement("img");
    pic.setAttribute("src" , elem.img);

    var div2 = document.createElement("div");
    div2.setAttribute("id" , "div2");
    div2.textContent = elem.title;


    var row = document.createElement("tr");

var td1 = document.createElement("td");

var h4 = document.createElement("h4");
   h4.textContent = elem.price1;

var td2 = document.createElement("td");


var td3 = document.createElement("td");

var cancelBTN = document.createElement("button");
cancelBTN.textContent = "✖"
cancelBTN.setAttribute("id" , "cancelBTN");

var td4 = document.createElement("td");

cancelBTN.addEventListener("click" , function (){
    delettask(index)});

td4.append(cancelBTN);
td3.append(h4);    
div1.append(pic);
td2.append(div2); 
td1.append(div1);
row.append(td1,td2,td3,td4);
document.querySelector("tbody").append(row);

    });
}

function delettask(index){
        mycart.splice(index,1);
 localStorage.setItem("cartItems" , JSON.stringify(mycart));
 displaycart(mycart);

    }

    document.querySelector("#btn2").addEventListener("click" , function(){
        window.location.href = "payment.html";
    });

    document.querySelector("#btn1").addEventListener("click" , function(){
        window.location.href = "haircareproducts.html";
    });


    document.querySelector("#btn4").addEventListener("click" , check);
        
    function check(){
      var X = document.querySelector("#code").value;
    
      if(X=="masai30"){
        var ans = sum * 0.1;
       document.querySelector("#h21").textContent = ans;
       sum = sum - ans;
       document.querySelector("#subtotal").textContent = sum;
      }
    }


    document.querySelector('#logoutbut').addEventListener('click', function(){
        window.location.href = 'login.html';
    })
 
    document.querySelector('.signmeupbutton').addEventListener('click', function(){
        window.location.href = 'register.html';
    })