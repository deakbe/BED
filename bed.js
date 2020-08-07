function bedCalc(){
    let frac = document.querySelector(".frac").value;
    let dose = document.querySelector(".dose").value;
    let bed =document.querySelector("span.bed");
    console.log(parseInt(frac)+parseInt(dose));

    bed.innerHTML =parseInt(frac)*parseFloat(dose)*(1+parseFloat(dose)/10);
}