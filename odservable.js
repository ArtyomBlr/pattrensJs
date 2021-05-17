class Subject {
  constructor() {
    this.observers = [];
  }

  notiFyUsers(news= 'No news for You') {
    return this.observers.forEach((obs) => obs.sendNews(news));
  }
  
  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }

  sendNews(text) {
    console.log(`Dear ${this.name}, you got the message: ${text}`);
  }
}

const artem = new Observer('Artem');
const liza = new Observer('Liza');

const stream$ = new Subject();

stream$.subscribe(artem);
stream$.subscribe(liza);

stream$.notiFyUsers('Welcome to HiQo');

stream$.unsubscribe(liza);

stream$.notiFyUsers('You are the last Frontend on Earth');
