


function calcularAnios(fecha) {
    var fechaActual = new Date();
    var anios = fechaActual.getFullYear() - fecha.getFullYear();
  
    if (
      fechaActual.getMonth() < fecha.getMonth() ||
      (fechaActual.getMonth() === fecha.getMonth() && fechaActual.getDate() < fecha.getDate())
    ) {
      anios--;
    }
    
    return anios;
  }
  
function calcularEdad() {
    var fechaNacimiento = new Date(document.getElementById('edad').value);
    var edad = calcularAnios(fechaNacimiento);
    
    var edadInput = document.getElementById('edadInput');
    edadInput.value = edad;
}
  
function calcularAntiguedad() {
    var fechaIngreso = new Date(document.getElementById('fechaIngreso').value);
    var antiguedad = calcularAnios(fechaIngreso);
    
    var antiguedadInput = document.getElementById('antiguedad');
    antiguedadInput.value = antiguedad;
    return antiguedad;
}

function modificarSalario() {
    var valorActual = document.getElementById('salario').value;
    var nuevoValor = prompt('Ingrese el nuevo valor:', valorActual);
  
    if (nuevoValor !== null) {
      document.getElementById('salario').value = nuevoValor;
    }
  }

  function  calcularPrestaciones(){
    var prestaciones =  (document.getElementById('salario').value* calcularAntiguedad())/12;
    document.getElementById('prestaciones').value = prestaciones;
  }
  
  ///////////////////////////////////////////////////////////////////////////////////////////
  var informacionComplementaria = [];

  function abrirFormulario() {
    var modal = document.getElementById('myModal');
    var infoContainer = document.getElementById('infoContainer');
    infoContainer.innerHTML = '';
  
    var formHTML = '<form id="infoForm">';
    formHTML += '<label for="nivel1">Ultimo Nivel Educativo:</label>';
    formHTML += '<input type="text" id="nivel1" required><br>';
    formHTML += '<label for="nivel2">Institución Educativa:</label>';
    formHTML += '<input type="text" id="nivel2" required><br>';
    formHTML += '<label for="nivel3">Fecha de Finalización:</label>';
    formHTML += '<input type="date" id="nivel3" required><br>';
    formHTML += '<button type="submit" class="btn btn-primary">Guardar</button>';
    formHTML += '</form>';
  
    infoContainer.innerHTML = formHTML;
  
    var form = document.getElementById('infoForm');
    form.addEventListener('submit', guardarInformacion);
    
    modal.style.display = 'block';
  }
  
  function guardarInformacion(event) {
    event.preventDefault();
    
    var nivel1 = document.getElementById('nivel1').value;
    var nivel2 = document.getElementById('nivel2').value;
    var nivel3 = document.getElementById('nivel3').value;
    
    var informacion = {
      nivel1: nivel1,
      nivel2: nivel2,
      nivel3: nivel3
    };
    
    informacionComplementaria.push(informacion);
  
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
  
    mostrarInformacion();
  }
  
  function mostrarInformacion() {
    var informacionHTML = '';
  
    for (var i = 0; i < informacionComplementaria.length; i++) {
      var informacion = informacionComplementaria[i];
      informacionHTML += 'Ultimo Nivel Educativo: ' + informacion.nivel1+ '\n';
      informacionHTML += 'Institución Educativa: ' + informacion.nivel2+ '\n';
      informacionHTML += 'Fecha de Finalización: ' + informacion.nivel3+ '\n\n\n';
      informacionHTML;
    }
  
    if (informacionHTML === '') {
      informacionHTML = '<p>No se ha ingresado información complementaria</p>';
    }
  
    alert(informacionHTML);
  }
 ///////////////////////////////////////////////////////////////////////////////////////////// 
 var informacionResidencia = [];

function abrirFormularioResidencia() {
  var modal = document.getElementById('myModalResidencia');
  var residenciaContainer = document.getElementById('residenciaContainer');
  residenciaContainer.innerHTML = '';

  var formHTML = '<form id="residenciaForm">';
  formHTML += '<label for="txtciuna">Ciudad de residencia:</label>';
  formHTML += '<input type="text" id="txtciuna" required><br>';
  formHTML += '<label for="Paices">Pais de residencia:</label>';
  formHTML += '<select id="Paices" required>';
  formHTML += '<option disabled selected>Seleccione una opción</option>';
  formHTML += '<option>Colombia</option>';
  formHTML += '<option>México</option>';
  formHTML += '<option>Perú</option>';
  formHTML += '<option>Ecuador</option>';
  formHTML += '<option>Chile</option>';
  formHTML += '<option>Argentina</option>';
  formHTML += '<option>Venezuela</option>';
  formHTML += '</select><br><br>';
  formHTML += '<label for="txtbr">Barrio:</label>';
  formHTML += '<input type="text" id="txtbr" required><br>';
  formHTML += '<label for="txtdir">Dirección:</label>';
  formHTML += '<input type="text" id="txtdir" required><br>';
  formHTML += '<button type="submit" class="btn btn-primary">Guardar</button>';
  formHTML += '</form>';

  residenciaContainer.innerHTML = formHTML;

  var form = document.getElementById('residenciaForm');
  form.addEventListener('submit', guardarInformacionResidencia);

  modal.style.display = 'block';
}

function guardarInformacionResidencia(event) {
  event.preventDefault();

  var ciudad = document.getElementById('txtciuna').value;
  var pais = document.getElementById('Paices').value;
  var barrio = document.getElementById('txtbr').value;
  var direccion = document.getElementById('txtdir').value;

  var informacion = {
    ciudad: ciudad,
    pais: pais,
    barrio: barrio,
    direccion: direccion
  };

  informacionResidencia.push(informacion);

  var modal = document.getElementById('myModalResidencia');
  modal.style.display = 'none';

  mostrarInformacionResidencia();
}

function mostrarInformacionResidencia() {
  var residenciaContainer = document.getElementById('residenciaContainer');
  residenciaContainer.innerHTML = '';

  for (var i = 0; i < informacionResidencia.length; i++) {
    var informacion = informacionResidencia[i];

    var ciudadHTML = document.createElement('p');
    ciudadHTML.textContent = 'Ciudad de residencia: ' + informacion.ciudad;
    residenciaContainer.appendChild(ciudadHTML);

    var paisHTML = document.createElement('p');
    paisHTML.textContent = 'País de residencia: ' + informacion.pais;
    residenciaContainer.appendChild(paisHTML);

    var barrioHTML = document.createElement('p');
    barrioHTML.textContent = 'Barrio: ' + informacion.barrio;
    residenciaContainer.appendChild(barrioHTML);

    var direccionHTML = document.createElement('p');
    direccionHTML.textContent = 'Dirección: ' + informacion.direccion;
    residenciaContainer.appendChild(direccionHTML);

    var hr = document.createElement('hr');
    residenciaContainer.appendChild(hr);
  }

  if (informacionResidencia.length === 0) {
    var noInfoHTML = document.createElement('p');
    noInfoHTML.textContent = 'No se ha ingresado información de residencia';
    residenciaContainer.appendChild(noInfoHTML);
  }

  var modal = document.getElementById('myModalResidencia');
  modal.style.display = 'block';
}

var closeButton = document.getElementsByClassName('close')[0];
closeButton.addEventListener('click', function () {
  var modal = document.getElementById('myModalResidencia');
  modal.style.display = 'none';
});
 
  