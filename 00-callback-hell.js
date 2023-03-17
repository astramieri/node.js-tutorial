let stocks = {
  fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "sticks"],
  toppings: ["chocolate", "peanuts"],
};

stocks.fruits[0];

let order = (fruit_name, call_production) => {
  setTimeout(() => {
    console.log(`${stocks.fruits[fruit_name]} was selected`);

    call_production();
  }, 2000);
};

// CALLBACK HELL!
let production = () => {
  setTimeout(() => {
    console.log("production has started!");

    setTimeout(() => {
      console.log("the fruit has been chopped");

      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were added`);

        setTimeout(() => {
          console.log("the machine was started");

          setTimeout(() => {
            console.log(`ice cream was placed on ${stocks.holder[0]}`);

            setTimeout(() => {
              console.log(`${stocks.toppings[0]} was added as toppings`);

              setTimeout(() => {
                console.log("serve ice cream");
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0);
};

order(0, production);
