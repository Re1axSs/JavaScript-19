const cars = {
    "Toyota": {
        name: "Toyota",
        wheels: 4,
        doors: 4,
        isStarted: false,
        hp: 150
    },
    "BMW": {
        name: "BMW",
        wheels: 4,
        doors: 4,
        isStarted: true,
        hp: 200
    },
    "Audi": {
        name: "Audi",
        wheels: 4,
        doors: 4,
        isStarted: true,
        hp: 180
    }
};

const getCar = (carName) => {
    if (cars[carName]) {
        return cars[carName];
    } else {
        return "Автомобиль не найден";
    }
};

console.log(getCar("BMW"));
console.log(getCar("Mercedes"));
