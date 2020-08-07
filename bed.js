function bedCalc(){
    let frac = document.querySelector(".frac").value;
    let dose = document.querySelector(".dose").value;
    let bed1 = document.querySelector("span.bed1");
    let bed3 = document.querySelector("span.bed3");

    bed1.innerHTML = parseInt(frac)*parseFloat(dose)*(1+parseFloat(dose)/10);
    bed3.innerHTML = parseInt(frac)*parseFloat(dose)*(1+parseFloat(dose)/10);

    return parseInt(frac)*parseFloat(dose)*(1+parseFloat(dose)/10);
}

function fracCalc(){
    let bed = bedCalc();
    let bed2 = document.querySelector("span.bed2");
    let dose = document.querySelector(".dose").value;
    let frac = document.querySelector("span.frac");

    bed.innerHTML =parseInt(frac)*parseFloat(dose)*(1+parseFloat(dose)/10);
    frac.innerHTML =bed/(parseFloat(dose)*(1+parseFloat(dose)/10));
    
console.log(bed);
}