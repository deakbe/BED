let iD = ["aB1", "aB2", "aB3", "aB4", "aB5", "aB6", "aB7", "aB8", "aB9", "aB10", "aB11", "aB12"];

function alphaBeta(string) {
    let value = 0;
    
    for(let i = 0; i <= iD.length; i++){
        if(string == iD[i]){
            value = document.querySelector("#"+iD[i]).value;
            break;
        }
    }

    document.querySelector(".storage").value = parseFloat(value);

    return value;
}
console.log();

function bedCalc(){
    let alpha = document.querySelector(".storage").value;
    let frac = document.querySelector(".setFrac").value;
    let dose = document.querySelector(".setDose").value;
    let bed1 = document.querySelector("span.bed1");

    bed1.innerHTML = parseInt(frac)*parseFloat(dose)*(1+parseFloat(dose)/alpha);

    return parseInt(frac)*parseFloat(dose)*(1+parseFloat(dose)/alpha);
}

function fracCalc(){
    let alpha = document.querySelector(".storage").value;
    let dose = document.querySelector(".dose").value;
    let bed2 = document.querySelector("span.bed2");
    let frac = document.querySelector("span.frac");

    bed2.innerHTML = bedCalc();
    frac.innerHTML = bedCalc()/(parseFloat(dose)*(1+parseFloat(dose)/parseFloat(alpha)));

    return bedCalc()/(parseFloat(dose)*(1+parseFloat(dose)/parseFloat(alpha)));
}

function doseCalc() {
    let alpha = document.querySelector(".storage").value;
    let frac = document.querySelector(".frac1").value;
    let dose = document.querySelector("span.dose1");
    let bed3 = document.querySelector("span.bed3");

    bed3.innerHTML = bedCalc();
    dose.innerHTML = (Math.sqrt(parseFloat(frac)*parseFloat(frac)+4*parseFloat(frac)/alpha*bedCalc())-parseFloat(frac))/(2*parseFloat(frac)/alpha);;

    return (Math.sqrt(parseFloat(frac)*parseFloat(frac)+4*parseFloat(frac)/alpha*bedCalc())-parseFloat(frac))/(2*parseFloat(frac)/alpha);
}
