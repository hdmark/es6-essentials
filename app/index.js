import Entity from './entity';

class Hobbit extends Entity {
  constructor(name, height) {
    super(name, height);
  }
  greet() {
    console.log('fuck off');
  }
}
let merry = new Hobbit('merry', 4.6);
merry.greet();

let frodo = new Hobbit('frodo', 4.5);
console.log(frodo, frodo.greet());
