$(document).ready(function () {
	document.getElementById('title').innerHTML = `${palabras[5]} - ${palabras[0]}`;
	document.getElementById('titleEnglish').innerHTML = `${palabras[5]}`;
	document.getElementById('textReport').innerHTML = `${palabras[16]}`;
	document.getElementById('technicalReport').innerHTML = `${palabras[19]}`;

	// Carga estilos de los titulos
	$('#titleEnglish').css('color', '#007bff');
	$('#titleEnglish').css('text-shadow', '2px 2px 4px #fff');
	$('#titleEnglish').css('font-size', '40px');
	$('#titleEnglish').css('font-family', '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji');

	// Carga el video de instalacion cuando cargue el DOM
	$('#englishVideo').attr('src', '../assets/resources/videos/operative-system-instalation.mp4');
	$('#englishVideo').attr('width', '454');
	$('#englishVideo').attr('height', '220');


	let pathInitial = `../assets/resources/files/report/`;

	$('#technicalReportt').attr('href', `${pathInitial}Tecnical-Report.pdf`);
	$('#technicalReportt').attr('download', `Tecnical-Report.pdf`);
	$('#technicalReportt').attr('rel', `${words[20]}`);
	$('#technicalReportt').css('color', '#fff');
	$('#technicalReportt').css('text-shadow', '6px 6px 10px black');
	$('#technicalReportt').css('text-decoration', 'none');

	$('#titleBanner').css('font-family', 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace');
	$('#titleBanner').css('font-size', '18px');
	$('#titleBanner').css('background', 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)');
	$('#titleBanner').css('text-shadow', '8px 4px 4px black');

	$('#navbarTitle').attr('href', '../index.html');


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


// Cuando se seleccione algun idioma, se español o ingles, lo traduce
function ShowSelected() {
	let cod = document.getElementById("languages").value;
	if (cod == 1) {
		document.getElementById('title').innerHTML = palabras[5];
		document.getElementById('titleEnglish').innerHTML = palabras[5];
		document.getElementById('technicalReport').innerHTML = palabras[19];
		document.getElementById('textReport').innerHTML = `${palabras[16]}`;
		document.getElementById('titleBanner').innerHTML = `${palabras[0]}`;
	} else {
		document.getElementById('title').innerHTML = words[5];
		document.getElementById('titleEnglish').innerHTML = words[5];
		document.getElementById('textReport').innerHTML = `${words[16]}`;
		document.getElementById('technicalReport').innerHTML = words[19];
		document.getElementById('titleBanner').innerHTML = words[0];
	}
}


$('#technicalReport').on('click', function () {

	$('#reportModalLabel').text(words[20]);
	$('#descriptionReport').text(words[47]);
	$('.modal-header').css('background-color', '#007bff');
	$('.btn-close').css('background-color', '#fff');
	$('#descriptionReport').css('font-family', 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace');
	$('#reportModalLabel').css('font-family', 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace');
	$('#reportModalLabel').css('color', '#fff');
	$('#buttonOk').text(words[13]);
	$('#reportModal').modal('show');

});