$(function() {
    $('#how').hide();
    $('#lets-learn').hide();
    $('#brazil').hide();
    $('#portugal').hide();
  $('#argentina').hide();
  $('#list-of-chapters').hide();
  $('#more-fun-facts').hide();
  $('#inside-our-earth').hide();
  $('#layers-of-earth').hide();
  $('#crust').hide();
  $('#mantle').hide();
  $('#core').hide();
  $('#more-metamorphic-rocks').hide();
    $('#next-rock-type').hide();
  $('#last-rock-type').hide();
  $('#formation-of-rocks').hide();

$( ".btn-primary" ).click(function() {
  var value = $( this ).text();
  $( this ).closest('div').hide();
  $( this ).closest('div').parent().children('span').text(value).addClass('btn btn-primary').fadeIn(2000);
 
  switch(value){
      case "How? (click here)":
          $('#how').fadeIn('slow');
      break;
    case "Let's Learn!":
      $('#lets-learn').fadeIn('slow');
      break;
      case "Brazil":
          $('#brazil').fadeIn('slow');
    break;
    case "Argentina":
          $('#argentina').fadeIn('slow');
    break;
    case "Portugal":
      $('#portugal').fadeIn('slow');
    break;
    case "List of Chapters":
      $('#list-of-chapters').fadeIn('slow');
    break;
    case "More fun facts!":
      $('#more-fun-facts').fadeIn('slow');
    break;
    case "Inside Our Earth":
      $('#inside-our-earth').fadeIn('slow');
    break;
    case "Layers of Earth":
      $('#layers-of-earth').fadeIn('slow');
    break;
    case "Crust":
      $('#crust').fadeIn('slow');
    break;
    case "Mantle":
      $('#mantle').fadeIn('slow');
    break;
    case "Core":
      $('#core').fadeIn('slow');
    break;
    case "More Metamorphic Rocks":
      $('#more-metamorphic-rocks').fadeIn('slow');
    break;
    case "Next Rock Type":
      $('#next-rock-type').fadeIn('slow');
    break;
    case "Last Rock Type":
      $('#last-rock-type').fadeIn('slow');
    break;
    case "Formation of Rocks":
      $('#formation-of-rocks').fadeIn('slow');
    break;
  }
  $("html, body").animate({ scrollTop: $(document).height() }, 2000);
});  
})(jQuery); 