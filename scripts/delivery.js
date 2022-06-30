let read = (a)=>{
    return document.getElementById(a).value;
}
 let shippingAddress = ()=>{
   addressDetails = {
       name:read("fname") +" "+read("lname"),
       street :read("sname"),
       HouseNumber :read("hnumber"),
       postalcode : read("pcode"),
       city : read("city"),
       state : read("state"),
       pnumber : read("pnumber"),
       hnumber : read("hnumber")
   }
   console.log(addressDetails)
   localStorage.setItem("address",JSON.stringify(addressDetails))
 }

 let billAmount = JSON.parse(localStorage.getItem("bill"));
 document.getElementById("estimatedBill").innerText = `₹ ${billAmount[1]}`
 document.getElementById("subTotal").innerText = `₹ ${billAmount[0]}`
 document.getElementById("noOfItems").innerText = `There are (${billAmount[2]}) items in your shoping cart`