$(document).ready(function(){

  var display = displayMonth(0)

  console.log(display);
  console.log(display.length);

  for (var i = 0; i < display.length; i++) {
    $(".calendar ul").append("<li>"+ display[i] +"</li>");
  }


  // $("#current-month").click(function(){
  //
  //   var currentMonth = $(this).attr('data-count');
  //
  //   // console.log(currentMonth);
  //   //
  //   // var display = displayMonth(currentMonth);
  //   // console.log(display);
  //
  // })


  // // Richiamo API per giorni festivi
  // $.ajax(
  //   {
  //     url: "https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=0",
  //     method: "GET",
  //     success: function(){
  //
  //     },
  //
  //     error: function(error){
  //       aler("C'è stato un errore " + error)
  //     }
  //
  //   }
  // )

})

// Funzione mostra giorni del mese
// --> monthIndex: numero intero da 0 (Gennaio) a 11(Dicembre)
// --> return: Array giorni del mese
function displayMonth(monthIndex) {

  // Inserisco mese da input funzione e visualizzo giorni
  var daysInMonth = moment("2018").month(monthIndex).daysInMonth();

  // Aggiusto input funzione per correggere funzione nel moment()
  var getMonth = monthIndex + 1;
  var month = moment("2018-"+getMonth);

  // Array con giorni del mese interessato
  var monthDays = [];

  // Popolo Array con giorni del mese interessato
  for (var i = 1; i <= daysInMonth; i++) {
    var singleDay = month.format(i + " MMMM");
    monthDays.push(singleDay)
  };

  return monthDays;

}

// // Funzione aggiunge 0 ai numeri <10
// // --> number: numero intero
// // --> return: numero inserito con o senza zero
// function addZero(number) {
//   if (number < 10) {
//     return "0" + number;
//   }
//   return number;
// }
