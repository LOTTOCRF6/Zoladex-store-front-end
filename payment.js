// Payment 
mystorage = window.localStorage;
function payment() {
  const contactMessage = {
    cardholder_name: document.getElementById("cardholder_name").value,
    email: document.getElementById("email").value,
    regarding: document.getElementById("regarding").value,
    order_no: document.getElementById("order_no").value,
    questions: document.getElementById("questions").value,
    message: document.getElementById("message").value,
  }

  console.log(contactMessage)
  fetch("https://ancient-lowlands-29535.herokuapp.com/payment/", {
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

(function() {
    var ccName = $('input.cc-name'),
        ccNumber = $('input.cc-number'),
        ccExpiry = $('input.cc-expiry'),
        ccCVC = $('input.cc-cvc');
    
    $('[data-numeric]').payment('restrictNumeric');
    
    ccNumber.payment('formatCardNumber');
    ccExpiry.payment('formatCardExpiry');
    ccCVC.payment('formatCardCVC');
    
    ccName.on('focus', function() {
        $(this).data('placeholder', $(this).attr('placeholder'))
        $(this).attr('placeholder', 'Name Surname');
    }).blur(function() {
        $(this).attr('placeholder', $(this).data('placeholder'))
    });
    
    ccNumber.on('focus', function() {
        $(this).data('placeholder', $(this).attr('placeholder'))
        $(this).attr('placeholder', 'xxxx xxxx xxxx xxxx');
    }).blur(function() {
        $(this).attr('placeholder', $(this).data('placeholder'))
    });
    
    ccExpiry.on('focus', function() {
        $(this).data('placeholder', $(this).attr('placeholder'))
        $(this).attr('placeholder', 'MM/YYYY');
    }).blur(function() {
        $(this).attr('placeholder', $(this).data('placeholder'))
    });
    
    ccCVC.on('focus', function() {
        $(this).data('placeholder', $(this).attr('placeholder'))
        $(this).attr('placeholder', 'xxxx');
    }).blur(function() {
        $(this).attr('placeholder', $(this).data('placeholder'))
    });
})();