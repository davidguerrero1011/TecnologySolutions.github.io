// texto Titulos 
$(document).ready(function () {

    // Cargara los textos en español por default en el index
    document.getElementById('titleLogic').innerHTML = `${palabras[38]}`;
    document.getElementById('navbarLogicTitle').innerHTML = palabras[0];
    document.getElementById('menu1').innerHTML = palabras[1];
    document.getElementById('menu2').innerHTML = palabras[2];
    document.getElementById('menu3').innerHTML = palabras[5];
    document.getElementById('menu4').innerHTML = palabras[38];
    document.getElementById('titleBanner').innerHTML = palabras[0];
    document.getElementById('titleProgrammation').innerHTML = palabras[38];
    document.getElementById('binariosRadio').innerHTML = palabras[39];
    document.getElementById('verdadRadio').innerHTML = palabras[40];
    document.getElementById('convertNumbers').innerHTML = palabras[42];
    

    // Carga algunos elementos con atributos por default
    $('#navbarLogicTitle').attr('href', '../index.html');
    $('#titleBanner').css('font-size', '14px');
    $('.colorlib-logo').css('text-decoration', 'none');

    $('#verdad').addClass('d-none');
    $('#tableShow').addClass('d-none');

    // Cuando Cargue el dom cargan estilos de los titulos
	$('#titleProgrammation').css('color', '#007bff');
	$('#titleProgrammation').css('text-shadow', '2px 2px 4px #fff');
	$('#titleProgrammation').css('font-size', '40px');
	$('#titleProgrammation').css('font-family', '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji');
	
    // Checkinputs text styles
    $('#binariosRadio').css('color', '#ffffff');
    $('#binariosRadio').css('font-family', '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji');
    $('#binariosRadio').css('font-size', '18px');

    $('#verdadRadio').css('color', '#ffffff');
    $('#verdadRadio').css('font-family', '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji');
    $('#verdadRadio').css('font-size', '18px');

    $('#javaSourceRadio').css('color', '#ffffff');
    $('#javaSourceRadio').css('font-family', '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji');
    $('#javaSourceRadio').css('font-size', '18px');

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

    
    // LLena el select de conversiones
    let convertionsCategory1 = ['Binario', 'Decimal', 'Hexadecimal', 'Octagonal'];
    let optionsConvertions1 = '';
    for (let i=0; i<convertionsCategory1.length; i++) {
        optionsConvertions1 += `<option value="${i+1}">${convertionsCategory1[i]}</option>`;
    }
    $('#convertions').append(optionsConvertions1);

    // LLena el select de conversiones
    let convertionsCategory2 = ['Binario', 'Decimal', 'Hexadecimal', 'Octagonal'];
    let optionsConvertions2 = '';
    for (let i=0; i<convertionsCategory2.length; i++) {
        optionsConvertions2 += `<option value="${i+1}">${convertionsCategory2[i]}</option>`;
    }
    $('#convertions2').append(optionsConvertions2);
    $('#result').addClass('d-none');

});

