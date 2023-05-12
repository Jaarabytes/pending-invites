//going all out with jQuery, hope y'all like it.

$(document).ready(function() {
    $(".create-group").click(function() {
      $(this).css("background-color", "blue").animate({
        width: "100%",
        opacity: 0.7,
        fontSize: "27px"
      }, 1500);
    });
  
    $(".decline-group").click(function() {
      $(this).css({
        "background-color": "red",
        "color": "white",
        "font-size": "20px",
        "disabled" : true
      }).animate({
        width: "60%",
        "border-radius": "7px"
      }, 1200);
    });
    
    $(".join-group").click(function() {
        $(this).css({
          "background-color": "powderblue",
          "color": "white",
          "font-size": "20px",
          "disabled" : true
        }).animate({
          width: "60%",
          "border-radius": "7px"
        }, 1200);
      });
  });
  