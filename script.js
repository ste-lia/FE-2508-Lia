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
// 1. if
parolaDeLaUser = 'querty';
parolaDePeServer = 'quert';

if ((username === usernameServer || numberUser === numberServer || emailUser === emailServer) && (parolaDeLaUser === parolaDePeServer)) {
	console.log('Utilizatorul este autentificat!');
} else {
	console.log('Parola sau loghinul sunt incorecte!');
}

// if-else

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



	// switch -edge-cases

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
