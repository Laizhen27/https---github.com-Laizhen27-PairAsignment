$(document).ready(function () {
    var user = JSON.parse(localStorage.getItem("profile"))
    var cart = JSON.parse(localStorage.getItem("cart"))
    console.log(user);
    console.log(cart)   
    const date = new Date();

    let day = date.getDate() + 5;
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    
    // This arrangement can be altered based on how we want the date's format to appear.
    let currentDate = `${day}/${month}/${year}`;
    console.log(currentDate); // "17-6-2022"
    $("section.checkout").append(
        '<div class="text-box">\
        <div class="left">\
            <h4>'+"Name:"+'</h4>\
            <h4>'+"Shipping Address: "+'</h4>\
            <h4>'+"Credit Card: "+'</h4>\
            <h4>'+"Points: "+'</h4>\
        </div>\
        <div class="right">\
            <h4>'+user.name+'</h4>\
            <h4>'+user.shipping+'</h4>\
            <h4>'+user.creditcard+'</h4>\
            <h4>'+user.point+" Points"+'</h4>\
        </div>\
    </div>\
    <h3>Name of Product</h3>\
    <div class="text-box-3">\
        <div class="left">\
            <img src="product/FormalShirt1.webp">\
        </div>\
        <div class="right">\
            <h4>'+"Quantity: "+cart.quantity+'</h4>\
            <h4>'+"Size: "+cart.size+'</h4>\
            <div class="amount">'+"$ "+cart.price+'</div>\
        </div>\
    </div>\
    <h3>Est. Delivery Date</h3>\
    <div class="text-box">\
    <p>'+"Deliver By: "+currentDate+'</p>\
    </div>\
    <h3>Order Amount</h3>\
    <div class="text-box-1">\
        <div class="left"></div>\
        <p>AAAAAAAAAAAAAAAAAA</p>\
        <div class="right"></div>\
        <p>AAAAAA</p>\
    </div>\
    <br><br>\
    <div class="text-box-2">\
        <p>Total $######</p>\
        <button>Place order</button>\
    </div>'
    )
})