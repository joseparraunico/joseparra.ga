function opcion(humano){
  var resultado_texto = ["Empató", "Ganó", "Perdió"];
  var seleccion = ["Piedra", "Papel", "Tijera", "Cucaracha", "Arepa"];
  var logica = [
    [0,1,2,2,1],
    [2,0,1,1,2],
    [1,2,0,2,1],
    [1,2,1,0,2],
    [2,1,2,1,0],
  ];
  var maquina = Math.floor((Math.random() * 5));
  var resultado = logica[maquina] [humano];
  console.log("Humano juega " + seleccion[humano]);
  console.log("Máquina juega " + seleccion[maquina]);
  console.log(resultado_texto[resultado]);
  var mensaje_1;
  var mensaje_2;
  var mensaje_3;
  mensaje_1 = new SpeechSynthesisUtterance ("Humano juega " + seleccion[humano])
  mensaje_2 = new SpeechSynthesisUtterance ("Máquina juega " + seleccion[maquina])
  mensaje_3 = new SpeechSynthesisUtterance (resultado_texto[resultado])
  window.SpeechSynthesis.speak(mensaje_1);
  window.SpeechSynthesis.speak(mensaje_2);
  window.SpeechSynthesis.speak(mensaje_3);
}