function ShowSelected() {
    var cod = document.getElementById("languages").value;
    if (cod == 1) {
        document.getElementById('titleLogic').innerHTML = palabras[38];
        document.getElementById('navbarLogicTitle').innerHTML = palabras[0];
        document.getElementById('menu1').innerHTML = palabras[1];
        document.getElementById('menu2').innerHTML = palabras[2];
        document.getElementById('menu3').innerHTML = palabras[5];
        document.getElementById('menu4').innerHTML = palabras[38];
        document.getElementById('titleBanner').innerHTML = palabras[0];
        document.getElementById('titleProgrammation').innerHTML = palabras[38];
        document.getElementById('binariosRadio').innerHTML = palabras[39];
        document.getElementById('verdadRadio').innerHTML = palabras[40];
        document.getElementById('convertNumbers').innerHTML = palabras[42];
    } else {
        document.getElementById('titleLogic').innerHTML = words[40];
        document.getElementById('navbarLogicTitle').innerHTML = words[0];
        document.getElementById('menu1').innerHTML = words[1];
        document.getElementById('menu2').innerHTML = words[2];
        document.getElementById('menu3').innerHTML = words[5];
        document.getElementById('menu4').innerHTML = words[40];
        document.getElementById('titleBanner').innerHTML = words[0];
        document.getElementById('titleProgrammation').innerHTML = words[40];
        document.getElementById('binariosRadio').innerHTML = words[41];
        document.getElementById('verdadRadio').innerHTML = words[42];
        document.getElementById('convertNumbers').innerHTML = words[44];
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

            case 4:
                window.location.href = './views/LogicProgrammation.html';
                break;

            default:
                break;
        }

    } else if (view == 2) {
        switch (type) {
            case 1:
                window.location.href = 'operativeSystems.html';
                break;

            case 2:
                window.location.href = 'hardwareIntroduction.html';
                break;

            case 3:
                window.location.href = 'English.html';
                break;

            case 4:
                window.location.href = 'LogicProgrammation.html';
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


function showContent(type) {

    switch (type) {
        case 1:
            $('#binarios').removeClass('d-none');
            $('#verdad').addClass('d-none');
       

            break;

        case 2:
            $('#verdad').removeClass('d-none');
            $('#binarios').addClass('d-none');

            
            // LLena el select con las tablas a mostrar
            let opcionesTablas = ['Negación', 'Conjunción', 'Disyunción Inclusiva', 'Condicional', 'Bicondicional', 'Disyunción Exclusiva'];
            let tables = '';
            for (let i=0; i<opcionesTablas.length; i++) {
                tables += `<option id="opcion${i+1}" value="${i+1}">${opcionesTablas[i]}</option>`;
                $(`#opcion${i+1}`).css('font-family', '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji');
            }
            $('#tables').append(tables);
            break;

        default:
            break;
    }
}


function selectTable() {

    let table = document.getElementById('tables').value;
    $('#tableShow').removeClass('d-none');
    $('#encabezado1').addClass('d-none');
    $('#encabezado2').addClass('d-none');
    $('#encabezado3').addClass('d-none');

    let antecedente = [];
    let consecuente = [];

    let negacion = '';
    let conjuncion = '';
    let disyuncion = '';
    let condicional = '';
    let bicondicional = '';
    let disyuncionF = '';

    switch (table) {
        case '1':
            
            $('#encabezado1').removeClass('d-none');
            $('#encabezado2').addClass('d-none');
            $('#encabezado3').addClass('d-none');
            $('#encabezado4').addClass('d-none');
            $('#encabezado5').addClass('d-none');
            $('#encabezado6').addClass('d-none');

            let valor = ['V', 'F'];
            for (let i=0; i<valor.length; i++) {
                negacion += `
                <tr>
                    <th scope="row">${i+1}</th>
                    <td>${valor[i]}</td>
                    <td>${valor[i] == 'V' ? 'F' : 'V'}</td>
                </tr>`;
            }
            $('#tablaVerdad').append(negacion);
            break;
        
        case '2':

            $('#encabezado2').removeClass('d-none');
            $('#encabezado1').addClass('d-none');
            $('#encabezado3').addClass('d-none');
            $('#encabezado4').addClass('d-none');
            $('#encabezado5').addClass('d-none');
            $('#encabezado6').addClass('d-none');

            antecedente = ['V', 'V', 'F', 'F'];
            consecuente = ['V', 'F', 'V', 'F'];

            for (let i=0; i<antecedente.length; i++) {
                conjuncion += `<tr>`
                conjuncion += `<th scope="row">${i+1}</th>`
                conjuncion += `<td>${antecedente[i]}</td>`;
                conjuncion += `<td>${consecuente[i]}</td>`;
                conjuncion += `<td>${antecedente[i] == 'V' && consecuente[i] == 'V' ? 'V' : 'F'}</td></tr>`;
            }
            $('#tablaVerdad').append(conjuncion);
            break;    

        case '3':

            $('#encabezado3').removeClass('d-none');
            $('#encabezado1').addClass('d-none');
            $('#encabezado2').addClass('d-none');
            $('#encabezado4').addClass('d-none');
            $('#encabezado5').addClass('d-none');
            $('#encabezado6').addClass('d-none');

            antecedente = ['V', 'V', 'F', 'F'];
            consecuente = ['V', 'F', 'V', 'F'];
            
            for (let i=0; i<consecuente.length; i++) {
                disyuncion += `<tr>`
                disyuncion += `<th scope="row">${i+1}</th>`
                disyuncion += `<td>${antecedente[i]}</td>`;
                disyuncion += `<td>${consecuente[i]}</td>`;
                disyuncion += `<td>${antecedente[i] == 'F' && consecuente[i] == 'F' ? 'F' : 'V'}</td></tr>`;

            }
            $('#tablaVerdad').append(disyuncion);
            break;
            
        case '4':

            $('#encabezado4').removeClass('d-none');
            $('#encabezado1').addClass('d-none');
            $('#encabezado2').addClass('d-none');
            $('#encabezado3').addClass('d-none');
            $('#encabezado5').addClass('d-none');
            $('#encabezado6').addClass('d-none');

            antecedente = ['V', 'V', 'F', 'F'];
            consecuente = ['V', 'F', 'V', 'F'];
            
            for (let i=0; i<antecedente.length; i++) {
                condicional += `<tr>`
                condicional += `<th scope="row">${i+1}</th>`
                condicional += `<td>${antecedente[i]}</td>`;
                condicional += `<td>${consecuente[i]}</td>`;
                condicional += `<td>${antecedente[i] == 'V' && consecuente[i] == 'F' ? 'F' : 'V'}</td></tr>`;

            }
            $('#tablaVerdad').append(condicional);
            break;

        case '5':

            $('#encabezado5').removeClass('d-none');
            $('#encabezado1').addClass('d-none');
            $('#encabezado2').addClass('d-none');
            $('#encabezado3').addClass('d-none');
            $('#encabezado4').addClass('d-none');
            $('#encabezado6').addClass('d-none');

            antecedente = ['V', 'V', 'F', 'F'];
            consecuente = ['V', 'F', 'V', 'F'];
            
            for (let i=0; i<antecedente.length; i++) {
                bicondicional += `<tr>`
                bicondicional += `<th scope="row">${i+1}</th>`
                bicondicional += `<td>${antecedente[i]}</td>`;
                bicondicional += `<td>${consecuente[i]}</td>`;
                bicondicional += `<td>${antecedente[i] == 'V' && consecuente[i] == 'V' || antecedente[i] == 'F' && consecuente[i] == 'F' ? 'V' : 'F'}</td></tr>`;

            }
            $('#tablaVerdad').append(bicondicional);
            break;

        case '6':

            $('#encabezado6').removeClass('d-none');
            $('#encabezado1').addClass('d-none');
            $('#encabezado2').addClass('d-none');
            $('#encabezado3').addClass('d-none');
            $('#encabezado4').addClass('d-none');
            $('#encabezado5').addClass('d-none');

            antecedente = ['V', 'V', 'F', 'F'];
            consecuente = ['V', 'F', 'V', 'F'];
            
            for (let i=0; i<antecedente.length; i++) {
                disyuncionF += `<tr>`
                disyuncionF += `<th scope="row">${i+1}</th>`
                disyuncionF += `<td>${antecedente[i]}</td>`;
                disyuncionF += `<td>${consecuente[i]}</td>`;
                disyuncionF += `<td>${antecedente[i] == 'V' && consecuente[i] == 'V' || antecedente[i] == 'F' && consecuente[i] == 'F' ? 'F' : 'V'}</td></tr>`;

            }
            $('#tablaVerdad').append(disyuncionF);
            break;
        default:
            break;
    }

}


function selectConvertions() {

    let firstVal = document.getElementById('convertions').value;
    let secondVal = document.getElementById('convertions2').value;
    
    if (firstVal != '0' && secondVal != '0') {
        $('#result').removeClass('d-none');
        
        for (let i=0; i<4; i++) {
            if (firstVal == i+1 && secondVal == i+1) {
                $('#result').addClass('d-none');
                Swal.fire({
                    icon: "error",
                    title: "No puede",
                    text: "Usted no puede hacer la conversión de los mismos terminos!",
                });
            } else {
                if (firstVal == '1' && secondVal == '2') {
                    
                } else {
                    
                }
            }
        }
    } else {
        $('#result').addClass('d-none');
    }


}