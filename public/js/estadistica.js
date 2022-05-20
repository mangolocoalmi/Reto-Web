
const grafica = document.querySelector("#grafica");
const arrFecha = [];
const arrTempMx = [];
const arrTempMn = [];

temps.forEach(element => { 
  arrFecha.push(element._id);
  arrTempMx.push(element.tempMax);
  arrTempMn.push(element.tempMin);
});

console.log(arrFecha);
console.log(arrTempMx);
console.log(arrTempMn);

const tempMax = {
  label: "Temperatura Maxima",
  data: arrTempMx,
  backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
  borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
  borderWidth: 1,// Ancho del borde
};

const tempMin = {
  label: "Temperatura Minima",
  data: arrTempMn,
  backgroundColor: "rgba(255, 159, 64, 0.2)", // Color de fondo
  borderColor: "rgba(255, 159, 64, 1)", // Color del borde
  borderWidth: 1, // Ancho del borde
};

new Chart(grafica, {
  type: 'bar',// Tipo de gráfica
  data: {
      labels: arrFecha,
      datasets: [
          tempMax,
          tempMin
      ]
  },
  options: {
      scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              max: 50
            }
          }],
      },
  }
});