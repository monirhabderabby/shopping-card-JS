function getQuantity(updateID,isIncreasing,priceID,productPrice) {
    const inputNumber = document.getElementById(updateID);
    const inputValue = inputNumber.value;

    
    const priceText = document.getElementById(priceID);
  if (isIncreasing) {
    inputNumber.value = parseInt(inputValue) + 1;
  }
  else if(isIncreasing == false){
      if(inputNumber.value >0)
    inputNumber.value = parseInt(inputValue) - 1;
  }
  // price calculation
  const price = inputNumber.value* productPrice;
  priceText.innerText = price;

//   subtotal price calculation
const phonePrice = document.getElementById('phone-price').innerText;
const casePrice = document.getElementById('case-price').innerText;
const subTotal = parseFloat(phonePrice)+ parseFloat(casePrice);
document.getElementById('sub-total').innerText = parseFloat(subTotal);

// Tax calculation
const tax = parseFloat(subTotal)*0.15;
document.getElementById('tax-total').innerText = Math.round(parseFloat(tax));
// Total Bill
// const totalBill = subTotal - tax ;
document.getElementById('bill').innerText = subTotal - tax;


}
function getPhoneOrCase(input,value,priceSection,price){
  document.getElementById("phone-plus").addEventListener("click", function () {
    getQuantity(input,value,priceSection,price);
});
}
getPhoneOrCase("phone-input", true, "phone-price", 1219)

document.getElementById("phone-minus").addEventListener("click", function () {
  getQuantity("phone-input",false,"phone-price", 1219);
});
document.getElementById("case-plus").addEventListener("click", function () {
  getQuantity("case-input", true,"case-price", 59);
});
document.getElementById("case-minus").addEventListener("click", function () {
  getQuantity("case-input", false,"case-price", 59);
});
