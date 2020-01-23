$(document).ready(function () {
  $("#invio").keypress(function () {
    if(event.which == 13 || event.keyCode == 13) {
        var testo = $("#invio").val();
        console.log(testo);
        var nuovoElemento = $(".copia").clone();
        nuovoElemento.find("p").text(testo);
        $("#invio").val("");
        $(".conversazione").append(nuovoElemento);
        setTimeout(function () {
          var messaggioRicevuto = $(".messaggio-ricevuto").clone();
          messaggioRicevuto.children("p").text("ok");
          $(".conversazione").append(messaggioRicevuto);
        }, 1000);
      }
    })
  $(".fa-telegram-plane").click(function () {
    var testo = $("#invio").val();
    console.log(testo);
    var nuovoElemento = $(".copia").clone();
    nuovoElemento.find("p").text(testo);
    $(".conversazione").append(nuovoElemento);
    $("#invio").val("");
    setTimeout(function () {
      var messaggioRicevuto = $(".messaggio-ricevuto").clone();
      messaggioRicevuto.children("p").text("ok");
      $(".conversazione").append(messaggioRicevuto);
    }, 1000);
  });
  // cerca utente
  $(".cerca-utente").keypress(function () {
    if(event.which == 13 || event.keyCode == 13) {
      var ricerca = $(".cerca-utente").val();
      console.log(ricerca);
      numeroElementi = $(".wrap-menu-utenti li").length
      for (var i = 0; i < numeroElementi; i++) {
        numeroElementi[i]
      }
    }
  });

  // cancellazione messaggi
  $(".fa-angle-down").click(function () {
    $(this).next().toggleClass("display-none")
  });


  });
  $(".delete").click(function () {
    console.log("N");
    $(this).parents(".contenitore-messaggio-inviato").remove();
});
