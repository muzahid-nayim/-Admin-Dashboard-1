var xValues = ["sales", "Orders", "Online"];
var yValues = [55, 49,44 ,0];
var barColors = ["red", "green","blue","orange","brown"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "This week"
    }
  }
});












var xValues = ["sales", "Orders", "Online"];

var yValues = [55, 49, 44];
var barColors = [
  "red",
  "green",
  "blue"
  
];

new Chart("myChart2", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "This weak"
    }
  }
});





let root = document.querySelector(':root');
let ThemeButton = document.getElementById("theme");



let counter1 = true;
let LightDark = () =>{
  // var root = document.querySelector(':root');

  if(counter1 == true){
  root.style.setProperty('--header-background', 'black');
  root.style.setProperty('--bg-color', ' rgb(34, 34, 34)');
  root.style.setProperty('--text-color', 'white ');
  root.style.setProperty('--gray-color', ' rgb(117, 117, 117)');
  root.style.setProperty('--icon-color', ' rgb(55, 253, 6)');
  root.style.setProperty('--main-bg-color', 'rgb(17, 17, 17) ');
  root.style.setProperty('--icon-hover-color', ' rgb(199, 253, 6)');
  root.style.setProperty('--shadow-upper', ' rgb(59, 59, 59)');
  root.style.setProperty('--shadow-down', ' black');
 


  counter1 = false;

  }

  else{
  root.style.setProperty('--header-background', 'white');
  root.style.setProperty('--bg-color', '#e0e0e0');
  root.style.setProperty('--text-color', 'rgb(31, 30, 30)');
  root.style.setProperty('--gray-color', 'gray');
  root.style.setProperty('--icon-color', 'rgb(63, 63, 63)');
  root.style.setProperty('--main-bg-color', 'rgb(240, 234, 234)');
  root.style.setProperty('--icon-hover-color', 'rgb(100, 100, 145)');
  root.style.setProperty('--shadow-upper', '#8d8d8d');
  root.style.setProperty('--shadow-down', ' white');


    counter1 = true;
  }


}

// LightDark();