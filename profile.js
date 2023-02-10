$(document).ready(function () {
    var user = JSON.parse(localStorage.getItem("profile"))
    var cart = JSON.parse(localStorage.getItem("cart"))
    console.log(user);
    $("div.text-box").append(
        '<div class="left">\
        <h4>'+"User Name: "+user.name+'</h4>\
        <h4>'+"Email Address: "+user.email+'</h4>\
        <h4>'+"Phone No.: "+user.phoneno+'</h4>\
        <h4>'+"Shipping Address: "+user.shipping+'</h4>\
        <h4>'+"Card: "+user.creditcard+'</h4>\
        <h4>'+"Points: "+user.point+'</h4>\
    </div>\
    <div class="right">\
        <button class="button">Edit</button>\
        <a href="reward.html"><h4>Earn Points</h4></a>\
    </div>'
    )
      $("#signout").click(function (e) { 
        e.preventDefault();
        localStorage.clear();
        window.location.href = "index.html";
        
      });

})
