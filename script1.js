
cart = {}

let cartFromStorage = localStorage.getItem('cart');

if (cartFromStorage) {
	cart = JSON.parse(cartFromStorage)
}

updateDOM()

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

	let totalPrice = 0

	for (let product in cart) {
		let listItem = document.createElement('li');
		listItem.textContent = product + ": " + cart[product].quantity + "unitati";
      
		let totalProductPrice = cart[product].price * cart[product].quantity;
		listItem.textContent += ". " + totalProductPrice + " lei. "

		let removeButton = document.createElement('button');
		removeButton.textContent = 'Sterge Unitate';

		removeButton.onclick = function() {
			deleteProduct(product)
		}
		// removeButton.addEventListener('click',deleteProduct)

		listItem.insertAdjacentElement('beforeend', removeButton);
		cartList.insertAdjacentElement('beforeend', listItem)

		totalPrice += totalProductPrice
	}

	let price = document.querySelector(".price");
	price.textContent = "Pret total: " + totalPrice + " lei."


	localStorage.setItem('cart', JSON.stringify(cart))
}



function resetCart() {
	cart = {}

	updateDOM();
}