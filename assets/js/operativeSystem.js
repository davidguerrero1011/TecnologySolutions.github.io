// texto Titulos 
$(document).ready(function () {

	// Cargara los textos en español por default
	document.getElementById('languageSelected').innerHTML = palabras[3];
	document.getElementById('titleSystems').innerHTML = palabras[1];
    document.getElementById('option1').innerHTML = palabras[4];
	document.getElementById('option2').innerHTML = palabras[5];
	document.getElementById('glosaryDownload').innerHTML = palabras[6];
	document.getElementById('glosario').innerHTML = palabras[7];
	document.getElementById('title').innerHTML = palabras[1];
	document.getElementById('menu1').innerHTML = palabras[1];
	document.getElementById('menu2').innerHTML = palabras[2];
	document.getElementById('menu3').innerHTML = palabras[5];
	document.getElementById('titleBanner').innerHTML = palabras[0];
	document.getElementById('videoText').innerHTML = palabras[10];
	document.getElementById('tabText').innerHTML = palabras[11];
	
    
    // Carga estilos de los titulos
	$('#titleSystems').css('color', '#007bff');
	$('#titleSystems').css('text-shadow', '2px 2px 4px #fff');
	$('#titleSystems').css('font-size', '40px');
	$('#titleSystems').css('font-family', '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji');

	// Carga el video de instalacion cuando cargue el DOM
	$('#instalationSystemOperative').attr('src', '../assets/resources/videos/operative-system-instalation.mp4');
	$('#instalationSystemOperative').attr('width', '454');
	$('#instalationSystemOperative').attr('height', '220');

	// Llena el select con los nombres de los sistemas operativos
	let systems = ['Kali Linux', 'Kali Linux Booteado', 'Centos', 'Ubuntu', 'Oracle', 'Fedora'];
	let options1;
	systems.forEach((element, index) => {
		options1 += `<option value="${index+1}">${element}</option>`;
	});
	$('#operativeSystems').append(options1);

	// Esconde el select de idiomas cuando cargue el DOM
	$('#documentaryFile').addClass('d-none');
	
	// Esconde el enlace que descarga el pdf del manual cuando cargue el DOM
	$('#fileDownload').addClass('d-none');


	// Carga Estilos de enlace glosario
	let pathInitial = `../assets/resources/files/glosary/esp/`;
	$('#glosaryDownload').attr('href', `${pathInitial}glosario.pdf`);
	$('#glosaryDownload').attr('download', `glosario.pdf`);
	$('#glosaryDownload').attr('rel', `Glosario`);
	$('#glosaryDownload').css('text-shadow', '2px 2px 4px #007bff');
	$('#glosaryDownload').css('text-decoration', 'none');

	// Carga select traductor de la pagina
	let options;
	for (let i = 1; i < 2; i++) {
		options += '<option value="1">Español</option>';
		options += '<option value="2">Ingles</option>';
	}
	$('#languages').append(options);

	// Carga algunos elementos con atributos por default
	$('#navbarTitle').attr('href', '../index.html');
	$('#titleBanner').css('font-size', '14px');
	$('.colorlib-logo').css('text-decoration', 'none');

});


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
				window.location.href='./views/operativeSystems.html';
				break;

			case 2:
				window.location.href='./views/hardwareIntroduction.html';
				break;

			case 3:
				window.location.href='./views/English.html';
				break;
		
			default:
				break;
		}

	} else if(view == 2) {
		switch (type) {
			case 1:
				window.location.href='./operativeSystems.html';
				break;

			case 2:	
				window.location.href='./hardwareIntroduction.html';
				break;

			case 3:	
				window.location.href='./English.html';
				break;

			default:
				break;
		}
		
	}
}



// Cuando seleccione alguno de los sistemas operativos
// me mostrara la posibilidad de ingles o español
$('#operativeSystems').on('change', function() {
	if($('#operativeSystems').val() == 0) {
		$('#documentaryFile').addClass('d-none');
	} else {
		$('#documentaryFile').removeClass('d-none');
	}
});

