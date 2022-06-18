// $(document).ready(function(){
//     $(".cartTitle").hover(function() {
//         $(this).css("color", "black");
//     },
//     function() {
//         $(this).css("display", "none");
//     });
// });

const plusBtn = document.querySelectorAll(".plusBtn");
plusBtn.forEach((element, index) => element.addEventListener('click', () => {
    const itemCounter = document.querySelectorAll(".itemCounter");
    let itemCount = itemCounter[index].textContent;
    let itemCountInt = parseInt(itemCount)+1;
    itemCounter[index].textContent = itemCountInt;
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
const items = document.querySelectorAll(".item");
const deleteBtn = document.querySelectorAll(".deleteBtn");
deleteBtn.forEach((element, index) => element.addEventListener('click', () => {
    items[index].style.display = 'none';
}));