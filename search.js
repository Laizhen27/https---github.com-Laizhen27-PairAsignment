$(document).ready(function(){
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://idasg-39a1.restdb.io/rest/shirt",
        "method": "GET",
        "headers": {
          "content-type": "application/json",
          "x-apikey": "63d641823bc6b255ed0c43e4",
          "cache-control": "no-cache"
        }
    }
    $.ajax(settings).done(function (response){
        console.log(response);
        for(var i=0; i < response.length; i++){
            
            $("div.product-list").append(
                '<a href="#"> <div class="product">\
                <img src = "'+response[i].image+'">\
                <div class="details">\
                    <h2 id="results">'+ response[i].name + '</h2>\
                    <h3>'+"$ " + response[i].price + '</h3> </a>'         
            )

            $("div.product").css("display","none");
            // var product = document.getElementsByClassName('product')
            // product.hide();
        }
    })

})
function Search(){
    let items = document.querySelectorAll('div.product')
    var searchresult = $('#search-item').val().toUpperCase();
    for(var i =0 ; i < items.length; i++){
        let product = items[i].children[1].children[0].children[0].innerText
        console.log(searchresult);
        console.log(product);
        if (searchresult == ""){
            items[i].style.display = "none";
        }
        else if (product.includes(searchresult) == true){
            items[i].style.display = "block";
        }
        else{
            items[i].style.display = "none";
        }
    }
}

