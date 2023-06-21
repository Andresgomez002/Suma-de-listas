// Suma de elementos: Dada una lista de números, crea una función en JavaScript que recorra la lista y devuelva la suma de todos los elementos.
let sumaLista = (lista) =>{
    contador = 0;
    for(let i = 0; i < lista.length; i++){
        contador+= lista[i];
    }
    return contador;
 }
 
 console.log(sumaLista([1,2,3,4,5]));
 console.log(sumaLista([8,1,7,3,7]));