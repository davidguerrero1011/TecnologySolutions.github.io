$(document).ready(function () {

	// Cuando cargue el dom, se cargan textos
	document.getElementById('titleHardware').innerHTML = palabras[2];
	document.getElementById('title').innerHTML = palabras[2];
	document.getElementById('showGlshowGlosaryosary').innerHTML = palabras[7];
	document.getElementById('videoTexts').innerHTML = palabras[10];
	document.getElementById('glosaryText').innerHTML = palabras[7];

	// Carga el video de instalacion cuando cargue el DOM
	$('#hardware').attr('src', '../assets/resources/images/pictures-video/hardware.png');
	$('#hardware').attr('width', '250');
	$('#hardware').attr('height', '200');
	
	// cuando cargue el dom, se carga el titulo
	$('#titleHardware').css('color', '#007bff');
	$('#titleHardware').css('text-shadow', '2px 2px 4px #fff');
	$('#titleHardware').css('font-size', '40px');
	$('#titleHardware').css('font-family', '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji');
	$('#titleHardware').css('color', '#007bff');

	// Se carga texto de boton y descarga cuando cargue el dom
	$('#showGlosary').text(palabras[7]);
	$('#fileDownloade').text(palabras[6]);

	// Se carga estilos en enlace
	$('#fileDownloade').css('color', '#fff');
	$('#fileDownloade').css('text-shadow', '2px 2px 4px #007bff');
	$('#fileDownloade').css('text-decoration', 'none');

	// Se carga ruta de destino en titulo sitio
	$('#navbarTitle').attr('href', '../index.html');

	// Se carga texto de titulo del contenido
	$('#titleBanner').css('font-family', 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace');
	$('#titleBanner').css('font-size', '18px');
	$('#titleBanner').css('background', 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)');
	$('#titleBanner').css('text-shadow', '8px 4px 4px black');


	// Slider Carousel
	let optionsCarousel;
	let code = document.getElementById("languages").value;
	let paths = ['../assets/resources/images/pictures-video/diagnose-computer.png', '../assets/resources/images/pictures-video/hardware.png', '../assets/resources/images/pictures-video/computer-corrective.png'];
	let youtubeDomains = ['https://www.youtube.com/watch?v=h81IeP1Lac4', 'https://www.youtube.com/watch?v=h81IeP1Lac4', 'https://www.youtube.com/watch?v=j_r72XJM5Vw'];
	let descriptions = ['Para ver test de prueba en Aida64, solo click aqui!!!', 'Para ver un mantenimiento preventivo, solo click aqui!!!', 'Para ver un mantenimiento correctivo, solo click aqui!!!'];
	let titles = ['Test Aida64', 'Mantenimiento Preventivo', 'Mantenimiento Correctivo'];

	for (let i = 0; i < paths.length; i++) {

		optionsCarousel += `<div class="carousel-item contenedor">`;
		optionsCarousel += `<a href="${youtubeDomains[i]}" target="_blank" rel="" id="hardwareLink" data-toggle="tooltip" data-placement="top" title="${descriptions[i]}">`;
		optionsCarousel += `<img src="${paths[i]}" alt="" id="hardware${[i]+1}" class="img-fluid">`;
		optionsCarousel += `<div class="texto-encima"></div>`;
		optionsCarousel += `<div class="centrado">${titles[i]}</div>`;
		optionsCarousel += `</a>`;
		optionsCarousel += `</div>`;

	}
	$('#carouselHardwareItems').append(optionsCarousel);


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

	document.getElementById('nextBoton').addEventListener('click', nextSlide);
	document.getElementById('prevBoton').addEventListener('click', previousSlide);

	
	$('#prevBoton').text(code == 0 || code == 1 ? palabras[23] : words[25]);
	$('#nextBoton').text(code == 0 || code == 1 ? palabras[22] : words[24]);
	// Slider Carousel End

	


	// Se crea el select
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

	$('.sel').click(function () {
		$(this).toggleClass('active');
	});

	$('.sel__box__options').click(function () {
		var txt = $(this).text();
		var index = $(this).index();

		$(this).siblings('.sel__box__options').removeClass('selected');
		$(this).addClass('selected');

		var $currentSel = $(this).closest('.sel');
		$currentSel.children('.sel__placeholder').text(txt);
		$currentSel.children('select').prop('selectedIndex', index + 1);
	});
	// Fin Se crea el select

});

// Se traduce el sitio dependiendo el idioma
function ShowSelected() {
	var cod = document.getElementById("languages").value;
	if (cod == 1) {
		document.getElementById('title').innerHTML = palabras[0];
		document.getElementById('navbarTitle').innerHTML = palabras[0];
		document.getElementById('menu1').innerHTML = palabras[1];
		document.getElementById('menu2').innerHTML = palabras[2];
		document.getElementById('menu3').innerHTML = palabras[5];
		document.getElementById('titleBanner').innerHTML = palabras[0];
		document.getElementById('titleHardware').innerHTML = palabras[2];
		document.getElementById('fileDownloade').innerHTML = palabras[6];
		document.getElementById('glosarioModalLabel').innerHTML = palabras[8];
		document.getElementById('prevBoton').innerHTML = palabras[23];
		document.getElementById('nextBoton').innerHTML = palabras[22];
		document.getElementById('image').innerHTML = palabras[24];
		document.getElementById('showGlshowGlosaryosary').innerHTML = palabras[7];
		document.getElementById('videoTexts').innerHTML = palabras[10];
		document.getElementById('glosaryText').innerHTML = palabras[7];
	} else {
		document.getElementById('title').innerHTML = words[0];
		document.getElementById('navbarTitle').innerHTML = words[0];
		document.getElementById('menu1').innerHTML = words[1];
		document.getElementById('menu2').innerHTML = words[2];
		document.getElementById('menu3').innerHTML = words[5];
		document.getElementById('titleBanner').innerHTML = words[0];
		document.getElementById('titleHardware').innerHTML = words[2];
		document.getElementById('fileDownloade').innerHTML = words[6];
		document.getElementById('glosarioModalLabel').innerHTML = words[17];
		document.getElementById('prevBoton').innerHTML = words[25];
		document.getElementById('nextBoton').innerHTML = words[24];
		document.getElementById('image').innerHTML = words[23];
		document.getElementById('showGlshowGlosaryosary').innerHTML = words[7];
		document.getElementById('videoTexts').innerHTML = words[9];
		document.getElementById('glosaryText').innerHTML = words[7];
	}
}


$('#showDetails').on('click', function() {
	$('#showDetailsDescription').removeClass('d-none');
})


// Cuando se de click en el boton glosario se cargan los estilos del modal
$('#showGlshowGlosaryosary').on('click', function () {
	let language = document.getElementById('languages').value;
	let hardwareContent = '';

	$('#glosarioModal').modal('show');
	$('#glosarioModalLabel').text(language == 0 || language == 1 ? palabras[8] : words[17]);
	$('#titleModal').text(language == 0 || language == 1 ? palabras[7] : words[7]);
	$('#modalBoton').text(language == 0 || language == 1 ? palabras[13] : words[12]);
	$('#modalBoton').css('font-family', 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace');
	$('.modal-body').addClass('text-center');
	$('.modal-body').css('color', '#007bff');
	$('.btn-close').css('background-color', '#fff');
	$('#image').text(language == 1 ? palabras[21] : words[23]);
	$('#image').css('font-family', 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace');
	$('#titlesGlosary').css('font-family', 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace');

	for (let i=0; i<hardwarePaths.length; i++) {
		hardwareContent += `<tr>`; 
		hardwareContent += `<th scope="row">${i+1}</th>`; 
		hardwareContent += `<td>
								<div class="nuestrocontenedor">
									<img class="nuestraimagen" src="${hardwarePaths[i]}">
									<div class="nuestrobloque">
										<div class="nuestrotexto p-3">${language == 0 || language == 1 ? hardwareSpanishDescriptions[i] : descriptionsTranslate[i]}</div>
										<p class="boldder-fontt">${language == 0 || language == 1 ?  hardwareGlosaryWords[i] : hardwareGlosaryTranslate[i]}<p>
									</div>
								</div>
							</td>`; 
		hardwareContent += `</tr>`;
		
	}
	$('#hardwareContent').append(hardwareContent);

});


// Cuando se da click en el enlace se descarga el documento
$('#fileDownloade').on('click', function () {

	let language = document.getElementById('languages').value;
	let path = language == '1' ? `../assets/resources/files/glosary/` : `../assets/resources/files/glosary/`;

	$('#fileDownloade').attr('href', `${path}glosario-hardware.pdf`);
	$('#fileDownloade').attr('download', `glosario-hardware.pdf`);
	$('#fileDownloade').attr('rel', `${palabras[7]}`);
	$('#fileDownloade').text(language == 1 ? `${palabras[7]}` : `${words[7]}`);

});


$('#hardwareLink').on('click', function() {
	
	
})