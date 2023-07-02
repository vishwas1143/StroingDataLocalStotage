function text() {
    var uid = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var ps = document.getElementById("password").value;
  
    localStorage.setItem("uid", uid);
    localStorage.setItem("email", email);
    localStorage.setItem("ps", ps);
  }
  