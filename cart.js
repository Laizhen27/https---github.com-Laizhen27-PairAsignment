$(document).ready(function () {
    var user = JSON.parse(localStorage.getItem("profile"))
    var cart = JSON.parse(localStorage.getItem("cart"))
    $(".wrapper").append(
        '<h1>Shooping Cart</h1>\
        <div class="cart-container">\
            <div class="cart">\
                <div class="card">\
                    <img src='+cart.image+'>\
                    <div class="details">\
                    <h3>'+cart.name+'</h3>\
                    <h4>'+"Price :"+cart.price+'</h4>\
                    <h4>'+"Size :"+cart.size+'</h4>\
                    <div class="buttons">\
                        <button onclick="Click(-1)">-</button>\
                        <span id = "quantity">1</span>\
                        <button onclick="Click(1)">+</button></div>\ <div class="btn-remove"><i class="fa fa-trash"></i>\
                        <span class="remove">Remove</span>\
                    </div>\
                </div>\
            </div>\
                <div class="display-amount">\
                    <p><span>Subtotal</span> <span>$120</span></p><hr>\
                    <p><span>Subtotal</span> <span>$120</span></p><hr>\
                    <p><span>Subtotal</span> <span>$120</span></p><hr>\
                    <a href="#"><i class ="fa fa-shopping-cart" id="checkout"></i>Check Out</a>\
                </div>\
            </div>\
        </div>'
    )
});
function Click(clicks){
    const qty = document.getElementById("quantity");
    const sum = parseInt(qty.innerText) + clicks
    if(sum < 1){
      e.preventdefault();
    }
    else{
      console.log(sum + clicks);
      qty.innerText = sum
    }
  };