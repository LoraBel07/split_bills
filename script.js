function changeImage(anything) {
    document.getElementById('slider').src = anything;
}
function ToggleMenu() {
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active'); 
    navigation.classList.toggle('active'); 
}

// for i_food.html, i_taxi.html _ _ _ _ _ __ _ _ _ _ _ _ _ _ _ _ _ _ _
const button = document.querySelector("#btn");
button.addEventListener("click", calculateAmount);

const buttonTip = document.querySelector("#addTip");
buttonTip.addEventListener("click", showTip);

function showTip(e) {
    e.preventDefault();
    tip.style.display ="block";
}

let confett = document.querySelector("#my-canvas");

let btnClose = document.querySelector(".close");

function calculateAmount(e) {
    e.preventDefault();
    const bill = document.querySelector("#bill").value;
    const people = document.querySelector("#people").value;
    const tip = document.querySelector("#tip").value;

    if(bill==="" || people==="" || people < 1) {
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Please enter your information!'
        });
    }

    // how much for 1 person _ _ _
    let amountPerPerson = bill/people;    

    // how much tips for 1 person _ _ _
    let tipPerPerson = (bill*tip)/people;    

    // how much all money for 1 person _ _ _
    let totalSum = amountPerPerson + tipPerPerson;    

    // toFixed() _ _ _
    amountPerPerson = amountPerPerson.toFixed(2);
    tipPerPerson = tipPerPerson.toFixed(2);
    totalSum = totalSum.toFixed(2);

    // show in app _ _ _ 
    document.querySelector("#dividedBill").textContent = amountPerPerson;
    document.querySelector("#dividedTip").textContent = tipPerPerson;
    document.querySelector("#billAndTip").textContent = totalSum;

    confett.classList.add('active');
    
    btnClose.classList.add('active');

}



btnClose.addEventListener("click", ()=>{
    document.location.reload();
});


const confettiSettings = { target: 'my-canvas' };
const confetti = new ConfettiGenerator(confettiSettings);
confetti.render();
