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
                <div class="product">\
                    <h2 id="result">'+ response[i].name + '</h2>\
                    <h3>'+"$ " + response[i].price + '</h3> </a>'         
            )

            // $("div.product").hide();
            // var product = document.getElementsByClassName('product')
            // product.hide();
        }
    })
    
    // function Search(){
    //     let items = document.getElementsByClassName('product')
    //     let result = document.getElementsById('#result');
    //     let input = document.getElementById('#search-item')
    //     for(var i =0 ; i < result.length; i++){
    //         if(input == ""){
    //             items[i].hide();
    //         }
    //         else if ( (input.indexof( result[i].innerText)) > -1 ){
    //             items[i].show()
    //         }
    //         else{
    //             items[i].hide();
    //         }
    //     }
    // }
    
    
})

