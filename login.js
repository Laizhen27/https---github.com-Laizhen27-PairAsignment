$(document).ready(function(){
    $("#add-login-msg").hide();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://idasg-39a1.restdb.io/rest/account",
        "method": "GET",
        "headers": {
          "content-type": "application/json",
          "x-apikey": "63d641823bc6b255ed0c43e4",
          "cache-control": "no-cache"
        }
      }

      $("#login-submit").on("click", function (e) {
        var email = $("#login-email").val();
        var password = $("#login-password").val();
        e.preventDefault();
        console.log(email);
        console.log(password);
        $("#add-login-msg").show().fadeOut(300);
        $.ajax(settings).done(function (response) {
            for (var i = 0; i < response.length;i++){
                // console.log(response[i].email);
                // console.log(response[i].password);
                if(email == response[i].email && password == response[i].password){
                    localStorage.setItem("profile",JSON.stringify(response[i]));
                    $("container-login").trigger("reset");
                    console.log(response[i]);
                }
             }
        });
    })

})




  



 


