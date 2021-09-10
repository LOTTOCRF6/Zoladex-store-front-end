let itemsOnCart = JSON.parse(localStorage.getItem("cart") || "[]");

function renderCart(cartItems) {
    let cartContainer = document.querySelector("#mycart");
    cartContainer.innerHTML = "";
    if (cartItems.length > 0) {
      cartItems.map((cartItem) => {
        cartContainer.innerHTML += `
        <div class = "products">
              <img src="${cartItem.image}" class = "image">
              <div class = "product-content"> 
                  <h5 class = "product_id"> ${cartItem.product_id}</h5>
                  <h4 class = "product-title"> ${cartItem.product_tittle}</h4>
                  <p class = "product-brand_name"> ${cartItem.brand_name}</p>
                  <p class = "product-size"> ${cartItem.size}</p>
                  <p class = "product-colour"> ${cartItem.colour}</p>                  
                  <p class = "product-description"> ${cartItem.description}</p>
                  <p class = "product-price">R ${cartItem.price} </p>
                  <button class ="revome_cart" onclick="removeItem(${cartItem.product_id})">Remove item</button>
              </div>
              
          </div>
        
        
        `;
      });
      let totalPrice = cartItems.reduce((total, item) => total + item.price,0);
      cartContainer.innerHTML += `<h3> Total is: R ${totalPrice} </h3>`;
    } else {
      cartContainer.innerHTML = "<h2> No items in cart</h2>";
    }
  }

renderCart(itemsOnCart);

//remove from cart
function removeItem(product_id) {
  itemsOnCart = itemsOnCart.filter(item => item.product_id != product_id)
  console.log(itemsOnCart);
  renderCart(itemsOnCart);

  localStorage.setItem('cart', JSON.stringify(itemsOnCart))
}




