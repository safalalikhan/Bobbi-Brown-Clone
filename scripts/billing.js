let read = (a)=>{
    return document.getElementById(a).value;
}
let create = (b)=>{
    return document.createElement(b)
}
 let shippingAddress = ()=>{
   addressDetails = {
       name:read("fname") +" "+read("lname"),
       street :read("sname"),
       HouseNumber :read("hnumber"),
       postalConde : read("pcode"),
       city : read("city"),
       state : read("state"),
       pnumber : read("pnumber"),
       hnumber : read("hnumber")
   }
   console.log(addressDetails)
   localStorage.setItem("addres",JSON.stringify(addressDetails))
 }

 let billAmount = JSON.parse(localStorage.getItem("bill"));
 document.getElementById("estimatedBill").innerText = `₹ ${billAmount[1]}`
 document.getElementById("subTotal").innerText = `₹ ${billAmount[0]}`
 document.getElementById("noOfItems").innerText = `There are (${billAmount[2]}) items in your shoping cart`






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


let getAddress = JSON.parse(localStorage.getItem("address"))
console.log(getAddress)
 let addressbox = create("div")
 
let name =create("p");
let number = create("p")
let street = create("p")
let hnumber = create("p");
let pincode = create("p");
let city = create("p");
name.innerText = getAddress.name;
number.innerText = getAddress.pnumber
street.innerText =getAddress.street;
pincode.innerText = getAddress.postalcode;
 city.innerText = getAddress.city+", " + getAddress.state;
console.log(name,number,street,pincode,city)
console.log(pincode)
addressbox.setAttribute("class","addressdetails")
addressbox.append(name,number,street,pincode,city)
console.log(addressbox,"djwidj")
document.querySelector("#address").append(addressbox)
let deliveryaddress =create("div")
let name1 =create("p");
let number1 = create("p")
let street1 = create("p")
let hnumber1 = create("p");
let pincode1 = create("p");
let city1 = create("p");
deliveryaddress.setAttribute("class","addressdetails")
name1.innerText = getAddress.name;
number1.innerText = getAddress.pnumber
street1.innerText =getAddress.street;
pincode1.innerText = getAddress.postalcode;
 city1.innerText = getAddress.city+", " + getAddress.state;
deliveryaddress.append(name1,number1,street1,pincode1,city1)
document.querySelector("#address1").append(deliveryaddress)