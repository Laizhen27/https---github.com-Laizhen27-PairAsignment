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
        for(var i=0; i < response.length; i++){
            
            $("div.product-list").append(
                '<a href="#"> <div class="product">\
                <img id = "'+response[i].productid+'" src = "'+response[i].image+'">\
                <div class="details">\
                    <h2 id="results">'+ response[i].name + '</h2>\
                    <h3>'+"$ " + response[i].price + '</h3> </a>'         
            )

            $("div.product").css("display","none");
        }
        
        $("div.product-list").click(function (e){
            e.preventDefault();
            for (var i = 0; i < response.length;i++){
                if(this.children[0].id == response[i].productid)
                {
                    sessionStorage.setItem("product",JSON.stringify(response[i]));
                    console.log(this.children[0].id)
    
                }
            }
             window.location.href = "product.html";

        })
    })

})
function Search(){
    let items = document.querySelectorAll('div.product')
    var searchresult = $('#search-item').val().toUpperCase();
    for(var i =0 ; i < items.length; i++){
        let product = items[i].children[1].children[0].children[0].innerText.toUpperCase();
        console.log(searchresult);
        // console.log(product);
        if ( searchresult == "" ){
            items[i].style.display = "none";
        }
        else if (product.includes(searchresult) == true){
            console.log(product);
            items[i].style.display = "block";
        }
        else{
            items[i].style.display = "none";
        }
    }
}

