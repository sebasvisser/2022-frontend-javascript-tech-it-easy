// Opdracht 2 - Elementen in de DOM plaatsen
// Tip: wanneer we meerdere waardes uit een array willen terugbrengen tot één getal of één string, gebruik je hier gewoon een oude vertrouwde for-loop voor!
//
//     Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
// Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.
//     Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
// Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.
//     Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.

// Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
console.log("Opdracht 2a:");
let totalSoldTvs = 0;
const soldTvs = inventory.map((tv) => tv.sold);

soldTvs.forEach(countSold);

function countSold(item) {
  totalSoldTvs += item;
}

console.log({ totalSoldTvs });

// Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.
console.log("Opdracht 2b: is zichtbaar op de rendered pagina");
document.getElementById("sold-tvs").innerHTML = ` ${totalSoldTvs} `;

//     Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
console.log("Opdracht 2c:");
let totalBoughtTvs = 0;
const boughtTvs = inventory.map((tv) => tv.originalStock);

boughtTvs.forEach(countStock);

function countStock(item) {
  totalBoughtTvs += item;
}

console.log({ totalBoughtTvs });

// Opdracht 2b: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.
console.log("Opdracht 2d: is zichtbaar op de rendered pagina");
document.getElementById("stock-tvs").innerHTML = ` ${totalBoughtTvs} `;
