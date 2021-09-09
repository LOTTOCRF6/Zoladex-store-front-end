mystorage = window.localStorage;
function userRegister() {
  fetch("https://ancient-lowlands-29535.herokuapp.com/user-registration/", {
    method: "POST",
    body: JSON.stringify({
      first_name: document.getElementById("first_name").value,
      last_name: document.getElementById("last_name").value,
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
      address: document.getElementById("address").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("email").value,
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
        alert("Registered successfully, please log in.");
        window.location.href = "./login.html";
      } else {
        alert("Please enter correct information");
      }
    });
}