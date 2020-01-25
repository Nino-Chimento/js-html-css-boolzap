$(document).ready(function () {
  $("#invio").keypress(function () {
    if(event.which == 13 || event.keyCode == 13) {
      data = new Date();
      ore = data.getHours();
      minuti = data.getMinutes();
      time = ore+":"+minuti;
        var testo = $("#invio").val();
        var nuovoElemento = $(".template .copia").clone();
        nuovoElemento.find("p").text(testo);
        nuovoElemento.find("small").text(time);
        $("#invio").val("");
        $(".conversazione").append(nuovoElemento);

        setTimeout(function () {
          var messaggioRicevuto = $(".template .copia-ricevuto").clone();
          messaggioRicevuto.children("p").text("ok");
          messaggioRicevuto.children("small").text(time);
          $(".conversazione").append(messaggioRicevuto);
        }, 1000);
      }
    })
    $(".fa-telegram-plane").click(function () {
      var testo = $("#invio").val();
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
    $(".cerca-utente").keypress(function () {
      if(event.which == 13 || event.keyCode == 13){
        var datoRicerca = $(".cerca-utente").val();
        var riga = $(".wrap-menu-utenti li");
        for (var i = 0; i < riga.length; i++) {
          var name = $(".wrap-menu-utenti").find("h4").eq(i).text();
          if (name.includes(datoRicerca)) {
            riga.eq(i).show();
          }
          else {
            riga.eq(i).hide();
          }
        }
      }
    });
    $(".cerca-utente").keyup(function () {
      var datoRicerca = $(".cerca-utente").val();
      var riga = $(".wrap-menu-utenti li");
      for (var i = 0; i < riga.length; i++) {
        var name = $(".wrap-menu-utenti").find("h4").eq(i).text();
        if (name.includes(datoRicerca)) {
          riga.eq(i).show();
        }
        else {
          riga.eq(i).hide();
        }
      }
    });
    $(".div-search i").click(function () {
      var datoRicerca = $(".cerca-utente").val();
      var riga = $(".wrap-menu-utenti li");
      for (var i = 0; i < riga.length; i++) {
        var name = $(".wrap-menu-utenti").find("h4").eq(i).text();
        // console.log(name);
        if (name.includes(datoRicerca)) {
          riga.eq(i).show();
        }
        else {
          riga.eq(i).hide();
        }
      }
    });

    // cancellazione messaggi
    $(".fa-angle-down").click(function () {
      $(this).find("menu-cancellazione").toggleClass("display-none");
    });
    $(".delete").click(function () {
      $(this).parents(".contenitore-messaggio-inviato").remove();
    });
    $(document).on("click",".fa-angle-down",function () {
      $(this).next().toggleClass("display-none");
    });
    $(document).on("click",".delete",function () {
      $(this).parents(".contenitore-messaggio-inviato").remove();
    })
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
  });
