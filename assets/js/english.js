$(document).ready(function () {

	// Cuando cargue el dom se cargan los titulos de la pagina
	document.getElementById('title').innerHTML = `${palabras[5]} - ${palabras[0]}`;
	document.getElementById('titleEnglish').innerHTML = `${palabras[5]}`;
	document.getElementById('textReport').innerHTML = `${palabras[17]}`;
	document.getElementById('technicalReport').innerHTML = `${palabras[16]}`;

	// Cuando Cargue el dom cargan estilos de los titulos
	$('#titleEnglish').css('color', '#007bff');
	$('#titleEnglish').css('text-shadow', '2px 2px 4px #fff');
	$('#titleEnglish').css('font-size', '40px');
	$('#titleEnglish').css('font-family', '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji');

	// Cuando cargue el dom carga la imagen de instalacion
	$('#englishVideo').attr('src', '../assets/resources/images/pictures-video/bilingualism.png');
	$('#englishVideo').attr('alt', 'English Video Technical Report');
	$('#englishVideo').attr('width', '250');
	$('#englishVideo').attr('height', '200');

	// Cuando cargue dom, se carga los estilos del titulo de la pagina
	$('#titleBanner').css('font-family', 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace');
	$('#titleBanner').css('font-size', '18px');
	$('#titleBanner').css('background', 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)');
	$('#titleBanner').css('text-shadow', '8px 4px 4px black');

	$('#navbarTitle').attr('href', '../index.html');


	// Cuando cargue el dom se cargara el select de idiomas
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

	// dependiendo del idioma que seleccione, se pondra el estado activo con la clase active
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

});


// Cuando se seleccione algun idioma, se español o ingles, lo traduce
function ShowSelected() {
	let cod = document.getElementById("languages").value;
	if (cod == 1) {
		document.getElementById('title').innerHTML = palabras[5];
		document.getElementById('titleEnglish').innerHTML = palabras[5];
		document.getElementById('technicalReport').innerHTML = palabras[16];
		document.getElementById('textReport').innerHTML = `${palabras[17]}`;
		document.getElementById('titleBanner').innerHTML = `${palabras[0]}`;
		document.getElementById('navbarTitle').innerHTML = `${palabras[0]}`;
		document.getElementById('menu1').innerHTML = `${palabras[1]}`;
		document.getElementById('menu2').innerHTML = `${palabras[2]}`;
		document.getElementById('menu3').innerHTML = `${palabras[5]}`;
	} else {
		document.getElementById('title').innerHTML = words[5];
		document.getElementById('titleEnglish').innerHTML = words[5];
		document.getElementById('textReport').innerHTML = `${words[19]}`;
		document.getElementById('technicalReport').innerHTML = words[18];
		document.getElementById('titleBanner').innerHTML = words[0];
		document.getElementById('navbarTitle').innerHTML = `${words[0]}`;
		document.getElementById('menu1').innerHTML = words[1];
		document.getElementById('menu2').innerHTML = words[2];
		document.getElementById('menu3').innerHTML = words[5];
	}
}

// Cuando se de click en el boton del reporte llama el reporte junto con sus estilos
$('#technicalReport').on('click', function () {

	$('#reportModalLabel').text(words[19]);
	$('#descriptionReport').text(words[22]);
	$('.modal-header').css('background-color', '#007bff');
	$('.btn-close').css('background-color', '#fff');
	$('#descriptionReport').css('font-family', 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace');
	$('#reportModalLabel').css('font-family', 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace');
	$('#reportModalLabel').css('color', '#fff');
	$('#buttonOk').text(words[12]);
	$('#reportModal').modal('show');

});

// Se agrega atributos para descargar reporte tecnico en ingles 
// en el enlace de descarga
$('#technicalReportt').on('click', function() {

	let pathEnglish = '../assets/resources/files/report/';
	$('#technicalReportt').attr('rel', 'Report');
	$('#technicalReportt').attr('download', 'Tecnical-report.pdf');
	$('#technicalReportt').attr('href', `${pathEnglish}Tecnical-report.pdf`);

});
