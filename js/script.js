$(document).ready(function () {
  $("#invio").keypress(function () {
    if(event.which == 13 || event.keyCode == 13) {
      data = new Date();
      ore = data.getHours();
      minuti = data.getMinutes();
      time = ore+":"+minuti;
        var testo = $("#invio").val();
        if (testo.length != 0) {
          var nuovoElemento = $(".template .copia").clone();
          nuovoElemento.find("p").text(testo);
          nuovoElemento.find("small").text(time);
          $("#invio").val("");
          $(".conversazione.active").append(nuovoElemento);
          scrollMessage();
          setTimeout(function () {
            var messaggioRicevuto = $(".template .copia-ricevuto").clone();
            messaggioRicevuto.children("p").text("ok");
            messaggioRicevuto.children("small").text(time);
            $(".conversazione.active").append(messaggioRicevuto);
            scrollMessage();
          }, 1000);

        }
      }
    })
    $(".fa-telegram-plane").click(function () {
      data = new Date();
      ore = data.getHours();
      minuti = data.getMinutes();
      time = ore+":"+minuti;
      var testo = $("#invio").val();
      if (testo != 0) {
        var nuovoElemento = $(".template .copia").clone();
        nuovoElemento.find("p").text(testo);
        nuovoElemento.find("small").text(time);
        $(".conversazione.active").append(nuovoElemento);
        $("#invio").val("");
        scrollMessage();
        setTimeout(function () {
          var messaggioRicevuto = $(".template .messaggio-ricevuto").clone();
          messaggioRicevuto.children("p").text("ok");
          messaggioRicevuto.children("small").text(time);
          $(".conversazione.active").append(messaggioRicevuto);
          scrollMessage();
        }, 1000);

      }
    });
    // cerca utente

    $(".cerca-utente").keyup(function () {
      var datoRicerca = $(".cerca-utente").val().toLowerCase();
      var riga = $(".wrap-menu-utenti li");
      for (var i = 0; i < riga.length; i++) {
        var name = $(".wrap-menu-utenti").find("h4").eq(i).text().toLowerCase();
        if (name.includes(datoRicerca)) {
          riga.eq(i).show();
        }
        else {
          riga.eq(i).hide();
        }
      }
    });
    $(".div-search i").click(function () {
      var datoRicerca = $(".cerca-utente").val().toLowerCase();
      var riga = $(".wrap-menu-utenti li");
      for (var i = 0; i < riga.length; i++) {
        var name = $(".wrap-menu-utenti").find("h4").eq(i).text().toLowerCase();
        if (name.includes(datoRicerca)) {
          riga.eq(i).show();
        }
        else {
          riga.eq(i).hide();
        }
      }
    });

    // cancellazione messaggi

    $(document).on("click",".fa-angle-down",function () {
      $(this).next().toggleClass("display-none");
      $(this).parents(".contenitore-messaggio-inviato").siblings(".contenitore-messaggio-inviato").find(".menu-cancellazione").addClass("display-none");
      $(this).parents(".contenitore-messaggio-inviato").siblings(".messaggio-ricevuto").find(".menu-cancellazione").addClass("display-none");
      $(this).parents(".messaggio-ricevuto").siblings(".contenitore-messaggio-inviato").find(".menu-cancellazione").addClass("display-none");
      $(this).parents(".messaggio-ricevuto").siblings(".messaggio-ricevuto").find(".menu-cancellazione").addClass("display-none");
    });
    $(document).on("click",".delete",function () {
      $(this).parents(".contenitore-messaggio-inviato").remove();
      $(this).parents(".messaggio-ricevuto").remove();
    })
    // caht attiva
    $(".wrap-menu-utenti li").click(function () {
      var posizione =$(this).attr("data-element")-1;
      var chatActive = $(".active");
      chatActive.removeClass("active");
      $(".conversazione").eq(posizione).addClass("active");
      var chatImg = $(this).children("img");
      var chatPush = chatImg.clone();
      var nome = $(this).find("h4");
      var nomePush = nome.clone();
      $(".intestazione-header img").remove();
      $(".testo-accanto-img h4").remove();
      $(".intestazione-header").prepend(chatPush);
      $(".testo-accanto-img").prepend(nomePush);
    });

    $(".wrap-menu-utenti li").click(function () {
      var chat = $(this);


      $("#invio").keypress(function () {
        if(event.which == 13 || event.keyCode == 13){
          $(".lista-utenti").prepend(chat);
        }
      })
    })
    $(".scrittura-messaggi input").focus(function () {
      $(".scrittura-messaggi .fa-microphone").toggleClass("display-none");
      $(".scrittura-messaggi .fa-telegram-plane").toggleClass("display-none");
    });
    $(".scrittura-messaggi input").focusout(function () {
      setTimeout(function () {
        $(".scrittura-messaggi .fa-microphone").toggleClass("display-none");
        $(".scrittura-messaggi .fa-telegram-plane").toggleClass("display-none");
      }, 200);

    })
  });
function scrollMessage() {
  var altezza =  $(".conversazione.active").height();
  $(".contenitore-messaggi").scrollTop(altezza);
}
