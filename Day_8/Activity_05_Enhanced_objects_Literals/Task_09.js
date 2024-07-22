// Create an object with computed property names based on variables and log the object to the console.

let key = 'owner';

const car = {
    make: 'Tesla',
    model: 'Model S',
    year: 2022,
    [key]:'mohit pal',


    displayDetails(){
        console.log(`car make: ${this.make}, models:${this.model}, year: ${this.year}, owner: ${this.owner}`);
    }
}

console.log(car);

car.displayDetails();