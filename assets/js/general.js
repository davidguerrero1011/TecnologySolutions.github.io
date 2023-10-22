// texto Titulos 
$(document).ready(function () {

	// Cargara los textos en español por default en el index
	document.getElementById('title').innerHTML = `${palabras[0]} - Home`;
	document.getElementById('navbarTitle').innerHTML = palabras[0];
	document.getElementById('menu1').innerHTML = palabras[1];
	document.getElementById('menu2').innerHTML = palabras[2];
	document.getElementById('menu3').innerHTML = palabras[5];
	document.getElementById('titleBanner').innerHTML = palabras[0];

	// Carga algunos elementos con atributos por default
	$('#navbarTitle').attr('href', './index.html');
	$('#titleBanner').css('font-size', '14px');
	$('.colorlib-logo').css('text-decoration', 'none');

	// LLena el select de idiomas disponibles para traducir sitio
	let options;
	for (let i = 1; i < 2; i++) {
		options += '<option value="1">Español</option>';
		options += '<option value="2">Ingles</option>';
	}
	$('#languages').append(options);
	
	$('#titleBanner').css('font-family', 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace');
	$('#titleBanner').css('font-size', '18px');
	$('#titleBanner').css('background', 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)');
	$('#titleBanner').css('text-shadow', '8px 4px 4px black');

});

function ShowSelected() {
	var cod = document.getElementById("languages").value;
	if (cod == 1) {
		document.getElementById('title').innerHTML = palabras[0];
		document.getElementById('navbarTitle').innerHTML = palabras[0];
		document.getElementById('menu1').innerHTML = palabras[1];
		document.getElementById('menu2').innerHTML = palabras[2];
		document.getElementById('menu3').innerHTML = palabras[5];
		document.getElementById('titleBanner').innerHTML = palabras[0];
		document.getElementById('carruselBody').innerHTML = palabras[21];
		document.getElementById('buttonProject').innerHTML = palabras[23];
		document.getElementById('introduceModalLabel').innerHTML = palabras[22];
	} else {
		document.getElementById('title').innerHTML = words[0];
		document.getElementById('navbarTitle').innerHTML = words[0];
		document.getElementById('menu1').innerHTML = words[1];
		document.getElementById('menu2').innerHTML = words[2];
		document.getElementById('menu3').innerHTML = words[5];
		document.getElementById('titleBanner').innerHTML = words[0];
		document.getElementById('carruselBody').innerHTML = words[21];
		document.getElementById('buttonProject').innerHTML = words[23];
		document.getElementById('introduceModalLabel').innerHTML = words[22];
	}
}

// burguer navbar
(function ($) {

	"use strict";
	var fullHeight = function () {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function () {
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	var burgerMenu = function () {

		$('.js-colorlib-nav-toggle').on('click', function (event) {
			event.preventDefault();
			var $this = $(this);
			if ($('body').hasClass('menu-show')) {
				$('body').removeClass('menu-show');
				$('#colorlib-main-nav > .js-colorlib-nav-toggle').removeClass('show');
			} else {
				$('body').addClass('menu-show');
				setTimeout(function () {
					$('#colorlib-main-nav > .js-colorlib-nav-toggle').addClass('show');
				}, 900);
			}
		})
	};
	burgerMenu();

})(jQuery);


// Se agrega clase active al li que tenga el focus
$('#activeDinamyc li').on('mouseover', function () {
	$(this).parents('ul').find('li').removeClass('active').end().end().addClass('active');
	return false;
});


// Me redirigue en las opciones del menu principal a sistemas operativos o hardware
function redirecTo(view, type) {
	if (view == 1) {
		switch (type) {
			case 1:
				window.location.href = './views/operativeSystems.html';
				break;

			case 2:
				window.location.href = './views/hardwareIntroduction.html';
				break;

			case 3:
				window.location.href = './views/English.html';
				break;

			default:
				break;
		}

	} else if (view == 2) {
		switch (type) {
			case 1:
				window.location.href = './operativeSystems.html';
				break;

			case 2:
				window.location.href = './hardwareIntroduction.html';
				break;

			case 3:
				window.location.href = './English.html';
				break;

			default:
				break;
		}

	}
}


$('#buttonProject').on('click', function() {

	let language = document.getElementById('languages').value;
	$('.modal-body').text(language == 1 ? palabras[21] : words[21]);
	$('#carouselTitle').text(language == 1 ? palabras[22] : words[22]);
	$('#buttonProject').text(language == 1 ? palabras[13] : words[13]);
	$('#introduceModalLabel').text(palabras[22]);
	$('#introduceModalLabel').css('color', '#fff');
	$('.header-color').css('background-color', '#007bff');
	$('.btn-close').css('background-color', '#fff');
	$('#bodyModal').css('text-align', 'justify');

	("#carouselTitle1").text("Nicolas David Castro Zorrilla");

});