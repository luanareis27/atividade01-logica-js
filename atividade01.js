// Atividade 01 - Lógica de Programação com JavaScript
// Curso Front End - React - Projeto Bolsa Futuro Digital - SOFTEX
// Prof. João Carlos Pinheiro
// Aluna: Luana Neres Reis

// ----------------------------------------------------------
// 1. Solicita um número ao usuário e mostra a tabuada de 1 a 10
// ----------------------------------------------------------

function multiplicationTable(number) {
  console.log(`Multiplication Table of ${number}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
}

// Exemplo de execução:
multiplicationTable(7);

// ----------------------------------------------------------
// 2. Função que recebe um objeto com nome e idade e verifica se é maior de idade
// ----------------------------------------------------------

function checkAge(person) {
  if (person.age >= 18) {
    return `${person.name} is an adult.`;
  } else {
    return `${person.name} is a minor.`;
  }
}

// Exemplos de execução:
console.log(checkAge({ name: "John", age: 17 }));
console.log(checkAge({ name: "Mary", age: 22 }));

// ----------------------------------------------------------
// 3. Imprime números de 1 a 100, substituindo múltiplos por Fizz / Buzz / FizzBuzz
// ----------------------------------------------------------

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
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
}

// Exemplo de execução:
fizzBuzz();

// ----------------------------------------------------------
// 4. Função calculadora utilizando switch
// ----------------------------------------------------------

function calculator(a, b, operation) {
  switch (operation) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b !== 0 ? a / b : "Error: division by zero!";
    default:
      return "Invalid operation!";
  }
}

// Exemplos de execução:
console.log(calculator(10, 5, "+"));
console.log(calculator(10, 5, "-"));
console.log(calculator(10, 5, "*"));
console.log(calculator(10, 5, "/"));

// ----------------------------------------------------------
// 5. Conversor de temperatura (Celsius ↔ Fahrenheit)
// ----------------------------------------------------------

function convertTemperature(temp) {
  if (temp.type === "C") {
    return {
      type: "F",
      value: temp.value * 1.8 + 32
    };
  } else if (temp.type === "F") {
    return {
      type: "C",
      value: (temp.value - 32) / 1.8
    };
  } else {
    return { error: "Invalid type! Use 'C' or 'F'." };
  }
}

// Exemplos de execução:
console.log(convertTemperature({ type: "C", value: 25 })); // Celsius → Fahrenheit
console.log(convertTemperature({ type: "F", value: 77 })); // Fahrenheit → Celsius


