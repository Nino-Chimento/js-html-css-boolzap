$(document).ready(function () {
  $("input").keypress(function () {
    if(event.which == 13 || event.keyCode == 13){
      console.log("n");
    }
  })
})
