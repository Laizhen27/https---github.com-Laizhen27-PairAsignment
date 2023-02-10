
$(document).ready(function () {
    var product = JSON.parse(sessionStorage.getItem("listing_details"))
    product.forEach(details => {
        var div = document.querySelector("div.pro-container");
        var divpro = div.appendChild(document.createElement("div"));// creating element in java script 
        divpro.className = "pro";// creating class name    
        var a = divpro.appendChild(document.createElement("a"))
        a.href = "#"
        datashit = a.appendChild(document.createElement("img"));// creating element in java script 
        datashit.src = details.image// assign data using API
        datashit.id = details.productid
        var divdes = a.appendChild(document.createElement("div"));// creating element in java script 
        divdes.className = "des";// creating class name
        var datashit = divdes.appendChild(document.createElement("span"));// creating element in java script 
        datashit.innerText = details.brand;// assign data using API
        datashit =  divdes.appendChild(document.createElement("h5"));// creating element in java script 
        datashit.innerText = details.name;// assign data using API
        datashit = divdes.appendChild(document.createElement("h5"));// creating element in java script 
        datashit.innerText = "Sold: " + details.sold;// assign data using API
        datashit = divdes.appendChild(document.createElement("h4"));// creating element in java script 
        datashit.innerText = "$ " + details.price;// assign data using API*/
    });
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
        $('div.pro').on("click","a",function(){
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
