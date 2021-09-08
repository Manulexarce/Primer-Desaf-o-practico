//Contendedor de datos

var coleccion = new Array();
imagen1=URL.createObjectURL('formFile');

function libros_guardados(){
//Object

var libro = new Object();
//propiedades
libro.txtid = document.getElementById('textid').value;
libro.txttitulo = document.getElementById('texttitulo').value;
libro.txtnombre = document.getElementById('textautor').value;
libro.txtapellido = document.getElementById('textapellido').value;
libro.txtgeneros = document.getElementById('generos').value;
libro.txtprecio = document.getElementById('txtprecio').value;
libro.imagen = document.getElementById('formFile').value;
coleccion.push(libro);
mostrardatos();
}

function mostrardatos(){
    fila = "";
    for (var libro in coleccion){
        fila += "<tr>"
        fila += "<td>" + coleccion[libro].imagen + "</td>";
        fila += "<td>" + coleccion[libro].txtid + "</td>";
        fila += "<td>" + coleccion[libro].txttitulo + "</td>";
        fila += "<td>" + coleccion[libro].txtnombre + "</td>";
        fila += "<td>" + coleccion[libro].txtapellido + "</td>";
        fila += "<td>" + coleccion[libro].txtgeneros + "</td>";
        fila += "<td>" + coleccion[libro].txtprecio + "</td>";
        fila += "</tr>"
    }

    document.getElementById('datos').innerHTML = fila;
    console.log(coleccion);
}



//Funcion para poder visualizar la imagen [PROBANDO]
/*
function readFile(input)
{

    if(input.files && input.files[0])
    {
        var reader = new FileReader();

        reader.onload = function (e) {

            var filePreview = docuemnt.creatElement('img');

            filePreview.id = 'file-preview';

            filePreview.src = e.target.result;

            console.log(e.target.result);

            var previewZone = document.getElementById('file-preview-zone');

            previewZone.appendChild(filePreview);
        }

        reader.readAsDataURL(input.files[0]);
    }

    var formFile1 = document.getElementById('formFile');

    formFile1.onchange = function (e) {
        readFile(e.srcElement);
    }
}

*/
//Intento 2 de previsualizar imagenes
