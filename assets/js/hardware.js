$(document).ready(function () {

	document.getElementById('titleHardware').innerHTML = palabras[8];
	document.getElementById('title').innerHTML = palabras[2];

	// Carga el video de instalacion cuando cargue el DOM
	$('#hardware').attr('src', '../assets/resources/videos/operative-system-instalation.mp4');
	$('#hardware').attr('width', '500');
	$('#hardware').attr('height', '300');


	$('#titleHardware').css('color', '#007bff');
	$('#titleHardware').css('text-shadow', '2px 2px 4px #fff');
	$('#titleHardware').css('font-size', '40px');
	$('#titleHardware').css('font-family', '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji');
	$('#titleHardware').css('color', '#007bff');

	$('#seeGlosary').css('display', 'none');
	$('#fileDownloade').css('display', 'none');

	let options = '';
	for (let i = 1; i <= 1; i++) {
		options += `<option id="option1" value="0" selected>${palabras[14]}</option>`;
		options += `<option id="option2" value="1">${palabras[15]}</option>`;
		options += `<option id="option3" value="2">${palabras[16]}</option>`;
		options += `<option id="option4" value="3">${palabras[17]}</option>`;
	}
	$('#optionsHardware').append(options);


	$('#showGlosary').text(palabras[7]);
	$('#fileDownloade').text(palabras[6]);

	$('#fileDownloade').css('color', '#fff');
	$('#fileDownloade').css('text-shadow', '2px 2px 4px #007bff');
	$('#fileDownloade').css('text-decoration', 'none');

	$('#navbarTitle').attr('href', '../index.html');

	$('#titleBanner').css('font-family', 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace');
	$('#titleBanner').css('font-size', '18px');
	$('#titleBanner').css('background', 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)');
	$('#titleBanner').css('text-shadow', '8px 4px 4px black');

});


function optionsHardware() {

	let option = document.getElementById('optionsHardware').value;
	if (option == 1) {
		$('#fileDownloade').css('display', 'none');
		$('#seeGlosary').css('display', 'inline');
	} else if (option == 2) {
		$('#seeGlosary').css('display', 'none');
		$('#fileDownloade').css('display', 'inline');
	} else if(option == 3) {
		$('#seeGlosary').css('display', 'inline');
		$('#fileDownloade').css('display', 'inline');
	} else {
		$('#seeGlosary').css('display', 'none');
		$('#fileDownloade').css('display', 'none');
	}
}


function ShowSelected() {
	var cod = document.getElementById("languages").value;
	if (cod == 1) {
		document.getElementById('title').innerHTML = palabras[0];
		document.getElementById('navbarTitle').innerHTML = palabras[0];
		document.getElementById('menu1').innerHTML = palabras[1];
		document.getElementById('menu2').innerHTML = palabras[2];
		document.getElementById('menu3').innerHTML = palabras[5];
		document.getElementById('titleBanner').innerHTML = palabras[0];
		document.getElementById('titleHardware').innerHTML = palabras[8];
		document.getElementById('option1').innerHTML = palabras[14];
		document.getElementById('option2').innerHTML = palabras[15];
		document.getElementById('option3').innerHTML = palabras[16];
		document.getElementById('option4').innerHTML = palabras[17];
		document.getElementById('showGlosary').innerHTML = palabras[7];
		document.getElementById('fileDownloade').innerHTML = palabras[6];
	} else {
		document.getElementById('title').innerHTML = words[0];
		document.getElementById('navbarTitle').innerHTML = words[0];
		document.getElementById('menu1').innerHTML = words[1];
		document.getElementById('menu2').innerHTML = words[2];
		document.getElementById('menu3').innerHTML = words[5];
		document.getElementById('titleBanner').innerHTML = words[0];
		document.getElementById('titleHardware').innerHTML = words[8];
		document.getElementById('option1').innerHTML = words[14];
		document.getElementById('option2').innerHTML = words[15];
		document.getElementById('option3').innerHTML = words[16];
		document.getElementById('option4').innerHTML = words[17];
		document.getElementById('showGlosary').innerHTML = words[7];
		document.getElementById('fileDownloade').innerHTML = words[6];
		document.getElementById('glosarioModalLabel').innerHTML = words[18];
	}
}


$('#showGlosary').on('click', function () {
	let language = document.getElementById('languages').value;

	$('#glosarioModal').modal('show');
	$('#glosarioModalLabel').text(language == 1 ? palabras[18] : words[18]);
	$('#titleModal').text(language == 1 ? palabras[7] : words[7]);
	$('.modal-body').addClass('text-center');
	$('.modal-body').css('color', '#007bff');
	$('.btn-close').css('background-color', '#fff');

});


$('#fileDownloade').on('click', function () {
	let language = document.getElementById('languages').value;
	let path = language == '1' ? `../assets/resources/files/glosary/eng/` : `../assets/resources/files/glosary/esp/`;

	$('#fileDownloade').attr('href', `${path}glosario.pdf`);
	$('#fileDownloade').attr('download', `glosario.pdf`);
	$('#fileDownloade').attr('rel', `${palabras[7]}`);
	$('#fileDownloade').text(language == 1 ? `${palabras[7]}` : `${words[7]}`);
});