// get variavle from html
let avatar = document.querySelector(".avatar"),
  notification = document.querySelector(".nofitcation");
dropdown(avatar);
dropdown(notification);

function dropdown(selector) {
  selector.addEventListener("click", () => {
    let dropdownMenu = selector.querySelector(".dropdown-menu");
    dropdownMenu.classList.contains("active")
      ? dropdownMenu.classList.remove("active")
      : dropdownMenu.classList.add("active");
  });
}

// sidebar

let sidebar = document.querySelector(".sidebar"),
  bars = document.querySelector(".bars");

bars.addEventListener("click", () => {
  sidebar.classList.contains("active")
    ? sidebar.classList.remove("active")
    : sidebar.classList.add("active");
});

// chart
let visitor = [800,320,190,250,400,600],
Hard=[502,203,70,200,350,400],
years=[2015,2016,2017,2018,2019,2020]

var options = {
  chart: {
    type: 'area',
    height: '100%',
    width: '90%',
  },
  series: [{
    name: 'area',
    name:'visitor',
    data: visitor
  },
  {
    name: 'area',
    name:'Hard',
    data: Hard
  },
],
  xaxis: {
    categories: [...years]
  },
  colors:['#43a047','#e65245','#e43a15']
}

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();


// toggle mode

let mode = document.querySelector(".mode")
mode.addEventListener("click", ()=>{

if(document.body.classList.contains("dark")){
  document.body.classList.remove("dark")
  mode.querySelector("i").classList.replace("fa-sun","fa-moon")
}
else
{
  document.body.classList.add("dark")
  mode.querySelector("i").classList.replace("fa-moon","fa-sun")
}



})

window.matchMedia("(max-width:768px)").matches ? sidebar.classList.remove("active"):
sidebar.classList.add("active")