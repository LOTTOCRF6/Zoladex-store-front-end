const user = window.localStorage;



getUser();
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
          // window.location.href = "./#products-container";
          
          
        } else {
          
          // window.location.href ="./#products-container";
        }
      });
  }

  function collect(){
    var inputUsername= document.getElementById("username");
     localStorage.setItem("username", inputUsername.value);
    var inputPassword= document.getElementById("password");
     localStorage.setItem("password", inputPassword.value);
     
  }