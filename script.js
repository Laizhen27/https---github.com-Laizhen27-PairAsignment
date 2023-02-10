
$(document).ready(function () {
    var settings = {
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
      var loggedin = JSON.parse(localStorage.getItem("isloggedin"))
      if(loggedin == undefined){
          localStorage.setItem("isloggedin",false)
      }
      $.ajax(settings).done(function (response) {
        console.log(response);
        var count = 0;
        for(var i=0 ; i < response.length; i++)
        {
            var i = Math.floor(Math.random() * (response.length - 0)) + 0;
            count++
            console.log(i)
            if(count > 3){
                break;
            }
            else{
                var div = document.querySelector("div.pro-container");
                var divpro = div.appendChild(document.createElement("div"));// creating element in java script 
                divpro.className = "pro";// creating class name    
                var a = divpro.appendChild(document.createElement("a"))
                a.href = "#"
                datashit = a.appendChild(document.createElement("img"));// creating element in java script 
                datashit.src = response[i].image// assign data using API
                datashit.id = response[i].productid
                var divdes = a.appendChild(document.createElement("div"));// creating element in java script 
                divdes.className = "des";// creating class name
                var datashit = divdes.appendChild(document.createElement("span"));// creating element in java script 
                datashit.innerText = response[i].brand;// assign data using API
                datashit =  divdes.appendChild(document.createElement("h5"));// creating element in java script 
                datashit.innerText = response[i].name;// assign data using API
                datashit = divdes.appendChild(document.createElement("h5"));// creating element in java script 
                datashit.innerText = "Sold: " + response[i].sold;// assign data using API
                datashit = divdes.appendChild(document.createElement("h4"));// creating element in java script 
                datashit.innerText = "$ " + response[i].price;// assign data using API*/
            }
        }
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
      });

    
})
