$(document).ready(function(){

  // Seleziono mese interessato
  $('select').change(function() {

    // Richiamo funzione per calcolo giorni del mese
    var display = displayMonth(this.value)
    var holidays = findHolidays(this.value)

    // Ciclo For per mostrare calendario in HTML
    for (var i = 0; i < display.length; i++) {
      $(".calendar ul").append("<li>"+ display[i] +"</li>");
    }

  });
})

// Funzione mostra giorni del mese
// --> monthIndex: numero intero da 0 (Gennaio) a 11(Dicembre)
// --> return: Array giorni del mese
function displayMonth(monthIndex) {

  // Inserisco mese da input funzione e visualizzo giorni
  var daysInMonth = moment("2018").month(monthIndex).daysInMonth();

  // Array con giorni del mese selezionato
  var monthDays = [];

  // Aggiusto input funzione per correggere funzione nel moment()
  var getMonth = parseInt(addZero(monthIndex)) + 1;
  // console.log(getMonth);

  var month = moment("2018-"+getMonth);
  // console.log(month);

  // Popolo Array con giorni del mese selezionato
  for (var i = 1; i <= daysInMonth; i++) {
    var singleDay = month.format(i + " MMMM");
    monthDays.push(singleDay)
  };

  return monthDays;
}

// Funzione mostra giorni festivi del mese
// --> monthIndex: numero intero da 0 (Gennaio) a 11(Dicembre)
// --> return: Array giorni festivi del mese
function findHolidays(monthIndex){

  // Richiamo API per giorni festivi
  $.ajax(
    {
      url: "https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=0",
      method: "GET",
      success: function(data){
        console.log(data.response)

      },

      error: function(error){
        aler("C'è stato un errore " + error)
      }

    }
  )
}

// Funzione aggiunge 0 ai numeri <10
// --> number: numero intero
// --> return: numero inserito con o senza zero
function addZero(number) {
  if (number < 10) {
    return "0" + number;
  }
  return number;
}
