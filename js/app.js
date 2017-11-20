/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);
// Primer grafico
Morris.Bar({
  element: 'graph-enrollment',
  data: [
    {x: 'S1', y: 4},
    {x: 'S2', y: 3},
    {x: 'S3', y: 2},
    {x: 'S4', y: 2}

  ],
  xkey: 'x',
  ykeys: ['y'],
  labels: ['Y'],
  barColors: ["#faa719", "#b39415", "#b38c1a", "#eec00c"],
  hideHover: 'always',
});

//Segundo grafico

Morris.Donut({
  element: 'graph-achievement',
  data: [
    {value: 78, label: 'COMPLY'},
    {value: 5, label: 'FAILS'}
  ],
  backgroundColor: '#ccc',
  labelColor: '#faa719',
  colors: [
    '#faa719',
    '#e41616',
    '#f91b05',
    '#fc0606'
  ],
  formatter: function (x) { return x + "%"}
});

//Tercer parrafo

Morris.Donut({
  element: 'graph-promoter',
  data: [
    {value: 60, label: 'PROMETERS'},
    {value: 30, label: 'PASSIVE'},
    {value: 10, label: 'DETRACTORS'},
  ],
  backgroundColor: '#ccc',
  labelColor: '#faa719',
  colors: [
    '#faa719',
    '#ec6a0c',
    '#f91b05',
    '#95D7BB'
  ],
  formatter: function (x) { return x + "%"}
});

//Cuarto grafico

Morris.Donut({
  element: 'graph-tech',
  data: [
    {value: 62, label: 'COMPLY'},
    {value: 38, label: 'FAILS'},

  ],
  backgroundColor: '#ccc',
  labelColor: '#faa719',
  colors: [
    '#faa719',
    '#ec6a0c',
    '#f91b05',
    '#95D7BB'
  ],
  formatter: function (x) { return x + "%"}
});

//Quinto Grafico

Morris.Donut({
  element: 'graph-life',
  data: [
    {value: 62, label: 'COMPLY'},
    {value: 38, label: 'FAILS'},

  ],
  backgroundColor: '#ccc',
  labelColor: '#faa719',
  colors: [
    '#faa719',
    '#ec6a0c',
    '#f91b05',
    '#95D7BB'
  ],
  formatter: function (x) { return x + "%"}
});

//ultimo grafico

Morris.Donut({
  element: 'graph-satisfaction',
  data: [
    {value: 70, label: 'foo'},
    {value: 15, label: 'bar'},
    {value: 10, label: 'baz'},
    {value: 5, label: 'A really really long label'}
  ],
  backgroundColor: '#ccc',
  labelColor: '#060',
  colors: [
    '#0BA462',
    '#39B580',
    '#67C69D',
    '#95D7BB'
  ],
  formatter: function (x) { return x + "%"}
});

/*var container = document.getElementById('container');
console.log(container);

for (var i = 0; i < data.SCL['2016-2'].students.length; i++) {
	console.log(data.SCL['2016-2'].students[i].name);
	var parrafo = document.createElement('p');
	var nodoParrafo = document.createTextNode('La estudiante número ' + [i+1] + ' es: ' + data.SCL['2016-2'].students[i].name);
		parrafo.appendChild(nodoParrafo);
		container.appendChild(parrafo);
}

//funcion numero total de estudiantes
 var sumar = funcion(){
     var students = data.AQP["2016-2"].students;

     var counter = 0
     for (var i = 0; i < students.length; i++){
       counter = counter + 1
     }
 }*/

//funcion desercion
/*var container = document.getElementById('container');
var students = data.SCL["2016-2"].students;
 var result = 0;
for (var i = 0; i < students.length -1; i++){

 if(students[i].active === false){
   result = [i];
 }
}


var parrafo = document.createElement('p');
var nodoParrafo = document.createTextNode(result);
    parrafo.appendChild(nodoParrafo);
    container.appendChild(parrafo);*/


    //Variables


    //funciones
/*    (function(){
    var container = document.getElementById('container');
    var students = data.SCL["2016-2"].students;

        var total = students.length;
        var parrafo = document.createElement('p');
      	var nodoParrafo = document.createTextNode(total);
      		parrafo.appendChild(nodoParrafo);
      		container.appendChild(parrafo);

}());*/

    /*for (var i = 0; i < data.SCL['2016-2'].students.length; i++) {
    	console.log(data.SCL['2016-2'].students[i].name);
    	var parrafo = document.createElement('p');
    	var nodoParrafo = document.createTextNode('La estudiante número ' + [i+1] + ' es: ' + data.SCL['2016-2'].students[i].name);
    		parrafo.appendChild(nodoParrafo);
    		container.appendChild(parrafo);
    }*/
