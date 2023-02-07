
$(document).ready(function () {
    var product = JSON.parse(sessionStorage.getItem("listing_details"))
    console.log(product)
    console.log(product.count)
    product.forEach(details => {
        console.log(details);
        var div = document.querySelector("div.pro-container");// creating element in java script 
        var divpro = div.appendChild(document.createElement("div"));// creating element in java script 
        divpro.className = "pro";// creating class name
        datashit = divpro.appendChild(document.createElement("img"));// creating element in java script 
        datashit.src = details.image// assign data using API
        var divdes = divpro.appendChild(document.createElement("div"));// creating element in java script 
        divdes.className = "des";// creating class name
        var datashit = divdes.appendChild(document.createElement("span"));// creating element in java script 
        datashit.innerText = details.brand;// assign data using API
        datashit =  divdes.appendChild(document.createElement("h5"));// creating element in java script 
        datashit.innerText = details.name;// assign data using API
        datashit = divdes.appendChild(document.createElement("h5"));// creating element in java script 
        datashit.innerText = details.sold;// assign data using API
        datashit = divdes.appendChild(document.createElement("h4"));// creating element in java script 
        datashit.innerText = details.price;// assign data using API*/
    });
    {

    
    }
    
})
