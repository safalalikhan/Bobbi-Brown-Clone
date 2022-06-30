let data=[{"image":"https://www.bobbibrown.in/media/export/cms/products/v2_1080x1080/bb_sku_ERFJ03_1080x1080_0.jpg","name":"SKIN CONCEALER STICK","discription":"Easy-to-use, long-lasting concealer stick.","category":"Makeup","rating":"251","price":"2850"}, 

{"image":"https://www.bobbibrown.in/media/export/cms/products/600x600/bb_sku_EME703_600x600_0.jpg","name":"INTENSIVE SERUM FOUNDATION SPF 40/30","discription":"Radiance-boosting foundation","category":"Makeup","rating":"471","price":"6700"},

{"image":"https://www.bobbibrown.in/media/export/cms/products/600x600/bb_sku_EPHC01_600x600_0.jpg","name":"EXTRA REPAIR INTENSE EYE CREAM REFILL","discription":"Skin loving. Planet conscious.","category":"Skincare","rating":"5","price":"5900"},

{"image":"https://www.bobbibrown.in/media/export/cms/products/600x600/bb_sku_ERER01_600x600_0.jpg","name":"EXTRA REPAIR INTENSE MOISTURE CREAMM REFILL","discription":"Refill. Reuse. Repeat.","category":"Skincare","rating":"2","price":"6400"},

{"image":"https://www.bobbibrown.in/media/export/cms/products/600x600/bb_sku_ERMM01_600x600_0.jpg","name":"HIGHLIGHTING POWDER","discription":"Pear-infused, illuminator which delivers a light-reflective, high impact sheen, it lets yo..","category":"Skincare","rating":"251","price":"4250"},

{"image":"https://www.bobbibrown.in/media/export/cms/products/600x600/bb_sku_ERJRY1_600x600_0.jpg","name":"DELUXE SIZE VITAMIN ENRICHED FACE BASE","discription":"Moisturizer and primer in one","category":"Skincare","rating":"7","price":"7500"},

{"image":"https://www.bobbibrown.in/media/export/cms/products/600x600/bb_sku_ERJ9Y1_600x600_0.jpg","name":"OPALESCENT DREAM EYE SHADOW PALETTE","discription":"Palette of rich purples and warm metallics","category":" Makeup","rating":"2","price":"3900"},

{"image":"https://www.bobbibrown.in/media/export/cms/products/600x600/bb_sku_ENJN08_600x600_0.jpg","name":"RICH BROWN MICRO BROW PENCIL","discription":"Precision Definition Brow Pencil","category":"Skincare","rating":"45","price":"3600"},
{"image":"https://www.bobbibrown.in/media/export/cms/products/600x600/bb_sku_ERX7Y1_600x600_0.jpg","name":"LUXE ILLUMINATING DUO","discription":"The ultimate illuminating duo","category":"Makeup","rating":"1","price":"4400"},

{"image":"https://www.bobbibrown.in/media/export/cms/products/600x600/bb_sku_EPYL03_600x600_0.jpg","name":"DEEP FACE AND CHEEK PALETTE","discription":"FACE AND CHEEK PALETTE","category":"Makeup","rating":"45","price":"4250"},

{"image":"https://www.bobbibrown.in/media/export/cms/products/600x600/bb_sku_ERMN01_600x600_0.jpg","name":"MINI HIGHLIGHTING POWDER","discription":"Mini pearlescent illuminator","category":"Skincare","rating":"261","price":"2150"},

{"image":"https://www.bobbibrown.in/media/export/cms/products/600x600/bb_sku_ET5M01_600x600_0.jpg","name":"BARE PINK EXTRA LIP TINT","discription":"Sheer tinted lip balm","category":"Skincare","rating":"470","price":"2600"},

{"image":"https://www.bobbibrown.in/media/export/cms/products/600x600/bb_sku_E96E40_600x600_0.jpg","name":"LONG-WEAR CREAM SHADOW STICK","discription":"Effortless and high impact-that's the essence of NEW Long-Wear Cream Shadow Stick. This.","category":"Skincare","rating":"192","price":"3300"},

{"image":"https://www.bobbibrown.in/media/export/cms/products/600x600/bb_sku_ERJAY1_600x600_0.jpg","name":"GOLDEN ILLUSION EYE SHADOW PALETTE","discription":"Warm, decadent eye shadow palette","category":"Makeup","rating":"4","price":"5700"},

{"image":"https://www.bobbibrown.in/media/export/cms/products/v2_1080x1080/bb_sku_ERE012_1080x1080_0.jpg","name":"SKIN LONG-WEAR WEIGHTLESS FOUNDATION MINI","discription":"16-hour, medium coverage matte formula : (12)","category":"Skincare","rating":"12","price":"1990"},

{"image":"https://www.bobbibrown.in/media/export/cms/products/600x600/bb_sku_ENWG01_600x600_0.jpg","name":"ROSE NUDES","discription":"REAL NUDES EYE SHADOW PALETTE ","category":"Makeup","rating":"26","price":"4400"},

{"image":"https://www.bobbibrown.in/media/export/cms/products/600x600/bb_sku_EH2131_600x600_0.jpg","name":"CRUSHED LIP COLOR","discription":"Lived-in look & balm-like hydration","category":"Makeup","rating":"354","price":"1900"},

{"image":"https://www.bobbibrown.in/media/export/cms/products/600x600/bb_sku_ETF209_600x600_1.jpg","name":"GOLDEN BRONZE","discription":"MINI LONG-WEAR CREAM SHADOW STICK Does-it-all, budge-proof crayon","category":"Skincare","rating":"5","price":"1800"},

{"image":"https://www.bobbibrown.in/media/export/cms/products/600x600/bb_sku_ENJ101_600x600_0.jpg","name":"AVANT GARDENIA","discription":"LUXE DEFINING LIPSTICK","category":"Makeup","rating":"45","price":"3700"},

{"image":"https://www.bobbibrown.in/media/export/cms/products/v2_1080x1080/bb_sku_ERLN01_1080x1080_0.jpg","name":"GOLDEN LIGHT MINI BRONZING POWDER","discription":"Sun-kissed, matte-finish bronzer","category":"Skincare","rating":"2","price":"2200"},

{"image":"https://www.bobbibrown.in/media/export/cms/products/600x600/bb_sku_ERYX01_600x600_1.jpg","name":"PALE YELLOW MINI SHEER FINISH PRESSED POWDER","discription":"Portable, oil-absorbing powder","category":"Makeup","rating":"455","price":"2300"},

];

