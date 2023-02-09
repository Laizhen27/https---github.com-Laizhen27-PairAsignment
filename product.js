$(document).ready(function () {
  var product = JSON.parse(sessionStorage.getItem("product"))
  $('div.container').append(
    '<div class = "details">\
     <img src="'+product.image+'">\
     <div class="info">\
     <h1>'+product.name+'</h1>\
     <h1>'+"$ "+product.price+'</h1>\
     </div>\
 </div>'
   )
   $("a#cart").click(function (e) { 
    e.preventDefault();
    size = document.getElementById('size');
    const qty = document.getElementById("quantity");
    if(size.innerText.includes("Select Size"))
    {
      alert('Please Select your Shirt size')
    }
    else{
      console.log(product);
      let jsondata ={
        "id":product._id,
        "productid":product.productid,
        "image":product.image,
        "price":product.price,
        "name":product.name,
        "size":size.innerText,
        "quantity":qty.innerText,      
      }
      console.log(jsondata);
      localStorage.setItem("cart",JSON.stringify(jsondata))
    }
    console.log("clicked")
   });
})


function Click(clicks){
  const qty = document.getElementById("quantity");
  const sum = parseInt(qty.innerText) + clicks
  if(sum < 1){
    e.preventdefault();
  }
  else{
    console.log(sum + clicks);
    qty.innerText = sum
  }
};

function Size(size){  
  displaysize = document.getElementById('size')
  displaysize.innerText = size
}



