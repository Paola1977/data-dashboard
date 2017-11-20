/*
 * Funcionalidad de tu producto
 */
// MENU PARA SELECCIONAR CIUDAD
// Llamamos al elemento contenedor
var seleccionar_ciudad = document.getElementById('seleccionar_ciudad');

// Creamos un select para elegir ciudad y le damos atributos
var select_ciudad = document.createElement('select');
select_ciudad.setAttribute('name','select_ciudad');
select_ciudad.setAttribute('id','select_ciudad');

// Creamos un elemento option por ciudad
// Le damos atributo value
// Creamos un textnode para darle nombre a cada opción
// Agregamos el textnode a la opción
var option_lima = document.createElement('option')
option_lima.setAttribute('value','value1');
var texto_lima = document.createTextNode('LIMA');
option_lima.appendChild(texto_lima);

var option_aqp = document.createElement('option')
option_aqp.setAttribute('value','value2');
var texto_aqp = document.createTextNode('AREQUIPA');
option_aqp.appendChild(texto_aqp);

var option_stgo = document.createElement('option')
option_stgo.setAttribute('value','value3');
var texto_stgo = document.createTextNode('SANTIAGO');
option_stgo.appendChild(texto_stgo);

var option_mex = document.createElement('option')
option_mex.setAttribute('value','value4');
var texto_mex = document.createTextNode('CIUDAD DE MÉXICO');
option_mex.appendChild(texto_mex);

// Agregamos las opciones al elemento select
// Agregamos el elemento select a nuestro elemento en html
select_ciudad.appendChild(option_lima);
select_ciudad.appendChild(option_aqp);
select_ciudad.appendChild(option_stgo);
select_ciudad.appendChild(option_mex);
seleccionar_ciudad.appendChild(select_ciudad);

// Determinamos el valor a mostrar al cargar la página,
// que corresponde a nuestra ciudad, Santiago
select_ciudad.selectedIndex = "2";

// MENU PARA SELECCIONAR GENERACION
// Llamamos al elemento contenedor
var seleccionar_gen = document.getElementById('seleccionar_generacion');

// Creamos un select para elegir generación y le damos atributos
var select_gen = document.createElement('select');
select_gen.setAttribute('name','select_generacion');
select_gen.setAttribute('id','select_generacion');

// Creamos un elemento option por generación
// Le damos atributo value
// Creamos un textnode para darle nombre a cada opción
// Agregamos el textnode a la opción
var option_gen20151 = document.createElement('option')
option_gen20151.setAttribute('value','value1');
var texto_gen20151 = document.createTextNode('2015-I');
option_gen20151.appendChild(texto_gen20151);

var option_gen20161 = document.createElement('option')
option_gen20161.setAttribute('value','value2');
var texto_gen20161 = document.createTextNode('2016-I');
option_gen20161.appendChild(texto_gen20161);

var option_gen20162 = document.createElement('option')
option_gen20162.setAttribute('value','value3');
var texto_gen20162 = document.createTextNode('2016-II');
option_gen20162.appendChild(texto_gen20162);

var option_gen20171 = document.createElement('option')
option_gen20171.setAttribute('value','value4');
var texto_gen20171 = document.createTextNode('2017-I');
option_gen20171.appendChild(texto_gen20171);

var option_gen20172 = document.createElement('option')
option_gen20172.setAttribute('value','value4');
var texto_gen20172 = document.createTextNode('2017-II');
option_gen20172.appendChild(texto_gen20172);

// Agregamos las opciones al elemento select
// Agregamos el elemento select a nuestro elemento en html
select_gen.appendChild(option_gen20151);
select_gen.appendChild(option_gen20161);
select_gen.appendChild(option_gen20162);
select_gen.appendChild(option_gen20171);
select_gen.appendChild(option_gen20172);
seleccionar_gen.appendChild(select_gen);

// Determinamos el valor a mostrar al cargar la página,
// que corresponde a nuestra generación 2017-II
select_gen.selectedIndex = "4";

/*__________MENU TAB (info general, estudiantes, profesores_________*/
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
} 
//AQP 2016-2 - 2017-1 (OK)
var total_sprint = 0;
var suma_sprint = 0;
var cont_estudiantes = 0;
var cont_total = 0;
var cont_estu_activos = 0;
cont_total = data.AQP['2016-2'].students.length + cont_total;
     for (var i= 0;i< data.AQP['2016-2'].students.length; i++)
      {
        if (data.AQP[‘2016-2’].students[i].active = ‘true’)
         {
           for (var j= 0;j< data.AQP['2016-2'].students.sprints[j].lenght; j++)
           {
              suma_sprint = data.AQP['2016-2'].students.sprints[j].score.tech + suma_sprint;
           }  
           cont_estudiantes = cont_estudiantes + 1;
          }
      }
cont_estu_activos = cont_estu_activos + cont_estudiantes;
//Poner mensaje AREQUIPA 2016 segundo semestre: cont_estudiantes;

