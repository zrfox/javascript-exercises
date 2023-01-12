const convertToCelsius = function(farenheit) {
  let celsiusVar = 0;
  celsiusVar = +((farenheit-32)*0.5556).toFixed(1)
  if(celsiusVar==0.0)
  {
    celsiusVar = Math.trunc(celsiusVar);
  }

  return celsiusVar;
};

const convertToFahrenheit = function(celsius) {
  let farenheitVar = 0;
          /*toFixed converts to string, + returns to number*/
  farenheitVar = +(celsius*1.8+32).toFixed(1);
  if(Number.isInteger(farenheitVar))
  {
    farenheitVar = Math.trunc(farenheitVar);
  }
  return farenheitVar;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
