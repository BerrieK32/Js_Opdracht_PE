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
  let voorwaardenCheck = document.getElementById("IPvoorwaarden").value;
  let betalingCheck = document.querySelector(
    'input[name="paymentMethod"]:checked'
  ).value;

  // Leeg maken van alert boxen
  foutmelding.innerHTML = "";
  volledigmelding.innerHTML = "";
  betaaldmelding.innerHTML = "";

  // Kijken of al de waardes van de form ingevuld zijn
  checkEmptyField(voornaamInput, "Het veld voornaam is vereist.");
  checkEmptyField(naamInput, "Het veld naam is vereist.");
  checkEmptyField(gebruikersnaamInput, "Het veld gebruikersnaam is vereist.");
  checkEmail(emailInput);
  checkWachtwoord(wachtwoordInput);
  checkhWachtwoord(hwachtwoordInput);
  checkEmptyField(adresInput, "Adres is vereist.");
  checkEmptyField(landSelect, "Land is vereist.");
  checkEmptyField(provincieSelect, "Provincie is vereist.");
  checkPC(postcodeInput);
  checkVoorwaarden(voorwaardenCheck);
}

// Kijken of de waarde e-mail is ingegeven
function checkEmail(emailInput) {
  // https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value.match(emailInput)) {
    return true;
  } else {
    _errorsArray.push("Het veld email is vereist.")
    return false;
  }
}

// Kijken of de waarde Postcode is ingegeven
function checkPC(postcodeInput){
    checkEmptyField(postcodeInput, "Het veld postcode is vereist.");
    if (postcodeInput < 1000 || postcodeInput > 9999)
        _errorsArray.push("De waarde van postcode moet tussen 1000 en 9999 liggen.")
}

// Kijken of de waarde Wachtwoord is ingegeven
function checkWachtwoord(wachtwoordInput){
    checkEmptyField(wachtwoordInput, "Het veld wachtwoord is vereist.");
    if (wachtwoordInput.length < 8) {
        _errorsArray.push("Een wachtwoord moet langer zijn dan 7 karakters.")
    }
}

// Kijken of de waarde herhaalWachtwoord is ingegeven
function checkhWachtwoord(hwachtwoordInput){
    checkEmptyField(hwachtwoordInput, "Het veld wachtwoord is vereist.");
    if (wachtwoordInput != hwachtwoordInput) {
        _errorsArray.push("Je wachtwoorden komen niet overeen.")
    }
}

// Kijken of de algemene voorwaarde is aangeduid
function checkVoorwaarden(voorwaardenCheck) {
    if (!voorwaardenCheck) {
        _errorsArray.push("Je moet de algemene voorwaarden accepteren.")
    }
}

// Kijken of de betalingswijze is aangeduid
function validatePayment(){
    if (!betalingCheck) {
        _errorsArray.push("Je moet een betaalmethode hebben aangevinkt.")
    }
    else{
        switch (betalingCheck) {
            case betalingCheck ="Banking app":
                betaaldmelding.innerHTML = "<p>Je betaalwijze is Banking app.</p>";
                break;
            case betalingCheck ="Overschrijving":
                betaaldmelding.innerHTML = "<p>Je betaalwijze is overschrijving.</p>";
                break;
            case betalingCheck ="Visa Card":
                betaaldmelding.innerHTML = "<p>Je betaalwijze is Visa Card.</p>";
                break;
            case betalingCheck ="Paypal":
                betaaldmelding.innerHTML = "<p>Je betaalwijze is Paypal.</p>";
                break;
            default:
                break;
        }
    }
}
// Verbergen van alert boxen
