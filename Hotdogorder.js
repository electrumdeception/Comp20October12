// JavaScript Document


function takeOrder(){
	var hotdog = hotDogCost();
	var soda = sodaCost();
	var fries = fryCost();
	var totalPrice = subtotal(soda, hotdog, fries);
	addendum("finalTotal", "Total $".concat(totalPrice));
}

//Ask the user for the quantity of hotdogs, fries and sodas they want.
function fryCost()
{
	var frieCount;
	frieCount = prompt("how many fries", 2);
	var fryCost = 2 * frieCount;
	var stringToAdd = frieCount.concat(". Total is $",fryCost);
	addendum("fryCount", stringToAdd);
	return fryCost;
}
function hotDogCost()
{
	var dogCount;
	dogCount = prompt("how many hot dogs", 2);
	//addendum("dogCount", dogCount)
	var dogCost = 3.25 * dogCount;
	var stringToAdd = dogCount.concat(". Total is $",dogCost);
	addendum("dogCount", stringToAdd);
	return dogCost;
}
function sodaCost()
{
	var sodaCount;
	sodaCount = prompt("how many sodas", 2);
	//addendum("sodaCount", sodaCount)
	var sodaCost = 1.5 * sodaCount;
	var stringToAdd = sodaCount.concat(". Total is $",sodaCost);
	addendum("sodaCount", stringToAdd);
	return sodaCost;
}

//    Calculate the subtotal for the order.
//    Implement Joe’s special - 10% discount if the order (before tax) is at least $20
//    Add 6.25% Massachusetts meals tax to all orders
function subtotal(soda,dog,fry)
{
	var cost = soda+dog+fry;
	if (cost >20){
		addendum("sale", "You get a 10% discount");
		cost = cost*.9;
	}
	addendum("subtotal", "Subtotal is $".concat(cost.toFixed(2)));
	var tax = cost * 0.0625;
	addendum("tax","MA tax: $".concat(tax.toFixed(2)));
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