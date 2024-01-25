// let cost;
// const subscription = 'pro';

// switch (subscription) {
//   case 'free':
//     cost = 0;
//     break;

//   case 'pro':
//     cost = 100;
//     break;

//   case 'premium':
//     cost = 500;
//     break;

//   default:
//     console.log('Invalid subscription type');
// }

// console.log(cost);

// console.log('Hello World');

// for (let i = 1; i <= 10; i += 1) {
//   console.log(i);
// }

// const productName = 'Droid';
// const pricePerItem = 3500;

// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;

// console.log(message);

// function checkStorage(available, ordered) {
//   let message;

//   if (ordered === 0) {
//     message = 'There are no products in the order!';
//   } else if (ordered > available) {
//     message = 'Your order is too large, there are not enough items in stock!';
//   } else {
//     message = 'The order is accepted, our manager will contact you';
//   }

//   return message;
// }

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   } else if (totalSpent >= 20000 && totalSpent < 50000) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent >= 5000 && totalSpent < 20000) {
//     discount = BRONZE_DISCOUNT;
//   } else {
//     discount = BASE_DISCOUNT;
//   }
//   return discount;
// }

// console.log(getDiscount(1300));

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   switch (password) {
//     case password === null:
//       message = 'Canceled by user!';
//       break;

//     case password === ADMIN_PASSWORD:
//       message = 'Welcome!';
//       break;

//     default:
//       message = 'Access denied, wrong password!';
//   }
//   return message;
// }

// let a = 5;
// let b = a;
// a = 10;

// console.log(a);
// console.log(b);

// const a = ['Mango'];
// const b = a;

// console.log(a);
// console.log(b);

// a.push('Polly');
// console.log(a);
// console.log(b);

// b.push('Ajax');
// console.log(a);
// console.log(b);
