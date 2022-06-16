let productdata =  [
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
showdata(productdata)
function showdata(data){
    
    document.querySelector(".second>h3").innerText = data.length+" "+"ITEMS";
    let amount = +localStorage.getItem('totalprice');
    document.querySelector(".subv").innerText ="£"+Math.floor(amount);
    let random = Math.floor(Math.random()*6)+1
    console.log(random)
    document.querySelector(".deli").innerText = "£"+random; 
    document.querySelector('.tot').innerText ="£"+ Math.floor(random+amount);
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
    })
}