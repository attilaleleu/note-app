// let random = Math.floor(Math.random() * 6);

// if (random < 3) {
//     console.log(`number ${random} is less then 3`.toUpperCase())
// }
// else if (random == 3){
//     console.log(`number ${random} is equal to 3`.toUpperCase())
// }else{
//     console.log(`number ${random} is greater then 3`.toUpperCase())
// }

// function isEven(num){
//     if (num % 2 === 0){
//         console.log(true);
//     }else{
//         console.log(false);
//     }
// }
// isEven(15673)

// function feeCalc(age){
//     if (age < 5) {
//         console.log("Entry is free");
//     } else if (age < 10) {
//         console.log("Entry is $10")
//     } else if (age < 65) {
//         console.log("Entry is $20")
//     } else {
//         console.log("Entry is $10")
//     }
// }
// feeCalc(window.prompt("enter your age"))

// const password = prompt("Enter your password");

// // pass must br 6+ charachters
// // pass cannot have spaces

// if (password.length >= 6 ){
//     if(password.indexOf(" ") === -1){
//         console.log('good password!');
//     } else{
//         console.log('Password contains spaces');

//     }
// } else {
//     console.log('Password too short');
// }

// const day = prompt("Enter your day number");

// switch (parseInt(day)) {
//     case 1:
//         console.log("monday");
//         break;
//     case 2:
//         console.log("tuesday");
//         break;
//     case 3:
//         console.log("wednesday");
//         break;
//     case 4:
//         console.log("thurdsay");
//         break;
//     case 5:
//         console.log("friday");
//     default:
//         console.log("wrong input");
// }

function testing(str) {
  let splitted = str.split(".");
  console.log(splitted);
  newArr = [];

  for (let i = 0; i < splitted.length; i++) {
    let firstGroup = splitted[i];
    let total = 0;

    for (j = 0; j < firstGroup.length; j++) {
      total += parseInt(firstGroup[j]);
    }
    newArr.push(total);
  }

  //   if (newArr[0] % 2 === 0 && newArr[1] % 2 === 1) {
  for (let x = 0; x < splitted.length; x++) {
    let group = splitted[x];
    let lastIndex = splitted[x][splitted.length - 1];
    for (let y = 1; y >= 0; y--) {
      if (lastIndex < group[y]) {
        console.log(false);
        // break;
      } else if (newArr[0] % 2 !== 0 && newArr[1] % 2 !== 1) {
        console.log(false);
        break;
      } else {
        console.log(`${lastIndex} < ${group[y]}`);
        console.log(true);
        //   break;
      }
      // break;
    }
  }
  //   } else {
  //     console.log(false);
  //   }

  //   return true;
}

testing("121.234.456");
