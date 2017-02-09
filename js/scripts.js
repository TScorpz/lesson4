$(document).ready(function() {
  $(".sprite-btn").click(function(){
    $(".blockquote").toggle();
  });
  $(".localFileData").click(function() {
    $.get("readme.txt", function(response) {
      $(".content").html(response);
    });
  });
  $(".externalData").click(function(){
    $.getJSON("http://www.colourlovers.com/api/palettes/random?jsonCallback=?",
      { numResults: 2 },
      function(colorPalettes) {
        $("body").css("background-color", "#" + colorPalettes[0].colors[0]);  //change body background color
        $('.boxes div').each(function(index, element) {
          $(this).css('background-color', '#' + colorPalettes[0].colors[++index]);  //change each div's background color
        });
      }
    );
  });
});
