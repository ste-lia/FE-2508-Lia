let prenume = 'Lia';

let activitate = 'Cursant FrontEndDev';

console.log(prenume);
console.log(activitate);

// let a = '5';
// let b = '2';

// console.log(a + b);

// tipuri de date 

// 1.string - sir de caractere(litere,cifre...)
// let nr1 = '7';

// 2.number - numere (operatii matematice)
// let nr2 = 7;

let a = 5;
let b = 7;

console.log(prenume + a);
console.log(a - b);
console.log(a * b);
console.log(a / b);

// 3.boolean (true or false)

let passwordMatches = true;

// 4.null - lipsa informatiei

// 5.undefined - lipsa variabilei (error)

// typeof - arata tipul de date a variabilei

// console.log(passwordMatches)
// in consola true

console.log(typeof passwordMatches);
// in consola boolean

prenume = 'Ion';
console.log(prenume);
// in consola va fi Ion

// const - valoarea variabilea nu mai poate fi modificata
// numele se scrie cu majuscule

const API_KEY = 'abvgd12345oparola';

// API_KEY = 'schimb';
// dupa care va fi error si nu a sa mai lucreze


//      =  operator de atribuire

//   1      operatori aritmrtice
//       +  
//       -  
// /     *  
//       /   

// /    **  ridicarea la putere
console.log(5**2);

//      %   impartirea cu rest
console.log(10%3);

// /    !     inversarea

//    2     operatori de comparatie
//          boolean true or false

let parolaDeLaUser = 'querty';
// let parolaDePeServer = 'asdfg';
let parolaDePeServer = 'querty';
//    ==    verificarea egalitatii      loose equality

console.log('parole corespund:', parolaDeLaUser == parolaDePeServer);

// /  !=     verificarea inegalitatii    loose inequality

console.log('parole nucorespund:', parolaDeLaUser != parolaDePeServer);

let idUser1 = '12341234';
let idUser2 = 12341234;

console.log('Utilizatorii corespund:', idUser1 == idUser2);


//     ===  verificarea egalitatii      strict/strong equality  verifica si tipul de date si valoarea interna

console.log('Utilizatorii corespund:', idUser1 === idUser2);

// /   !==  verificarea inegalitatii      strict/strong inequality  verifica si tipul de date si valoarea interna


// comparatii matematice
// > ;  < ;  >=  ;  <= ;

console.log(5>3);
console.log(3>3);
console.log(3>=3);

// comparatii string

console.log('abvgda'>'abvgdb');


// operatori LOGICE     in care se combina mai multe evaluari de adevar intr-o conditie

//       &&     AND    pentru rezultat adevarat pentru toate conditiile

let username = 'Maximus';
let usernameServer = 'MaximusSt';

let emailUser = 'maximus@gmail.com';
let emailServer = 'maximus@gmail.com';

parolaDeLaUser = 'querty';
parolaDePeServer = 'querty';


console.log((username === usernameServer) && (emailUser === emailServer) && (parolaDeLaUser === parolaDePeServer));

//       ||       OR      macar unu sa fie adevarat

let numberUser = '06123456';
let numberServer = '06123456';

console.log((username === usernameServer) || (numberUser === numberServer) || (emailUser === emailServer));


console.log('utilizatorul are toate datele corecte(sau email,number,username,si parola corecta):',username === usernameServer || numberUser === numberServer || emailUser === emailServer && parolaDeLaUser === parolaDePeServer);

// /        !           NOT   negatia inverseaza

console.log(!true);


console.log(5+'2');
console.log(5+'a');
console.log(5-'a');
console.log(true+'2');
console.log(true-'2');
console.log(true-'a');

console.log(true+null);
console.log(true+undefined);


// CONDITIONALII
// 1. if (DACA)
parolaDeLaUser = 'querty';
parolaDePeServer = 'quert';

if ((username === usernameServer || numberUser === numberServer || emailUser === emailServer) && (parolaDeLaUser === parolaDePeServer)) {
	console.log('Utilizatorul este autentificat!');
} else {
	console.log('Parola sau loghinul sunt incorecte!');
}

// if-else (DACA SI  IN CAZ CONTRAR)

	// let temperatura = 18;
	// let temperatura = 10;
	// let temperatura = 26;
	let temperatura = 'Temperature not be provided';


	if(temperatura<15) {
		console.log('Temperatura e mai mica de 15 grade.');
	} else if(temperatura>=15 && temperatura<=25) {
		console.log('Temperatura e intre 15 si 25 grade.Timp perfect.');
	} else if(temperatura>25) {
		console.log('Temperatura e mai mare de 25 grade.');
	} else {
		console.log('Error! Temperatura nu a putut fi afisata!');
	}



	// switch -edge-cases   (CAZUL EXCEPTIE)

