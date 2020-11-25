var DataPersonal = function () {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let edad = document.getElementById("edad").value;
  let cedula = document.getElementById("cedula").value;
  let telefono = document.getElementById("telefono").value;
  let direccion = document.getElementById("direccion").value;
  if (nombre == " ") {
    document.getElementById("nombre").focus;
  }
  else { }
  if (apellido == " ") {
    document.getElementById("apellido").focus;
  }
  else { }
  if (edad == "") {
    document.getElementById("edad").focus
  }
  else { }
  var persona = ("Afiliado: " + nombre + ", " + apellido + " Edad de: " + edad + " ID: " + cedula + " Telf: " + telefono + " Direccion: " + direccion);
  localStorage.setItem("Persona",persona);
  console.log(persona);
};
var Familiares = function () {
  let nombre = document.getElementById("nombref").value;
  let apellido = document.getElementById("apellidof").value;
  let edad = document.getElementById("edadf").value;
  let parentesco = document.getElementById("parentesco").value;

  let nombre2 = document.getElementById("nombref2").value;
  let apellido2 = document.getElementById("apellidof2").value;
  let edad2 = document.getElementById("edadf2").value;
  let parentesco2 = document.getElementById("parentesco2").value;
  var familia = (parentesco + " Nombre: " + nombre + ", " + apellido + ". Edad: " + edad + " ");
if (nombre2 !=""){
  var familia2 = (parentesco2 + " Nombre: " + nombre2 + ", " + apellido2 + ". Edad: " + edad2 + " ");
}
else{
  
}  
  console.log(familia);
  console.log(familia2);

};

var Enfermedades = function () {
  let  enf = document.getElementById("enfermedad").value;
  let  time = document.getElementById("tiempo").value;
  let  enf2 = document.getElementById("enfermedad2").value;
  let  time2 = document.getElementById("tiempo2").value;
  let  comentario = document.getElementById("notaenfermedad").value;
  var enfermedades = ("Sufre de " + enf + ", Desde: " + time + ". y " + enf2 + ", Desde: " + time2 + ". Nota: " + comentario);
  console.log(enfermedades);
};

var Ingresos = function () {
  let  centro = document.getElementById("centro").value;
  let  fecha = document.getElementById("fecha").value;
  let  centro2 = document.getElementById("centro2").value;
  let  fecha2 = document.getElementById("fecha2").value;
  let  comentarioIn = document.getElementById("descripcion").value;
  var ingreso = ("Ingresos en: " + centro + ", Fecha: " + fecha + ". y " + centro2 + ", Fecha: " + fecha2 + ". Nota: " + comentarioIn);
  console.log(ingreso);
}
