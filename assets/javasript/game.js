// choosing a randmon word - and create an array of words. 

var words =[
"Animaniacs",
"Rugrats",
"Arthur",
"Futurama",
"Pokemon",
"Garfield",
"Dexter",
"CatDog",
"Doug",
"Batman",
"Recess",
"Daria",
"Teletubbies",
"ReBoot",
"Transformers",
"Zoboomafoo",
"jetsons",
"Popeye",
"Flintstones",
"Superman",
"Naruto",
"Thundercats",
"ALF",
"smurfs",
"Sabrina",
"SpongeBob",
"Digimon",
"TaleSpin",
"muppets",
"Clifford",
];

//choosing a randmon word. 

var word = words[Math.floor(Math.random()*words.length)];
console.log (word);
