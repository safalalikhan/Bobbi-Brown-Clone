//container starts

let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
document.getElementById("dot1").addEventListener("click", () => {
  currentSlide(1);
});
document.getElementById("dot2").addEventListener("click", () => {
  currentSlide(2);
});
document.getElementById("dot3").addEventListener("click", () => {
  currentSlide(3);
});

document.getElementById("prevleft").addEventListener("click", () => {
  plusSlides(-1);
});
document.getElementById("nextright").addEventListener("click", () => {
  plusSlides(1);
});
let datanew = [
  {
    url: "https://www.bobbibrown.in/media/export/cms/products/v2_1080x1080/bb_sku_ERFJ12_1080x1080_0.jpg",
    url2: "https://www.bobbibrown.in/media/export/cms/products/600x600/bb_sku_EER904_600x600_1.jpg",
    name: "SKIN CONCEALER STICK",
    rating: "4",
    price: "1299",
  },
  {
    url: "https://www.bobbibrown.in/media/export/cms/products/600x600/bb_sku_EPYL03_600x600_0.jpg",
    url2: "https://www.bobbibrown.in/media/export/cms/products/600x600/bb_sku_ERE012_600x600_1.jpg",

    name: "FACE AND CHEEK PALETTE",
    rating: "4",
    price: "1299",
  },
  {
    url: "https://www.bobbibrown.in/media/export/cms/products/600x600/bb_sku_E96E40_600x600_0.jpg",
    url2: "https://www.bobbibrown.in/media/export/cms/products/600x600/bb_sku_EPH201_600x600_1.jpg",

    name: "LONG-WEAR CREAM SHADOW STICK",
    rating: "4",
    price: "1299",
  },
];
let datamini = [
  {
    url: "https://www.bobbibrown.in/media/export/cms/products/600x600/bb_sku_ERLC01_600x600_0.jpg",
    url2: "https://www.bobbibrown.in/media/export/cms/products/600x600/bb_sku_EER904_600x600_1.jpg",

    name: "SKIN CONCEALER STICK",
    rating: "4",
    price: "1299",
  },
  {
    url: "https://www.bobbibrown.in/media/export/cms/products/600x600/bb_sku_EPGN01_600x600_0.jpg",
    url2: "https://www.bobbibrown.in/media/export/cms/products/600x600/bb_sku_ERE012_600x600_1.jpg",

    name: "FACE AND CHEEK PALETTE",
    rating: "4",
    price: "1299",
  },
  {
    url: "https://www.bobbibrown.in/media/export/cms/products/v2_1080x1080/bb_sku_EPH201_1080x1080_0.jpg",
    url2: "https://www.bobbibrown.in/media/export/cms/products/600x600/bb_sku_EPH201_600x600_1.jpg",

    name: "LONG-WEAR CREAM SHADOW STICK",
    rating: "4",
    price: "1299",
  },
];
let datatara = [
  {
    url: "https://www.bobbibrown.in/media/export/cms/products/600x600/bb_sku_EPH101_600x600_0.jpg",
    url2: "https://www.bobbibrown.in/media/export/cms/products/600x600/bb_sku_EER904_600x600_1.jpg",

    name: "SKIN CONCEALER STICK",
    rating: "4",
    price: "1299",
  },
  {
    url: "https://www.bobbibrown.in/media/export/cms/products/v2_1080x1080/bb_sku_EER904_1080x1080_0.jpg",
    url2: "https://www.bobbibrown.in/media/export/cms/products/600x600/bb_sku_ERE012_600x600_1.jpg",

    name: "FACE AND CHEEK PALETTE",
    rating: "4",
    price: "1299",
  },
  {
    url: "https://www.bobbibrown.in/media/export/cms/products/v2_1080x1080/bb_sku_EL1104_1080x1080_0.jpg",
    url2: "https://www.bobbibrown.in/media/export/cms/products/600x600/bb_sku_EPH201_600x600_1.jpg",

    name: "LONG-WEAR CREAM SHADOW STICK",
    rating: "4",
    price: "1299",
  },
];
let data2 = [
  {
    url: "https://www.bobbibrown.in/media/export/cms/Live-Chat_500x500.jpg",
    head: "LIVE CHAT",
    desc: "Chat with a makeup artist to get product recommendations.",
    link: "CHAT NOW",
    goto: "fav.html",
  },
  {
    url: "https://www.bobbibrown.in/media/export/cms/Samples_500x500.jpg",
    head: "SAMPLE ON EVERY PURCHASE",
    desc: "Select a free sample at checkout with any order*** (Conditions Apply)",
    link: "SHOP NOW",
    goto: "new.html",
  },
  {
    url: "https://www.bobbibrown.in/media/export/cms/Shipping-&-Returns_500x500.jpg",
    head: "FREE SHIPPING",
    desc: "Get your favorites delivered straight to your door - every shipment on us",
    link: "SHOP NOW",
    goto: "fav.html",
  },
  {
    url: "https://www.bobbibrown.in/media/export/cms/Virtual-Consults_500x500.jpg",
    head: "VIRTUAL CONSULTATION",
    desc: "Get personalized recommendation on our bestsellers with Virtual Artistry Consultations",
    link: "BOOK NOW",
    goto: "new.html",
  },
];