let zi_saptamana = 'Martie'

	switch (zi_saptamana) {
		case 'Luni':
			console.log('Prima zi lucratoare saptamanii. Succes!');
			break;
		case 'Marti':
			console.log('A doua zi saptamanii. Lectia 14');
			break;
		case 'Sambata':
		case 'Duminica':
			console.log('Zi de odihna. Nice Weekend!');
			break;
	
		default:
			console.log('Nu e o zi.');
	}

// --------------------------------------------------------------
	// CICLURILE ITERATIVE

	// FOR (PENTRU) unde nr de iteratii e definit cunoscut

	for (let i = 1; i<40; i+=4) {
		console.log(i);
	}


	for (let i = 100; i>0; i--) {
		console.log(i);
	}


   prenume = 'Lia';
	console.log(prenume.length);

	for (let i = 0; i<prenume.length; i++) {
		console.log(prenume[i]);
	}

// ------------------------------------------------------------------
// WHILE - CAT TIMP CICLUL ITERATIV UNDE NR DE ITERATII NECUNOSCUT(ex: autentificarea)
// (verifica conditia, si daca adevarata executa codul)

// instructiunea 
// alert('Alerta JS!');
// // afiseaza o alerta
// prompt('Introduceti parola!');
// // afiseaza o alerta si input box

// let parolaPrompt = prompt ('Introduceti parola!');
// while (parolaPrompt != 'qwerty') {
// 	parolaPrompt = prompt('Parola gresita! Introduceti parola!');
// }

// ------------------------------------------------------------------------------------------------
// Lectia 15

// DO-WHILE - (executa codul,dupa asta evalueaza conditia)

// let f = 1000000;

// do {
// 	console.log(f);
// } while(i<=10);



// let parolaPrompt;

// do {
// 	parolaPrompt = prompt('Introduceti parola!');
// } while(parolaPrompt != 'qwerty');


// TIPURI DE DATE COMPLEXE

// 1). OBIECT (o colectie de date simple(proprietati))

let masina = {
	culoare: 'alba',
	scaune: 5,
	cutie_automata: false,
	motor: {
		cilindri: 5,
		volum: 2,
	}
}

console.log(masina);
// proprietatile unui obiect

console.log(masina.scaune);
// o proprietate obiectului


// masina.motor = '1.4 l';
// // adauga proprietate
// console.log(masina);


// delete masina.culoare
// sterge proprietate
// console.log(masina);

// console.log(masina.motor.cilindri);

let articol = {
	title: 'Металлический барбекю',
	image: '/media/img/изображение_viber_2025-09-25_14-19-51-076.jpg',
	price: 12990,
	metainfo: {
		cantitate: 3,
		culori: '',
		etichete: '',
		reducere: '20%',
	}
}

// Ciclul FOR adaptat pentru obiecte:
for (const proprietate in articol) {
	console.log(proprietate)
}

// for (const key in object) {
// 	if (!Object.hasOwn(object, key)) continue;
	
// 	const element = object[key];
	
	
// }
// ------------------------------------------------------
// LISTA (Array, Vector)
let nume1 = 'Den'
let nume2 = 'Max'
let nume3 = 'Emma'
// mai corect din 3 variabile 1 variabila cu 3 valori
let nume = ['Den', 'Max', 'Emma']

console.log(nume[0]);

// metode ce pot fi aplicate unei liste

nume.push('Lia');
// adauga un element la capatul unei liste
console.log(nume);

nume.pop()
// scoate un element de la capatul unei liste
console.log(nume);

nume.unshift('Lana');
// adauga la inceput listei
console.log(nume);



nume.reverse();
// inversa lista

// parcurgem o lista cu ciclul for
for (let i=0; i<nume.length; i++) {
	console.log('Welcome,' + nume[i]);
}


// ciclul for-of
for (const element of nume) {
	console.log(element)
}


let produse = [
	{
		name: 'Металлический барбекю',
		image: '/media/img/изображение_viber_2025-09-25_14-19-51-076.jpg',
		price: 12990,
	},
	{
		name: 'Металлический барбекю',
		image: '/media/img/изображение_viber_2025-09-25_14-19-51-133.jpg',
		price: 8990,
	},
	{
		name: 'Металлический барбекю',
		image: '/media/img/изображение_viber_2025-09-25_14-19-51-278.jpg',
		price: 10990,
	},
]

for (const produs of produse) {
	console.log(produs);
}



// ----------------------------------------------------------------

// FUNCTII

// Functiile sunt definite de utilizator   

// Metode predefinite in JavaScript    . ()    (console.log(), nume.unshift('vic'),  


function greetUser(nume) {
	console.log('Hello,' + nume);
}

for(const name of nume) {
	greetUser(name);
}