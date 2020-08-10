let iD = ["aB1", "aB2", "aB3", "aB4", "aB5", "aB6", "aB7", "aB8", "aB9", "aB10", "aB11", "aB12"];

function alphaBeta(string) {
    let value = 0;
    let alpha = document.querySelector("span.alphaBeta");
    
    for(let i = 0; i <= iD.length; i++){
        if(string == iD[i]){
            value = document.querySelector("#"+iD[i]).value;
           
            break;
        }
    }

    alpha = value;
    console.log(alpha);

    return value;
}
console.log();

function bedCalc(){
    let alpha = document.querySelector("span.alphaBeta");
    console.log(alpha);
    let frac = document.querySelector(".setFrac").value;
    let dose = document.querySelector(".setDose").value;
    let bed1 = document.querySelector("span.bed1");

    bed1.innerHTML = parseInt(frac)*parseFloat(dose)*(1+parseFloat(dose)/parseFloat(alpha));

    return parseInt(frac)*parseFloat(dose)*(1+parseFloat(dose)/parseFloat(alpha));
}

function fracCalc(){
    let dose = document.querySelector(".dose");
    let bed2 = document.querySelector("span.bed2");
    let frac = document.querySelector("span.frac");

    bed2.innerHTML = bedCalc();
    frac.innerHTML = bedCalc()/(parseFloat(dose)*(1+parseFloat(dose)/alphaBeta(iD)));

    return bedCalc()/(parseFloat(dose)*(1+parseFloat(dose)/alphaBeta(iD)));
}

function doseCalc() {
    let frac = document.querySelector(".frac1").value;
    let dose = document.querySelector("span.dose1");
    let bed3 = document.querySelector("span.bed3");

    bed3.innerHTML = bedCalc();
    dose.innerHTML = (Math.sqrt(parseFloat(frac)*parseFloat(frac)+4*parseFloat(frac)/alphaBeta(iD)*bedCalc())-parseFloat(frac))/(2*parseFloat(frac)/alphaBeta(iD));;

    return (Math.sqrt(parseFloat(frac)*parseFloat(frac)+4*parseFloat(frac)/alphaBeta(iD)*bedCalc())-parseFloat(frac))/(2*parseFloat(frac)/alphaBeta(iD));
}
