
var getdata = JSON.parse(localStorage.getItem("details"));
 
var cart = JSON.parse(localStorage.getItem("cartItems")) || [];

display(getdata);

function display(getdata){
    
  getdata.map(function (elem){
   var div2 = document.createElement("div");
   div2.setAttribute("id" , "div2");

   var h2 = document.createElement("h2");
   h2.textContent = elem.title;
   var price = document.createElement("p");
    price.textContent = elem.price1;
   
    
   var image = document.createElement("img");
   image.setAttribute("src" , elem.img);
   image.setAttribute("id" , "image");

   var star1 = document.createElement("h3");
   star1.textContent = elem.star1; 

   var btn = document.createElement("button");
        btn.textContent = "ADD TO CART";
        btn.addEventListener("click" , function(){
            addcart(elem);
        });


   document.querySelector("#div5").append(btn)
   document.querySelector("#price").append(price)
   document.querySelector("#h2").append(h2)
   document.querySelector("#div1").append(image)
  });


  function addcart(elem){
     cart.push(elem);
     localStorage.setItem("cartItems" , JSON.stringify(cart));
    
     console.log(cart);
    }

}

document.querySelector("i").addEventListener("click" , function(){
        window.location.href = "addtoCart.html";
    });


    document.querySelector('#logoutbut').addEventListener('click', function(){
        window.location.href = 'login.html';
    })
 
    document.querySelector('.signmeupbutton').addEventListener('click', function(){
        window.location.href = 'register.html';
    })