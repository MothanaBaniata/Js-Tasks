// Task 1
let x = document.getElementById("header");
x.textContent = "Welcome to DOM Manipulation!";

// Task 2
let y = document.getElementsByClassName("item");
for (let i = 0; i < y.length; i++) {
    y[i].textContent = "CLASS iTEM";
}

// Task 3
let z = document.getElementsByTagName("p");
for (let i = 0; i < z.length; i++) {
    z[i].textContent = "Paragraph Element";
}

// Task 4
let highlight = document.querySelector(".highlight");

highlight.textContent = "First Highlighted Item";

// Task 5

let listItem = document.querySelectorAll("li");
for (let i = 0; i < listItem.length; i++) {
    listItem[i].textContent = "List item";
}

// Task 6

let footer = document.querySelector("#footer");
footer.textContent = "Footer Updated";

// Task 7

let box = document.querySelectorAll(".box");
for (let i = 0; i < box.length; i++) {
    box[i].textContent = "Box Item";
}

// Task 8

let complex = document.querySelector(".container p");
complex.textContent = "complex selector";

// Task 9

let admin = document.querySelector('[data-role="admin"]');
admin.textContent = "Admin Role";

// Task 10

let nested = document.getElementsByTagName('span');
for (let i = 0; i < nested.length; i++) {
    nested[i].textContent = 'Span Elemnt';
}
