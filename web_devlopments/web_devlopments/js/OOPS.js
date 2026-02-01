class Car {
  constructor(n, b) {
    this.name = n;
    this.brand = b;
  }
  showDetails() {
    console.log(`${this.name} ${this.brand}`);
    // return `${this.name} ${this.brand}`;
  }
}

class SUV extends Car {
  constructor(x, y, z) {
    super(x, y);
    this.buyer = z;
  }
}

let c1 = new SUV('desire', 'suzuki', 'mehFuz_khan');

// console.log(c1);

// let c1 = new Car('desire', 'suzuki');
// console.log(c1);
// console.log(c1.showDetails());

let object = {
  name: 'hello',
  name1: 'something',
  PrintF: () => {
    // let name = 'xyz';
    console.log(this.name);
  },
};

// object.PrintF();

// console.log();

// function identify() {
//   let name = 'xyz';
// }
// console.log('🚀 ~ name:', name);
// identify();

class ClassRoom {
  #contact;
  constructor(name, batch) {
    this.studentName = name;
    this.studentBatch = batch;
    this.#contact = '9923279804';
  }

  showDetails() {
    return `this is my number ${this.#contact}`;
  }
}

const std1 = new ClassRoom('mehfooz_khan', 'FSD-3');
console.log('🚀 ~ std1:', std1.contact);
console.log('🚀 ~ std1:', std1.studentBatch);
console.log('🚀 ~ std1:', std1.studentName);
console.log('🚀 ~ std1:', std1.showDetails());

// abstraction

let amounts = process.argv[2];
console.log('🚀 ~ amounts:', amounts);

class BankAccount {
  #balance; // private property
  #Pin; // private property

  constructor(accountHolder) {
    this.accountHolder = accountHolder;
    this.#balance = 0;
    this.#Pin = '1234';
  }

  // Public method - visible to users
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited ₹${amount}`);
    } else {
      console.log('Invalid deposit amount');
    }
  }

  // Public method - visible to users
  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrawn ₹${amount}`);
    } else {
      console.log('Insufficient balance');
    }
  }

  // Public method to show limited detail
  checkBalance(userPin) {
    if (userPin == this.#Pin) {
      // console.log(`Current balance: ₹${this.#balance}`);
      return `Current balance: ₹${this.#balance}`;
    } else {
      console.log(`Pin galat hai greeb ${userPin}`);
    }
  }
}

// Create an account
const account = new BankAccount('MehFuz');

account.deposit(amounts);
account.withdraw(400);
let checkBal = account.checkBalance(1234);
console.log('🚀 ~ checkBal:', checkBal);
