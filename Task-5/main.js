let x = document.getElementById("btn");
x.addEventListener("click", y);
function y() {
  alert("Button clicked!");
}

let x1 = document.getElementById("btn1");
x1.addEventListener("click", y1);
function y1() {
  document.getElementById("p1").innerText = "The new text";
}

let x2 = document.getElementById("color");
x2.style.cssText =
  "background-color: rgb(255, 89, 0); width: 100px; height: 100px;";
x2.addEventListener("dblclick", y2);
function y2() {
  x2.style.backgroundColor = "green";
}

let x3 = document.getElementById("text");
x3.style.cssText = "width: 100px; margin-top: 20px; background: lightblue;";
x3.addEventListener("mouseenter", y3);
x3.addEventListener("mouseleave", y4);
function y3() {
  x3.innerHTML = "The new text";
}
function y4() {
  x3.innerHTML = "The old text";
}

let x4 = document.getElementById("form");
x4.addEventListener("submit", y5);
function y5() {
  alert("Form not submitted");
}

let x5 = document.getElementById("input");
x5.style.cssText = "margin-top: 10px; border:  solid green; outline:none ";
x5.addEventListener("focus", y6);
x5.addEventListener("blur", y7);
function y6() {
  x5.style.borderColor = "red";
}
function y7() {
  x5.style.borderColor = "green";
}

let x6 = document.getElementById("input1");
x6.style.marginTop = "10px";
x6.addEventListener("keydown", y8);
function y8() {
  alert("the pressed kay");
}

let x7 = document.getElementById("color1");
x7.addEventListener("mouseover", y9);
x7.addEventListener("mouseout", y9);
function y9() {
  x7.classList.toggle("x-8");
}

document.getElementById("myForm").addEventListener("submit", y10);
function y10() {
  event.preventDefault();

  let firstname = document.getElementById("firstname").value.trim();
  let lastname = document.getElementById("lastname").value.trim();
  let phonenumber = document.getElementById("phonenumber").value.trim();

  if (firstname === "") {
    alert("please input the first name");
    return;
  }

  if (lastname === "") {
    alert("please input the last name");
    return;
  }

  if (phonenumber === "") {
    alert("please input the phone number");
    return;
  }

  this.submit();
}

let x8 = document.getElementById("image");
let x9 = document.getElementById("changeimage");
x9.addEventListener("click", y10);
function y10() {
  x8.src =
    "https://th.bing.com/th/id/OIP.T8qNo-gl55YMG5UC0XLMTgHaE7?rs=1&pid=ImgDetMain";
}

let x10 = document.getElementById("password");
let x11 = document.getElementById("checkbox");

x11.addEventListener("change", y11);
function y11() {
  if (x10.type === "password") {
    x10.type = "text";
  } else {
    x10.type = "password";
  }
}

let x12 = document.getElementById("color4");
let x13 = document.getElementById("color3");

x12.addEventListener("input", y12);
function y12() {
  x13.style.backgroundColor = x12.value;
}

document.addEventListener("DOMContentLoaded", function () {
  let images = [
    "https://th.bing.com/th/id/R.705f851401143c34dd903ad6e39cb94f?rik=3n1e7Nv7nFPifA&pid=ImgRaw&r=0",
    "https://www.verywellmind.com/thmb/PMoqVsT1b2V4EQMpDFZRczgil8M=/3645x2734/filters:fill(ABEAC3,1)/460711949-56a793d25f9b58b7d0ebda5c.jpg",
    "https://www.medicallyspeaking.in/wp-content/uploads/2022/07/Human-Brain-Memories-Neurons.jpg",
  ];
  let image = document.getElementById("img1");
  let previous = document.getElementById("previous");
  let next = document.getElementById("next");

  let x = 0;
  function change() {
    image.src = images[x];
  }

  change(x);

  previous.addEventListener("click", function () {
    x = x-1
    change(x);
  });

  next.addEventListener("click", function () {
    x = x+1
    change(x);
  });
});


document.addEventListener("DOMContentLoaded", function () {
  let z = [
    "one",
    "two",
    "three"
  ];

  let v = document.getElementById("tex");
  let c = document.getElementById("dynamic");
  c.addEventListener('click', function(){
    let random = Math.floor(Math.random() * z.length);
    v.textContent = z[random];

  })
})

let k = document.getElementById("menu");

    function showk(event) {
        event.preventDefault();
        k.style.display = "block";
    }

    function item(option) {
        alert(option);
        k.style.display = "none";
    }

    let divMenu = document.getElementById("divMenu");
    divMenu.addEventListener("contextmenu", showk);


    window.addEventListener('resize', function(event) {
      console.log('Window width:', window.innerWidth);
      console.log('Window height:', window.innerHeight);
  });


  let btnUp = document.getElementById("btnUp");

    window.addEventListener("scroll", function() {
        btnUp.style.display = (window.scrollY > 20) ? "block" : "none";
    });

    btnUp.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });


    let link = document.getElementById("link");

    link.addEventListener("click", function(event) {
        event.preventDefault();
        alert("Prevent Default Link Behavior");
    });


    let div5 = document.querySelector('.div5');
    let tooltip = document.querySelector('.tooltip');

    div5.addEventListener('mouseover', () => {
        tooltip.style.visibility = 'visible';
    });

    div5.addEventListener('mouseleave', () => {
        tooltip.style.visibility = 'hidden';
    });