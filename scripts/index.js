"use strict";

// footer start

import { footer } from "../components/footer.js";
import { navbar } from "../components/navbar.js";

document.getElementById("footer").innerHTML = footer();

document.addEventListener("DOMContentLoaded", () => {
  const selectDrop = document.getElementById("countries");
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data.forEach((country) => {
        const option = document.createElement("option");
        const link = document.createElement("a");
        link.href = "#";
        link.innerText = country.name.common;
        option.value = country.name.common;
        option.append(link);
        selectDrop.append(option);
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

let i1 = document.getElementById("fl-i-1");
i1.addEventListener("focusin", () => {
  document.querySelector("#fl-i-1 + p").style.display = "block";
  document.querySelector("#fl-i-2 + p").style.display = "none";
});
i1.addEventListener("focusout", () => {
  setTimeout(() => {
    document.querySelector("#fl-i-1 + p").style.display = "none";
  }, 1000);
});
let i2 = document.getElementById("fl-i-2");
i2.addEventListener("focusin", () => {
  document.querySelector("#fl-i-2 + p").style.display = "block";
  document.querySelector("#fl-i-1 + p").style.display = "none";
});
i2.addEventListener("focusout", () => {
  let cb = document.getElementById("fl-i-2-cb");
  let len = i2.value.length;
  if (len === 0 && cb.checked === false) {
    setTimeout(() => {
      document.querySelector("#fl-i-2 + p").style.display = "none";
    }, 2000);
  }
});

// footer end

// ------------------------------------------------------------------------------------------

// navbar start

// part of the navbar 1

document.getElementById("navbar").innerHTML = navbar();

document.getElementById("ec-submit").addEventListener("click", function () {
  let email = document.getElementById("nb-email");
  if (email.value.length === 0) {
    document.getElementById("nb-em-warn").style.display = "block";
  }
});

document.getElementById("nb-pop-close").addEventListener("click", function () {
  document.getElementById("nb-e-content").style.opacity = "0";
  document.getElementById("nb-e-content").style.display = "none";
});
document
  .getElementById("nb-em-hover")
  .addEventListener("mouseover", function () {
    document.getElementById("nb-e-content").style.opacity = "1";
    document.getElementById("nb-e-content").style.display = "block";
  });
document
  .getElementById("nb-em-hover")
  .addEventListener("mouseleave", function () {
    setTimeout(function () {
      document
        .getElementById("nb-e-content")
        .addEventListener("mouseover", function () {
          document.getElementById("nb-e-content").style.display = "block";
        });
      document
        .getElementById("nb-e-content")
        .addEventListener("mouseleave", function () {
          document.getElementById("nb-e-content").style.display = "none";
        });
    }, 1000);

    document.getElementById("nb-e-content").style.display = "none";
  });

// end part of the navbar 1

// part of the navbar 2

document.getElementById("nb-m3-close").addEventListener("click", function () {
  document.getElementById("e-content1").style.opacity = "0";
  document.getElementById("e-content1").style.display = "none";
});

document
  .getElementById("nb-join-hover")
  .addEventListener("mouseover", function () {
    document.getElementById("e-content1").style.opacity = "1";
    document.getElementById("e-content1").style.display = "block";
  });
document
  .getElementById("nb-join-hover")
  .addEventListener("mouseleave", function () {
    setTimeout(function () {
      document
        .getElementById("e-content1")
        .addEventListener("mouseover", function () {
          document.getElementById("e-content1").style.display = "block";
        });
      document
        .getElementById("e-content1")
        .addEventListener("mouseleave", function () {
          document.getElementById("e-content1").style.display = "none";
        });
    }, 1000);
    document.getElementById("e-content1").style.display = "none";
  });

document
  .getElementById("nb-join-email-check")
  .addEventListener("click", function () {
    let email = document.getElementById("nb-join-email");
    if (email.value.length === 0) {
      document.getElementById("nb-join-em-warn").style.display = "block";
    }
  });

// end part of the navbar 2

// part of the navbar 3

document
  .getElementById("nb-register-close")
  .addEventListener("click", function () {
    document.getElementById("nb-register").style.opacity = "0";
    document.getElementById("nb-register").style.display = "none";
  });

document
  .getElementById("nb-register-hover")
  .addEventListener("mouseover", function () {
    document.getElementById("nb-register").style.opacity = "1";
    document.getElementById("nb-register").style.display = "block";
  });

document
  .getElementById("nb-register-hover")
  .addEventListener("mouseleave", function () {
    setTimeout(function () {
      document
        .getElementById("nb-register")
        .addEventListener("mouseover", function () {
          document.getElementById("nb-register").style.display = "block";
        });
      document
        .getElementById("nb-register")
        .addEventListener("mouseleave", function () {
          document.getElementById("nb-register").style.display = "none";
        });
    }, 1000);
    document.getElementById("nb-register").style.display = "none";
  });

// part of the navbar 3

// login changes
document
  .getElementById("nb-new-acc-reg")
  .addEventListener("click", function () {
    document.getElementById("nb-new-reg").style.display = "none";
    document.getElementById("nb-reg").style.display = "none";
    document.getElementById("nb-new-reg1").style.display = "block";
    document.getElementById("nb-reg1").style.display = "block";
  });

document
  .getElementById("nb-new-acc-reg1")
  .addEventListener("click", function () {
    document.getElementById("nb-new-reg").style.display = "block";
    document.getElementById("nb-reg").style.display = "block";
    document.getElementById("nb-new-reg1").style.display = "none";
    document.getElementById("nb-reg1").style.display = "none";
  });
// navbar end

let userData = JSON.parse(localStorage.getItem("userData"));

document
  .getElementById("nb-reg-login-check")
  .addEventListener("click", function () {
    let email = document.getElementById("nb-reg-login-email").value;
    let password = document.getElementById("nb-reg-login-pass").value;
    console.log(userData.email, email);
    console.log(userData.password, password);
    console.log(userData.email === email && userData.password === password);
    if (userData.email === email && userData.password === password) {
      alert("Login Successful");
      document.getElementById("nb-user-data").innerText = userData.email;
      document.getElementById("nb-reg").style.display = "none";
      document.getElementById("nb-reg1").style.display = "none";
      document.getElementById("nb-reg-tc").style.display = "none";
      document.getElementById("nb-new-reg").style.display = "none";
      document.getElementById("nb-new-reg1").style.display = "none";
      document.getElementById("nb-reg-login-user").style.display = "block";
    } else {
      alert("Invalid Email or Password");
    }
  });
document
  .getElementById("nb-reg-login-check1")
  .addEventListener("click", function () {
    let email = document.getElementById("nb-reg-login-email1");
    let password = document.getElementById("nb-reg-login-pass1");
    let cb = document.getElementById("nb-reg-cb-check").checked;

    if (cb) {
      let data = {
        email: email.value,
        password: password.value,
      };
      localStorage.setItem("userData", JSON.stringify(data));
      alert("Registration Successful");
      document.getElementById("nb-new-reg").style.display = "block";
      document.getElementById("nb-reg").style.display = "block";
      document.getElementById("nb-new-reg1").style.display = "none";
      document.getElementById("nb-reg1").style.display = "none";
    } else {
      alert("Please agree to the terms and conditions");
    }
  });
