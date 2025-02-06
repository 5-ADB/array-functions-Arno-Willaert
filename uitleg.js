const fruiten = ["banaan", "appel", "peer"]
let fruit= fruiten.at(2)                        //gaat zeggen wat het element is op de 2e plaats
console.log(fruit);


console.log("-----------------------------------------------");

const autos = ["Mercedes", "bmw", "opel", "ferrari"]
let text = autos.join(" and ")                  // zal iets toevoegen i.d.p.v de kommas

console.log(text);

console.log("-----------------------------------------------");

const namen = ["Jonas", "Arno", "Kyrill"]
let verwijderd = namen.pop()                //gaat zeggen wat de laatste van de array is
console.log(verwijderd);

console.log("-----------------------------------------------");

let toegevoegdeFruit =  fruiten.push("Kiwi")
console.log(toegevoegdeFruit);

console.log("-----------------------------------------------");


let wegGedaan = autos.shift()           // toont wat de eerste is in de array
console.log(wegGedaan);             

console.log("-----------------------------------------------");

let toegevoegdeAutos = autos.unshift("Lambo", "Skoda")
console.log(toegevoegdeAutos);

console.log("-----------------------------------------------");

let verwijderdeAuto = autos.delete(1)
console.log(verwijderdeAuto);
console.log(autos.at(1));

// Array concat()
// Array copyWithin()
// Array flat()
// Array splice()
// Array toSpliced()
// Array slice()
