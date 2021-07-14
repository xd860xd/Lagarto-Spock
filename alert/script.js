window.addEventListener('load', function () {
    var i = 0;
    function recarga() {
       
        
        document.querySelector('.hola').addEventListener('click', function () {

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
            
        });
    }

    function borrar(id) {
        var elem = document.getElementById(id);
        return elem.parentNode.removeChild(elem);

    }
    function msj() {
        var titulo = 'Rules';
        var contenido = '<img  id="emergente" src="../images/image-rules-bonus.svg">'
        var idioma = 'X'
        var bc = idioma ? idioma : 'Aceptar';
        var ModalData = document.getElementById('modal');
        var boton = '';
        ModalData.innerHTML = '<div id="modal-back"></div><div class="modal"><div id="modal-c"><h3>' + titulo + '</h3><span id="mc">' + contenido + '</span><div id="buttons"><a id="mclose" href="#">' + bc + '</a>' + boton + '</div></div></div>';
        console.log(document.querySelector('.modal'));
        document.querySelector('.modal').style.height = document.getElementById('mc').offsetHeight + 100 + 'px';

        document.getElementById('mclose').onclick = function () { borrar('modal'); };
        document.querySelectorAll('#modal-back').onclick = function () { borrar('modal');  }
        recarga();
    }
    recarga();





})