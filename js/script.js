$(document).ready(function () {
  $("#invio").keypress(function () {
    if(event.which == 13 || event.keyCode == 13) {
        var testo = $("#invio").val();
        console.log(testo);
        var nuovoElemento = $(".template .copia").clone();
        nuovoElemento.find("p").text(testo);
        $("#invio").val("");
        $(".conversazione").append(nuovoElemento);
        setTimeout(function () {
          var messaggioRicevuto = $(".template .copia-ricevuto").clone();
          messaggioRicevuto.children("p").text("ok");
          $(".conversazione").append(messaggioRicevuto);
        }, 1000);
      }
    })
  $(".fa-telegram-plane").click(function () {
    var testo = $("#invio").val();
    console.log(testo);
    var nuovoElemento = $(".template .copia").clone();
    nuovoElemento.find("p").text(testo);
    $(".conversazione").append(nuovoElemento);
    $("#invio").val("");
    setTimeout(function () {
      var messaggioRicevuto = $(".messaggio-ricevuto").clone();
      messaggioRicevuto.children("p").text("ok");
      $(".conversazione").append(messaggioRicevuto);
    }, 1000);
  });
  $(".fa-angle-down").click(function () {
    console.log("n");
    $(this).next().toggleClass("display-none");
  });
});
