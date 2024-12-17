const cars = {
    bmw: { name: "BMW", wheels: 4, doors: 4, isStarted: true, hp: 200 },
    audi: { name: "Audi", wheels: 4, doors: 4, isStarted: false, hp: 250 },
    mercedes: { name: "Mercedes", wheels: 4, doors: 4, isStarted: true, hp: 300 },
  };
  
  function showCarNames(cars) {
    for (const car in cars) {
      console.log(car);
    }
  }
  
  showCarNames(cars);
  