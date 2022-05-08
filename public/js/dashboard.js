// var socket = io("ws://192.168.4.18:3000", { transports : ['websocket'] });
var socket = io("ws://192.168.1.60:3000", { transports: ["websocket"], reconnection: false,});
socket.on("connect", () => {
  console.log(socket.id);
});

var opts = {
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
    divWidth: 1.1,
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

var target = document.getElementById('temp');
var target1 = document.getElementById('hum');

var gauge = new Gauge(target).setOptions(opts);
var gauge1 = new Gauge(target1).setOptions(opts);

gauge.maxValue = 100; // set max gauge value
gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
gauge.animationSpeed = 128; // set animation speed (32 is default value)

gauge1.maxValue = 100; // set max gauge value
gauge1.setMinValue(0);  // Prefer setter over gauge.minValue = 0
gauge1.animationSpeed = 128; // set animation speed (32 is default value)

socket.on("sensor", (temp, hum) => {
  document.getElementById('txt').innerText = temp + "ºC";
  document.getElementById('txt1').innerText = hum + "%";
  gauge.set(temp);
  gauge1.set(hum);
  // console.log("temperatura " + temp);
  // console.log("humedad " + hum);
});
