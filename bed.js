let iD = ["aB1", "aB2", "aB3", "aB4", "aB5", "aB6", "aB7", "aB8", "aB9", "aB10", "aB11", "aB12"];
let alphabeta = ["10", "3.3", "2.1", "3", "3", "4", "3", "2", "4.3", "12.3", "1.7", "3"];

let alphaData = [{
    "id" : "aB1",
    "value" : "10"
},{
    "id" : "aB2",
    "value" : "3.3"
},{
    "id" : "aB2",
    "value" : "2.1"
},{
    "id" : "aB3",
    "value" : "3"
},{
    "id" : "aB4",
    "value" : "3"
},{
    "id" : "aB5",
    "value" : "4"
},{
    "id" : "aB6",
    "value" : "3"
},{
    "id" : "aB7",
    "value" : "2"
},{
    "id" : "aB8",
    "value" : "4.3"
},{
    "id" : "aB9",
    "value" : "12.3"
},{
    "id" : "aB10",
    "value" : "1.7"
},{
    "id" : "aB11",
    "value" : "3"
},{
    "id" : "aB12",
    "value" : "10"
}];


/*function alphaBeta(string) {
    let value = 0;
    
    for(let i = 0; i <= iD.length; i++){
        if(string == iD[i]){
            value = document.querySelector("#"+iD[i]).value;
            break;
        }
    }

    document.querySelector(".storage").value = parseFloat(value);

    return value;
}*/

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

let table = document.querySelector(".dom");
for(let i = 0; i < alphaData.length; i++) {
    let tr = document.createElement("tr");

    for(let data of Object.values(alphaData[i])) {
        let td = document.createElement("td");
        td.innerHTML = data;
        tr.appendChild(td);
    }
       
table.appendChild(tr);
}

//Működő táblázat gombok nélkül
/*let table = document.querySelector(".dom");
for(let i = 0; i < alphaData.length; i++) {
    let tr = document.createElement("tr");

    for(let data of Object.values(alphaData[i])) {
        let td = document.createElement("td");
        td.innerHTML = data;
        tr.appendChild(td);
    }
       
table.appendChild(tr);
}*/

/*let table = document.querySelector(".dom1");
for(let i = 0; i < iD.length;i++) {
    let tr = document.createElement("tr");

    for(let j = 0; j < 2;j++) {
        
        let td = document.createElement("td");
        let input = document.createElement("input");
        let form = document.createElement("form");
        
        td.innerHTML = iD[i];
        form.innerHTML = input;
        td.innerHTML = form;
            
        input.setAttribute("type", "radio");
        input.setAttribute("id", iD[i]);
        input.setAttribute("value", alphabeta[i]);
        input.setAttribute("name", "DOM")
            
        input.addEventListener("click", function() {
            let value = 0;
            let string = this.id;
            value = document.querySelector("#"+this.id).value;
            document.querySelector(".storage").value = parseFloat(value);
        
            return value;
        });
        tr.appendChild(td);

    }

       
table.appendChild(tr);
}*/

/*let x = document.querySelector(".dom");
for(let i = 0; i < iD.length; i++) {
    let label = document.createElement("label");
    let input = document.createElement("input");
    let br =document.createElement("br")
    label.innerHTML = iD[i];
    input.setAttribute("type", "radio");
    input.setAttribute("id", iD[i]);
    input.setAttribute("value", alphabeta[i]);
    input.setAttribute("name", "DOM")
    let string = this.id;
    input.addEventListener("click", function() {
        let value = 0;
        value = document.querySelector("#"+this.id).value;
        document.querySelector(".storage").value = parseFloat(value);
    
        return value;
    });
    x.appendChild(label);
    x.appendChild(input);
    x.appendChild(br);
}*/

 
