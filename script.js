/**
 * Created by siqi on 9/21/16.
 */

/* Step 1
 * Create objects to represent individual shoe products with the following attributes:
 * name, price, maker
 * if price is a range, use the upper end of that range
 * and add them to the "productList" array using array.push()
 */

var product1 =  {
	name:"Men's GEL Venture 5 Running Shoe",
	price:79.95,
	maker:"ASICS"
};
var product2 =  {
	name:"JACKSHIBO Unisex Fashion Sneakers",
	price:32.99,
	maker:"JACKSHIBO"
};
var product3 =  {
	name:"Champion Women's Gusto Cross Trainer",
	price:39.97,
	maker:"Champion"
};
var product4 =  {
	name:"PUMA Adult Suede Classic Shoe",
	price:168.32,
	maker:"PUMA"
};



var productList = [product1, product2]; //this is an array
productList.push(product3, product4); 

//Your code here
//Hint: productList.push(newObject) will add the object you just created to the array

//console.table(productList);
//console.log(total);
//console.log(productList.length);

/* Step 2
 * Iterate (or go through) productList one by one using the for loop
 * and for each product, if the price is below $50, console.log a message like below
 * "The product [name] costs [price], and is a match"
 */
 
  
    //Your code here
for(var i = 0; i < productList.length; i++){
		if(productList[i].price < 50){
			console.log("The product " + productList[i].name + " costs " + productList[i].price + ", and is a match" );
	}
}

/*
	for(key in productList) {
    if(productList.hasOwnProperty(key)) {
        var value = productList[key];
        
        	if(value.price < 50){
			console.log("The product " + value.name + " costs " + value.price + ", and is a match" );
    		}
    
		}
	}
*/

/* Step 3
 * What is the average price of all the products?
 */

//3.1 first, calculate total price using the for loop again

//3.2 then, divide total price by the number of products, using proudctList.length

var sum = 0;

for(var i = 0; i < productList.length; i++){		
		sum = sum + productList[i].price; // we changed it from sum = sum + Math.random()
		}

console.log("Total Price is " + sum);

var avg = sum/productList.length;

console.log("Average Price is $" + avg.toFixed(2));

/*var sum = 0;

for(key in productList) {
    if(productList.hasOwnProperty(key)) {
        var value = productList[key];
        
sum = sum + value.price; // we changed it from sum = sum + Math.random()
	console.log("For iteration " + key + ", the sum is $" + sum);
    
    }
}
var avg = sum/productList.length;
console.log("Average is $" + avg.toFixed(2));
*/


/* Step 4
 * Write a function that accept a single argument, price
 * so that the function returns the number of products below that price
 */


function comparePrice(p){

    var numOfMatchingProducts = 0;

    //Your code here
for(var i = 0; i < productList.length; i++){		
        if(productList[i].price < p){
	        numOfMatchingProducts =  ++numOfMatchingProducts;
	    }
}

    return numOfMatchingProducts;
}

//
console.log("The number of products below $10 is " + comparePrice(10));
console.log("The number of products below $50 is " + comparePrice(50));
