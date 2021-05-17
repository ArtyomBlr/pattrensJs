class Counter {
  constructor(count) {
    if (Counter.exist) {
      return Counter.instance;
    }

    this.count = count;

    Counter.instance = this;
    Counter.exist = true;
  }

  getCounter() {
    return this.count;
  }

  increaseCounter() {
    return this.count = this.count + 20;
  }
}

const counterOne = new Counter(0);
const counterTwo = new Counter(-10);

console.log(counterOne === counterTwo)

console.log(counterOne.getCounter());
console.log(counterTwo.getCounter());

console.log(counterOne.increaseCounter());
console.log(counterTwo.increaseCounter());
