//[STEP 0]: Make sure our document is A-OK
$(document).ready(function () {
    //what kind of interface we want at the start 
    const APIKEY = "63d641823bc6b255ed0c43e4";
    getContacts();
    $("#update-contact-container").hide();
    $("#add-update-msg").hide();
  
    //[STEP 1]: Create our submit form listener
    $("#contact-submit").on("click", function (e) {
      //prevent default action of the button 
      e.preventDefault();
  
      //[STEP 2]: let's retrieve form data
      //for now we assume all information is valid
      //you are to do your own data validation
      let SignUpName = $("#name").val();
      let SignUpEmail = $("#email").val();
      let SignUpPhoneno = $("#phone-number").val();
      let SignUpShipping = $("#shipping-address").val();
      let SignUpCreditCard = $("#credit-card").val();
      let SignUpExpiryDate = $("#expiry-date").val();
      let SignUpCSV = $("#csv").val(); 
      let SignUpPassword = $("#password").val();

      //[STEP 3]: get form values when user clicks on send
      //Adapted from restdb api
      let jsondata = {
        "name":SignUpName,
        "email":SignUpEmail,
        "phoneno":SignUpPhoneno,
        "shipping":SignUpShipping,
        "creditcard":SignUpCreditCard,
        "expiry":SignUpExpiryDate,
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
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsondata),
        "beforeSend": function(){
          //@TODO use loading bar instead
          //disable our button or show loading bar
          $("#contact-submit").prop( "disabled", true);
          //clear our form using the form id and triggering it's reset feature
          $("#signup-submit").trigger("reset");
        }
      }
  
      //[STEP 5]: Send our ajax request over to the DB and print response of the RESTDB storage to console.
      $.ajax(settings).done(function (response) {
        console.log(response);
        
        $("#contact-submit").prop( "disabled", false);
        
        //@TODO update frontend UI 
        $("#add-update-msg").show().fadeOut(3000);
  
        //update our table 
        getContacts();
      });
    });//end click 
  console.log(response);
  
    //[STEP] 6
    //let's create a function to allow you to retrieve all the information in your contacts
    //by default we only retrieve 10 results
    function getContacts(limit = 10, all = true) {
  
      //[STEP 7]: Create our AJAX settings
      let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://idasg-39a1.restdb.io/rest/account",
        "method": "GET", //[cher] we will use GET to retrieve info
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        },
      }
  
      //[STEP 8]: Make our AJAX calls
      //Once we get the response, we modify our table content by creating the content internally. We run a loop to continously add on data
      //RESTDb/NoSql always adds in a unique id for each data, we tap on it to have our data and place it into our links 
      $.ajax(settings).done(function (response) {
        
        let content = "";
  
        for (var i = 0; i < response.length && i < limit; i++) {
          //console.log(response[i]);
          //[METHOD 1]
          //let's run our loop and slowly append content
          //we can use the normal string append += method
          /*
          content += "<tr><td>" + response[i].name + "</td>" +
            "<td>" + response[i].email + "</td>" +
            "<td>" + response[i].message + "</td>
            "<td>Del</td><td>Update</td</tr>";
          */
  
          //[METHOD 2]
          //using our template literal method using backticks
          //take note that we can't use += for template literal strings
          //we use ${content} because -> content += content 
          //we want to add on previous content at the same time
          content = `${content}<tr id='${response[i]._id}'>
          <td>${response[i].name}</td>
          <td>${response[i].email}</td>
          <td>${response[i].phoneno}</td>
          <td>${response[i].shipping}</td>
          <td>${response[i].creditcard}</td>
          <td>${response[i].expiry}</td>
          <td>${response[i].csv}</td>
          <td>${response[i].password}</td>
          <td><a href='#' class='delete' 
          data-id='${response[i]._id}'>Del</a></td>
          <td><a href='#update-contact-container' class='update' 
          data-id='${response[i]._id}' 
          data-name='${response[i].name}' 
          data-email='${response[i].email}'
          data-phoneno='${response[i].phoneno}'
          data-shipping ='${response[i].shipping}          
          data-creditcard ='${response[i].creditcard}       
          data-expiry ='${response[i].expiry}       
          data-csv ='${response[i].csv}    
          data-password ='${response[i].password}          
          >Update</a></td></tr>`;
  
        }
  
        //[STEP 9]: Update our HTML content
        //let's dump the content into our table body
        $("#contact-list tbody").html(content);
  
        $("#total-contacts").html(response.length);
      });
  
  
    }
  
   
  
    });//end contact-list listener for delte function
  

  