var socket = io("ws://192.168.4.18:3000", {
  transports: ["websocket"],
  reconnection: false,
});
//var socket = io("ws://192.168.1.60:3000", { transports: ["websocket"], reconnection: false,});
socket.on("connect", () => {
  console.log(socket.id);
});

var opts_temp = {
  angle: 0, // The span of the gauge arc
  lineWidth: 0.24, // The line thickness
  radiusScale: 1, // Relative radius
  pointer: {
    length: 0.41, // // Relative to gauge radius
    strokeWidth: 0.062, // The thickness
    color: '#000000' // Fill color
  },
  limitMax: false,
  limitMin: false,
  generateGradient: true,
  highDpiSupport: true,
  staticLabels: {
    font: "15px sans-serif",
    labels: [0, 35, 75, 100], 
    color: "#000000",
    fractionDigits: 0 
  },
  renderTicks: {
    divisions: 5,
    divWidth: 1,
    divLength: 0.7,
    divColor: '#333333',
    subDivisions: 3,
    subLength: 0.5,
    subWidth: 0.6,
    subColor: '#666666'
  },     
  staticZones: [
    {strokeStyle: "#30B32D", min: 0, max: 35},
    {strokeStyle: "#FFDD00", min: 35, max: 75},
    {strokeStyle: "#F03E3E", min: 75, max: 100},
  ],
};

var opts_hum = {
  angle: 0.15, /// The span of the gauge arc
  lineWidth: 0.44, // The line thickness
  pointer: {
    length: 0.62, // Relative to gauge radius
    strokeWidth: 0.035 // The thickness
  },
  staticLabels: {
    font: "10px sans-serif",  // Specifies font
    labels: [0, 30, 50, 100],  // Print labels at these values
    color: "#000000",  // Optional: Label text color
    fractionDigits: 0  // Optional: Numerical precision. 0=round off.
  },
  colorStart: '#205375',   // Colors
  colorStop: '#187498',    // just experiment with them
  strokeColor: '#E8F9FD'   // to see which ones work best for you
};

var target = document.getElementById('temp');
var target1 = document.getElementById('hum');

var gauge = new Gauge(target).setOptions(opts_temp);
var gauge1 = new Gauge(target1).setOptions(opts_hum);

gauge.maxValue = 100; // set max gauge value
gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
gauge.animationSpeed = 128; // set animation speed (32 is default value)

gauge1.maxValue = 100; // set max gauge value
gauge1.setMinValue(0);  // Prefer setter over gauge.minValue = 0
gauge1.animationSpeed = 32; // set animation speed (32 is default value)

document.getElementById("txt").innerText = 100 + "ºC";
document.getElementById("txt1").innerText = 100 + "%";
gauge.set(100);
gauge1.set(100);
setInterval(function () {}, 1000);
document.getElementById("txt").innerText = 0 + "ºC";
document.getElementById("txt1").innerText = 0 + "%";
gauge.set(0);
gauge1.set(0);

socket.on("sensor", (temp, hum) => {
  document.getElementById('txt').innerText = temp + "ºC";
  document.getElementById('txt1').innerText = hum + "%";
  gauge.set(temp);
  gauge1.set(hum);
  // console.log("temperatura " + temp);
  // console.log("humedad " + hum);
});

const grafica = document.querySelector("#grafica");
const etiquetas = ["01/05/2022", "02/05/2022", "03/05/2022", "04/05/2022","05/05/2022","06/05/2022","07/05/2022"];

const datosVentas2020 = {
  label: "Temperatura Max",
  data: [24, 35, 24, 35, 24, 35, 30], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
  backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
  borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
  borderWidth: 1,// Ancho del borde
};

const datosVentas2021 = {
  label: "Temperatura Min",
  data: [14, 15, 20, 19, 12, 15, 20], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
  backgroundColor: 'rgba(255, 159, 64, 0.2)',// Color de fondo
  borderColor: 'rgba(255, 159, 64, 1)',// Color del borde
  borderWidth: 1,// Ancho del borde
};

new Chart(grafica, {
  type: 'bar',// Tipo de gráfica
  data: {
      labels: etiquetas,
      datasets: [
          datosVentas2020,
          datosVentas2021
      ]
  },
  options: {
      scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              max: 100
            }
          }],
      },
  }
});