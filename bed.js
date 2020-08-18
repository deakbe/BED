let alphaData = [{
    "id" : "aB1","value" : "10"
},{
    "id" : "aB2","value" : "3.3"
},{
    "id" : "aB2","value" : "3.3"
},{
    "id" : "aB3","value" : "2.1"
},{
    "id" : "aB4","value" : "3"
},{
    "id" : "aB5","value" : "3"
},{
    "id" : "aB6","value" : "4"
},{
    "id" : "aB7","value" : "3"
},{
    "id" : "aB8","value" : "2"
},{
    "id" : "aB9","value" : "4.3"
},{
    "id" : "aB10","value" : "12.3"
},{
    "id" : "aB11", "value" : "1.7"
},{
    "id" : "aB12", "value" : "3"}];

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

let createAlphaInput = (parent, i) => {
    let div = document.createElement("div");
    let input = document.createElement("input");
    let td = document.createElement("td");

    input.setAttribute("type", "radio");
    input.setAttribute("id", alphaData[i].id);
    input.setAttribute("value", alphaData[i].value);
    input.setAttribute("name", "DOM");

    input.addEventListener("click", function() {

        let value = document.querySelector("#"+alphaData[i].id).value;
        document.querySelector(".storage").value = parseFloat(value);
        return value;
    });

    div.appendChild(input);
    td.appendChild(div);
    parent.appendChild(td);
}

let table = document.querySelector(".dom");
for(let i = 0; i < alphaData.length; i++) {
    let tr = document.createElement("tr");

    for(let data of Object.values(alphaData[i])) {
        let td = document.createElement("td");
        td.innerHTML = data;
        tr.appendChild(td);
    }

    createAlphaInput(tr,i);    
    table.appendChild(tr);
}