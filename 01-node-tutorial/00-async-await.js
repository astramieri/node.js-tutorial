let stocks = {
  fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "sticks"],
  toppings: ["chocolate", "peanuts"],
};

let isShopOpen = true;

// let order = (flag) => {
//   return new Promise((resolve, reject) => {
//     if (flag) {
//       resolve();
//     } else {
//       reject();
//     }
//   });
// };

// order(true)
// .then()         // run when resolve
// .then()         // run when resolve
// .then()         // run when resolve
// .catch()        // run when rejected
// .finally();     // run everytime

async function order () {
    try {
        await abc();
    } catch(error) {
        console.log("function ABC does not exist", error)
    } finally {
        console.log("finally part")
    }
}

order();