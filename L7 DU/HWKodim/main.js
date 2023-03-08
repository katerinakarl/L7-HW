
//Ukol1 - jde to i takto? 

const salary = (wage, hours, days) => {
return Math.round(wage * hours * days)
}	

document.body.innerHTML = "<p>Hrubá mzda:" + salary(100.30, 8, 1) + "Kč</p>";

function taxed(salary, tax){
return Math.round(salary * (1 - (tax/100))+ "Kč")}

document.body.innerHTML = "<p>Čistá mzda:" + taxed(3500, 15) + "Kč</p>";

//Ukol 2

/*const number1 = 4;
const operation = "-";
const number2 = 2;

function calculate (number1, operation, number2){
if (operation === "+"){
	return number1 + number2;
}

if (operation === "-"){
	return number1 - number2;
}

if (operation === "*"){
	return number1 * number2;
}

if (operation === "/"){
	return number1 * number2;
}}