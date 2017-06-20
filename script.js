console.log('im ready');

$(".arrow-down")
  .click(function() {
    $("#bounce")
      .animate({height: 0}, 1000,"linear", function() {
    $(this).remove();
    })
  }
);
