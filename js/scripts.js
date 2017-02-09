$(document).ready(function() {
  $(".sprite-btn").click(function(){
    $(".blockquote").toggle();
  });
  $(".localFileData").click(function() {
    $.get("readme.txt", function(response) {
      console.log(response);
      $(".content").html(response);
    });
  });
  $(".externalData").click(function(){
    $.getJSON("http://www.colourlovers.com/api/palettes/random?jsonCallback=?",
      { numResults: 1 },
          function(colorPalettes) {
          $("body").css("background-color", "#" + colorPalettes[0].colors[0]);
      }
    );
  });
});
