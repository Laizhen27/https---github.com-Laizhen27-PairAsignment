$(document).ready(function () {
  var product = JSON.parse(sessionStorage.getItem("product"))
  $('div.container').append(
    '<img src="'+product.image+'">'
  )

})