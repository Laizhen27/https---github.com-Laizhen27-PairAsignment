// Assign Values
let wheel =document.querySelector('.wheel');
let spinBtn = document.querySelector('.spinBtn');
let result = document.getElementById('result');
let value = Math.ceil(Math.random()  * 3600);
console.log(value%360)
//Spin Function
const finalValue = document.getElementById("final-value");
spinBtn.onclick = function(){
    wheel.style.transform = "rotate(" +value+"deg)"
    value += Math.ceil(Math.random() * 3600);
    let award = Results(value);
    if(award != null){
        result.innerHTML = award;
        console.log(value%360)
        console.log(award)
    }
}
//Object that stores values of minimum and maximum angle for a value
const rotationValues = [
  { minDegree: 0, maxDegree: 22.5, value: 40 },
  { minDegree: 23.5, maxDegree: 67.5, value: 30 },
  { minDegree: 68.5, maxDegree: 112.5, value: 50 },
  { minDegree: 113.5, maxDegree: 157.5, value: 15 },
  { minDegree: 158.5, maxDegree: 202.5, value: 80},
  { minDegree: 203.5, maxDegree: 247.5, value: 20},
  { minDegree: 248.5, maxDegree: 292.5, value: 100},
  { minDegree: 293.5, maxDegree: 337.5, value: 10},
  { minDegree: 338.5, maxDegree: 360, value: 40 },
];


function Results(value){
    for (let i of rotationValues) {
      //if the angleValue is between min and max then display it
      if ( i.minDegree<= value %360 && value%360 <= i.maxDegree) {
        return i.value;
      }
    }
};

