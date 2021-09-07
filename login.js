const user = window.localStorage;
function login() {
    fetch("https://ancient-lowlands-29535.herokuapp.com/auth", {
      method: "POST",
      body: JSON.stringify({
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data["description"] == "Invalid credentials") {
          alert("invalid cedentials")
          window.location.href = "./index.html";
          
          
        } else {
          
          window.location.href ="./index.html";
        }
      });
  }

  function collect(){
    var inputUsername= document.getElementById("auth_username");
     localStorage.setItem("username", inputUsername.value);
    var inputPassword= document.getElementById("auth_password");
     localStorage.setItem("password", inputPassword.value);
     

  }