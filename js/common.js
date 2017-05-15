$(document).ready(function() {
	// toggle menu
	$('.menu ul li').click(function(){
		$('.menu ul li').removeClass('active');
		$(this).toggleClass('active');
	});
	// top_slider
	var mainImages = ['slide_1.jpg','slide_2.jpg','slide_3.jpg','slide_4.jpg'];
	var current = 0;
	$('.top_slider').css('background-image', 'url("img/'+mainImages[current]+'")');
	for (var i = 0; i < mainImages.length; i++) {
		$('.dots').append('<div data-img="'+i+'" class="dot">');
	}
	$('.dot').eq(0).addClass('active');
	$('.dot').click(function(){
		$('.dot').removeClass('active');
		$(this).addClass('active');
		current = $(this).attr('data-img');
		$('.top_slider').css('background-image', 'url("img/'+mainImages[current]+'")');
	});
	// checkbox
	$('.contact label input').change(function() {
		$(this).siblings('span').toggleClass('checked');
	});
	// product_slider
	var productImages = ['product_1.png','product_2.png','product_3.png','product_4.png'];
	var currentImage = 0;
	$('.product__slider img').attr('src', 'img/'+productImages[currentImage]);
	for (var i = 0; i < productImages.length; i++) {
		$('.product_dots').append('<div data-img="'+i+'" class="product_dot">');
	}
	$('.product_dot').eq(0).addClass('active');
	$('.product_dot').click(function(){
		$('.product_dot').removeClass('active');
		$(this).addClass('active');
		currentImage = $(this).attr('data-img');
		$('.product__slider img').attr('src', 'img/'+productImages[currentImage]);
	});
	// mobile menu btn
	$('.toggle_btn').click(function(){
		$(".sandwich").toggleClass("active");
		if($('.menu').is(':visible')) {
			$('.menu').slideUp(300);
		} else {
			$('.menu').slideDown(300);
		};
	});
	// validation
	$('#form').validate({
		rules: {
			name: {
				required: true
			},
			surname: {
				required: true
			},
			email: {
				required: true,
				email: true
			},
			accept: {
				required: true
			}
		}
	});
	$('.form_item').click(function(){
		if($(this).hasClass('error')){
			$(this).css('border', '1px solid #efefef')
		}
		else if($(this).hasClass('error')){
			$(this).css('border', '1px solid #ff0000');
		}
	});
	$('#form').submit(function() {
		if(  $(this).find('.form_item').valid()  ){
			$(this).find('.form_item').css('border', '1px solid #efefef');
		}
		else{
			$(this).find('.form_item').css('border', '1px solid #ff0000');
		}
	});
	$('#subscribe').validate({
		rules: {
			subscribe: {
				required: true,
				email: true
			}
		}
	});
	$('#subscribe').submit(function() {
		if(  $(this).find('input').hasClass('error')  ){
			$(this).css('border', '1px solid #ff0000');
		}
		else{
			$(this).css('border', '1px solid #484848');
		}
	});
	// btn_up scroll
	$('.btn_up').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 700);
		return false;
	});
		
});