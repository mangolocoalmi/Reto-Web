
const grafica = document.querySelector("#grafica");
const etiquetas = ["01/05/2022", "02/05/2022", "03/05/2022", "04/05/2022","05/05/2022","06/05/2022","07/05/2022"];

const tempMax = {
  label: "Temperatura Max",
  data: [24, 35, 24, 35, 24, 35, 30], 
  backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
  borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
  borderWidth: 1,// Ancho del borde
};

const tempMin = {
  label: "Temperatura Min",
  data: [14, 15, 20, 19, 12, 15, 20],
  backgroundColor: "rgba(255, 159, 64, 0.2)", // Color de fondo
  borderColor: "rgba(255, 159, 64, 1)", // Color del borde
  borderWidth: 1, // Ancho del borde
};

new Chart(grafica, {
  type: 'bar',// Tipo de gráfica
  data: {
      labels: etiquetas,
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