// Descarga los pdfs de los manuales  
$('#languagesFile').on('click', function() {
	
	$('#fileDownload').removeClass('d-none');	
	$('#fileDownload').css('color', '#fff');

	let operativeSOption = document.getElementById('operativeSystems').value;
	let language = document.getElementById('languages').value;
	let path = language == '1' ? `../assets/resources/files/spa/` : `../assets/resources/files/eng/`;
	
	switch (operativeSOption) {
		case '1':
			$('#fileDownloaded').attr('href', `${path}manual_instalacion_kali_linux.pdf`);
			$('#fileDownloaded').attr('download', `manual_instalacion_kali_linux.pdf`);
			$('#fileDownloaded').attr('rel', `Manual Kali Linux`);
			$('#fileSystemDoc').text(language == 1 ? 'Manual Kali Linux' : 'Kali Linux Manual');
            $('#fileSystemDoc').css('color', 'black');
            $('#fileSystemDoc').css('text-shadow', '2px 2px 4px #ffc107');
            $('#fileDownloaded').css('text-decoration', 'none');
			break;
		
		case '2':
			$('#fileDownloaded').attr('href', `${path}manual_instalacion_kali_linux_booteado.pdf`);
			$('#fileDownloaded').attr('rel', `Manual Kali Linux Booteado`);
			$('#fileDownloaded').attr('download', `manual_instalacion_kali_linux_booteado.pdf`);
			$('#fileSystemDoc').text(language == 1 ? 'Manual Kali Linux Booteado' : 'Booted Kali Linux Manual');
            $('#fileSystemDoc').css('color', 'black');
            $('#fileSystemDoc').css('text-shadow', '2px 2px 4px #ffc107');
            $('#fileDownloaded').css('text-decoration', 'none');
			break;

		case '3':
			$('#fileDownloaded').attr('href', `${path}manual_instalacion_centos.pdf`);
			$('#fileDownloaded').attr('rel', `Manual Centos`);
			$('#fileDownloaded').attr('download', `manual_instalacion_centos.pdf`);
			$('#fileSystemDoc').text(language == 1 ? 'Manual Centos' : 'Centos Manual');
            $('#fileSystemDoc').css('color', 'black');
            $('#fileSystemDoc').css('text-shadow', '2px 2px 4px #ffc107');
            $('#fileDownloaded').css('text-decoration', 'none');
			break;

		case '4':
			$('#fileDownloaded').attr('href', `${path}manual_instalacion_ubuntu.pdf`);
			$('#fileDownloaded').attr('rel', `Manual Ubuntu`);
			$('#fileDownloaded').attr('download', `manual_instalacion_ubuntu.pdf`);
			$('#fileSystemDoc').text(language == 1 ? 'Manual Ubuntu' : 'Ubuntu Manual');
            $('#fileSystemDoc').css('color', 'black');
            $('#fileSystemDoc').css('text-shadow', '2px 2px 4px #ffc107');
            $('#fileDownloaded').css('text-decoration', 'none');
			break;

		case '5':
			$('#fileDownloaded').attr('href', `${path}manual_instalacion_oracle.pdf`);
			$('#fileDownloaded').attr('rel', `Manual Oracle`);
			$('#fileDownloaded').attr('download', `manual_instalacion_oracle.pdf`);
			$('#fileSystemDoc').text(language == 1 ? 'Manual Oracle' : 'Oracle Manual');
            $('#fileSystemDoc').css('color', 'black');
            $('#fileSystemDoc').css('text-shadow', '2px 2px 4px #ffc107');
            $('#fileDownloaded').css('text-decoration', 'none');
			break;
		case '6':
			$('#fileDownloaded').attr('href', `${path}manual_instalacion_fedora.pdf`);
			$('#fileDownloaded').attr('rel', `Manual Fedora`);
			$('#fileDownloaded').attr('download', `manual_instalacion_fedora.pdf`);
			$('#fileSystemDoc').text(language == 1 ? 'Manual Fedora' : 'Fedora Manual');
            $('#fileSystemDoc').css('color', 'black');
            $('#fileSystemDoc').css('text-shadow', '2px 2px 4px #ffc107');
            $('#fileDownloaded').css('text-decoration', 'none');
			break;
	
		default:
			break;
	}
});

// Dispara el modal y carga titulos del modal
$('#glosario').on('click', function() {
	let language = document.getElementById('languages').value;

    $('#glosarioModalLabel').text(language == 1 ? palabras[12] : words[12]);
	$('#modalBoton').text(language == 1 ? palabras[13] : words[13]);
    $('#glosarioModal').modal('show');
	$('.modal-body').addClass('text-center');
	$('.modal-body').css('color', '#007bff');
	$('.btn-close').css('background-color', '#fff');
});

// Cuando se seleccione algun idioma, se español o ingles, lo traduce
function ShowSelected() {
	var cod = document.getElementById("languages").value;
	if (cod == 1) {
		document.getElementById('title').innerHTML = palabras[0];
		document.getElementById('navbarTitle').innerHTML = palabras[0];
		document.getElementById('menu1').innerHTML = palabras[1];
		document.getElementById('menu2').innerHTML = palabras[2];
		document.getElementById('menu3').innerHTML = palabras[5];
		document.getElementById('titleBanner').innerHTML = palabras[0];
		document.getElementById('titleSystems').innerHTML = palabras[1];
		document.getElementById('languageSelected').innerHTML = palabras[3];
		document.getElementById('option1').innerHTML = palabras[4];
		document.getElementById('option2').innerHTML = palabras[5];
		document.getElementById('glosaryDownload').innerHTML = palabras[6];
		document.getElementById('glosario').innerHTML = palabras[7];
		document.getElementById('videoText').innerHTML = palabras[10];
		document.getElementById('tabText').innerHTML = palabras[11];
	} else {
		document.getElementById('title').innerHTML = words[0];
		document.getElementById('navbarTitle').innerHTML = words[0];
		document.getElementById('menu1').innerHTML = words[1];
		document.getElementById('menu2').innerHTML = words[2];
		document.getElementById('menu3').innerHTML = words[5];
		document.getElementById('titleBanner').innerHTML = words[0];
		document.getElementById('titleSystems').innerHTML = words[1];
		document.getElementById('languageSelected').innerHTML = words[3];
		document.getElementById('option1').innerHTML = words[4];
		document.getElementById('option2').innerHTML = words[5];
		document.getElementById('glosaryDownload').innerHTML = words[6];
		document.getElementById('glosario').innerHTML = words[7];
		document.getElementById('videoText').innerHTML = words[10];
		document.getElementById('tabText').innerHTML = words[11];
	}
}