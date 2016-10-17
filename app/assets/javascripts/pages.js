
$(function() {
	$('#chemistry').hide();
	$('#maths').hide();
	$('#physics').hide();
	$('#gravity').hide();
  $('#span').hide();
	
  
$( ".btn-primary" ).click(function() {
  var value = $( this ).text();
  $( this ).closest('div').hide();
  $( this ).closest('div').parent().children('span').text(value).addClass('btn btn-primary').fadeIn(2000);
  
  switch(value){
  	case "Chemistry":
  		$('#chemistry').fadeIn('slow');
  	break;
    case "Gravity":
      $('#gravity').fadeIn('slow');
      break;
  	case "Maths":
  		$('#maths').fadeIn('slow');
    break;
    case "Physics":
  		$('#physics').fadeIn('slow');
    break;
  }
  $("html, body").animate({ scrollTop: $(document).height() }, 2000);
});   
})(jQuery); 


