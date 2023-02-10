$(document).ready(function () {
    var cart = JSON.parse(localStorage.getItem("cart"))
    var added = JSON.parse(localStorage.getItem("cartfilled"))
    Display();
    console.log(document.getElementById("checkout"))
    $("a#checkout").click(function (e) { 
        localStorage.setItem("cartfilled",false)
        console.log("yes");
        e.preventDefault();
        cart.forEach(product => {
            let id = product.id
            let quantity = product.quantity
            var jsondata = {"sold": quantity};
            var settings = {
            "async": true,
            "crossDomain": true,
            "url": `https://idasg-39a1.restdb.io/rest/shirt/${id}`,
            "method": "PUT",
            "headers": {
                "content-type": "application/json",
                "x-apikey": "63d641823bc6b255ed0c43e4",
                "cache-control": "no-cache"
            },
            "processData": false,
            "data": JSON.stringify(jsondata)
            }
    
            $.ajax(settings).done(function (response) {
            console.log(response);
            });
            localStorage.setItem("cart",JSON.stringify([]))
            location.reload();
        });
       
        
    });
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
  function Display(){
    var user = JSON.parse(localStorage.getItem("profile"))
    var cart = JSON.parse(localStorage.getItem("cart"))
    var added = JSON.parse(localStorage.getItem("cartfilled"))
    var amount = 0
    var finalamount
        if(added == true){
            console.log(cart)
            console.log(cart.Length);
            cart.forEach(item => {
                amount+=item.price
                $(".wrapper").append(
                    '<div class="cart-container">\
                        <div class="cart">\
                            <div class="card" id='+item.productid+'>\
                                <img src='+item.image+'>\
                                <div class="details">\
                                <h3>'+item.name+'</h3>\
                                <h4>'+"Price :"+item.price+'</h4>\
                                <h4>'+"Size :"+item.size+'</h4>\
                                <div class="buttons">\
                                    <button onclick="Click(-1)">-</button>\
                                    <span id = "quantity">'+item.quantity+'</span>\
                                    <button onclick="Click(1)">+</button></div>\ <div class="btn-remove" onclick="Remove('+item.productid+')"><i class="fa fa-trash"></i>\
                                    <span class="remove">Remove</span>\
                                </div>\
                            </div>\
                        </div>\
                    </div>'
                )
            });
            finalamount = amount - user.point
            $(".wrapper").append(
                ' <div class="display-amount">\
                <p><span>Subtotal</span> <span>$ '+amount+'</span></p><hr>\
                <p><span>Points</span> <span>$ '+user.point+'</span></p><hr>\
                <p><span>Total</span> <span>$'+finalamount +'</span></p><hr>\
                <a href="#" id="checkout"><i class ="fa fa-shopping-cart" id="checkout"></i>Check Out</a>\
            </div>'
            )
        }
        else{
            $(".wrapper").append(
                ' <div class="display-amount">\
                <p><span>Subtotal</span> <span>$ </span></p><hr>\
                <p><span>Points</span> <span>$ </span></p><hr>\
                <p><span>Total</span> <span>$ </span></p><hr>\
                <a href="#" id="checkout" ><i class ="fa fa-shopping-cart" id="checkout"></i>Check Out</a>\
            </div>'
            )
        }
    }

    

  function Remove(removeid){
    console.log(removeid)
    var cart = JSON.parse(localStorage.getItem("cart"))
    let items = []
    cart.forEach(element => {     
        if(element.productid != removeid){
            items.push(element);
        }
    });
    console.log(items)
    if(items.length == 0){
        localStorage.setItem("cartfilled",false)

    }
    localStorage.setItem("cart",JSON.stringify(items))
    Display();
    // location.reload();

    }