var cont_estudiantes = 0;
cont_total = data.AQP['2017-1'].students.length + cont_total;
for (var i= 0;i< data.AQP['2017-1'].students.length; i++)
{
If (data.AQP[‘2017-1’].students[i].active = ‘true’)
{
cont_estudiantes = cont_estudiantes + 1;
}
}
cont_estu_activos = cont_estu_activos + cont_estudiantes;

//Funcion  puntuación promedio de l@s profesores.
Function promedio()
{
  alert("entro");
  var sumaAQP1_prof = 0;
  var promAQP1_prof = 0;
  for(var i = 0; i < data.AQP['2016-2'].ratings.length; i++)
  {
    sumaAQP1_prof += data.AQP['2016-2'].ratings[i].teacher;
    promAQP1_prof = sumaAQP1_prof / data.AQP['2016-2'].ratings.length;
  }
  console.log(sumaAQP1_prof +' suma y promedio P:'+promAQP1_prof); 

  var sumaAQP2_prof = 0;
  var promAQP2_prof = 0;
  for(var i = 0; i < data.AQP['2017-1'].ratings.length; i++)
  {
    sumaAQP2_prof += data.AQP['2017-1'].ratings[i].teacher;
    var promAQP2_prof = sumaAQP2_prof /data.AQP['2017-1'].ratings.length;
  }
  console.log(sumaAQP2_prof +' suma y promedio P:'+promAQP2_prof); 

  var sumaCDMX1_prof = 0;
  var promCDMX1_prof = 0;
  for(var i = 0; i < data.CDMX['2017-1'].ratings.length; i++)
  {
    sumaCDMX1_prof += data.CDMX['2017-1'].ratings[i].teacher;
    var promCDMX1_prof = sumaCDMX1_prof / data.CDMX['2017-1'].ratings.length;
  }
  console.log(sumaCDMX1_prof+' suma y promedio P:'+promAQP1_prof); 

  var sumaCDMX2_prof = 0;
  var promCDMX2_prof = 0;
  for(var i = 0; i < data.CDMX['2017-2'].ratings.length; i++)
  {
    sumaCDMX2_prof += data.CDMX['2017-2'].ratings[i].teacher;
    promCDMX2_prof = sumaCDMX2_prof / data.CDMX['2017-2'].ratings.length;
  }
  console.log(sumaCDMX2_prof +' suma y promedio P :'+promCDMX2_prof); 

  var sumaLIM1_prof = 0;
  var promLIM1_prof = 0;
  for(var i = 0; i < data.LIM['2016-2'].ratings.length; i++)
  {
    sumaLIM1_prof += data.LIM['2016-2'].ratings[i].teacher;
    promLIM1_prof = sumaLIM1_prof / data.LIM['2016-2'].ratings.length;
  }
  console.log(sumaLIM1_prof+' suma y promedio P:'+promLIM1_prof); 

  var sumaLIM2_prof = 0;
  var promLIM2_prof = 0;
  for(var i = 0; i < data.LIM['2017-1'].ratings.length; i++)
  {
    sumaLIM2_prof += data.LIM['2017-1'].ratings[i].teacher;
    promLIM2_prof = sumaLIM2_prof / data.LIM['2017-1'].ratings.length;
  }
  console.log(sumaLIM2_prof +' suma y promedio P:'+promLIM2_prof); 

  var sumaLIM3_prof = 0;
  var promLIM3_prof = 0;
  for(var i = 0; i < data.LIM['2017-2'].ratings.length; i++)
  {
    sumaLIM3_prof += data.LIM['2017-2'].ratings[i].teacher;
    promLIM3_prof = sumaLIM3_prof / data.LIM['2017-2'].ratings.length;
  }
  console.log(sumaLIM3_prof+' suma y promedio P:'+promLIM3_prof);

  var sumaSCL1_prof = 0;
  var promSCL1_prof = 0;
  for(var i = 0; i < data.SCL['2016-2'].ratings.length; i++)
  {
    sumaSCL1_prof += data.SCL['2016-2'].ratings[i].teacher;
    promSCL1_prof = sumaSCL1_prof / data.SCL['2016-2'].ratings.length;
  }
  console.log(sumaSCL1_prof+' suma y promedio P:'+promSCL1_prof);

  var sumaSCL2_prof = 0;
  var promSCL2_prof = 0;
  for(var i = 0; i < data.SCL['2017-1'].ratings.length; i++)
  {
    sumaSCL2_prof += data.SCL['2017-1'].ratings[i].teacher;
    promSCL2_prof = sumaSCL2_prof / data.SCL['2017-1'].ratings.length;
  }
  console.log(sumaSCL2_prof+' suma y promedio P:'+promSCL2_prof);

  var sumaSCL3_prof = 0;
  var promSCL3_prof = 0;
  for(var i = 0; i < data.SCL['2017-2'].ratings.length; i++)
  {
    sumaSCL3_prof += data.SCL['2017-2'].ratings[i].teacher;
    promSCL3_prof = sumaSCL3_prof / data.SCL['2017-2'].ratings.length;
  }
  console.log(sumaSCL3_prof+' suma y promedio P:'+promSCL3_prof);

  //sumo todos los puntajes de sedes y divido para obtener promedio de profesores
  var sumaTotal = promAQP1_prof + promAQP2_prof + promCDMX1_prof + promCDMX2_prof + promLIM1_prof + promLIM2_prof + promLIM3_prof + promSCL1_prof + promSCL2_prof + promSCL3_prof;
  var promedioProfesores = sumaTotal / 10;
  console.log('promedio de profesores '+ promedioProfesores);
}


