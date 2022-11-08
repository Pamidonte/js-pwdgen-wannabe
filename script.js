let nome = prompt("Inserisci il nome");
let cognome = prompt("Inserisci il cognome");
let colore = prompt("Inserisci il tuo colore preferito");
let numero1= prompt("inserisci un numero");
let numero2= prompt("inserisci un altro numero");

numero1 = parseInt(numero1);
numero2 = parseInt(numero2);

let numero3= numero1 / numero2;

let password = nome + cognome + colore + numero3;

document.getElementById("pass").innerHTML=password;

console.log (password);
 

