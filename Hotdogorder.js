// JavaScript Document


function takeOrder(){
	var hotdog = hotDogCost();
	var soda = sodaCost();
	var fries = fryCost();
	var totalPrice = subtotal(soda, hotdog, fries);
	addendum("AmounttoCharge", totalPrice);
}

//Ask the user for the quantity of hotdogs, fries and sodas they want.
function fryCost()
{
	var frieCount;
	frieCount = prompt("how many fries", 2);
	addendum("fryCount", frieCount)
	var fryCost = 2 * frieCount;
	return fryCost;
}
function hotDogCost()
{
	var dogCount;
	dogCount = prompt("how many fries", 2);
	addendum("dogCount", dogCount)
	var dogCost = 3.25 * dogCount;
	return dogCost;
}
function sodaCost()
{
	var sodaCount;
	sodaCount = prompt("how many fries", 2);
	addendum("sodaCount", sodaCount)
	var sodaCost = 1.5 * sodaCount;
	return sodaCost;
}

//    Calculate the subtotal for the order.
//    Implement Joe’s special - 10% discount if the order (before tax) is at least $20
//    Add 6.25% Massachusetts meals tax to all orders
function subtotal(soda,dog,fry)
{
	var cost = soda+dog+fry;
	if (cost >20){
		cost = cost*.9;
	}
	cost=cost*1.0625;
	var roundedCost = cost.toFixed(2);
return roundedCost;
	
}

//    Display all order information on the page including:  Items ordered, quantities, subtotal, discount if applicable, tax and total.

function addendum(idIs, whichString)
{
	var newText = document.createTextNode(whichString);
	var element = document.getElementById(idIs);
	element.appendChild(newText);
}