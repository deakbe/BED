let alphaData = [{
    "id" : "Gyorsan növő-tumor","value" : "10"
},{
    "id" : "gerinc","value" : "3.3"
},{
    "id" : "agy","value" : "3.3"
},{
    "id" : "rectum","value" : "2.1"
},{
    "id" : "hólyag","value" : "3"
},{
    "id" : "Lassan növő-tumor","value" : "4"
},{
    "id" : "Normál szövet késői sugárhatás","value" : "3"
},{
    "id" : "Kp-i idegrsz késői sugárhatás","value" : "2"
},{
    "id" : "Késő mellékhatás","value" : "4.3"
},{
    "id" : "Korai mellékhatás emlőnél","value" : "12.3"
},{
    "id" : "Késői mellékhatás emlőnél", "value" : "1.7"
},{
    "id" : "Egésszséges szövet", "value" : "3"}];

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