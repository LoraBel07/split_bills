// for i_gift.html _ _ _ _ _ __ _ _ _ _ _ _ _ _ _ _ _ _ _
const buttonG = document.querySelector("#btnG");
buttonG.addEventListener("click", calculateAmountG);

let confett = document.querySelector("#my-canvas");

let btnClose = document.querySelector(".close");

function calculateAmountG(e) {
    e.preventDefault();
    const billG = document.querySelector("#billG").value;
    const billAddG = document.querySelector("#billAddG").value;
    const peopleG = document.querySelector("#peopleG").value;

    if(billG==="" || peopleG==="" || peopleG < 1) {
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Please enter your information!'
        });
    }
    let sumBillG = +billG + +billAddG;
    
    let totalSumG = sumBillG/peopleG;
    
    totalSumG = totalSumG.toFixed(2);

    document.querySelector("#billAndTipG").textContent = totalSumG;

    confett.classList.add('active');
    
    btnClose.classList.add('active');

}

btnClose.addEventListener("click", ()=>{
    document.location.reload();
});


const confettiSettings = { target: 'my-canvas' };
const confetti = new ConfettiGenerator(confettiSettings);
confetti.render();



