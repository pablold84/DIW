$(function () {
  var eventDates = {};
  eventDates[new Date("04/19/2024")] = new Date("04/19/2024"); // 19 de abril
  eventDates[new Date("05/01/2024")] = new Date("05/01/2024"); // 1 de mayo
  eventDates[new Date("05/24/2024")] = new Date("05/24/2024"); // 24 de mayo
  eventDates[new Date("08/15/2024")] = new Date("08/15/2024"); // 24 de mayo
  eventDates[new Date("09/08/2024")] = new Date("09/08/2024"); // 24 de mayo
  console.log(eventDates);
  function festivos(date) {
    var highlight = eventDates[date];
    if (highlight) {
      return [true, "festivo", "Festivo Local / Nacional"];
    } else {
      return [true, "", ""];
    }
  }
  $("#fecha").datepicker({
    regional: "es",
    showOn: "both", // se muestra el calendario al hacer focus en el o al pulsar el botón ...
    closeText: "Cerrar",
    changeYear: true, //para poder cambiar de año
    numberOfMonths: 1, // para ver varios meses, en este caso dos
    firstDay: 1, // las semanas comienzan de lunes(1) Domingo (0)
    dateFormat: "dd-mm-yy", //formato de fecha
    monthNames: [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Deciembre",
    ], //nombres de los meses
    dayNames: [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ], //nombres de los dias de la semana en formato largo
    dayNamesShort: ["Dom", "Lun", "Mar", "Mié", "Juv", "Vie", "Sáb"], //nombres de los dias de la semana en formao corto
    dayNamesMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"], //nombres de los dias de la semana en formato mínimo
    yearRange: "1928:2028", //rango de años
    beforeShowDay: festivos,
  });
});
