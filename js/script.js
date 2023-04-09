// Toevoegen van array
let _errorsArray = new Array();

// Validatie functie form
function validateForm() {
  // Declareren alert boxen
  let foutmelding = document.getElementById("foutmelding");
  let volledigmelding = document.getElementById("volledigmelding");
  let betaaldmelding = document.getElementById("betaaldmelding");

  // Declareren form waardes
  let voornaamInput = document.getElementById("IPvoornaam").value;
  let naamInput = document.getElementById("IPnaam").value;
  let gebruikersnaamInput = document.getElementById("IPgebruikersnaam").value;
  let emailInput = document.getElementById("IPmail").value;
  let wachtwoordInput = document.getElementById("IPwachtwoord").value;
  let hwachtwoordInput = document.getElementById("IPhwachtwoord").value;
  let adresInput = document.getElementById("IPadres").value;
  let landSelect = document.getElementById("IPland").value;
  let provincieSelect = document.getElementById("IPprovincie").value;
  let postcodeInput = document.getElementById("IPpostcode").value;
  let ophoogteCheck = document.getElementById("IPinschrijven").value;
  let betalingCheck = document.querySelector('input[name="paymentMethod"]:checked').value;

  // Leeg maken van alert boxen
  foutmelding.innerHTML = "";
  volledigmelding.innerHTML = "";
  betaaldmelding.innerHTML = "";

  // Kijken of al de waardes van de form ingevuld zijn
  checkEmptyField(voornaamInput, "Het veld voornaam is vereist.");
  checkEmptyField(naamInput, "Het veld naam is vereist.");
  checkEmptyField(gebruikersnaamInput, "Het veld gebruikersnaam is vereist.");
  checkEmptyField(emailInput, "Het veld email is vereist.");
  checkEmptyField(wachtwoordInput, "Het veld wachtwoord is vereist.");
  checkEmptyField(hwachtwoordInput, "Het veld herhaal wachtwoord is vereist.");
  checkEmptyField(adresInput, "Adres is vereist.");
  checkEmptyField(landSelect, "Land is vereist.");
  checkEmptyField(provincieSelect, "Provincie is vereist.");
  checkEmptyField(postcodeInput, "Het veld postcode is vereist.");
  checkEmptyField(ophoogteCheck, "Je moet de algemene voorwaarden accepteren.");
}

// Verbergen van alert boxen
