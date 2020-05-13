var indexjs=new function() {
	
	this.init=function() {

		szamlalojs.init('2020-08-31 23:59:59');
		
		$('.input input[type=text], .input textarea').blur(function() {
			if ($(this).val()=='') $(this).removeClass('input_nem_ures');
			else $(this).addClass('input_nem_ures');
		});
		
	}
	
}