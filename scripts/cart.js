import { select } from "../components/select.js";
let sel = select();
let create = (a) => {
  return document.createElement(a);
};

//compliment products --->
let compliData = [
  {
    image:
      "https://www.bobbibrown.in/media/export/cms/products/80x80/bb_prod_EPJA40_80x80_0.jpg",
    name: "VITAMIN ENRICHED FACE BASE",
    discription: "",
    category: "Neutral Rose",
    price: "",
  },
  {
    image:
      "https://www.bobbibrown.in/media/export/cms/products/80x80/bb_prod_EPJA41_80x80_0.jpg",
    name: "HYDRATING FACE CREAM SAMPLE",
    discription: "",
    category: "",
    price: "",
  },
  {
    image:
      "https://www.bobbibrown.in/media/export/cms/products/80x80/bb_prod_EPJ940_80x80_0.jpg",
    name: "MINI SOOTHING CLEANSING OIL",
    discription: "",
    category: "",
    price: "",
  },
  {
    image:
      "https://www.bobbibrown.in/media/export/cms/products/80x80/bb_prod_EPJ940_80x80_0.jpg",
    name: "MINI SOOTHING CLEANSING OIL",
    discription: "",
    category: "",
    price: "",
  },
  {
    image:
      "https://www.bobbibrown.in/media/export/cms/products/80x80/bb_prod_EL1941_80x80_0.jpg",
    name: "VITAMIN ENRICHED EYE BASE SAMPLE",
    discription: "",
    category: "",
    price: "",
  },
];

let compliment = (a) => {
  document.getElementById("box-compli-prod").innerHTML = null;
  compliData.forEach((el, i) => {
    

    if (a === "forward" || a === "null") {
      if (i <= 2) {
        let box = create("div");
        box.setAttribute("id", "box");
        let img = create("img");
        let h3 = create("h5");
        let btn = create("button");
        img.src = el.image;
        btn.innerText = "Select";
        h3.innerText = el.name;
        box.append(img, h3, btn);
        document.getElementById("box-compli-prod").append(box);
      }
    } else if (a === "backward") {
      if (i > 0 && i < compliData.length - 1) {
        let box = create("div");
        box.setAttribute("id", "box");
        let img = create("img");
        img.src = el.image;
        let h3 = create("h5");
        h3.innerText = el.name;
        box.append(img, h3);
        document.getElementById("box-compli-prod").append(box);
      }
    }
  });
};
compliment("null");
document.getElementById("forward").addEventListener("click", fun);
function fun() {
  compliment("forward");
  
}
document.getElementById("backward").addEventListener("click", funback);
function funback() {
  compliment("backward");
  
}

// compli_box - display and hide,

let compli_box = document.querySelector("#compliment-box");
let compli_control = document.querySelector("#compli_control");
let i = 0;
let compliControl = () => {
  if (i % 2 === 0) {
    compli_box.style.display = "none";
    compli_control.setAttribute("class", "fa-solid fa-angle-down");
  }
  if (i % 2 !== 0) {
    compli_box.style.display = "block";
    compli_control.setAttribute("class", "fa-solid fa-angle-up");
  }
  i++;
};
document
  .querySelector("#compli_control")
  .addEventListener("click", compliControl);

let getProd = JSON.parse(localStorage.getItem("cart"));

let c = 0;
let sum = 0;
getProd.forEach((el, index) => {
  sum += +el.price;
  let innerbox = create("div");
  let box = create("div");
  let imgdiv = create("div");
  box.setAttribute("class", "item");
  let img = create("img");
  img.src = el.image;
  let h4 = create("h4");
  let h3 = create("h3");
  let des = create("p");
  let price = create("p");
  let rating = create("p");
  let select = create("div");
  let selectPriceDiv = create("div");
  selectPriceDiv.setAttribute("id", "selectPrice");
  let removeDiv = create("div");
  removeDiv.setAttribute("id", "remove");
  let i = create("i");
  select.innerHTML = sel;
  select.setAttribute("class", "selectbtn");

  h4.innerText = el.category;
  h3.innerText = el.name;
  i.setAttribute("class", "fa-solid  fa-xmark");
  des.innerText = el.discription;
  price.innerText = `Rs :${el.price}`;
  rating.innerText = `size : MRP inclusive of all taxes | ${el.size}g`;
  rating.style.color = "#9daabd";
  selectPriceDiv.append(select, price);
  imgdiv.append(img);
  removeDiv.append(h3, i);
  innerbox.append(h4, removeDiv, des, rating, selectPriceDiv);
  box.append(imgdiv, innerbox);
  document.getElementById("products").append(box);
  c++;
  i.addEventListener("click", function () {
    removeFromCart(el, index);
  });
});

document.querySelector("#noOfProduct").innerText = `(${c})`;

// for rigth box---->
let box1 = document.querySelector("#temp");
let change = document.querySelector("#hide");
let count = 0;
let hideOrderSummary = () => {
  if (count % 2 === 0) {
    box1.style.display = "none";
    change.setAttribute("class", "fa-solid fa-angle-down");
  }
  if (count % 2 !== 0) {
    box1.style.display = "block";
    change.setAttribute("class", "fa-solid fa-angle-up");
  }
  count++;
};
document.querySelector("#hide").addEventListener("click", hideOrderSummary);

//for hide and display of offercode block;'
// c = 0;
let box2 = document.getElementById("coupon-code");
let modify = document.getElementById("hide1");
let hideOffer = () => {
  if (count % 2 === 0) {
    box2.style.display = "none";
    modify.setAttribute("class", "fa-solid fa-angle-down");
  }
  if (count % 2 !== 0) {
    box2.style.display = "block";
    modify.setAttribute("class", "fa-solid fa-angle-up");
  }
  count++;
};
document.querySelector("#hide1").addEventListener("click", hideOffer);

// to remove from cart section:

let removeFromCart = (el, index) => {
  sum += -+el.porice;
  getProd.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(getProd));
  window.location.reload();
};


// sub-total amount --->
let amount = []
let subtotal = document.getElementById("subtotal");
let estimated_mrp = document.getElementById("estimated_mrp");
let subtotalAmount = () => {
  subtotal.innerText = `₹ ${sum}`;
  estimated_mrp.innerText = `₹ ${sum + +sum*0.18}`;
  subtotal.style.color = "#000000";
  subtotal.style.fontWeight = "bold";
  subtotal.style.fontSize = "20px";
  (subtotal.style.fontFamily = "BBText Regular"),
    "Helvetica",
    "Arial",
    "sans-serif";
   amount.push(sum);
   amount.push(`${sum + +sum*0.18}`)
   amount.push(c)
   localStorage.setItem("bill",JSON.stringify(amount))
  };
subtotalAmount(sum);
