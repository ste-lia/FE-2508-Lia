
// cart = [
// 	{
// 		name: 'Металлический барбекю на колёсах',
// 		quantity: 2,
// 		price: 12990
// 	}
// ]

// // daca product e un string
// // (o lista)
// cart = []

// function addProduct(product, price){
// if (cart.product != null) {
// 	cart.product.quantity++;
// } else {
// 	cart.push({product, price, quantity:1})
// }
// }

// // function changeQuantity(product) {

// // }

// function deleteProduct(product) {
//    if (cart.product.quantity > 1) {
// 		cart.product.quantity -= 1;
// 	} else {

// 	}
// }

// ---------------------------simplificam----------
// daca cart e un obiect
// cart = {
// 	barbequ : {
// 		quantity:,
// 		price:
// 	},
// 	poarta : {
// 		quantity:,
// 		price:
// 	},
// 	scaun : {
// 		quantity:,
// 		price:
// 	}
// }
// obiect[proprietate]
cart = {}

function addProduct(product, price){
	if (cart[product] != null) {
		cart[product].quantity++;
	} else {
		cart[product] = {}
		cart[product].quantity = 1
		cart[product].price = price;
	}

	updateDOM()
	console.log(cart);
}

function deleteProduct(product) {
   if (cart[product].quantity > 1) {
		cart[product].quantity--;
	} else {
      delete cart[product];
	}

	updateDOM() 
}

function updateDOM () {
   let cartList = document.querySelector('.shoppingCart');
	cartList.innerHTML = "";

	for (let produs in cart) {
		let listItem = document.createElement('li');
		listItem.textContent = produs + ": " + cart[produs].quantity + "unitati";

		cartList.insertAdjacentElement('beforeend', listItem)
	}
}