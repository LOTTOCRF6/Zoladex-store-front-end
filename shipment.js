function autofilling(f) {
    if ($("#checkbox1").prop("checked")) {
      f.newfirstname.value = f.firstname.value;
      f.newlastname.value = f.lastname.value;
      f.newaddress.value = f.address.value;
    } else {
      f.newfirstname = '';
      f.newlastname = '';
      f.newaddress = '';
    }
  }
  
  $("#checkbox1").click(function() {
    if ($("#checkbox1").prop("checked")) {
      autofilling();
    }
  });
  
  mystorage = window.localStorage;
  function shipment() {
    const shipment = {
      buyers_fullname: document.getElementById("buyers_fullname").value,
      order_no: document.getElementById("order_no").value,
      brand: document.getElementById("brand").value,
      buyers_addres: document.getElementById("buyers_address").value,
      city: document.getElementById("city").value,
      country: document.getElementById("country").value,
      province: document.getElementById("province").value,
      postal_code: document.getElementById("postal_code").value,
      recipient_phone: document.getElementById("recipient_phone").value,
    }
  
    console.log(shipment)
    fetch("https://ancient-lowlands-29535.herokuapp.com/shipment/", {
      method: "POST",
      body: JSON.stringify(shipment),
      headers: {
        "Content-type": "application/json",
        'mode': 'no-cors',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data["message"] == "success") {
          alert("Kindly be patient your order will with you in the next 3 working days!");
          window.location.href = "./index.html";
        } else {
          alert("Please enter correct information");
        }
      });
  }