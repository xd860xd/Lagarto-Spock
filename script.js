window.addEventListener('load', inicio());

function inicio() {


    var auxiliar = '';
    var docume = document.querySelector('.circulos');
    var documento = '';
    var pagina = '';
    var puntos = document.querySelector('.puntos');
    pagina = docume.innerHTML;
    escucha();
    function escucha() {

        document.querySelectorAll('.circulos div div').forEach(boton => {
            boton.addEventListener('click', jugar);

        });
    }
    function jugar() {
        documento = '';
        docume = document.querySelector('.circulos');
        docume.classList.remove('circulos')
        docume.innerHTML = '';
        documento += '<div id="tu" style="padding:0">You piked</div>' +
            '<div id="rival" style="padding:0">hause piked</div><br><br>'
        let aux = 0;
        if (this.id == 'roca') {
            documento += '<div class="rock tu"><div id="roca"></div></div>'

        }
        else if (this.id == 'papel') {
            documento += '<div class="paper tu"><div id="papel"></div></div>'

        }
        else if (this.id == 'tijera') {
            documento += '<div class="scissors tu"><div id="tijera"></div></div>'
        }
        else if (this.id == 'lagarto') {
            documento += '<div class="lizard tu"><div id="lagarto"></div></div> '
        }
        else {
            documento += '<div class="spock tu"><div id="spok"></div></div>'
        }
        auxiliar = this.id;
        maquina();


    }
    function maquina() {
        aux = Math.random();
        aux *= 10;
        aux = Math.round(aux);
        console.log(aux);
        if (aux <= 2) {
            if (auxiliar == 'papel') {
                empate();
            }
            else if (auxiliar == 'tijera' || auxiliar == 'lagarto') {
                win();
            }

            else if (auxiliar == 'roca' || auxiliar == 'spok') {
                lose();
            }
            documento += '<div class="paper rival"><div id="papel"></div></div>';

        }
        else if (2 < aux && aux <= 4) {

            if (auxiliar == 'tijera') {
                empate();
            }
            else if (auxiliar == 'roca' || auxiliar == 'spok') {
                win();
            }

            else if (auxiliar == 'papel' || auxiliar == 'lagarto') {
                lose();
            }
            documento += '<div class="scissors rival"><div id="tijera"></div></div>';

        }
        else if (4 < aux && aux <= 6) {
            if (auxiliar == 'lagarto') {
                empate();
            }
            else if (auxiliar == 'tijera' || auxiliar == 'roca') {
                win();
            }

            else if (auxiliar == 'spok' || auxiliar == 'papel') {
                lose();
            }
            documento += '<div class="lizard rival"><div id="lagarto"></div></div>';

        }
        else if (6 < aux && aux <= 8) {
            if (auxiliar == 'spok') {
                empate();
            }
            else if (auxiliar == 'papel' || auxiliar == 'lagarto') {
                win();
            }

            else if (auxiliar == 'roca' || auxiliar == 'tijera') {
                lose();
            }
            documento += '<div class="spock rival"><div id="spock"></div></div>';

        }
        else if (8 < aux && aux <= 10) {
            if (auxiliar == 'roca') {
                empate();
            }
            else if (auxiliar == 'papel' || auxiliar == 'spok') {
                win();
            }

            else if (auxiliar == 'tijera' || auxiliar == 'lagarto') {
                lose();
            }
            documento += '<div class="rock rival"><div id="roca"></div></div>';



        }
        docume.innerHTML = documento;
        var auc = document.querySelector('#comodin');

        auc.addEventListener('click', function () {
            docume.innerHTML = pagina;
            docume.classList.add('circulos');
            escucha();
        });


    }
    function empate() {
        documento += '<div id="resultado" >Empate!!<div id="comodin">play again</div></div>';


    }
    function win() {
        documento += '<div id="resultado" >You Win!!!<div id="comodin" >play again</div></div>';
        puntos = document.querySelector('.puntos');
        puntos.innerHTML = +puntos.innerHTML + 1;

    }
    function lose() {
        documento += '<div id="resultado" >You Lose<div id="comodin">play again</div></div>';
        puntos = document.querySelector('.puntos');
        puntos.innerHTML = +puntos.innerHTML - 1


    }




    //----------------------En esta parte va la ventana emergente-------------------------//

    function recarga() {


        document.querySelector('footer').addEventListener('click', function () {

            var a = document.querySelector('body');
            a.innerHTML = a.innerHTML + `
            
            <div>
            <div id='modal'>
                <!-- padre -->
                <div id='modal-back'></div> <!-- fondo -->
                <div class='modal'>
                <div id='modal-c'>
                <!-- subcontenedor -->
                <h3></h3> <!-- titulo -->
                <span id='mc'></span> <!-- contenido -->
                <div id='buttons'><a id='mclose' href='#'></a></div> <!-- botones -->
                </div>
                </div> <!-- contenedor -->
            </div>
            </div>
            
            `
            msj();
            recarga();
            var auc = document.querySelector('#comodin');
            var docume = document.querySelector('#circulos');
    
            if(auc){
                auc.addEventListener('click', function () {
                    
                    docume.innerHTML = pagina;
                    
                    docume.classList.add('circulos');
                   
                    escucha();
                });
            }
            escucha();
            


        });
    }

    function borrar(id) {
        var elem = document.getElementById(id);
        return elem.parentNode.removeChild(elem);

    }
    function msj() {
        var titulo = 'Rules';
        var contenido = '<img  id="emergente" src="images/image-rules-bonus.svg">'
        var idioma = 'X'
        var bc = idioma ? idioma : 'Aceptar';
        var ModalData = document.getElementById('modal');
        var boton = '';
        ModalData.innerHTML = '<div id="modal-back"></div><div class="modal"><div id="modal-c"><h3>' + titulo + '</h3><span id="mc">' + contenido + '</span><div id="buttons"><a id="mclose" href="#">' + bc + '</a>' + boton + '</div></div></div>';
        console.log(document.querySelector('.modal'));
        document.querySelector('.modal').style.height = document.getElementById('mc').offsetHeight + 100 + 'px';

        document.getElementById('mclose').onclick = function () { borrar('modal'); };
        document.querySelectorAll('#modal-back').onclick = function () { borrar('modal'); }




    }
    recarga();






}