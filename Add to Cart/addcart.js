 import navbar from "./navbar.js"
document.querySelector(".navbar__container").innerHTML = navbar();
import footer from "./footer.js"
 document.getElementById('footer').innerHTML = footer();
    
    
let productdata1 = JSON.parse(localStorage.getItem('cartitem'));

let sizevalue = document.getElementById("btn1");
sizevalue.addEventListener('click', clothsize)
let cartarray =JSON.parse(localStorage.getItem('cartdata'))|| [];
function clothsize() {
    let size = document.getElementById("select").value
   productdata1["size"] = size;
    cartarray.push(productdata1)
    localStorage.setItem('cartdata', JSON.stringify(cartarray));
alert("Item is added to the cart")
   shownav();
   showTotal();
}
// console.log(sizevalue)
// document.getElementById('btn1').addEventListener('click', addtocard)
// function addtocard(){
//     cartarray.push(productdata);
//     localStorage.setItem('cartdata',JSON.stringify(cartarray));
//     alert("Product add successfully")
// }

document.getElementById('imageBox').src = productdata1.image;
document.getElementById('hed').innerText = productdata1.details;
document.getElementById('price').innerText = productdata1.price;


function getdata(){
window.location.href="./index1.html"
}
function getdata1(){
window.location.href="./index2.html"
}
function myFunction(smallImg){
    var fullImg = document.getElementById("imageBox")
    fullImg.src = smallImg.src
}
const container = document.querySelector('.img-container')
const img = document.querySelector("#imageBox")

let zoom = 1
container.addEventListener('wheel', e => {
    img.style.transformOrigin = `${e.offsetX}px ${e.offsetY}px`

    zoom += e.deltaY * -0.01
    zoom = Math.min(Math.max(1, zoom), 5)

    if (zoom == 1) {
        img.style.left = '0px'
        img.style.top = '0px'
    }

    img.style.transform = `scale(${zoom})`
})


let clicked = false
let xAxis;
let x;
let yAxis;
let y;

container.addEventListener('mouseup', () => container.style.cursor = 'auto')

container.addEventListener('mousedown', e => {
    clicked = true;
    xAxis = e.offsetX - img.offsetLeft;
    yAxis = e.offsetY - img.offsetTop;

    container.style.cursor = 'grabbing'
})

window.addEventListener('mouseup', () => clicked = false)

container.addEventListener('mousemove', e => {
    if (!clicked) return
    e.preventDefault()

    x = e.offsetX
    y = e.offsetY

    img.style.left = `${x - xAxis}px`
    img.style.top = `${y - yAxis}px`

    checkSize()
})

function checkSize () {
    let containerOut = container.getBoundingClientRect()
    let imgIn = img.getBoundingClientRect()

    if (parseInt(img.style.left) > 0) {
        img.style.left = '0px'
    } else if (imgIn.right < containerOut.right) {
        img.style.left = `-${imgIn.width - containerOut.width}px`
    }
    if (parseInt(img.style.top) > 0) {
        img.style.top = '0px'
    } else if (imgIn.bottom < containerOut.bottom) {
        img.style.top = `-${imgIn.height - containerOut.height}px`
    }
}
var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
shownav();

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
        let y1=document.getElementById("closebtn")
        y1.addEventListener("click", function(){
            closeMenu()
        } )
        let z=document.getElementById("bagbtn")
        z.addEventListener("click", function(){
            closeMenu()
        } )
        function shownav(){
         let productdata = JSON.parse(localStorage.getItem('cartdata')) || [];
         let totalprice = JSON.parse(localStorage.getItem('totalprice'));
       
         let cartContainer__product = document.getElementById('cartContainer__product');
        //  cartContainer__product.innerHTML = null;
         if(productdata.length === 0){
            bagDropContainer.classList.add('bagDropdownEvent')
         }

         let cartParentContainer = document.getElementById('cartParentContainer');
         
         let cartSubTotal = document.getElementById('cartSubTotal') || null;

         productdata.forEach(el => {

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
       
     
        function showTotal() {
            var total = cartarray.reduce(function (acc, ele) {
               var split = ele.price;
             
             var ret = split.substr(1);
         
               return acc + ret* ele.quantity;
            }, 0);
           
            localStorage.setItem("totalprice", total);
            console.log(total)
           
           window.location.reload();
        }
      