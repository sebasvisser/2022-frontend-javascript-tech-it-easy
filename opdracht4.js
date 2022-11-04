// Opdracht 4a: Maak een herbruikbare functie die een string genereert voor de naam van één tv en deze teruggeeft in het format [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV.
//
function showTvName(i) {
  return (
    inventory[i].brand + " " + inventory[i].type + " - " + inventory[i].name
  );
}

//     Opdracht 4b: Maak een herbruikbare functie die de prijs van één tv als parameter verwacht (zoals 379 of 159) teruggeeft in het format €379,- of €159,-.
function showPrice(i) {
  const price = inventory[i].price;
  return "€" + price + ",-";
}

// Opdracht 4c: Maak een herbruikbare functie die een string genereert voor alle beschikbare schermgroottes van één tv. De functie geeft dit terug in het format [schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc. Als een tv maar één schermgrootte heeft ([32]) wordt de output 32 inch (81 cm). Wanneer een tv vier schermgroottes heeft ([43, 50, 55, 58]) wordt de output 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm). Let op: om één string te genereren uit een array van schermgroottes zul je een for-loop voor moeten gebruiken.
function showTvScreenSizes(i) {
  const allSizes = inventory[i].availableSizes;
  let output = "";
  const iToCm = 2.54;
  if (allSizes.length === 1) {
    const sizeInCm = allSizes * iToCm;
    output = allSizes + " inch (" + Math.floor(sizeInCm) + " cm)";
  } else {
    for (let i = 0; i < allSizes.length; i++) {
      const sizeInCm = allSizes[i] * iToCm;
      output += allSizes[i] + " inch (" + Math.floor(sizeInCm) + " cm) | ";
    }
    // laatste | weghalen
    output = output.substring(0, output.length - 2);
  }
  return output;
}

//     Opdracht 4d: Schrijf een script die de informatie van de Philips 43PUS6504/12 tv weergeeft op de pagina zoals onderstaand voorbeeld. Gebruik de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.
//
//     Philips 43PUS6504/12 - 4K TV
// €379,-
//     43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)
// dat is index[4]

document.getElementById("tv-4d").innerHTML = `
  <p>
      ${showTvName(4)} <br />
      ${showPrice(4)} <br />
      ${showTvScreenSizes(4)}
  </p>
`;

// Opdracht 4e: Maak een herbruikbare functie die de informatie van alle tv's weergeeft op de pagina. Gebruik hiervoor de map-methode in combinatie met de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.

function createTvListing(index) {
  `
  <p>
      ${showTvName(index)} <br />
      ${showPrice(index)} <br />
      ${showTvScreenSizes(index)}
  </p>
`;
}

function showTVListings(inventory) {
  const listItem = document.getElementById("4etv-lists");
  inventory.map((tv) => {
    return (listItem.innerHTML += `
  <p>
      ${showTvName(tv.index)} <br />
      ${showPrice(tv.index)} <br />
      ${showTvScreenSizes(tv.index)}
  </p>
    `);
  });
}

showTVListings(inventory);
