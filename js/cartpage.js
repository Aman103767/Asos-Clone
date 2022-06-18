import navbar from "./navbar.js"
document.querySelector(".navbar__container").innerHTML = navbar();
import foot from "./footer.js"
 document.getElementById('footer').innerHTML = foot();

let cartarray = JSON.parse(localStorage.getItem("cartdata"))||[];

displayData(cartarray);
function displayData(data) {
  
   let container = document.querySelector('#item_append');

   container.innerHTML = "";
   data.forEach((elem, index) => {
      let div = document.createElement("div");

      let innerdiv = document.createElement('div');
      innerdiv.setAttribute('id', 'inner_box')
      let imgdiv = document.createElement('div');
      let img = document.createElement('img');
      img.setAttribute('src', elem.image);
      imgdiv.append(img);
      imgdiv.setAttribute('id', 'img_box')
      let price = document.createElement('h3');
      price.innerText =  elem.price;
      price.style.marginTop = "1px"
      let name = document.createElement('div');
      name.innerText = elem.details;
      name.style.marginTop = "-10px"
      name.style.marginBottom = "13px"
      // let color = document.createElement('div');
      // color.innerText = elem.color;
      let size = document.createElement('div')
      let text_div = document.createElement('div')
      text_div.style.alignItems = "center";
      let delete_box = document.createElement('div')
      delete_box.innerText = '×';
      delete_box.style.cursor = 'pointer';
      delete_box.setAttribute('id', "delete_box");
      delete_box.addEventListener('click', function () {
         deleteItem(index);
      })
      text_div.append(delete_box)
      text_div.style.width = "70%"
      // here starts the add or minsu button
      let divQ = document.createElement("div");
      divQ.setAttribute("id", "divQ");

      divQ.style.display = "flex"
      let increase = document.createElement("button")
      increase.addEventListener("click", function () {
         incQuant(elem, index);
      })
      increase.innerText = "+";
      increase.style.cursor = 'pointer';
      increase.setAttribute("class", "incdc");
      let qunt = document.createElement("p");
      qunt.innerText = elem.quantity;
      qunt.setAttribute("id", "qunt");
      let decrease = document.createElement("button");
      decrease.style.cursor = 'pointer';
      decrease.addEventListener("click", function () {
         decQuant(elem, index);
      });
      decrease.innerText = "-";
      decrease.setAttribute("class", "incdc");
      divQ.append(decrease, qunt, increase);

      let append_divq = document.createElement('div')
      append_divq.append( size, divQ);
      append_divq.style.display = "flex"
      append_divq.style.gap = "20px"
      append_divq.style.alignItems = "center"
      // here end button part
      text_div.append(price, name, append_divq)
      text_div.setAttribute("id", "text_box")
      size.innerText = elem.size;
      innerdiv.append(imgdiv, text_div);
      let hr = document.createElement('hr')
      hr.style.margin = "0px"
      hr.style.width = "80%";
      hr.style.margin = "auto";
      div.append(innerdiv, hr);

      container.append(div);

      //  .style.boxShadow = "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px";
     checkanydata();
   })
}

function checkanydata(){
   let cartarray = JSON.parse(localStorage.getItem("cartdata"));
   console.log(cartarray)
   console.log('aman')
   if(cartarray.length == 0 ){
      document.querySelector('#twocontainer').innerHTML = null;
   }
}
showTotal();
function incQuant(elem, index) {
   document.querySelector("#qunt").innerText = elem.quantity++;
   localStorage.setItem("cartdata", JSON.stringify(cartarray));
   console.log(elem.quantity)

   showTotal();
   
   displayData(cartarray);
   shownavbar()
}
function decQuant(elem, index) {
   if (elem.quantity > 1) {
      document.querySelector("#qunt").innerText = elem.quantity--;
      // here we have to send data to local storage
      localStorage.setItem("cartdata", JSON.stringify(cartarray));
      showTotal();
      

   } else {

      document.querySelector("#qunt")[index].innerText = 1;
      localStorage.setItem("cartdata", JSON.stringify(cartarray));
   }

   displayData(cartarray)
   shownavbar()

}



