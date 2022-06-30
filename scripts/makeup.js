let a =
  "May Beauty Event:30% off Vitamin Enriched Eye Base And 40% off selcect grow.";
let b =
  "Get 15% off Your first order plus free shiping everyday when you join BB Access.";

  let cartData = JSON.parse(localStorage.getItem("cart")) || [];

let arr = [a, b];

let i = 0;
let offers = document.querySelector("#offers");
let backward = document.querySelector("#backward");
let forward = document.querySelector("#forward");
let content = document.querySelector("#content");
content.innerHTML = arr[i];

let id = setInterval(function () {
  content.innerHTML = arr[i];
  i++;
  if (i >= arr.length) {
    i = 0;
  }
}, 5000);
backward.addEventListener("click", function () {
  i = i + 1;

  content.innerHTML = arr[i];
  if (i >= arr.length) {
    i = 0;
    content.innerHTML = arr[i];
  }
});
forward.addEventListener("click", function () {
  i = i + 1;

  content.innerHTML = arr[i];
  if (i >= arr.length) {
    i = 0;
    content.innerHTML = arr[i];
    console.log(arr[i]);
  }
});
let hidden = document.querySelector("#hidden");
hidden.addEventListener("click", function () {
  offers.style.display = "none";
  clearInterval(id);
});

let container = document.querySelector("#products");

let data = JSON.parse(localStorage.getItem("Data"));

let append = (data) => {
  container.innerHTML = "";
  data.map(({ image, image1, name, category, discription, price, rating }) => {
    let box = document.createElement("div");
    let btn = document.createElement("button");
    btn.innerText = category;
    let img = document.createElement("img");
    // hover function
    img.addEventListener("mouseleave", function () {
      img.src = image;
    });
    img.src = image;
    img.addEventListener("mouseover", function () {
      if (image1.length == 0) {
        img.src = image;
      } else {
        img.src = image1;
      }
    });
    // end

    img.setAttribute("class", "image");
    let name1 = document.createElement("p");
    name1.innerText = name;
    let name2 = document.createElement("p");
    name2.innerText = discription;
    let price1 = document.createElement("p");
    price1.innerText = price;
    let cart = document.createElement("button");
    cart.setAttribute("id", "btn");
    cart.innerText = "ADD TO BAG";

    // let colormain=document.createElement("div")
    cart.addEventListener("click", function () {
      let el = { image, image1, name, category, discription, price, rating };
      storeincart(el);
    });

    let rating1 = document.createElement("div");
    rating1.setAttribute("id", "rating");
    let icon = document.createElement("i");
    icon.setAttribute("class", "fa-solid fa-star");
    let icon1 = document.createElement("i");
    icon1.setAttribute("class", "fa-solid fa-star");
    let icon2 = document.createElement("i");
    icon2.setAttribute("class", "fa-solid fa-star");
    let icon3 = document.createElement("i");
    icon3.setAttribute("class", "fa-solid fa-star");
    let icon4 = document.createElement("i");
    icon4.setAttribute("class", "fa-solid fa-star-half-stroke");
    let para = document.createElement("span");
    para.innerText = rating;
    rating1.append(icon, icon1, icon2, icon3, icon4, para);
    console.log(category);
    if (category.length == 0) {
      btn.style.visibility = "hidden";
    }

    box.append(btn, img, name1, name2, rating1, price1, cart);
    container.append(box);
  });
};

let storeincart = (el) => {
  // console.log(el)
  cartData.push(el)
  localStorage.setItem("cart", JSON.stringify(cartData));
};
let select = document.querySelector("#sorting");
select.addEventListener("change", function () {
  console.log(select.value);
  function rem(price1) {
    sum1 = "";
    for (i = 0; i < price1.length; i++) {
      if (price1[i] == "$") {
        continue;
      } else if (price1[i] == "(" || price1[i] == ")") {
        continue;
      } else {
        sum1 = sum1 + price1[i];
      }
    }
    return sum1;
  }
  if (select.value === "price l-h") {
    let data1 = data.sort((a, b) => rem(a.price) - rem(b.price));
    append(data1);
  }

  if (select.value === "price h-l") {
    let data2 = data.sort((a, b) => rem(b.price) - rem(a.price));
    append(data2);
  }
  // }
  if (select.value === "best") {
    let data3 = data.sort((a, b) => {
      if (a.category.toLowerCase() > b.category.toLowerCase()) {
        return -1;
      }
      if (a.category.toLowerCase() < b.category.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    });
    append(data3);
  }
  if (select.value === "rate") {
    let data4 = data.sort((a, b) => rem(b.rating) - rem(a.rating));
    append(data4);
  }
});
let total = document.querySelector("#total");
total.innerText = `${data.length} products`;
let home = document.querySelector("#home");
home.addEventListener("click", function () {
  window.location.href = "index.html";
});
append(data);
