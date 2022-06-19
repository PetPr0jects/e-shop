// $(document).ready(function(){
//     $(".cartTitle").hover(function() {
//         $(this).css("color", "black");
//     },
//     function() {
//         $(this).css("display", "none");
//     });
// });
const itemPrice = document.querySelectorAll(".itemPrice");
const totalPrice = document.querySelector(".customerTotalPrice");
const plusBtn = document.querySelectorAll(".plusBtn");
plusBtn.forEach((element, index) => element.addEventListener('click', () => {
    const itemCounter = document.querySelectorAll(".itemCounter");
    let itemCount = itemCounter[index].textContent;
    let itemCountInt = parseInt(itemCount)+1;
    itemCounter[index].textContent = itemCountInt;
    totalPrice.textContent = itemCountInt*parseFloat(itemPrice[index].textContent);
}));
const minusBtn = document.querySelectorAll(".minusBtn");
minusBtn.forEach((element, index) => element.addEventListener('click', () => {
    const itemCounter = document.querySelectorAll(".itemCounter");
    let itemCount = itemCounter[index].textContent;
    if(parseInt(itemCount)==1){
        alert("To delete item from your cart press bin");
    }
    if(parseInt(itemCount)!=1){
    let itemCountInt = parseInt(itemCount)-1;
    itemCounter[index].textContent = itemCountInt;
    }
}));
const emptyCart = document.querySelector(".emptyCart");
const items = Array.from(document.querySelectorAll(".item-li"));
const deleteBtn = document.querySelectorAll(".deleteBtn");
deleteBtn.forEach((element, index) => element.addEventListener('click', () => {
    items[index].style.display = 'none';
        const filteredArray = items.filter((el) => el.style.display == 'none');
    if(filteredArray.length == items.length){
        const total = document.querySelector(".total");
        total.style.display = "none";
        emptyCart.style.display = "flex";
    }
}));