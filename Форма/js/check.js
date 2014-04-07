
    // Функция валидации формы
    function CheckMe(f) {
      var user = f.user.value; // Имя пользователя
      var password = f.password.value;
      var conf_password = f.confirm_password.value;
      var email = f.email.value;
      var location = f.location.value;
      var error = false;


      document.getElementById('user').style.background="green";
      document.getElementById('password').style.background="green";
      document.getElementById('conf_password').style.background="green";
      document.getElementById('email').style.background="green";
      document.getElementById('location').style.background="green";

      if (user == "") {
        f.user.placeholder="Epmty user field";
        document.getElementById('user').style.background="red";
        error = true;
      }

      if (password == "") {
        f.password.placeholder="Epmty password field";
        document.getElementById('password').style.background="red";
        error = true;
      }

      if (email == "") {
        f.email.placeholder="Epmty email field";
        document.getElementById('email').style.background="red";
        error = true;
      }

      if ((location == "Location") || (location == "Empty location field")) {
        f.location.options[0].text="Empty location field";
        document.getElementById('location').style.background="red";
        error = true;
      }

      if (password != conf_password) {
        f.confirm_password.placeholder="Incorrect confirm password";
        f.confirm_password.value="";
        document.getElementById('conf_password').style.background="red";
        error = true;
      }

      if (error) {
        return false
      } else {
        alert("Success");
        return true
      }
    }