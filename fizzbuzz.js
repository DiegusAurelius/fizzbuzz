function checkNumber() {
  let answer = parseInt(prompt(`Pick a number between 1 and 100.`));
  if (isNaN(answer)) {
    answer = parseInt(
      prompt(`That's not a number, pick a number between 1 and 100.`)
    );
  } else if (answer < 1) {
    answer = parseInt(prompt(`Number too low, pick a number between 1 and 100.`));
  } else if (answer > 100) {
    answer = parseInt(prompt(`Number too high, pick a number between 1 and 100.`));
  }

  if (isNaN(answer) || answer < 1 || answer > 100) {
    console.log(`Incorrect number after THREE tries. Using default value of 25.`);
    answer = 25;
  }

  fizzBuzz(answer);
}

function fizzBuzz(answer) {
  for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

checkNumber();
