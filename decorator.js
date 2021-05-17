class Car {
  constructor(price, model) {
    this.price = price;
    this.model = model;
  }

  getPrice() {
    return this.price;
  }

  getModel() {
    return this.model;
  }
}
// class decorator
class Sport {
  constructor(car) {
    this.car = car;
    this.model = 'sport';
    this.weight = weight;
  }
   
  getPrice() {
    return this.car.getPrice() + 30000;
  }
   
  getModel() {
    return this.car.getModel() + 'M';
  }
}

let bmw = new Car(42000, '320');

bmw = new Sport(bmw);

console.log(bmw.getPrice(), bmw.getModel(), bmw.model);
