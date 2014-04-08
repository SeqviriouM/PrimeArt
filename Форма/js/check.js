
    // Функция валидации формы
    function CheckMe(f) {
      var user = f.user.value; // Имя пользователя
      var password = f.password.value;
      var conf_password = f.confirm_password.value;
      var email = f.email.value;
      var location = f.location.value;
      var terms = f.terms_of_use.checked; // проверка на принятие условий использования
      var error = false;
      var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.[A-z]{2,4})$/; // регулярное выражение для проверки email

      // Сбрасываем все ошибки
      document.getElementById('user').style.background="green";
      document.getElementById('password').style.background="green";
      document.getElementById('conf_password').style.background="green";
      document.getElementById('email').style.background="green";
      document.getElementById('location').style.background="green";
      document.getElementById('label_for_checkbox').style.color="green";

      // Проверка на пустоту поля user 
      if (user == "") {
        f.user.placeholder="Epmty user field";
        document.getElementById('user').style.background="red";
        error = true;
      }

      // Проверка на пустоту поля password
      if (password == "") {
        f.password.placeholder="Epmty password field";
        document.getElementById('password').style.background="red";
        error = true;
      }

      // Проверка на пустоту поля email
      if (email == "") {
        f.email.placeholder="Epmty email field";
        document.getElementById('email').style.background="red";
        error = true;
      }

      // Проверка на пустоту поля location
      if ((location == "Location") || (location == "Empty location field")) {
        f.location.options[0].text="Empty location field";
        document.getElementById('location').style.background="red";
        error = true;
      }

      // Проверка на несоответствие паролей
      if (password != conf_password) {
        f.confirm_password.placeholder="Incorrect confirm password";
        f.confirm_password.value="";
        document.getElementById('conf_password').style.background="red";
        error = true;
      }

      // Проверка на принятие условий использования
      if (!terms) {
        document.getElementById('label_for_checkbox').style.color="red";
        error = true;
      }

      // Проверка введенного email
      if (!reg.test(email)) {
        f.email.value="";
        f.email.placeholder = "Incorrect email adress";
        document.getElementById('email').style.background="red";
        error = true;
      }

      // Если есть ошибка, то вернуть пользователя дополнить/исправить свои данные, иначе - отправить форму на сервер
      if (error) {
        return false
      } else {
        alert("Success");
        return true
      }
    }