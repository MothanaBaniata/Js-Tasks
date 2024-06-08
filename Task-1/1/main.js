// Cash flow ratio

function calculateRatio() {
  let cash = document.getElementById("cash").value;
  let currentLiabilities = document.getElementById("currentLiabilities").value;

  cash = parseFloat(cash);
  currentLiabilities = parseFloat(currentLiabilities);

  let ratio = cash / currentLiabilities;

  document.getElementById("result").innerText = "Cash flow ratio = " + ratio;
}

// Net income
function Netincome() {
  let revenues = document.getElementById("revenues").value;
  let expenses = document.getElementById("expenses").value;

  revenues = parseFloat(revenues);
  expenses = parseFloat(expenses);

  let Netincome = revenues - expenses;

  document.getElementById("Netincome").innerText = "Net income = " + Netincome;
}

// Total assets
function Totalassets() {
  let liabilities = document.getElementById("liabilities").value;
  let equity = document.getElementById("equity").value;

  liabilities = parseFloat(liabilities);
  equity = parseFloat(equity);

  let Totalassets = liabilities + equity;

  document.getElementById("Totalassets").innerText =
    "Total assets = " + Totalassets;
}

// Net income (using profit margin and sales)
function Netincome1() {
  let profit = document.getElementById("profit").value;
  let sales = document.getElementById("sales").value;

  profit = parseFloat(profit);
  sales = parseFloat(sales);

  let Netincome1 = profit * sales;

  document.getElementById("Netincome1").innerText =
    "Net income = " + Netincome1;
}

// Average
function Average() {
    
  let firstnumber = document.getElementById("firstnumber").value;
  let secondnumber = document.getElementById("secondnumber").value;
  let thirdnumber = document.getElementById("thirdnumber").value;

  firstnumber = parseFloat(firstnumber);
  secondnumber = parseFloat(secondnumber);
  thirdnumber = parseFloat(thirdnumber);
  sum = firstnumber + secondnumber + thirdnumber;

  let Average = sum / 3;

  document.getElementById("Average").innerText = "Average = " + Average;
}

// Discount
function Discount() {
    let price = document.getElementById("price").value;
    let discount = document.getElementById("discount").value;
  
    price = parseFloat(price);
    discount = parseFloat(discount/100);
  
    let Discount = price * discount;
    let Thenewprice = price - Discount;
    document.getElementById("Discount").innerText ="The new price = " + Thenewprice +"$";
  }

  // Age limit
  
  function Age() {
      let age = document.getElementById("Age").value;
      
      age = parseFloat(age);
      let greeting;
  
    if (age > 18 && age < 30) {
        greeting = "True";
    } else {
        greeting ="False";
    }
    
    document.getElementById("theresult").innerText ="The result : " + greeting;
   console.log(greeting)
  }

  // Exponential
function Exponential() {
    
    let firstnum = document.getElementById("firstnum").value;
    let secondnum = document.getElementById("secondnum").value;
  
    firstnum = parseFloat(firstnum);
    secondnum = parseFloat(secondnum);
    let Exponential = firstnum ** secondnum;
    
    document.getElementById("Exponential").innerText = "The result = " + Exponential;
  }

    // Remainder
function Remainder() {
    
    let firstnumb = document.getElementById("firstnumb").value;
    let secondnumb = document.getElementById("secondnumb").value;
  
    firstnumb = parseFloat(firstnumb);
    secondnumb = parseFloat(secondnumb);
    let Remainder = firstnumb % secondnumb;
    
    document.getElementById("Remainder").innerText = "The result = " + Remainder;
  }
  
