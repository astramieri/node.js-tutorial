let stocks = {
  fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "sticks"],
  toppings: ["chocolate", "peanuts"],
};

let isShopOpen = true;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("Our shop is closed!"));
    }
  });
};

order(2000, () => {
  console.log(`${stocks.fruits[0]} was selected`);
})
  .then(() => {
    return order(0000, () => {
      console.log("production has started");
    });
  })
  .then(() => {
    return order(2000, () => {
      console.log("the fruits was chopped");
    });
  })
  .then(() => {
    return order(1000, () => {
      console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`);
    });
  })
  .then(() => {
    return order(1000, () => {
      console.log("machine has started");
    });
  })
  .then(() => {
    return order(2000, () => {
      console.log(`ice cream was pleased on ${stocks.holder[0]}`);
    });
  })
  .then(() => {
    return order(3000, () => {
      console.log(`${stocks.toppings[0]} was selected`);
    });
  })
  .then(() => {
    return order(1000, () => {
      console.log("ice cream was served");
    });
  })
  .catch(() => {
    console.log("customer left");
  })
  .finally(() => {
    console.log("DAY ENDED, shop is closed");
  });
