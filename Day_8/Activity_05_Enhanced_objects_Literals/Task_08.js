//  Use enhanced object literals to create an object with methods and properties, and log the object to the console.

const car = {
    make: 'Tesla',
    model: 'Model S',
    year: 2022,


    displayDetails(){
        console.log(`car make: ${this.make}, models:${this.model}, yer: ${this.year}`);
    }
}

console.log(car);

car.displayDetails();
