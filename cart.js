$(document).ready(function () {
    var user = JSON.parse(localStorage.getItem("profile"))
    var cart = JSON.parse(localStorage.getItem("cart"))
    console.log(user);
    console.log(cart)
    
    $("section.checkout").append(
        '<div class="text-box">\
        <div class="left">\
            <h4>'+user.name+" "+user.phoneno+'</h4>\
            <h4>Address</h4>\
            <h4>Credit card</h4>\
        </div>\
        <div class="right">\
            <button>Edit</button>\
        </div>\
    </div>\
    <h3>Name of Product</h3>\
    <div class="text-box">\
        <img src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/449858/sub/goods_449858_sub14.jpg?width=1600&impolicy=quality_75" alt="">\
    </div>\
    <h3>Est. Delivery Date</h3>\
    <div class="text-box">\
        <p>AAAAAAAA</p>\
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
    </div>    '
    )
})