function showTotal() {
   var total = cartarray.reduce(function (acc, ele) {
      var split = ele.price;
    
    var ret = split.substr(1);

      return acc + ret* ele.quantity;
   }, 0);

   document.querySelector("#total-p").innerText = "£"+Math.floor(total);
  
   localStorage.setItem("totalprice", total);
   document.querySelector("#subpricebelow").innerText = "£"+Math.floor(total)
   var count = 0;
   document.querySelector("#Apply").addEventListener("click", check)
   var value = document.querySelector("#promo").value
   if(count == 0 && value ){
      check()
   }
   function check() {
      var value = document.querySelector("#promo").value
      if (value != "ASOS30"){
         document.querySelector('#disc').innerHTML = null;
         let discount = document.createElement('h3');
         discount.innerText = "Enter valid promo code";
         discount.setAttribute('id','discount');
         document.querySelector('#disc').append(discount);
         discount.style.color = "red";
         discount.style.textAlign = "center"
         document.querySelector('#total_container').style.height = "510px";
         discount.style.marginTop = "30px"
        return 0;
      }
      document.querySelector('#disc').innerHTML = null;
      let discoun = document.createElement('h4');
      discoun.setAttribute('id','discoun');
      let discount = document.createElement('h3');
      discount.setAttribute('id','discount');

      document.querySelector('#disc').append(discoun,discount);
      document.querySelector('#disc').style.justifyContent = "space-between"
     

      if (value == "ASOS30") {
         document.querySelector('#total_container').style.height = "540px";
         document.querySelector("#totalcontainer").style.height = "auto";
         document.querySelector("#total-p").style.textDecoration = "line-through"
         document.querySelector("#total-p").style.color = "gray"
         document.querySelector("#total-p").style.fontWeight = "400"
       
         count++;
         if (count == 1) {
            var dis = Math.floor(total * 30 / 100)
            localStorage.setItem("dis", dis);
          
            document.querySelector("#discoun").innerText = "Discount "
            document.querySelector("#discount").innerText = "-"+"£"+ + Math.floor(dis);
         
            total = total - dis
            console.log(total)
            document.querySelector("#realprice").innerText = "Estimated Total ";
            document.querySelector("#totalr").innerText = "£"+Math.floor(total);

            localStorage.setItem("totalprice", total);
            shownavbar()
         }

      
      else {
         //  document.querySelector("#total-p").innerText = "£"+Math.floor(total);
        let dise =  localStorage.getItem("dis");
   
         //localStorage.setItem("totalprice", total);
         document.querySelector("#discoun").innerText = "Discount"
         document.querySelector("#discount").innerText = "-"+"£"+ + Math.floor(dise);
        
      }
   }
   }
}



   function deleteItem(index) {

      cartarray.splice(index, 1);
      //here set the local storage 
      localStorage.setItem("cartdata", JSON.stringify(cartarray));
      displayData(cartarray);
      showTotal();
      checkanydata();
   
      shownavbar()
      
   }
   shownavbar();


   
   let userCredentials = JSON.parse(localStorage.getItem('userData')) || null;
            // console.log(userCredentials);
            
            let signedUser = document.getElementById('signedUser')
            let logoutByUser = document.getElementById('logoutByUser');
            if(userCredentials === null){
                signedUser.innerHTML = "Sign In"
                logoutByUser.innerHTML = "Join"
            }else{
                signedUser.innerHTML = "Hi"+" "+userCredentials.fname2
                signedUser.style.textDecoration = "none";
                signedUser.style.color = "#2D2D2D"
                signedUser.style.fontWeight = "bold"
                logoutByUser.innerHTML = "Logout"
            }
            let accDrop = document.getElementById('accDrop');
            let bagDrop =  document.getElementById('bagDrop');
            
            function closeMenu(){
                    accDrop.style.display = "none";
                    bagDrop.style.display = "none";
                    window.location.reload();
                    // document.querySelectorAll('.dropdown .dropdown-content#accDrop')[0].style.display = "none";
                }   
        let y=document.getElementById("closebtn")
        y.addEventListener("click", function(){
            closeMenu()
        } )
        let z=document.getElementById("bagbtn")
        z.addEventListener("click", function(){
            closeMenu()
        } )
        function shownavbar(){
         
         let productdata = JSON.parse(localStorage.getItem('cartdata')) || [];
         let totalprice = JSON.parse(localStorage.getItem('totalprice'));
         
         let cartParentContainer = document.getElementById('cartParentContainer');
         cartParentContainer.innerHTML = null;
         if(productdata.length === 0){
            bagDropContainer.classList.add('bagDropdownEvent')
         }
         let cartSubTotal = document.getElementById('cartSubTotal') || null;
     
         productdata.forEach(el => {
            // let cartContainer__product = document.getElementById('cartContainer__product');
            let cartContainer__product = document.createElement('div');
            cartContainer__product.classList.add('cartContainer__product');
            cartContainer__product.setAttribute('id', 'cartContainer__product');


             let d1 = document.createElement('div');
             let img = document.createElement('img');
             img.src = el.image;
             d1.append(img);
             let d2 = document.createElement('div');
             let p1 = document.createElement('p');
             p1.innerText = el.price;
             let p2 = document.createElement('p');
             p2.innerText = el.details;
            let d2_0 = document.createElement('div');
            
            let p2_0 = document.createElement('p');
            p2_0.innerText = el.size;
            let p3_0 = document.createElement('p');
            p3_0.innerText = el.quantity
            d2_0.append( p2_0, p3_0)
            d2.append(p1, p2, d2_0);
            cartSubTotal.innerText = "£"+Math.floor(totalprice);
            cartContainer__product.append(d1, d2)

            cartParentContainer.append(cartContainer__product);
            bagDropContainer.classList.remove('bagDropdownEvent');
         })
      
      
      }

