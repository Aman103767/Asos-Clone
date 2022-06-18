var form = document.querySelector("form");
    var userData = JSON.parse(localStorage.getItem("userData")) || [];
    document.querySelector("form").addEventListener("submit", myfunction)

    function myfunction() {


        event.preventDefault();
        var data = {
            email: form.email.value,
            password: form.password.value,
        }
        console.log(data);
        if (userData == null) {
            alert("Please Create an Account First")
        }
        if (userData.email1 === data.email && userData.password2 === data.password) {
            alert("Login Successfull")
            localStorage.setItem("userData", JSON.stringify(userData))
            window.location.href = "./index.html"
        } else {
            alert("Invaild Data")
        }

    }










