
const shirtdetail = document.querySelector("[display-shirt]");
const shirtdetailContainer = document.querySelector("[display-shirt-section]");
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

$.ajax(settings).done(function (response) {
    console.log(response)
    response.forEach(response=> {
        var div = document.querySelector("div.pro-container");
        var divpro = div.appendChild(document.createElement("div"));
        divpro.className = "pro";
        datashit = divpro.appendChild(document.createElement("img"));
        datashit.src = response.image
        var divdes = divpro.appendChild(document.createElement("div"));
        divdes.className = "des";
        var datashit = divdes.appendChild(document.createElement("span"));
        datashit.innerText = response.brand;
        datashit =  divdes.appendChild(document.createElement("h5"));
        datashit.innerText = response.name;
        datashit = divdes.appendChild(document.createElement("h5"));
        datashit.innerText = response.sold;
        datashit = divdes.appendChild(document.createElement("h4"));
        datashit.innerText = response.price;
       
    })
        
    });
