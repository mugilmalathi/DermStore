
document.querySelector('#end-but').addEventListener('click', function(){

    window.location.href = 'paymentSuccess.html';
});

document.querySelector('.img').addEventListener('click', function(){
    window.location.href = 'index.html';
})



var mycart = JSON.parse(localStorage.getItem("cartItems")) || [];



var sum=0;
    for(var i=0 ; i<mycart.length ; i++){
         sum =  (i+1) * (mycart[i].price);
        
    }
document.querySelector("#subtotal").textContent = sum;


displaycart(mycart);

function displaycart(mycart){

    mycart.map(function (elem , index){    
  
    var div1 = document.createElement("div");
    div1.setAttribute("id" , "div1")
    
    
    var pic = document.createElement("img");
    pic.setAttribute("src" , elem.img);
    pic.setAttribute('id', 'image-right')

    var div2 = document.createElement("div");
    div2.setAttribute("id" , "div2");
    div2.textContent = elem.title;

    var price = document.createElement("h4");
    price.textContent = elem.price1;

document.querySelector('.box-right').append(div1, pic, div2, price)

    });
}