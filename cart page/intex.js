let cartarr = [
   {
       details: "ASOS LUXE co-ord satin bardot crop top with bow in floral print",
       price: "£52.00",
       image: "https://images.asos-media.com/products/asos-luxe-co-ord-satin-bardot-crop-top-with-bow-in-floral-print/201884267-1-multi?$n_480w$&wid=476&fit=constrain",
       quantity: 1
   },
   {
       details: "Daisy Street Y2K strappy butterfly crop top in grunge sequins",
       price: "£37.00",
       image: "https://images.asos-media.com/products/daisy-street-y2k-strappy-butterfly-crop-top-in-grunge-sequins/202324648-1-turquoisesequin?$n_480w$&wid=476&fit=constrain",
       quantity: 1
   },
   {
       details: "Daisy Street Y2K strappy butterfly crop top in grunge sequins",
       price: "£37.00",
       image: "https://images.asos-media.com/products/daisy-street-y2k-strappy-butterfly-crop-top-in-grunge-sequins/202324648-1-turquoisesequin?$n_480w$&wid=476&fit=constrain",
       quantity: 1
   },
   {
       details: "Miss Selfridge retro daisy kickflare co-ord",
       price: "£18.99",
       image: "https://images.asos-media.com/products/miss-selfridge-retro-daisy-kickflare-co-ord/201434367-1-multi?$n_480w$&wid=476&fit=constrain",
       quantity: 1
   },
   {
       details: "ASOS EDITION feather & sequin mini dress with low back in charcoal",
       price: "£135.00",
       image: "https://images.asos-media.com/products/asos-edition-feather-sequin-mini-dress-with-low-back-in-charcoal/20232354-1-charcoal?$n_480w$&wid=476&fit=constrain",
       quantity: 1
   },
   {
       details: "Trendyol mesh side dress in black",
       price: "£29.00",
       image: "https://images.asos-media.com/products/trendyol-mesh-side-dress-in-black/201644659-1-black?$n_480w$&wid=476&fit=constrain",
       quantity: 1
   },
   {
       details: "ASOS DESIGN textured lace beach trouser co ord in white",
       price: "£32.00",
       image: "https://images.asos-media.com/products/asos-design-textured-lace-beach-trouser-co-ord-in-white/201923162-1-white?$n_480w$&wid=476&fit=constrain",
       quantity: 1
   },
   {
       details: "ASOS DESIGN patchwork embellished mini dress with wrap skirt and drape back in textured sequin",
       price: "£105.00",
       image: "https://images.asos-media.com/products/asos-design-patchwork-embellished-mini-dress-with-wrap-skirt-and-drape-back-in-textured-sequin/200498723-1-bronze?$n_480w$&wid=476&fit=constrain",
       quantity: 1
   },
   {
       details: "ASOS DESIGN co-ord crochet off shoulder top in cream",
       price: "£26.00",
       image: "https://images.asos-media.com/products/asos-design-co-ord-crochet-off-shoulder-top-in-cream/202690907-1-cream?$n_480w$&wid=476&fit=constrain",
       quantity: 1
   },
   {
       details: "ASYOU mesh layer long sleeve mini dress in black",
       price: "£28.99",
       image: "https://images.asos-media.com/products/asyou-mesh-layer-long-sleeve-mini-dress-in-black/202649241-1-black?$n_480w$&wid=476&fit=constrain",
       quantity: 1
   },
   {
       details: "Style Cheat tiered smock dress in pink leopard print",
       price: "£45.00",
       image: "https://images.asos-media.com/products/style-cheat-tiered-smock-dress-in-pink-leopard-print/202626709-1-pinkanimalprint?$n_480w$&wid=476&fit=constrain",
       quantity: 1

   },
   {
       details: "ASOS DESIGN shard sequin strappy mini dress in orange",
       price: "£90.00",
       image: "https://images.asos-media.com/products/asos-design-shard-sequin-strappy-mini-dress-in-orange/201593123-1-orange?$n_480w$&wid=476&fit=constrain",
       quantity: 1
   },
   {
       details: "ASOS LUXE co-ord 3D lace bardot crop top in black",
       price: "£52.00",
       image: "https://images.asos-media.com/products/asos-luxe-co-ord-3d-lace-bardot-crop-top-in-black/201306340-1-black?$n_480w$&wid=476&fit=constrain",
       quantity: 1
   },
   {
       details: "ASOS DESIGN mesh ruched midi dress with tie in animal and floral print",
       price: "£34.00",
       image: "https://images.asos-media.com/products/asos-design-mesh-ruched-midi-dress-with-tie-in-animal-and-floral-print/202023522-1-animalfloralprint?$n_480w$&wid=476&fit=constrain",
       quantity: 1
       
   }
   ]

localStorage.setItem("cartdata", JSON.stringify(cartarr));
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
}
function decQuant(elem, index) {
   if (elem.quantity > 1) {
      document.querySelector("#qunt").innerText = elem.quantity--;
      // here we have to send data to local storage
      showTotal();
      

   } else {

      document.querySelector("#qunt")[index].innerText = 1;
      localStorage.setItem("cartdata", JSON.stringify(cartarray));
   }

   displayData(cartarray)
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
   
      
      
   }