let new_option = document.getElementById("new_option");
new_option.style.fontWeight = "bold";
let mini_option = document.getElementById("mini_option");
let taras_option = document.getElementById("taras_option");

let newOption = () => {
  appendItems(datanew);
  mini_option.style.fontWeight = "lighter";
  taras_option.style.fontWeight = "lighter";
  new_option.style.fontWeight = "bold";
};
let miniOption = () => {
  appendItems(datamini);
  mini_option.style.fontWeight = "bold";
  taras_option.style.fontWeight = "lighter";
  new_option.style.fontWeight = "lighter";
};
let tarasOption = () => {
  appendItems(datatara);
  mini_option.style.fontWeight = "lighter";
  taras_option.style.fontWeight = "bold";
  new_option.style.fontWeight = "lighter";
};
new_option.addEventListener("click", newOption);
mini_option.addEventListener("click", miniOption);
taras_option.addEventListener("click", tarasOption);

function appendLAst(data) {
  let division = document.getElementById("products_last");
  division.innerHTML = null;
  data.forEach((el) => {
    let box = document.createElement("div");
    let image = document.createElement("img");
    image.src = el.url;
    let caption = document.createElement("p");
    caption.innerText = el.head;
    caption.style.fontWeight = "bold";
    let description = document.createElement("p");
    description.innerText = el.desc;
    let link = document.createElement("p");
    link.innerText = el.link;
    link.className = "downlink";
    link.addEventListener("click",()=>{
      window.location.href = el.goto;
    })
    box.append(image, caption, description, link);
    division.append(box);
  });
}
appendLAst(data2);

function appendItems(data) {
  let division = document.getElementById("scroll_side");
  division.innerHTML = null;
  data.forEach((el) => {
    let box = document.createElement("div");
    let image = document.createElement("img");
    image.src = el.url;
//
image.addEventListener("mouseleave", function () {
  image.src = el.url;
});
image.addEventListener("mouseover", function () {
image.src = el.url2;
});

//
    let name = document.createElement("p");
    name.innerText = el.name;
    name.style.fontWeight = "bold";
    let rating = document.createElement("p");
    rating.innerText = `Rating :${el.rating}`;
    let price = document.createElement("p");
    price.innerText = `Rs : ${el.price}`;
    let button = document.createElement("button");
    button.innerText = "ADD TO CART";
    box.append(image, name, rating, price, button);
    division.append(box);
  });
}
appendItems(datanew);

document.getElementById("slide1").addEventListener("click",()=>{
  window.location.href = "new.html";
});
document.getElementById("slide2").addEventListener("click",()=>{
  window.location.href = "fav.html";
})
document.getElementById("slide3").addEventListener("click",()=>{
  window.location.href = "fav.html";
})

document.getElementById("button1").addEventListener("click",()=>{
  window.location.href = "new.html";
});
document.getElementById("button2").addEventListener("click",()=>{
  window.location.href = "fav.html";
})
document.getElementById("button3").addEventListener("click",()=>{
  window.location.href = "new.html";
})
document.getElementById("button4").addEventListener("click",()=>{
  window.location.href = "fav.html";
})
// container ends
