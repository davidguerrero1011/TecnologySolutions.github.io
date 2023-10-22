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
	document.getElementById('navbarTitle').innerHTML = palabras[0];

	$('#navbarTitle').attr('href', '../index.html');

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
	let systems = ['Kali Linux', 'Centos', 'Ubuntu', 'Oracle', 'Fedora'];
	let options1;
	systems.forEach((element, index) => {
		options1 += `<option value="${index + 1}">${element}</option>`;
	});
	$('#operativeSystems').append(options1);

	// Esconde el select de idiomas cuando cargue el DOM
	$('#documentaryFile').addClass('d-none');

	// Esconde el enlace que descarga el pdf del manual cuando cargue el DOM
	$('#fileDownload').addClass('d-none');


	// Carga Estilos de enlace glosario
	let language = document.getElementById('languages').value;

	let pathInitial = `../assets/resources/files/glosary/esp/`;
	$('#glosaryDownload').attr('href', `${pathInitial}operative-systems-glosary.pdf`);
	$('#glosaryDownload').attr('download', `operative-systems-glosary.pdf`);
	$('#glosaryDownload').attr('rel', `${language} == 1 ? Glosario : Glosary`);
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
	$('#titleBanner').css('font-family', 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace');
	$('#titleBanner').css('font-size', '18px');
	$('#titleBanner').css('background', 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)');
	$('#titleBanner').css('text-shadow', '8px 4px 4px black');
	
	$('.colorlib-logo').css('text-decoration', 'none');



});


// construye y despliega el menu hamburguesa 
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


// Me redirigue en las opciones del menu principal a sistemas operativos o hardware dependiendo 
// De la parte del sitio donde este
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



// Cuando seleccione alguno de los sistemas operativos
// me mostrara la posibilidad de ingles o español
$('#operativeSystems').on('change', function () {
	if ($('#operativeSystems').val() == 0) {
		$('#documentaryFile').addClass('d-none');
	} else {
		$('#documentaryFile').removeClass('d-none');
	}
});

// Descarga los pdfs de los manuales  
$('#languagesFile').on('change', function () {

	$('#fileDownload').removeClass('d-none');
	$('#fileDownload').css('color', '#fff');

	let operativeSOption = document.getElementById('operativeSystems').value;
	let language = document.getElementById('languagesFile').value;
	let path = language == 1 ? `../assets/resources/files/spa/` : `../assets/resources/files/eng/`;

	switch (operativeSOption) {
		case '1':
			$('#fileDownloaded').attr('href', `${path}manual_instalacion_kali_linux.pdf`);
			$('#fileDownloaded').attr('download', `manual_instalacion_kali_linux.pdf`);
			$('#fileDownloaded').attr('rel', `Manual Kali Linux`);
			$('#fileSystemDoc').text(language == '1' ? 'Manual Kali Linux' : 'Kali Linux Manual');
			$('#fileSystemDoc').css('color', 'black');
			$('#fileSystemDoc').css('text-shadow', '2px 2px 4px #ffc107');
			$('#fileDownloaded').css('text-decoration', 'none');
			break;

		case '2':
			$('#fileDownloaded').attr('href', `${path}manual_instalacion_centos.pdf`);
			$('#fileDownloaded').attr('rel', `Manual Centos`);
			$('#fileDownloaded').attr('download', `manual_instalacion_centos.pdf`);
			$('#fileSystemDoc').text(language == '1' ? 'Manual Centos' : 'Centos Manual');
			$('#fileSystemDoc').css('color', 'black');
			$('#fileSystemDoc').css('text-shadow', '2px 2px 4px #ffc107');
			$('#fileDownloaded').css('text-decoration', 'none');
			break;

		case '3':
			$('#fileDownloaded').attr('href', `${path}manual_instalacion_ubuntu.pdf`);
			$('#fileDownloaded').attr('rel', `Manual Ubuntu`);
			$('#fileDownloaded').attr('download', `manual_instalacion_ubuntu.pdf`);
			$('#fileSystemDoc').text(language == '1' ? 'Manual Ubuntu' : 'Ubuntu Manual');
			$('#fileSystemDoc').css('color', 'black');
			$('#fileSystemDoc').css('text-shadow', '2px 2px 4px #ffc107');
			$('#fileDownloaded').css('text-decoration', 'none');
			break;

		case '4':
			$('#fileDownloaded').attr('href', `${path}manual_instalacion_oracle.pdf`);
			$('#fileDownloaded').attr('rel', `Manual Oracle`);
			$('#fileDownloaded').attr('download', `manual_instalacion_oracle.pdf`);
			$('#fileSystemDoc').text(language == '1' ? 'Manual Oracle' : 'Oracle Manual');
			$('#fileSystemDoc').css('color', 'black');
			$('#fileSystemDoc').css('text-shadow', '2px 2px 4px #ffc107');
			$('#fileDownloaded').css('text-decoration', 'none');
			break;
		case '5':
			$('#fileDownloaded').attr('href', `${path}manual_instalacion_fedora.pdf`);
			$('#fileDownloaded').attr('rel', `Manual Fedora`);
			$('#fileDownloaded').attr('download', `manual_instalacion_fedora.pdf`);
			$('#fileSystemDoc').text(language == '1' ? 'Manual Fedora' : 'Fedora Manual');
			$('#fileSystemDoc').css('color', 'black');
			$('#fileSystemDoc').css('text-shadow', '2px 2px 4px #ffc107');
			$('#fileDownloaded').css('text-decoration', 'none');
			break;

		default:
			break;
	}
});

