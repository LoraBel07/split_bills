// for i_travel.html _ _ _ _ _ __ _ _ _ _ _ _ _ _ _ _ _ _ _
const button = document.querySelector("#btn");
button.addEventListener("click", calculateAmount);

let confett = document.querySelector("#my-canvas");

let btnClose = document.querySelector(".close");

function calculateAmount(e) {
    e.preventDefault();
    const bill = document.querySelector("#bill").value;
    const insur = document.querySelector("#insur").value;
    const tips = document.querySelector("#tips").value;
    const people = document.querySelector("#people").value;

    if(bill==="" || people==="" || people < 1) {
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Please enter your information!'
        })
    }
    let sumBill = +bill + +insur + +tips;    

    console.log(sumBill);
    let totalSum = sumBill/people;

    
    totalSum = totalSum.toFixed(2);

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


