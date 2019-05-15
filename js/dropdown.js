
$( document ).ready(function() {
  $( "#telegram" ).click(function() {
    $('#view_click1').removeClass('view_click1');
    $('#view_click1').addClass('view_click1_show');

    $('#view_click2').addClass('view_click2');
    $('#view_click2').removeClass('view_click2_show');

  });

  $( "#social" ).click(function() {
    $('#view_click1').addClass('view_click1');
    $('#view_click1').removeClass('view_click1_show');

    $('#view_click2').removeClass('view_click2');
    $('#view_click2').addClass('view_click2_show');

  });
});
