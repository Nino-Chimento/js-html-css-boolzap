$(document).ready(function () {
  $("#invio").keypress(function () {
    if(event.which == 13 || event.keyCode == 13) {
        var testo = $("#invio").val();
        console.log(testo);
        var nuovoElemento = $("copia").clone();
        console.log(nuovoElemento);
        $("conversazione").append(nuovoElemento);
    }
  })
})
