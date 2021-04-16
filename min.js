$(document).ready(function(){

	// show header
	$('#btn-star').click(function(){
		$(this).hide();
		$('#header').fadeIn()
		window.setTimeout(function(){
			$('body').removeClass('is-load')
		},100)

	})

	// show contact
	// $('#contacts').click(function(){
	// 	$('#header').hide();
	// 	$('#contact').fadeIn(1500);
		
	// })
	// $('#abouts').click(function(){
	// 	$('#header').hide();
	// 	$('#about').fadeIn(1500);
		
	// })
	// $('#intros').click(function(){
	// 	$('#header').hide();
	// 	$('#intro').fadeIn(1500);
		
	// })
	// $('#works').click(function(){
	// 	$('#header').hide();
	// 	$('#work').fadeIn(1500);
		
	// })
	$('.menu-item').click(function(e){
		e.preventDefault();
		let header=$('#header')
		let type=this.getAttribute('data-type')
		header.hide();
		showMenu(type);

	})
	function showMenu(f){
		let menuitems=$('.elements-' + f)
			menuitems.fadeIn();
			// for( var i=0;i<menuitems.length;i++){
			// menuitems[i].style.display="block";	
			// }

			

	}

	// close window contact
	$('.close').click(function(){
		$('.element').fadeOut();
		$('#header').fadeIn(1000);
		
	})
})
			

