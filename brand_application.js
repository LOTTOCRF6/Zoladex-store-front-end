mystorage = window.localStorage;
function brandRegister() {
  fetch("https://ancient-lowlands-29535.herokuapp.com/brand-registration/", {
    method: "POST",
    body: JSON.stringify({
      ceo_name: document.getElementById("ceo_name").value,
      ceo_surname: document.getElementById("ceo_surname").value,
      brand_name: document.getElementById("brand_name").value,
      brand_registration_number: document.getElementById("brand_registration_number").value,
      brand_style: document.getElementById("brand_style").value,
      social_media_link: document.getElementById("social_media_link").value,
      office_address: document.getElementById("office_address").value,
      brand_phone: document.getElementById("brand_phone").value,
      brand_email: document.getElementById("brand_email").value,
    }),
    headers: {
      "Content-type": "application/json",
      // Authorization: `jwt ${mystorage.getItem("jwt-token")}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data["message"] == "success") {
        alert("Thanks for sending your application at Zoladex Clothing we will respond soon.");
        window.location.href = "./index.html";
      } else {
        alert("Please enter correct information");
      }
    });
}