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

