function getRamdonInt(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}
function generar_matriz(){
    var fila = document.getElementById("filas").value;
    var columna = document.getElementById("columnas").value;
    arrayMatriz = new Array(fila);
     var mayor= -1000 , menor=10000000 , imenor , jmenor , imayor , jmayor;
//llenando la matriz y calculando menor y mayor//
for(var i=0; i<fila; i++){
        this.arrayMatriz[i] = new Array(columna);
    }
    //For que controla la Creacion de filas//
    for(let matriz = 0; matriz < this.arrayMatriz.length; matriz++){ 
      //For que controla la Creacion de Columnas//
    for(let i = 0; i < columna; i++){ 
      //Random para que salgan los nummeros aleatorios del Usuario//
            this.arrayMatriz[matriz][i] = ramdonNum = Math.floor(Math.random() * 100) + 1;
              if( arrayMatriz[matriz][i] < menor){
                menor = arrayMatriz[matriz][i];
                imenor= matriz;
                jmenor= i;
              }
              //Identifica si el numero en la posicion matriz,i es mayor que el mayor encontrado anteriormente//
              if( arrayMatriz[matriz][i] > mayor){ 
                mayor = arrayMatriz[matriz][i];
                imayor= matriz;
                //Columna donde se encuentra el numero mayor//
                jmayor= i;
              }
            }
        }
var numero ="";
//Recorriendo filas para llenar la Tabla//
    for(let matriz = 0; matriz < this.arrayMatriz.length; matriz++){ 
        numero+= "<tr>";  
    for(let i = 0; i < columna; i++){ 
            if (matriz == imayor && i== jmayor) 
            {
              numero += "<td id=\"mayor\">" + this.arrayMatriz[matriz][i] + "</td>"; 
            }else{
                if( matriz == imenor && i== jmenor){
                    numero += "<td id=\"menor\">" + this.arrayMatriz[matriz][i] + "</td>";
                }
                else{
                    numero+=  "<td>" + this.arrayMatriz[matriz][i] + "</td>"; 
                } 
            }
        }
        numero+= "</tr>";
    }
    //Imprime la Variable Numero//
  document.getElementById("tabla").innerHTML += numero;
  //Imprime el id del color del numero mayor que es naranjado//
   document.getElementById("mayor").style.backgroundColor = "orange";
   //Imprime el id del color del numero menor que es amarillo//
   document.getElementById("menor").style.backgroundColor = "yellow"; 
   //Imprimos el numero mayor y el numero menor//
   document.getElementById("primero").innerHTML += "Numero Mayor: " + mayor ;
   document.getElementById("segundo").innerHTML += "Numero Menor: " + menor;
} 