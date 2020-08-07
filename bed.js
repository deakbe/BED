function bedCalc(){
    let frac = document.querySelector(".setFrac").value;
    let dose = document.querySelector(".setDose").value;
    let bed1 = document.querySelector("span.bed1");

    bed1.innerHTML = parseInt(frac)*parseFloat(dose)*(1+parseFloat(dose)/10);

    return parseInt(frac)*parseFloat(dose)*(1+parseFloat(dose)/10);
}

function fracCalc(){
    let dose = document.querySelector(".dose").value;
    let bed2 = document.querySelector("span.bed2");
    let frac = document.querySelector("span.frac");

    bed2.innerHTML = bedCalc();
    frac.innerHTML = bedCalc()/(parseFloat(dose)*(1+parseFloat(dose)/10));

    return bedCalc()/(parseFloat(dose)*(1+parseFloat(dose)/10));
}

function doseCalc() {
    let frac = document.querySelector(".frac1").value;
    let dose = document.querySelector("span.dose1");
    let bed3 = document.querySelector("span.bed3");

    bed3.innerHTML = bedCalc();
    dose.innerHTML = (Math.sqrt(parseFloat(frac)*parseFloat(frac)+4*parseFloat(frac)/10*bedCalc())-parseFloat(frac))/(2*parseFloat(frac)/10);;

    return (Math.sqrt(parseFloat(frac)*parseFloat(frac)+4*parseFloat(frac)/10*bedCalc())-parseFloat(frac))/(2*parseFloat(frac)/10);
}