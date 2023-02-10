$(document).ready(function () {
  var product = JSON.parse(sessionStorage.getItem("product"))
  var added = JSON.parse(localStorage.getItem("cartfilled"))

  $('div.container').append(
    '<div class = "details">\
     <img src="'+product.image+'">\
     <div class="info">\
     <h1>'+product.name+'</h1>\
     <h1>'+"$ "+product.price+'</h1>\
     </div>\
 </div>'
   )
   $('#animation').hide();
   $("a#cart").click(function (e) { 
    e.preventDefault();
    var loggedin = JSON.parse(localStorage.getItem("isloggedin"))
    if(loggedin != true){
        window.location.href = "signup.html";
    }
    else{
      size = document.getElementById('size');
      const qty = document.getElementById("quantity");
      if(size.innerText.includes("Select Size"))
      {
        alert('Please Select your Shirt size')
      }
      else{
        console.log(product);
        $("a#cart").hide();
        $('#animation').show();
        let jsondata ={
          "id":product._id,
          "productid":product.productid+size.innerText,
          "image":product.image,
          "price":product.price,
          "name":product.name,
          "size":size.innerText,
          "quantity":qty.innerText,      
        }
        console.log(jsondata);
        if(added == true){
          var existincart = JSON.parse(localStorage.getItem("cart"))
          let items = []
          existincart.forEach(element => {
            items.push(element);
          });
          items.push(jsondata)
          console.log(product)
          console.log(items);
          localStorage.setItem("cart",JSON.stringify(items))
        }
        else{
          let items = []
          items.push(jsondata)
          localStorage.setItem("cart",JSON.stringify(items))
          localStorage.setItem("cartfilled",true)  
        }
      }
  
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