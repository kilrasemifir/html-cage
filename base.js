var a = 1 + 2.55;
var s = "Hello";
var b = true;

// if (a <= 5){
//     console.log("Toto mange des patates");
// } else if (a < 10) {
//     console.log("Toto mange des pommes");
// } else {
//     console.log("Toto mange sa main");
// }

// for (var i = 0; i<10; i++){
//     console.log("Toto mange ", i, "bananes");
// }

function maFonction(param){
    return "Hello Ma function";
}
var foo = maFonction;
console.log(foo(1))

const maFunction = () => {
    return "It's new!!"
}

var maList = [ 
    "Toto", 
    1, 
    true, 
    [ "Titi", 1, 'Salut !' ] 
];

console.log(maList, maList[0]);

var monObj = {
    nom: "Killian",
    "prenom": "Raoux",
    salaire: 10000000000000000,
    adresse :  {
        ville: "Totoville"
    },
    voitures:[
        "Tesla S", "Bugati chiron"
    ]
}

monObj.toto = "super!!!!";
for (var key in monObj) {
    console.log("key=",key,"valeur=", monObj[key])
}

for (var value of maList){
    console.log(value)
}
console.log(monObj, monObj.nom, monObj["salaire"]);

console.log(a);
console.log(s);
console.log(b);
console.log("Hello World");