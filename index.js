let products = [];
let cart = [];

// Show Products
fetch("https://ancient-lowlands-29535.herokuapp.com/brand-products/")
  .then((res) => res.json())
  .then((data) => {
    products = data;
    console.log(data);
    make_products(data);
  });

// Making Products
function make_products(products) {
  let product_container = document.querySelector("#products-container");
  product_container.innerHTML = "";
  products.data.forEach((product) => {
    product_container.innerHTML += `
        <div class = "products">
            <img src="${product.image}" class = "product-image"> 
            <h4 class = "product-title"> ${product.product_tittle}</h4>
            <p class = "product-brand_name"> ${product.brand_name}</p>
            <p class = "product-size"> ${product.size}</p>
            <p class = "product-colour"> ${product.colour}</p>
            <p class = "product-description"> ${product.description}</p>
            <p class = "product-price">R ${product.price} </p>
            <button onclick="addToCart(${product.product_id})">Add to Cart</button>
            
        </div>
    `;
  });
}

// Search
function searchProducts() {
  let searchTerm = document.querySelector("#searchTerm").value;
  // console.log(searchTerm);

  let searchedProducts = products.data.filter((product) =>
    product.product_tittle.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log(searchedProducts);
  let product_container = document.querySelector("#products-container");
  product_container.innerHTML = "";
  products.data.forEach((product) => {
    // console.log(product);
    product_container.innerHTML += `
        <div class = "products">
            <img src="${product.image}" class = "image"> 
            <h4 class = "product-title"> ${product.product_tittle}</h4>
            <p class = "product-description"> ${product.description}</p>
            <p class = "product-price">${product.price} </p>
            <button onclick="addToCart(${product.product_id})">Add to Cart</button>
            
        </div>
    `;
  });
  // make_products(searchedProducts);
}

// CARTS
function toggleCart() {
  document.querySelector("#cart").classList.toggle("active");
}
function renderCart(cartItems) {
  let cartContainer = document.querySelector("#cart");
  cartContainer.innerHTML = "";
  if (cartItems.length > 0) {
    cartItems.map((cartItem) => {
      cartContainer.innerHTML += `
      <div class = "products">
            <img src="${cartItem.image}" class = "image">
            <div class = "product-content"> 
                <h4 class = "product-title"> ${cartItem.product_tittle}</h4>
                <p class = "product-description"> ${cartItem.description}</p>
                <p class = "product-price">${cartItem.price} </p>
                <button class ="revome_cart" onclick="removeItem(${cartItem.product_id})">Remove item</button>
            </div>
            
        </div>
      
      
      `;
    });
    let totalPrice = cartItems.reduce((total, item) => total + item.price,0);
    cartContainer.innerHTML += `<h3> Total is: ${totalPrice} </h3>`;
  } else {
    cartContainer.innerHTML = "<h2> No items in cart</h2>";
  }
}

function addToCart(product_id) {
  console.log(products.data);
  let product = products.data.find((item) => {
    return item.product_id == product_id;
  });
  cart.push(product);
  renderCart(cart);
}
function removeItem(product_id) {
  let product = products.data.find((item) => {
    return item.product_id == product_id;
  });
  //console.log(product);

  cart.splice(
    cart.findIndex((a) => a.product_id === product.product_id),
    1
  );
  renderCart(cart);
}

// Contact 
mystorage = window.localStorage;
function contactUs() {
  const contactMessage = {
    fullname: document.getElementById("fullname").value,
    email: document.getElementById("email").value,
    regarding: document.getElementById("regarding").value,
    order_no: document.getElementById("order_no").value,
    questions: document.getElementById("questions").value,
    message: document.getElementById("message").value,
  }

  console.log(contactMessage)
  fetch("https://ancient-lowlands-29535.herokuapp.com/contact-us/", {
    method: "POST",
    body: JSON.stringify(contactMessage),
    headers: {
      "Content-type": "application/json",
      'mode': 'no-cors',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data["message"] == "success") {
        alert("Thanks for Contacting Zoladex Clothing");
        window.location.href = "./user_login";
      } else {
        alert("Please enter correct information");
      }
    });
}

$("nav ul").hide();

$(".nav-toggle").click( function() {
  $("nav ul").slideToggle("medium");
});

$("nav ul li a, .brand a").click( function() {
  $("nav ul").hide();
});

////////////////////////////////////
// SMOOTH SCROLLING WITH NAV HEIGHT OFFSET

$(function() {
  var navHeight = $("nav").outerHeight();
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - navHeight
        }, 1000);
        return false;
      }
    }
  });
});

////////////////////////////////////
// NAVIGATION STICKY

var viewHeight = $(window).height();
var navigation = $('nav');

$(window).scroll( function() {
  if ( $(window).scrollTop() > (viewHeight - 175) ) { //edit for nav height
    navigation.addClass('sticky');
  } else {
    navigation.removeClass('sticky');
  }
});

////////////////////////////////////////////////
// MAKE THE SPLASH CONTAINER VERTICALLY CENTERED

function centerSplash() {
  var navHeight = $("nav").outerHeight();
  var splashHeight = $(".splash .container").height();
  var remainingHeight = $(window).height() - splashHeight - navHeight;
  $(".splash .container").css({"padding-top" : remainingHeight/2, "padding-bottom" : remainingHeight/2});
}

$( document ).ready( function() {
  centerSplash();
});

$( window ).resize( function() {
  centerSplash();
});

