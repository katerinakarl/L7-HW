
/*let cisloPlanu = document.querySelector ("#planNumber");
let vstupUzivatelPLAN = Number(prompt("Zadejte číslo Vašeho vybraného plánu"));
planNumber.innerHTML = vstupUzivatelPLAN
*/

const styleSelectedPlan = (planElm) => {
    const planElm = document.querySelector("#vstupUzivatelPLAN");
    planElm.classList.add("plan-selected");

if (vstupUzivatelPLAN >= 4){
    return false
} else {
    return true
}}

styleSelectedPlan = (2)