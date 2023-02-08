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
      cat_list = []
      for (var i = 0;i<response.length;i++){
        if(cat_list.indexOf(response[i].category) == -1){
          cat_list.push(response[i].category)
        }
      }
      console.log(cat_list);
      for (var i = 0;i<cat_list.length;i++){
        for(var j=0; j < response.length; j++){
          if(response[j].category == cat_list[i])
          {
            console.log(response[j].image)
            $("div.design-box-gallery").append(
              '<div class="design-box">\
              <img src = "'+response[j].image+'">\
                      <a href = "#"><div class="hover-effect"></div>\
                      <div class="design-box-desc">\
                          <h3>'+cat_list[i]+'</h3><hr>\
                          <p>AAAAAAA</p>\
                      </div></a>\
                </div>'
            );
            break; 
          }
        }
       
      }
      $("div.design-box-gallery").on("click","a",function(){
        let cat_item = [];          
        for (var i = 0; i < response.length;i++){
          if(response[i].category == this.children[1].children[0].innerText){
            cat_item.push(response[i])
            
          }
        }
        console.log(cat_item);
        sessionStorage.setItem("listing_details",JSON.stringify(cat_item));
        
        window.location.href = "shop.html";
        
      })
   })

})
