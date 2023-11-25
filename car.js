class Car {
    constructor(brand, model, year, color, price, gas) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.price = price;
        this.gas = gas;
    }

    honk() {
        console.log("Tuut tuut");
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}, Price: $${this.price}`);
    }

    race(turns) {
        for (let turn = 1; turn <= turns; turn++) {
            if (this.year === 2023) {
                this.gas = Math.max(0,this.gas - 5);
            } else {
                this.gas = Math.max(0, this.gas - (5 + (2023 - this.year)));
            }
            console.log(`Turn ${turn}: ${this.brand} - Gas Remaining: ${this.gas} liters`);
        }
    }
}

// Create Car objects
const car1 = new Car("Honda", "CR-V", 2023, "Red", 50000, 45);
const car2 = new Car("Ford", "F-150", 2020, "Black", 25000, 30);
const car3 = new Car("BMW", "X5", 2022, "Green", 60000, 65);
const car4 = new Car("Mazda", "CX-5", 2019, "White", 15000, 60);
const car5 = new Car("Audi", "Q7", 2018, "Silver", 52000, 47);
const car6 = new Car("Kia", "Forte", 2020, "Blue", 21000, 56);

// Call honk method for all 6 cars
car1.honk();
car2.honk();
car3.honk();
car4.honk();
car5.honk();
car6.honk();

// Race for 7 turns
const turns = 7;
console.log("\nRace Simulation:");
car1.race(turns);
car2.race(turns);
car3.race(turns);
car4.race(turns);
car5.race(turns);
car6.race(turns);
