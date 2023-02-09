$(document).ready(function () {
    var user = JSON.parse(localStorage.getItem("profile"))
    var cart = JSON.parse(localStorage.getItem("cart"))
    $("div.text-box").append(
        '<div class="left">\
            <h4>'+"Name: "+user.name+'</h4>\
            <h4>'+"Address: "+user.shipping+'</h4>\
            <h4>'+"Credit Card: "+user.shipping+'</h4>\
            <h4>'+"Points Earned: "+user.point+'</h4>\
        </div>\
        <div class="right">\
            <button>Edit</button>\
            <h4>Earn Points</h4>\
        </div>'
    )
})