//Funcion para devolver La puntuación promedio de l@s jedi masters.
var sumaAQP1 = 0;
var promAQP1 = 0;
for(var i = 0; i < data.AQP['2016-2'].ratings.length; i++){
sumaAQP1 += data.AQP['2016-2'].ratings[i].jedi;
promAQP1 = sumaAQP1 /data.AQP['2016-2'].ratings.length;
}
console.log(sumaAQP1 +' suma y promedio :'+promAQP1);

var sumaAQP2 = 0;
var promAQP2 = 0;
for(var i = 0; i < data.AQP['2017-1'].ratings.length; i++){
sumaAQP2 += data.AQP['2017-1'].ratings[i].jedi;
var promAQP2 = sumaAQP2 /data.AQP['2017-1'].ratings.length;
}
console.log(sumaAQP2 +' suma y promedio :'+promAQP2);

var sumaCDMX1 = 0;
var promCDMX1 = 0;
for(var i = 0; i < data.CDMX['2017-1'].ratings.length; i++){
sumaCDMX1 += data.CDMX['2017-1'].ratings[i].jedi;
var promCDMX1 = sumaCDMX1 / data.CDMX['2017-1'].ratings.length;
}
console.log(sumaCDMX1+' suma y promedio :'+promAQP1);

var sumaCDMX2 = 0;
var promCDMX2 = 0;
for(var i = 0; i < data.CDMX['2017-2'].ratings.length; i++){
sumaCDMX2 += data.CDMX['2017-2'].ratings[i].jedi;
promCDMX2 = sumaCDMX2 / data.CDMX['2017-2'].ratings.length;
}
console.log(sumaCDMX2 +' suma y promedio :'+promCDMX2);

var sumaLIM1 = 0;
var promLIM1 = 0;
for(var i = 0; i < data.LIM['2016-2'].ratings.length; i++){
sumaLIM1 += data.LIM['2016-2'].ratings[i].jedi;
promLIM1 = sumaLIM1 / data.LIM['2016-2'].ratings.length;
}
console.log(sumaLIM1+' suma y promedio :'+promLIM1);

var sumaLIM2 = 0;
var promLIM2 = 0;
for(var i = 0; i < data.LIM['2017-1'].ratings.length; i++){
sumaLIM2 += data.LIM['2017-1'].ratings[i].jedi;
promLIM2 = sumaLIM2 / data.LIM['2017-1'].ratings.length;
}
console.log(sumaLIM2 +' suma y promedio :'+promLIM2);

var sumaLIM3 = 0;
var promLIM3 = 0;
for(var i = 0; i < data.LIM['2017-2'].ratings.length; i++){
sumaLIM3 += data.LIM['2017-2'].ratings[i].jedi;
promLIM3 = sumaLIM3 / data.LIM['2017-2'].ratings.length;
}
console.log(sumaLIM3+' suma y promedio :'+promLIM3);

var sumaSCL1 = 0;
var promSCL1 = 0;
for(var i = 0; i < data.SCL['2016-2'].ratings.length; i++){
sumaSCL1 += data.SCL['2016-2'].ratings[i].jedi;
promSCL1 = sumaSCL1 / data.SCL['2016-2'].ratings.length;
}
console.log(sumaSCL1+' suma y promedio :'+promSCL1);

var sumaSCL2 = 0;
var promSCL2 = 0;
for(var i = 0; i < data.SCL['2017-1'].ratings.length; i++){
sumaSCL2 += data.SCL['2017-1'].ratings[i].jedi;
promSCL2 = sumaSCL2 / data.SCL['2017-1'].ratings.length;
}
console.log(sumaSCL2+' suma y promedio :'+promSCL2);


var sumaSCL3 = 0;
var promSCL3 = 0;
for(var i = 0; i < data.SCL['2017-2'].ratings.length; i++){
sumaSCL3 += data.SCL['2017-2'].ratings[i].jedi;
promSCL3 = sumaSCL3 / data.SCL['2017-2'].ratings.length;
}
console.log(sumaSCL3+' suma y promedio :'+promSCL3);

//sumo todos los puntajes de sedes y divido para obtener promediode l@s jedi masters.
var sumaTotal = promAQP1 + promAQP2 + promCDMX1 + promCDMX2 + promLIM1 + promLIM2 + promLIM3 + promSCL1 + promSCL2 + promSCL3;
var promedioJedis = sumaTotal/10;
console.log('promedio de jedis '+promedioJedis);