let cartData = JSON.parse(localStorage.getItem("cart")) || [];
let create = (a)=>{
    return document.createElement(a)
};

let showing = (data)=>{
    document.getElementById("show").innerHTML="";
    data.forEach((elem,i) => {
        
        let box1 = document.createElement("div");
        box1.setAttribute("id","box1");
        
        // let box = document.createElement("div");
        // box.setAttribute("id","di");
        
        // let but=document.createElement("button");
        // but.innerText="TRY IT ON";
        // box.append(but);
        
        let div = document.createElement("div");
        let image = document.createElement("img");
        image.src = elem.image;
        image.setAttribute("class","img1");
        div.append(image);
        
        
        let div1 = document.createElement("div");
        div1.setAttribute("id","div1");
        let name = document.createElement("p");
        name.innerText = elem.name;
        
        let dis = document.createElement("h4");
        dis.innerText = elem.discription;
        
        
        let category = document.createElement("h3");
        category.innerText = `Category : ${elem.category}`;
        
        let div2=document.createElement("div");
        div2.setAttribute("class","div2");
        let span1=document.createElement("span");
        
        span1.setAttribute("class","fa fa-star checked");
        let span2=document.createElement("span");
        span2.setAttribute("class","fa fa-star checked");
        
        let span3=document.createElement("span");
        span3.setAttribute("class","fa fa-star checked");
        
        let span4=document.createElement("span");
        span4.setAttribute("class","fa fa-star checked");
        
        let span5=document.createElement("span");
        span5.setAttribute("class","fa fa-star unchecked");
        let span6=document.createElement("span");
        
        span6.setAttribute("class","span6");
        span6.innerText=`(${elem.rating}) `;
        
        div2.append(span1,span2,span3,span4,span5,span6);
        
        let price = document.createElement("p");
        price.innerText = `₹${elem.price}`;
        
        div1.append(name, dis, category,div2, price);
        
        let box2 = document.createElement("div");
        box2.setAttribute("id","box2");
        
        let but1=document.createElement("button");
        but1.setAttribute("id","but1");
        
        but1.innerText="ADD TO BAG";
        box2.append(but1);
        
        box1.append(div, div1,box2);
        document.getElementById("show").append(box1); 

        but1.addEventListener("click", function(){
            addToCart(elem);
        })
    });
}

let addToCart = (el)=>{
    cartData.push(el);
       localStorage.setItem("cart",JSON.stringify(cartData))
     }
// showing(data);

    let rateSt = ()=>{
        let value = document.getElementById("select").value;
       if(value==="rhtl")
       {
        var sortedData = data.sort(function(a,b){
            return (b.rating)-(a.rating)
        })
        showing(sortedData)
       }
       else if (value==="phtl")
       {
        var sortedData = data.sort(function(a,b){
            return (b.price)-(a.price)
        })
        showing(sortedData)
       }
       else if(value ==="plth")
       {
        var sortedData = data.sort(function(a,b){
            return (a.price)-(b.price)
        })
        showing(sortedData)
       }
       else if (value==="sort")
       {
           console.log(data)
           showing(data)
       }
       
    }
    document.getElementById("select").addEventListener("change",rateSt)
    showing(data);





let total=document.querySelector("#total")
total.innerText=`${data.length} products`
let home=document.querySelector("#home")
home.addEventListener("click",function(){
    window.location.href="index.html"
})
showing(data);



window.onload = () => {
    document.getElementById('close').onclick = function () {
        this.parentNode.remove()
        return false;
    };
};


var mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};