// Dispara el modal y carga titulos del modal
$('#glosario').on('click', function () {
	let language = document.getElementById('languages').value;

	$('#imageColumn').text(language == 1 ? palabras[25] : words[25]);
	$('#glosarioModalLabel').text(language == 1 ? palabras[12] : words[12]);
	$('#modalBoton').text(language == 1 ? palabras[13] : words[13]);
	$('#glosarioModal').modal('show');
	$('.modal-body').addClass('text-center');
	$('.modal-body').css('color', '#007bff');
	$('.btn-close').css('background-color', '#fff');
	$('#imageColumn').css('font-family', 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace');
	$('#glosarioModalLabel').css('font-family', 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace');
	$('#modalBoton').css('font-family', 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace');

	let pathImages = `../assets/resources/images/glosary-images/`;
	let imagesBackground = [
		`${pathImages}adaption.png`,
		`${pathImages}admin.png`,
		`${pathImages}apps.png`,
		`${pathImages}backup.png`,
		`${pathImages}boot.png`,
		`${pathImages}bridge-adapter.png`,
		`${pathImages}browse.png`,
		`${pathImages}clone.png`,
		`${pathImages}cloud.png`,
		`${pathImages}cmd.png`,
		`${pathImages}code.png`,
		`${pathImages}commands.png`,
		`${pathImages}copy.png`,
		`${pathImages}data.png`,
		`${pathImages}directory.png`,
		`${pathImages}domine.png`,
		`${pathImages}downloads.png`,
		`${pathImages}drivers.png`,
		`${pathImages}execute.png`,
		`${pathImages}extensions.png`,
		`${pathImages}fedora.png`,
		`${pathImages}file.png`,
		`${pathImages}install.png`,
		`${pathImages}iso.png`,
		`${pathImages}kali-linux.png`,
		`${pathImages}linux.png`,
		`${pathImages}local-server.png`,
		`${pathImages}memory.png`,
		`${pathImages}nat.png`,
		`${pathImages}network.png`,
		`${pathImages}online.png`,
		`${pathImages}operative-systems.png`,
		`${pathImages}oracle.png`,
		`${pathImages}ping.png`,
		`${pathImages}programs.png`,
		`${pathImages}restart.png`,
		`${pathImages}rufus.png`,
		`${pathImages}server.png`,
		`${pathImages}settings.png`,
		`${pathImages}software.png`,
		`${pathImages}subdirectory.png`,
		`${pathImages}system.png`,
		`${pathImages}ubuntu.png`,
		`${pathImages}updated.png`,
		`${pathImages}virtual.png`,
		`${pathImages}virtual_box.png`,
		`${pathImages}virtual-hard-disk.png`,
		`${pathImages}web.png`,
		`${pathImages}windows.png`
	];

	let imagesDescripts = [
		'Un tipo especial de software diseñado para adaptarse a las diferentes necesidades de sus usuarios.',
		'Gestiona cuentas de usuario, permisos, derechos de acceso y espacio de almacenamiento.',
		'Un programa informático diseñado como herramienta para una tarea específica.',
		'Cree copias de materiales originales y proporcione métodos de recuperación en caso de pérdida.',
		'Unidad extraíble de arranque que es capaz de iniciarse sola dentro del ordenador sin necesidad de un sistema operativo que abra las aplicaciones.',
		'La máquina está conectada a la misma red que la computadora host, por lo que la máquina virtual es como una PC conectada a una red real.',
		'Enlazar de una página web a otra en una computadora conectada a Internet se llama navegación, de ahí el nombre de navegador.',
		'Se refiere al proceso de creación de una representación precisa de un objeto, generalmente bajo los supuestos de programación estática u orientada a objetos.',
		'Utilizar una red de servidores remotos conectados a Internet para almacenar, administrar y mantener datos, servidores, bases de datos, redes y computadoras.',
		'Intérprete de comandos en sistemas OS/2 y Windows NT.',
		'Melodía aquellos que estructuran el dialecto de programación, que a su ocasión es el encargado de jurar el justo funcionamiento de las aplicaciones ya programas que permiten una buena golpe entre el heredero y la computadora.',
		'Un comando es un mensaje enviado a una computadora que desencadena una respuesta en ese sistema y actúa como un sistema porque le dice al dispositivo informático que actúe en función de lo que se envía.',
		'Los datos de su computadora y otra información comercial pueden copiarse si sus datos se dañan, eliminan o se pierden.',
		'Un indicador de cambio en cantidad o calidad.',
		'Un contenedor real que contiene un conjunto de archivos informáticos y otros componentes que se almacenan según su contenido, finalidad o método elegido por el usuario.',
		'Un dominio es un nombre único que identifica parte de Internet.',
		'La descarga de archivos es la transferencia de archivos de computadora a dispositivos electrónicos a través de una conexión a Internet.',
		'Un programa de software que permite que el sistema operativo interactúe con un dispositivo portátil integrado y proporciona una interfaz de usuario para el dispositivo.',
		'La tarea es comenzar a descargar un programa o archivo ejecutable.',
		'Una conexión física y funcional entre dos dispositivos o sistemas independientes',
		'Indica qué programa creó el archivo o puede abrirlo, y qué formato utiliza el archivo.',
		'Fedora es una distribución GNU/Linux de propósito general. Lo mantiene una comunidad internacional de ingenieros, diseñadores gráficos y usuarios.',
		'Lista de bytes almacenados en el dispositivo.',
		'Es el evolución central por el cual los nuevos programas tonada transferidos a un computador con el extinción de individuo configurados, y preparados para individuo.',
		'Un archivo de computadora que almacena una copia o imagen exacta de un archivo.',
		'Una distribución basada en Debian GNU/Linux diseñada para monitorear su computadora y mantenerla segura en todo momento.',
		'Es un software que te permite realizar tareas. Incluyen de todo, desde herramientas de escritorio hasta lenguajes de programación y suites empresariales multiusuario. Fedora es una distribución GNU/Linux de propósito general. Lo mantiene una comunidad internacional de ingenieros, diseñadores gráficos y usuarios.',
		'Un dominio es un nombre único que identifica un sitio web. Una computadora que proporciona recursos, datos, servicios o software a otras computadoras (llamadas clientes) en la red.',
		'La memoria virtual es un sistema de administración de memoria que garantiza que el sistema operativo proporcione la máxima cantidad de memoria físicamente disponible para los programas del usuario y para sí mismo.',
		'Un método utilizado por los enrutadores IP para transmitir paquetes entre dos redes que comparten direcciones diferentes.',
		'Es un dispositivo conectado a través de métodos de transmisión de datos como cables, señales y ondas de radio para compartir información (archivos) y recursos.',
		'Un objeto o persona conectado que utiliza Internet, generalmente Internet.',
		'Un sistema operativo es un conjunto de programas en un sistema informático que administra recursos de hardware y proporciona servicios a aplicaciones de software.',
		'Empresa especializada en el desarrollo de soluciones en la nube y on-premise.',
		'Ping es una herramienta de comando disponible en todos los sistemas operativos con conexión de red y se utiliza para comprobar si se puede encontrar un dispositivo en la red.',
		'Conjunto de instrucciones o reglas relacionadas con un lenguaje de programación que una computadora interpreta para resolver un problema o tarea.',
		'Intente restaurar su PC a una "imagen" anterior (o modo de recuperación).',
		'Es un programa portátil, gratuito y de código abierto para Microsoft Windows que se puede utilizar para crear y construir memorias USB o memorias USB Live.',
		'Es gracia cuidador instalado en un utilería sensato con el terminación de obrar offline y online.',
		'Una configuración es un conjunto de datos que determina los valores de ciertas configuraciones para un programa de computadora o sistema operativo.',
		'Conjunto de programas y sistemas que permiten a una computadora realizar determinadas tareas.',
		'Una carpeta dentro de otra carpeta. Un directorio que contiene subdirectorios se denomina directorio principal. El nombre de cada carpeta debe ser diferente del directorio en el que está almacenada.',
		'Los sistemas informáticos se encargan de recibir, almacenar y procesar la información para proporcionar resultados posteriores.',
		'Ubuntu es una distribución de Linux basada en Debian GNU/Linux, que incluye principalmente software gratuito y de código abierto.',
		'Determinan el rendimiento y la seguridad de su computadora.',
		'Es un programa desarrollado por Oracle Corporation que permite el uso de máquinas virtuales con diferentes características, como sistema operativo, capacidad del disco duro o memoria RAM.',
		'La empresa ofrece espacio a los clientes como solución de almacenamiento de datos.',
		'Sistema informático para crear instantáneamente escenas de realidad virtual.',
		'Windows es el sistema operativo insignia de Microsoft y el estándar de facto para computadoras domésticas y comerciales.',
		'Una conexión física y funcional entre dos dispositivos o sistemas independientes.',
	];

	let descriptionsTranslate = [
		'A special type of software designed to adapt to the different needs of its users.',
		'Manage user accounts, permissions, access rights and storage space.',
		'A computer program designed as a tool for a specific task.',
		'Create copies of original materials and provide recovery methods in case of loss.',
		'removable bootable drive that is capable of starting on its own within the computer without the need for an operating system to open applications.',
		'The machine is connected to the same network as the host computer, so the virtual machine is like a PC connected to a real network.',
		'Linking from one web page to another on a computer connected to the Internet is called browsing, hence the name browser.',
		'It refers to the process of creating an accurate representation of an object, generally under the assumptions of static or object-oriented programming.',
		'use a network of remote servers connected to the Internet to store, manage and maintain data, servers, databases, networks and computers.',
		'Command interpreter on OS/2 and Windows NT systems.',
		'melody those who structure the programming language, which in turn is responsible for ensuring the proper functioning of the applications and programs that allow a good connection between the user and the computer.',
		'A command is a message sent to a computer that triggers a response in that system and acts like a system because it tells the computing device to act based on what is sent.',
		'Your computer data and other business information may be copied if your data is damaged, deleted, or lost.',
		'An indicator of change in quantity or quality.',
		'An actual container that contains a set of computer files and other components that are stored according to their content, purpose, or method chosen by the user.',
		'A domain is a unique name that identifies a part of the Internet.',
		'File downloading is the transfer of files from computer to electronic devices over an Internet connection..',
		'A software program that allows the operating system to interact with an embedded portable device and provides a user interface for the device.',
		'The task is to start downloading a program or executable file.',
		'A physical and functional connection between two independent devices or systems.',
		'Indicates which program created the file or can open it, and what format the file uses.',
		'Fedora is a general-purpose GNU/Linux distribution. It is maintained by an international community of engineers, graphic designers and users.',
		'List of bytes stored on the device.',
		'It is the central process by which new programs are transferred to a computer with the user interface configured, and prepared for individual.',
		'A computer file that stores an exact copy or image of a file.',
		'A Debian GNU/Linux based distribution designed to monitor your computer and keep it safe at all times.',
		'It is software that allows you to perform tasks. It includes everything from desktop tools to programming languages to multi-user business suites.',
		'A domain is a unique name that identifies a website. A computer that provides resources, data, services, or software to other computers (called clients) on the network.',
		'Virtual memory is a memory management system that ensures that the operating system provides the maximum amount of physically available memory for user programs and itself.',
		'A method used by IP routers to transmit packets between two networks that share different addresses.',
		'is a device connected through data transmission methods such as cables, signals and radio waves to share information (files) and resources.',
		'A connected object or person that uses the Internet, usually the Internet.',
		'An operating system is a set of programs in a computer system that manages hardware resources and provides services to software applications.',
		'Company specialized in the development of cloud and on-premise solutions.',
		'Ping is a command tool available on all network-enabled operating systems and is used to check if a device can be found on the network.',
		'A set of instructions or rules related to a programming language that a computer interprets to solve a problem or task.',
		'Try restoring your PC to a previous "image" (or recovery mode).',
		'It is a free, open source, portable program for Microsoft Windows that can be used to create and build USB sticks or Live USB sticks.',
		'It is a smart device installed in a smart tool with the ability to work offline and online.',
		'A configuration is a set of data that determines the values of certain settings for a computer program or operating system.',
		'A set of programs and systems that allow a computer to perform certain tasks.',
		'A folder within another folder. A directory that contains subdirectories is called a parent directory. The name of each folder must be different from the directory in which it is stored.',
		'Computer systems are responsible for receiving, storing and processing information to provide subsequent results.',
		'Ubuntu is a Linux distribution based on Debian GNU/Linux, which includes mainly free and open source software.',
		'They determine the performance and security of your computer.',
		'It is a program developed by Oracle Corporation that allows the use of virtual machines with different characteristics, such as operating system, hard disk capacity or RAM memory.',
		'The company offers space to customers as a data storage solution.',
		'Computer system to instantly create virtual reality scenes.',
		'Windows is Microsofts flagship operating system and the de facto standard for home and business computers.',
		'A physical and functional connection between two independent devices or systems.',
	];

	let titles = ['Adaptacion', 'Admin', 'Apps', 'Backup', 'Boot', 'Puente Adaptador', 'Navegador',
		'Clonar', 'Nube', 'Terminal', 'Código', 'Comandos', 'Copiar', 'Datos',
		'Directorio', 'Dominio', 'Descargas', 'Controladores', 'Executar', 'Extensiones', 'Fedora',
		'Archivo', 'Instalar', 'ISO', 'Kali Linux', 'Linux', 'Servidor Local', 'Memoria',
		'Nat', 'Red', 'En Linea', 'Sistemas Operativos', 'Oracle', 'PING', 'Programas',
		'Restaurar', 'Rufus', 'Servidor', 'Configuración', 'Software', 'Subdirectorio', 'Sistema',
		'Ubuntu', 'Actualizar', 'Caja Virtual', 'Virtual', 'Web', 'Windows'
	];

	let opt = '';
	for (let i = 0; i < imagesBackground.length; i++) {
		opt += `<tr>`;
		opt += `<th scope="row" id="count${i + 1}">${i + 1}</th>`;
		opt += `<td id="imagescell">
						<div class="nuestrocontenedor">
							<img class="nuestraimagen" src="${imagesBackground[i]}">
							<div class="nuestrobloque">
								<div class="nuestrotexto p-3">${language == 1 ? imagesDescripts[i] : descriptionsTranslate[i]}</div>
								<p class="boldder-fontt">${titles[i]}<p>
							</div>
						</div> 
					</td>`;
		opt += `</tr>`;
	}
	$('#count').css('font-family', 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace');
	$('#imagescell').css('font-family', 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace');
	$('#glosaryContent').append(opt);

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