const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
  ];

let longMovie = {};
let normalMovie = {};
let shortMovie = {};

for (let i = 0; i < movies.length; i++) {
    if (movies[i].durationInMinutes > 200) {
        longMovie = movies[i];
    } else if (movies[i].durationInMinutes > 150) {
        normalMovie = movies[i];
    } else {
        shortMovie = movies[i];
    }
}

console.log(longMovie);
console.log(normalMovie);
console.log(shortMovie);
