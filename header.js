$(document).ready(function () {
    $("header").append(
        '<div class="container" id="nav">\
          <a href="index.html">\
            <img src="Icon.png" class="logo"alt="logo"/></a>\
          <a href ="signup.html" class = "accountpic"><img src="Icon/profile.png" class ="profile"></a>\
          <a href ="checkout.html"><img src ="Icon/bag.png" class ="bag"></a>\
          <nav>\
            <input type="checkbox" id="check" />\
            <label for="check" class="checkbtn">\
              <i class="fa fa-bars"></i>\
            </label>\
            <ul>\
                <li><a href="index.html">Home</a></li>\
                <li><a href="category.html">Shop</a></li>\
                <li><a href="reward.html">Reward</a></li>\
                <li><a href="blog.html">Blog</a></li>\
            </ul>\     </nav>\</div>'
    )
    if (localStorage.getItem("isloggedin") == "true"){
        var a = document.querySelector("a.accountpic");
        a.href = "profile.html";
    }
    $("footer.footer").append(
        ' <div class="col1">\
        <img src="" alt="">\
        <h4>Contact</h4>\
        <p><strong>Showroom Address:</strong>3 @ Otis Road</p>\
        <p><strong>Hotline:</strong>92345678</p>\
        <p><strong>Hours:</strong>7am - 7pm</p>\
        <div class="col2">\
            <h4>Follow Us</h4>\
            <div class="icon">\
                <i class="fab fa-facebook-f"></i>\
                <i class="fab fa-twitter"></i>\
                <i class="fab fa-instagram"></i>\
                <i class="fab fa-youtube"></i>\
            </div>\
        </div>\
    </div>\
    <div class="col3">\
        <h4>About</h4>\
        <p>About Us</p>\
        <p>Delivery & Return</p>\
        <p>Privacy Policy</p>\
        <p>Terms & Conditions</p>\
        <p>Contact Us</p>\
    </div>\
    <div class="col4">\
        <h4>Payment</h4>\
        <p>Visa</p>\
        <p>Mastercard</p>\
        <p>applepay</p>\
        <p>grabpay</p>\</div>'
    )

})