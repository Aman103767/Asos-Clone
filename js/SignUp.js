//checkbox all select
function selects() {
    var ele = document.getElementsByName('chk');
    for (var i = 0; i < ele.length; i++) {
        if (ele[i].type == 'checkbox')
            ele[i].checked = true;

    }

}  


// var userArr=JSON.parse(localStorage.getItem("userData")) || [];
    
    
//     document.querySelector("#form").addEventListener("submit",function(){
//         event.preventDefault();

//         var data={
//           email1:form.email1.value,
//           fname2:form.fname2.value,
//           lname2:form.lname2.value,
//           password2:form.password2.value,
//           Women:form.Women.value,
//           Men:form.Men.value,
//     }   
//             console.log(data)
//              userArr.push(data)
        
      
//         localStorage.setItem("userData",JSON.stringify(userArr));
//         window.location.href="login.html"
//     })

var form= document.querySelector("form");
form.addEventListener("submit",function(event){
event.preventDefault();
var data={
        email1:form.email1.value,
        fname2:form.fname2.value,
        lname2:form.lname2.value,
        password2:form.password2.value,
        Women:form.Women.value,
        Men:form.Men.value,
  }
console.log(data);
localStorage.setItem("userData",JSON.stringify(data));
var check= JSON.parse(localStorage.getItem("userData"));

if (check !== null ){
  window.location.href="Login.html"
}

})


