/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);

// Primer grafico enrollment

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

//Segundo grafico achievement

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

//Tercer parrafo net promoter score

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

//Cuarto grafico tech skills

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

//Quinto Grafico life skills

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

//Sexto grafico students satisfaction

Morris.Donut({
  element: 'graph-satisfaction',
  data: [
    {value: 140, label: 'CUMPLY'},
    {value: 15, label: 'FAILS'},
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

//Séptimo grafico teacher rating

Morris.Donut({
  element: 'graph-teacher',
  data: [
    {value: 7.9, label: 'CUMPLY'},
    {value: 2.1, label: 'FAILS'},
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

//Octovo grafico jedi master rating

Morris.Donut({
  element: 'graph-jedi',
  data: [
    {value: 91, label: 'CUMPLY'},
    {value: 9, label: 'FAILS'},
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


//funciones

(function(){

    //Total de estudiantes generación 2017-2

    var container = document.getElementById('enrolled');
    var students = data.SCL["2017-2"].students;

        var total = students.length;
        var cifra = document.createElement('h1');
      	var nodoCifra = document.createTextNode(total);
      		cifra.appendChild(nodoCifra);
      		enrolled.appendChild(cifra);

    //Deserción de estudiantes generación 2017-2

    var container = document.getElementById('dropout');
    var students = data.SCL["2017-2"].students;
    var result = 0;
        for (var i = 0; i < students.length; i++){

         if(students[i].active === false);{
               result = i++;
         }
        }
        
    //var porcentaje = (result * 100)/students.length

        var porcentaje = document.createElement('h1');
        var nodoPorcentaje = document.createTextNode(result);
            porcentaje.appendChild(nodoPorcentaje);
            dropout.appendChild(porcentaje);

    //Promedio de los profesores generación 2017-2

    var container = document.getElementById('teacher');
    var sumaProf = 0;
    var promProf = 0;
        for(var i = 0; i < data.SCL['2017-2'].ratings.length; i++){
        sumaProf += data.SCL['2017-2'].ratings[i].teacher;
        promProf = sumaProf / data.SCL['2017-2'].ratings.length;
        }

        //console.log(sumaProf+' suma y promedio '+promProf);

        var promedioProfes =  promProf;

        var promedio = document.createElement('h1');
        var nodoPromedio = document.createTextNode(promedioProfes);
            promedio.appendChild(nodoPromedio);
            teacher.appendChild(promedio);


    //Promedio de los jedi master generación 2017-2

    var container = document.getElementById('jedi');
    var sumaJedi = 0;
    var promJedi = 0;
        for(var i = 0; i < data.SCL['2017-2'].ratings.length; i++){
        sumaJedi += data.SCL['2017-2'].ratings[i].jedi;
        promJedi = sumaJedi / data.SCL['2017-2'].ratings.length;
        }

        //console.log(sumaJedi+' suma y promedio '+promJedi);

        var promedioJedis = promJedi;

        var promedio = document.createElement('h1');
        var nodoPromedio = document.createTextNode(promedioJedis);
            promedio.appendChild(nodoPromedio);
            jedi.appendChild(promedio);
}());
