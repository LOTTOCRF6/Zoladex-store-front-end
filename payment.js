// Payment 
mystorage = window.localStorage;
function payment() {
  const payment = {
    cardholder_name: document.getElementById("cardholder_name").value,
    card_number: document.getElementById("card_number").value,
    order_no: document.getElementById("order_no").value,
    end_date: document.getElementById("end_date").value,
    cvv: document.getElementById("cvv").value,
    payment_method: document.getElementById("payment_method").value,
  }

  console.log(payment)
  fetch("https://ancient-lowlands-29535.herokuapp.com/payment/", {
    method: "POST",
    body: JSON.stringify(payment),
    headers: {
      "Content-type": "application/json",
      'mode': 'no-cors',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data["message"] == "success") {
        alert("Your Payment was Successfully");
        window.location.href = "./user_login";
      } else {
        alert("Please enter correct information");
      }
    });
}

$("input[name='expiry-data']").mask("00 / 00");