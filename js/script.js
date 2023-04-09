// Toevoegen van array
let errorsArray = new Array();

// Validatie functie form
function validateForm() {
  // Declareren alert boxen
  let fouten = document.getElementById("fouten");
  let volledig = document.getElementById("volledig");
  let betaling = document.getElementById("betaling");

  // Alerts leegmaken
  fouten.innerText = "";
  volledig.innerText = "";
  betaling.innerText = "";

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
  let voorwaardenCheck = document.getElementById("IPvoorwaarden").checked;

  errorsArray = new Array();

  // Kijken of al de waardes van de form ingevuld zijn
  checkEmptyField(voornaamInput, "Het veld voornaam is vereist.");
  checkEmptyField(naamInput, "Het veld naam is vereist.");
  checkEmptyField(gebruikersnaamInput, "Het veld gebruikersnaam is vereist.");
  checkEmail(emailInput);
  checkWachtwoord(wachtwoordInput, hwachtwoordInput);
  checkEmptyField(adresInput, "Adres is vereist.");
  checkEmptyField(landSelect, "Land is vereist.");
  checkEmptyField(provincieSelect, "Provincie is vereist.");
  checkPC(postcodeInput);
  checkVoorwaarden(voorwaardenCheck);
  validatePayment();

  // Checken of email juist is
  if (!checkEmail(emailInput)) {
    errorsArray.push("E-mailadres is niet correct.")
  }

  if (document.querySelector('input[name="paymentMethod"]:checked') == false) {
    errorsArray.push("Vink een betalingsmethode aan");
  }
  // Weergeven van de alerts
  if (errorsArray.length === 0) {
    // Als er geen lege velden gevonden worden
    volledig.innerText = "Aww yeah, je werd geregistreerd.";
    validatePayment();
    // Velden leegmaken van de form
    let form = document.getElementById("form");
    form.reset();
  } else {
    // Als er lege velden gevonden worden
    errorsArray.forEach(element => {
        fouten.innerHTML += element + "<br>";
    });
  }
}
// Foutmeldingen weergeven
function checkEmptyField(field, message) {
  if (field == "") {
    errorsArray.push(message);
  }
}

// Kijken of de waarde e-mail is ingegeven
function checkEmail(emailInput) {
  // https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (validRegex.test(emailInput)) {
    return true;
  } else {
    errorsArray.push("Het veld email is vereist.");
    return false;
  }
}

// Kijken of de waarde Postcode is ingegeven
function checkPC(postcodeInput) {
  checkEmptyField(postcodeInput, "Het veld postcode is vereist.");
  if (postcodeInput < 1000 || postcodeInput > 9999) {
    errorsArray.push("De waarde van postcode moet tussen 1000 en 9999 liggen.");
  }
}

// Kijken of de waarde Wachtwoord is ingegeven
function checkWachtwoord(wachtwoordInput, hwachtwoordInput) {
  checkEmptyField(wachtwoordInput, "Het veld wachtwoord is vereist.");
  checkEmptyField(hwachtwoordInput, "Het veld wachtwoord is vereist.");
  if (wachtwoordInput.length < 8) {
    errorsArray.push("Een wachtwoord moet langer zijn dan 7 karakters.");
  }
  if (wachtwoordInput != hwachtwoordInput) {
    errorsArray.push("Je wachtwoorden komen niet overeen.");
  }
}

// Kijken of de algemene voorwaarde is aangeduid
function checkVoorwaarden(voorwaardenCheck) {
  if (!voorwaardenCheck) {
    errorsArray.push("Je moet de algemene voorwaarden accepteren.");
  }
}

// Kijken of de betalingswijze is aangeduid

// Verbergen van alert boxen
function validatePayment() {
    const paymentOptions = [
        { id: "IPbanking", message: "Je betaalwijze is Banking app." },
        { id: "IPoverschrijving", message: "Je betaalwijze is overschrijving." },
        { id: "IPvisa", message: "Je betaalwijze is Visa Card." },
        { id: "IPpaypal", message: "Je betaalwijze is Paypal." }
    ];
  
    const selectedOption = paymentOptions.find(option => document.querySelector(`#${option.id}`).checked);
  
    if (!selectedOption) {
        errorsArray.push("Gelieve een betalingsoptie te kiezen.");
    } else {
        betaling.innerText = selectedOption.message;
    }
}
