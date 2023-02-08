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
})


function Click(clicks){
  const qty = document.getElementById("quantity");
  const sum = parseInt(qty.innerText) + clicks
  if(sum < 0){
    e.preventdefault();
  }
  else{
    console.log(sum + clicks);
    qty.innerText = sum
  }


  }

