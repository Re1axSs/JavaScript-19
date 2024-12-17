function createCar(additionalFields) {
  const car = {
    wheels: 4,
    doors: 4,
    isStarted: false,
  };

  return { ...car, ...additionalFields };
}

console.log(createCar({ name: "Haval", hp: 198 }));
