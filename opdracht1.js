// Opdracht 1 - Array Methoden
// Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de console.
console.log("opdracht 1a");
const tvTypes = inventory.map((tv) => tv.type);
console.log({ tvTypes });

//  Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn. Log de uitkomst in de console.
console.log("opdracht 1b");
const tvSoldOut = inventory.filter((tv) => tv.sold === tv.originalStock);
console.log({ tvSoldOut });

// Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken. Log de uitkomst in de console.
console.log("opdracht 1c");
const tvAmbiLight = inventory.filter((tv) => {
  return tv.options.ambiLight === true;
});
console.log({ tvAmbiLight });

// Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de console.
console.log("Opdracht 1d");
function sortLowToHigh(inventory) {
  return inventory.sort((a, b) => a.price - b.price);
}
console.log(sortLowToHigh(inventory));
