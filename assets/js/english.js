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
	$('#technicalReportt').css('text-shadow', '4px 4px 8px #007bff');
	$('#technicalReportt').css('text-decoration', 'none');

});


// Cuando se seleccione algun idioma, se español o ingles, lo traduce
function ShowSelected() {
	var cod = document.getElementById("languages").value;
	if (cod == 1) {
		document.getElementById('title').innerHTML = palabras[5];
		document.getElementById('titleEnglish').innerHTML = palabras[5];
		document.getElementById('technicalReport').innerHTML = palabras[19];
        document.getElementById('textReport').innerHTML = `${palabras[16]}`;
	} else {
		document.getElementById('title').innerHTML = words[5];
		document.getElementById('titleEnglish').innerHTML = words[5];
        document.getElementById('textReport').innerHTML = `${words[16]}`;
        document.getElementById('technicalReport').innerHTML = words[19];
	}
}