$ (document).ready (main);

bar contador =1;

function main (){
	$('.menu-bar').clik(function)
}		//$('nav').toggle();


	if (contador= 1) {
		$('nav').animate({
			left= '0'
		});
		contador=0;
	 else{
	 	contador= 1;
	 	$('nav').animate({
			left= '-100%'
	 	});
	}



//const menu = document.getElementByid('menu')
//const btn = document.getElementByid('btn_mover')
//btn.onclick = function mover(){
//	menu.classlist.toggle ('mover')
}
