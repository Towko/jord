$(document).ready(function () {

	if(window.innerWidth > 1299) {
		var gap = (window.innerWidth/2 - 642/2);
		$(".blockIntro").css({'margin-left':gap+'px','margin-right':gap+'px','transition':'.5s'});

		window.onresize = function(event) {
			gap = (window.innerWidth/2 - 642/2);
			console.log(gap);
			$(".blockIntro").css({'margin-left':gap+'px','margin-right':gap+'px','transition':'.3s'});
		}

		var slider1 = $("#slick1");
		var slider2 = $("#slick2");
		var bar = 0;
		var menu = 0;

		$(".price").click(function () {
			if (bar == 1) {

				slider2.delay(50).queue(function(next){
					$(this).css({"left":"1000px","transition":".7s"});
					next();
				});

				slider2.delay(700).queue(function (next){
					$(this).css({'display':'none'});
					next();
				});

				slider1.delay(50).queue(function (next){
					$(this).css({'display':'block'});
					next();
				});
				slider1.delay(350).queue(function(next){
					$(this).css({"left":"0","transition":".7s"});
					next();
				});
				menu = 1;
			} else {
				$(".blockIntro").addClass("active");
				menu = 1;
				gap = (window.innerWidth - 642*2)/3;
				$(".blockIntro").css({'margin-left':gap+'px','margin-right':gap/2+'px','transition':'1s'});
				$(".menuBlock").css({'width':'642px','opacity':'1','transition':'1s','margin-right':gap+'px','margin-left':gap/2+'px','margin-right':gap+'px'});

				window.onresize = function(event) {
					gap = (window.innerWidth - 642*2)/3;
					$(".blockIntro").css({'margin-left':gap+'px','margin-right':gap/2+'px','transition':'.5s'});
					$(".menuBlock").css({'width':'642px','opacity':'1','transition':'.5s','margin-right':gap+'px','margin-left':gap/2+'px','margin-right':gap+'px'});
				}

				setTimeout(function(){
					slider1.delay(50).queue(function (next){
						$(this).css({'display':'block'});
						next();
					});
					slider1.delay(50).queue(function(next){
						$(this).css({"left":"0","transition":".7s"});
						next();
					});
					
					$(".menuBlock .item").show();
				}, 50)
			}
		});

		$(".bar").click(function () {
			if (menu == 1) {
				
				slider1.delay(50).queue(function(next){
					$(this).css({"left":"1000px","transition":".7s"});
					next();
				});
				slider1.delay(700).queue(function (next){
					$(this).css({'display':'none'});
					next();
				});

				slider2.delay(50).queue(function (next){
					$(this).css({'display':'block'});
					next();
				});
				slider2.delay(350).queue(function(next){
					$(this).css({"left":"0","transition":".7s"});
					next();
				});
				
				bar = 1;
			} else {
				$(".blockIntro").addClass("active");
				bar = 1;
				gap = (window.innerWidth - 642*2)/3;
				$(".blockIntro").css({'margin-left':gap+'px','margin-right':gap/2+'px','transition':'1s'});
				$(".menuBlock").css({'width':'642px','opacity':'1','transition':'1s','margin-right':gap+'px','margin-left':gap/2+'px','margin-right':gap+'px'});

				window.onresize = function(event) {
					gap = (window.innerWidth - 642*2)/3;
					$(".blockIntro").css({'margin-left':gap+'px','margin-right':gap/2+'px','transition':'.5s'});
					$(".menuBlock").css({'width':'642px','opacity':'1','transition':'.5s','margin-right':gap+'px','margin-left':gap/2+'px','margin-right':gap+'px'});
				}

				setTimeout(function(){
					slider2.queue(function (next){
						$(this).css({'display':'block',"left":"1500px"});
						next();
					});
					slider2.queue(function(next){
						$(this).css({"left":"0","transition":".7s"});
						next();
					});
					
					$(".menuBlock .item").show();
				}, 50)
			}
		});

	} else {

		$(".price").click(function () {
			$('html, body').animate({
				scrollTop: $('#slick1').offset().top
			}, 800);
		})

		$(".bar").click(function () {
			$('html, body').animate({
				scrollTop: $('#slick2').offset().top
			}, 1600);
		})

		document.querySelectorAll('.uplink a').forEach(anchor => {
			anchor.addEventListener('click', function (e) {
				e.preventDefault();
		
				document.querySelector(this.getAttribute('href')).scrollIntoView({
					behavior: 'smooth'
				});
			});
		});	


		var ua = navigator.userAgent;

	    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua)) {
	       $('.blockIntro').css("height","100vh");

	    } else if(/Chrome/i.test(ua)) {
	       $('.blockIntro').css("height","-webkit-fill-available");
	    }

	    else {
	       $('.blockIntro').css("height","100vh");
	    }
	}



	$(".about").click(function () {
		$(".info.mobb").toggle(700);
	});
	
	new WOW().init();

});