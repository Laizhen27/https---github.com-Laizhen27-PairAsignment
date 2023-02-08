$(document).ready(function () {
    $("header").append(
        '<div class="container" id="nav">\
          <a href="index.html">\
            <img src="Icon.png" class="logo"alt="logo"/></a>\
          <a href ="signup.html"><img src="Icon/profile.png" class ="profile"></a>\
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
    $("footer.footer").append(
        ' <div class="col1">\
        <img src="" alt="">\
        <h4>Contact</h4>\
        <p><strong>Showroom Address:</strong></p>\
        <p><strong>Hotline:</strong></p>\
        <p><strong>Hours:</strong></p>\
        <div class="col2">\
            <h4>Follow Us</h4>\
            <div class="icon">\
                <i class=""></i>\
                <i class=""></i>\
                <i class=""></i>\
                <i class=""></i>\
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