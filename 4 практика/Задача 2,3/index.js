function celsiusToFahrenheit(celsius) {
    return celsius * 1.8 + 32;
  }
  
  function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) / 1.8;
  }
  
  console.log(celsiusToFahrenheit(0));  
  console.log(celsiusToFahrenheit(25)); 
  console.log(fahrenheitToCelsius(32)); 
  console.log(fahrenheitToCelsius(77));
  
  // Стрелочная функция для перевода Цельсия в Фаренгейт
const celsiusToFahrenheit = celsius => celsius * 1.8 + 32;

// Стрелочная функция для перевода Фаренгейта в Цельсий
const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) / 1.8;

console.log(celsiusToFahrenheit(0));  
console.log(celsiusToFahrenheit(25)); 
console.log(fahrenheitToCelsius(32)); 
console.log(fahrenheitToCelsius(77)); 

  