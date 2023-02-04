$("#add-login-msg").hide();
$(document).ready(function () {
        //what kind of interface we want at the start 
        const APIKEY = "63d641823bc6b255ed0c43e4";
        //[STEP 1]: Create our submit form listener
        $("#login-submit").on("click", function (e) {
        //prevent default action of the button 
        e.preventDefault();
    
        //[STEP 2]: let's retrieve form data
        //for now we assume all information is valid
        //you are to do your own data validation
        let LoginEmail = $("#login-email").val();
        let LoginPassword = $("#login-password").val();
    
        let jsondata = {
            "email":LoginEmail,
            "password":LoginPassword,
        };
        console.log(jsondata);
        validate(jsondata);
        
    });
    //end click 
    function validate() {
    //[STEP 7]: Create our AJAX settings
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://idasg-39a1.restdb.io/rest/account",
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "x-apikey": "<your CORS apikey here>",
            "cache-control": "no-cache"
        },
    }
        //[STEP 8]: Make our AJAX calls
        //Once we get the response, we modify our table content by creating the content internally. We run a loop to continously add on data
        //RESTDb/NoSql always adds in a unique id for each data, we tap on it to have our data and place it into our links 
        $.ajax(settings).done(function (response) {
        for(let values of response){
            if(values.email == jsondata.email && value.password == jsondata.password)
            {
                $("#add-login-msg").show();
                console.log(response)
            }
        }
        });

    }
})



  



 


