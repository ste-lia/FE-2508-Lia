// DOM - Document Object Model
// interfata in js in care interactionam cu HTML
// in js codul html e reprezentat sub forma de obiect (document)

console.log(document);

// 4 actiuni in html si css cu DOM
// 1. Preluarea elementelor
// 2.Modificarea Element.
// 3.Crearea Element.
// 4.Stergerea el.

// 1.Preluarea elementelor

// 1.1.Dupa id
let menu = document.getElementById('menu_list');
console.log(menu);

// 1.2. -clasa
let cards = document.getElementsByClassName('card');
console.log(cards);


// 1.3. -tag
let articole = document.getElementsByTagName('article');
console.log(articole);


// -----------------------------------------------------------------
// selectam doar un element poate fi #id, .class, sau tag prima aparitie
console.log(document.querySelector('article'));

// selectam mai multe elemente #id, .class, sau tag toate aparitiile
console.log(document.querySelectorAll('.card'));


let title_shop = document.querySelector('#title_shop');

// ---------------------------
// modificarea continutului

// modificarea continutului textual
title_shop.textContent = 'Добро пожаловать в наш шоу-рум-онлайн!';

// modificarea html
let ex_paragraph = document.querySelector('#ex_paragraph');
ex_paragraph.innerHTML = '<b>Товары</b>, находящиеся в данный момент в шоу-руме';

// // modificarea atributelor
// let barbequ = cards[2];
// console.log(barbequ);

// vizualizarea atributelor
let img_swing = document.querySelector('#img_swing');
console.log(img_swing.getAttribute('src'));

// modificarea atributelor
// img_swing.setAttribute('src', 'media/img/изображение_viber_2025-09-25_14-19-51-025.jpg');

// functie butonul care schimba img
function changeImage() {
img_swing.setAttribute('src', 'media/img/изображение_viber_2025-09-25_14-19-51-025.jpg');

}

// modificarea stilurilor

let change_img_btn = document.querySelector('#change_img_btn');

change_img_btn.classList.add('change_img_btn');
// adauga clasa

// change_img_btn.classList.remove('change_img_btn');
// sterge clasa



// functie care adauga clasa

// function darkMode() {
// 	document.body.classList.add('dark_mode');
// }                         .toggle

// darkMode();



// functie care adauga si scoate clasa daca e prezenta
// toggle

let dark_mode_btn = document.querySelector('#dark_mode_btn');
function darkMode() {
	if (document.body.classList.contains('dark_mode')) {
		dark_mode_btn.textContent = 'Dark Mode'
	} else {
		dark_mode_btn.textContent = 'Light Mode'
	}
	document.body.classList.toggle('dark_mode');
}


// -------------------------------:----------------------------------------
// INSERAREA ELEMENTELOR IN HTML:

let produse = [
	{
		name: 'Металлический барбекю на колёсах',
		image: '/media/img/изображение_viber_2025-09-25_14-19-51-076.jpg',
		price: 12990,
	},
	{
		name: 'Металлический барбекю с инициалами',
		image: '/media/img/изображение_viber_2025-09-25_14-19-51-133.jpg',
		price: 8990,
	},
	{
		name: 'Металлический барбекю в стиле лофт',
		image: '/media/img/изображение_viber_2025-09-25_14-19-51-278.jpg',
		price: 10990,
	},
]

// let img_card = document.createElement('img');
// console.log(img_card);

// img_card.setAttribute('src', 'media/img/изображение_viber_2025-09-25_14-36-11-601.jpg');
// img_card.setAttribute('alt', 'rack');
// img_card.classList.add('img_card_style');


// let sectiune = document.querySelector('.exemple_insert');
// sectiune.insertAdjacentElement('afterbegin', img_card);
// ---------------------------------------------
// crearea unui div in js
// let div_imagine = document.createElement('div');
// div_imagine.classList.add('image_container');

// console.log(div_imagine);

// div_imagine.insertAdjacentElement('afterbegin', img_card);
// console.log(div_imagine);

// ------------------------------------------------------
// crearea unui card
// 1.article
// let article = document.createElement('article');
// article.classList.add('card');
// // 2.h3
// let h3 = document.createElement('h3');
// h3.textContent = produs.name;
// // 3. plasam h3 in interiorul articolului
// article.insertAdjacentElement('beforeend', h3);

// let div_imagine = document.createElement('div');
// div_imagine.classList.add('image_container');
// div_imagine.insertAdjacentElement('afterbegin', img_card);
// // (img_card este creat mai sus)
// // 4. plasam imaginea in interiorul articolului
// article.insertAdjacentElement('beforeend', div_imagine);
// // 5. h5
// let h5 = document.createElement('h5');
// h5.classList.add('price_product');
// h5.textContent = 8999 + "MDL";
// // 6. plasam h5 in interiorul articolului
// article.insertAdjacentElement('beforeend', h5);
// // 7. buton
// let button = document.createElement('button');
// button.classList.add('buy_button');
// button.textContent = "Заказать"
// // 8. plasam buttonul in interiorul articolului
// article.insertAdjacentElement('beforeend', button);

// console.log(article);

// // 9. inserarea cardului in pagina(sectiune)
// let contain = document.querySelector('.contain');
// contain.insertAdjacentElement('beforeend', article);
// ------------------------------------------------------------------------------
// functia de iteratia printr-o lista
function createProductCard(produs) {
	let article = document.createElement('article');
article.classList.add('card');

let h3 = document.createElement('h3');
h3.textContent = produs.name;

article.insertAdjacentElement('beforeend', h3);

let img_card = document.createElement('img');

img_card.setAttribute('src', produs.image);
img_card.setAttribute('alt', 'rack');
img_card.classList.add('img_card_style');

let div_imagine = document.createElement('div');
div_imagine.classList.add('image_container');
div_imagine.insertAdjacentElement('afterbegin', img_card);

article.insertAdjacentElement('beforeend', div_imagine);

let h5 = document.createElement('h5');
h5.classList.add('price_product');
h5.textContent = produs.price + "MDL";

article.insertAdjacentElement('beforeend', h5);

let button = document.createElement('button');
button.classList.add('buy_button');
button.textContent = "Заказать"

article.insertAdjacentElement('beforeend', button);

return article

}

let contain = document.querySelector('.contain');

for (const produs of produse) {
let card = createProductCard(produs)

contain.insertAdjacentElement('beforeend', card);

}
