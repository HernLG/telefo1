let datofijo=0.20;
let datoclaro=0.40;
let datomovistar=0.60;
let datoentel=1.00;

let cualoperador=prompt(`¿A que operador llamaste?\n1.-Fijo\n2.-Claro\n3.-Movistar\n4.-Entel`);

let minutos=parseInt(prompt(`¿Cuantos minutos duro la llamada?`));

let costofijo
costofijo=parseFloat(minhablado*datofijo);
let costoclaro=parseFloat(minhablado*datoclaro);
let costomovistar=parseFloat(minhablado*datomovistar);
let costoentel=parseFloat(minhablado*datoentel);
if(cualoperador==1){
    document.write(`El costo de la llamada a Fijo es S/ ${costofijo}`);
}else if(cualoperador==2){
    document.write(`El costo de la llamada Claro es S/ ${costoclaro}`);
}else if(cualoperador==3){
   document.write(`El costo de la llamada a Movistar es S/ ${costomovistar}`);
}else if(cualoperador==4){
    document.write(`El costo de la llamada a Entel es S/ ${costoentel}`);
}else {
    alert("No se identifico la operadora")
}