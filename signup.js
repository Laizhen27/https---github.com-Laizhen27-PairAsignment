
//[STEP 0]: Make sure our document is A-OK
$(document).ready(function () {
  $("#update-contact-container").hide();
$("#add-update-msg").hide();
  $("p.Invalidname").hide();
  $("p.Invalidemail").hide();
  $("p.Invalidhpno").hide();
  $("p.Invaliddate").hide();
  
  //what kind of interface we want at the start 
  //[STEP 1]: Create our submit form listener
  $("#signup-submit").on("click", function (e) {

    e.preventDefault();
    
    //[STEP 2]: let's retrieve form data
    //for now we assume all information is valid
    //you are to do your own data validation
    let SignUpName = $("#signup-name").val();
    let SignUpEmail = $("#signup-email").val();
    let SignUpPhoneNo = $("#signup-number").val();
    let SignUpAddress = $("#signup-address").val();
    let SignUpCreditCard = $("#signup-creditcard").val();
    let SignUpExpiry = $("#signup-expiry").val();
    let SignUpCSV = $("#signup-csv").val();
    let SignUpPassword = $("#signup-password").val();
    
    //prevent default action of the button 
    //[STEP 3]: get form values when user clicks on send
    //Adapted from restdb api
    let jsondata = {
      "name":SignUpName,
      "email":SignUpEmail,
      "phoneno":SignUpPhoneNo,
      "shipping":SignUpAddress,
      "creditcard":SignUpCreditCard,
      "expiry":SignUpExpiry,
      "csv": SignUpCSV,
      "password":SignUpPassword
    };
    //[STEP 4]: Create our AJAX settings. Take note of API key
    let settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://idasg-39a1.restdb.io/rest/account",
      "method": "POST", //[cher] we will use post to send info
      "headers": {
        "content-type": "application/json",
        "x-apikey":"63d641823bc6b255ed0c43e4",
        "cache-control": "no-cache"
      },
      "processData": false,
      "data": JSON.stringify(jsondata),
      "beforeSend": function(){
        //@TODO use loading bar instead
        //disable our button or show loading bar
        $("#contact-submit").prop( "disabled", true);
        //clear our form using the form id and triggering it's reset feature
        $("#add-contact-form").trigger("reset");
      }
    }
    //[STEP 5]: Send our ajax request over to the DB and print response of the RESTDB storage to console.
    $.ajax(settings).done(function (response) {
      console.log(response);
      
      $("#signup-submit").prop( "disabled", false);
      
      //@TODO update frontend UI 
      $("#add-update-msg").show().fadeOut(3000);
    });
  });//end click 
});

function validateEmail(){
  var input = $('#signup-email').val();
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (input.match(mailformat))
  {
    $("p.Invalidemail").hide();
  }
  else{
    $("p.Invalidemail").show();
  }
}
function validatehpno(){
  var input = $('#signup-email').val();
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (input.match(mailformat))
  {
    $("p.Invalidemail").hide();
  }
  else{
    $("p.Invalidemail").show();
  }
}
function validateEmail(){
  var input = $('#signup-email').val();
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (input.match(mailformat))
  {
    $("p.Invalidemail").hide();
  }
  else{
    $("p.Invalidemail").show();
  }
}


