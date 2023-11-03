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
		options += '<option value="0" selected>Seleccione un idioma</option>';
		options += '<option value="1">Español</option>';
		options += '<option value="2">Ingles</option>';
	}
	$('#languages').append(options);

	$('#titleBanner').css('font-family', 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace');
	$('#titleBanner').css('font-size', '18px');
	$('#titleBanner').css('background', 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)');
	$('#titleBanner').css('text-shadow', '8px 4px 4px black');


	// Slider Carousel
	let optionsCarousel;
	let code = document.getElementById("languages").value;
	let names = ['Andres Geronimo Parra', 'Maicol Antonio Nuñez', 'Nicolas David Castro Zorrilla', 'Wilmar David Macias Guerrero'];
	let paths = ['./assets/resources/images/Geronimo.jpeg', './assets/resources/images/maicol.jpeg', './assets/resources/images/nicolas.jpeg', './assets/resources/images/will.jpeg'];

	for (let i = 0; i < names.length; i++) {
		optionsCarousel += `<div class="carousel-item">`;
		optionsCarousel += `<img class="nuestraimagen" src="${paths[i]}" alt="${names[i]}">`;
		optionsCarousel += `<div class="nuestrobloque">`;
		optionsCarousel += `<div class="nuestrotexto p-3">${names[i]}</div>`;
		optionsCarousel += `<p class="boldder-fontt p-3 text-white" id="studentDescription">${names[i]} ${code == '1' || code == '0' ? palabras[27+Number(i)] : words[26 + Number(i)]}<p>`;
		optionsCarousel += `</div>`;
		optionsCarousel += `</div>`;

	}
	$('#carouselItems').append(optionsCarousel);


	const carouselItems = document.querySelectorAll('.carousel-item');
	let currentIndex = 0;

	function showSlide(index) {
		carouselItems.forEach(item => {
			item.style.display = 'none';
		});
		carouselItems[index].style.display = 'block';
	}

	function nextSlide() {
		currentIndex = (currentIndex + 1) % carouselItems.length;
		showSlide(currentIndex);
	}

	function previousSlide() {
		currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
		showSlide(currentIndex);
	}

	showSlide(currentIndex);

	document.getElementById('nextBtn').addEventListener('click', nextSlide);
	document.getElementById('prevBtn').addEventListener('click', previousSlide);

	
	$('#prevBtn').text(code == '0' || code == '1' ? palabras[26] : palabras[26]);
	$('#nextBtn').text(code == '0' || code == '1' ? palabras[25] : palabras[25]);
	// Slider Carousel End


	// Select Language Options
	$('.sel').each(function () {
		$(this).children('select').css('display', 'none');

		var $current = $(this);

		$(this).find('option').each(function (i) {
			if (i == 0) {
				$current.prepend($('<div>', {
					class: $current.attr('class').replace(/sel/g, 'sel__box')
				}));

				var placeholder = $(this).text();
				$current.prepend($('<span>', {
					class: $current.attr('class').replace(/sel/g, 'sel__placeholder'),
					text: placeholder,
					'data-placeholder': placeholder
				}));

				return;
			}

			$current.children('div').append($('<span>', {
				class: $current.attr('class').replace(/sel/g, 'sel__box__options'),
				text: $(this).text()
			}));
		});
	});

	// Toggling the `.active` state on the `.sel`.
	$('.sel').click(function () {
		$(this).toggleClass('active');
	});

	// Toggling the `.selected` state on the options.
	$('.sel__box__options').click(function () {
		var txt = $(this).text();
		var index = $(this).index();

		$(this).siblings('.sel__box__options').removeClass('selected');
		$(this).addClass('selected');

		var $currentSel = $(this).closest('.sel');
		$currentSel.children('.sel__placeholder').text(txt);
		$currentSel.children('select').prop('selectedIndex', index + 1);
	});

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
		document.getElementById('introduceModalLabel').innerHTML = palabras[22];
		document.getElementById('prevBtn').innerHTML = palabras[26];
		document.getElementById('nextBtn').innerHTML = palabras[25];
	} else {
		document.getElementById('title').innerHTML = words[0];
		document.getElementById('navbarTitle').innerHTML = words[0];
		document.getElementById('menu1').innerHTML = words[1];
		document.getElementById('menu2').innerHTML = words[2];
		document.getElementById('menu3').innerHTML = words[5];
		document.getElementById('titleBanner').innerHTML = words[0];
		document.getElementById('introduceModalLabel').innerHTML = words[22];
		document.getElementById('prevBtn').innerHTML = words[25];
		document.getElementById('nextBtn').innerHTML = words[24];
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

const selects = document.querySelectorAll('.select');
window.addEventListener('DOMContentLoaded', () => {
	selects.forEach(select => {
		const button = select.querySelector('button');
		const full_height = [];
		[...select.querySelectorAll('div > a')].map(link => {
			const styles = window.getComputedStyle(link);
			const box = link.getBoundingClientRect();
			const margin = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom) || 0;
			const height = box.height + margin;
			full_height.push(height);
			link.addEventListener('click', () => {
				const link_text = link.textContent;
				const button_text = button.textContent;
				button.textContent = link_text;
				button.style.animationName = "popOut";
				button.addEventListener("animationend", () => {
					button.style.animationName = "none"
				});
				const span = document.createElement('span');
				span.textContent = button_text;
				link.innerHTML = "";
				link.appendChild(span)
				link.blur()
			})
		});
		const totalHeight = full_height.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
		select.dataset.totalHeight = totalHeight;
		select.style.setProperty('--max-height', totalHeight);
	});
});

// 
$('#carouselItems').on('mouseover', function() {
	let code = document.getElementById('languages').value;
	for (let i = 0; i<4; i++) {
		$('#studentDescription').text(code == 2 ? words[26+i] : palabras[27+i]);
	}
});
