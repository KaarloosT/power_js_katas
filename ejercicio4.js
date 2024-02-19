


//1.1-----------------------------
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]);
//--------------------------------

//1.2-----------------------------
const avengers2 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
avengers2[0] = "IRONMAN";
//--------------------------------

//1.3-----------------------------
console.log(avengers.length);
//--------------------------------

//1.4-----------------------------
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty");
rickAndMortyCharacters.push("Summer");
//--------------------------------

//1.5-----------------------------
const rickAndMortyCharacters2 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters2.shift();
console.log(rickAndMortyCharacters2[0]);
console.log(rickAndMortyCharacters2[rickAndMortyCharacters2.length-1]);
//--------------------------------

//1.6-----------------------------
const rickAndMortyCharacters3 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
//Eliminamos el segundo elemento
rickAndMortyCharacters3.splice(1,1);
console.log(rickAndMortyCharacters3);
//--------------------------------
