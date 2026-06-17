const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
themeBtn.innerHTML = "☀️";
}
else{
themeBtn.innerHTML = "🌙";
}
});

document.getElementById("contactForm").addEventListener("submit", function(e){
e.preventDefault();
alert("Message Sent Successfully!");
});
// OPEN ORDER MODAL
function openOrder(){
    document.getElementById("orderModal").style.display = "flex";
}

// CLOSE ORDER MODAL
function closeOrder(){
    document.getElementById("orderModal").style.display = "none";
}

// ORDER SUBMIT
document.getElementById("orderForm").addEventListener("submit", function(e){
    e.preventDefault();

    let item = document.getElementById("item").value;
    let qty = document.getElementById("qty").value;

    alert("Order Placed!\n\nItem: " + item + "\nQuantity: " + qty);

    closeOrder();
});
