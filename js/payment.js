import footer from "./footer.js"
 document.getElementById('footer').innerHTML = footer();
let productdata = JSON.parse(localStorage.getItem("cartdata"));
showdata(productdata)
function showdata(data){
    
    document.querySelector(".second>h3").innerText = data.length+" "+"ITEMS";
    let amount = +localStorage.getItem('totalprice');
    document.querySelector(".subv").innerText ="£"+Math.floor(amount);
    if(amount<=35){
        let random = Math.floor(Math.random()*6)+1
        console.log(random)
        document.querySelector(".deli").innerText = "£"+ random; 
        document.querySelector('.tot').innerText ="£"+ Math.floor(random+amount);
    }
    else{
        document.querySelector(".deli").innerText = "Free"; 
        document.querySelector(".tot").innerText ="£"+Math.floor(amount);
    }
    
   
   
    let container = document.querySelector(".checkoutdata");
    data.forEach((elem) =>{
     let card = document.createElement('div');
     let img = document.createElement('img');
     img.setAttribute("src",elem.image);
     let img_div = document.createElement('div');
     img_div.append(img);
     let text_div = document.createElement('div');
     img.style.height = "100px"
     card.setAttribute('class','card');
     text_div.setAttribute('class','text_box');

     let price = document.createElement('h3');
     price.innerText = elem.price;
     price.style.fontSize = "16px"
     price.style.marginTop = "2px"
     let name = document.createElement('div');
     name.innerText = elem.details;
     name.style.fontSize ="12px";
     name.style.marginTop = "-10px"
     name.style.marginBottom = "10px"
     //size bacha hai 

     let quantity = document.createElement('div')
     quantity.innerText = "Qty: " + elem.quantity;
     quantity.style.fontSize = "15px"

     text_div.append(price,name,quantity);
     card.append(img_div,text_div);
     container.append(card);
     if(productdata.length== 1){
        document.querySelector(".checkoutdata").style.height = "160px";
     }
    })
}
