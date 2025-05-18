var car1 = {
  type: "mini-suv",
  brand: "renault",
  PrintTheValue: () => {
    console.log(this.brand);
  },
};

car1.PrintTheValue();

var car = {
  type: "mini-suv",
  brand: "renault",
};

// this two not connected between each other but they are shared the value.

function printBrand(object) {
  console.log(object.brand);
}

printBrand(car);
