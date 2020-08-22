/* ---- Random Name Generator---- */
// // let names = [
// // 	"Chris",
// // 	"Li Kang",
// // 	"Anne",
// // 	"Francesca",
// // 	"Mustafa",
// // 	"Tina",
// // 	"Bert",
// // 	"Jada",
// // ];
// // let para = document.createElement("p");
// // let num;
// // let i;
// // // Add your code here
// // function randomNum(num) {
// // 	return Math.floor(Math.random() * names.length);
// // }

// // console.log(randomNum());

// // function chooseName() {
// // 	return (name = names[randomNum()]);
// // }

// // const section = document.querySelector("section");
// // section.innerHTML = chooseName();
// // section.appendChild(para);

/*  ---- Create A Canvas---- */

// // let canvas = document.querySelector("canvas");
// // let ctx = canvas.getContext("2d");

// // let x = 50;
// // let y = 60;
// // let w = 100;
// // let h = 75;
// // let c = "blue";

// // // Add your code here
// // ctx.fillStyle = c;
// // ctx.fillRect(x, y, w, h);
// // // Don't edit the code below here!

/* ---- Function Practice ---- */

// function add7(n) {
// 	return n + 7;
// }

// function multiply(n1, n2) {
// 	return n1 * n2;
// }

// function capitalize(str) {
// 	return str[0].toUpperCase() + str.slice(1).toLowerCase();
// }

// function lastLetter(str) {
// 	return str[str.length - 1];
// }

// console.log(add7(22));
// console.log(multiply(56, 89));
// console.log(capitalize("fiXTHisString"));
// console.log(lastLetter("lastletter"));

/* ---- Fizz Buzz ---- */

let answer = parseInt(prompt("Enter a number to FizzBuzz up to:"));

for (let i = 1; i < answer; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log("FizzBuzz");
	} else if (i % 3 === 0) {
		console.log("Fizz");
	} else if (i % 5 === 0) {
		console.log("Buzz");
	} else {
		console.log(i);
	}
}

// let answer = parseInt(
// 	prompt("Please enter the number you would like to FizzBuzz up to: ")
// );

// for (let i = 1; i < answer; i++) {
// 	if (i % 3 === 0 && i % 5 === 0) {
// 		console.log("FizzBuzz");
// 	} else if (i % 3 === 0) {
// 		console.log("Fizz");
// 	} else if (i % 5 === 0) {
// 		console.log("Buzz");
// 	} else {
// 		console.log(i);
// 	}
// }
