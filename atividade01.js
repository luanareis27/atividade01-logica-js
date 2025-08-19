// Atividade 01 - Lógica de Programação com JavaScript
// Curso Front End - React - Projeto Bolsa Futuro Digital - SOFTEX
// Prof. João Carlos Pinheiro
// Aluna: Luana Neres Reis

// ----------------------------------------------------------
public class Atividade01 {

    // Função 1: tabuada
    public static void multiplicationTable(int number) {
        System.out.println("Tabuada do número " + number + ":");
        for (int i = 1; i <= 10; i++) {
            System.out.println(number + " x " + i + " = " + (number * i));
        }
        System.out.println();
    }

    // Chamada e resposta:
    public static void tabuada() {
        multiplicationTable(7);
        // Resposta Questão 1:
        // 7 x 1 = 7
        // 7 x 2 = 14
        // 7 x 3 = 21
        // 7 x 4 = 28
        // 7 x 5 = 35
        // 7 x 6 = 42
        // 7 x 7 = 49
        // 7 x 8 = 56
        // 7 x 9 = 63
        // 7 x 10 = 70
    }

    // Função 2: verificar maioridade
    public static String checkAge(String nome, int idade) {
        if (idade >= 18) {
            return nome + " é maior de idade.";
        } else {
            return nome + " é menor de idade.";
        }
    }

    // Chamada e resposta:
    public static void verificarIdade() {
        System.out.println(checkAge("João", 17));
        // Resposta Questão 2: João é menor de idade.

        System.out.println(checkAge("Maria", 22));
        // Resposta Questão 2: Maria é maior de idade.
    }

    // Função 3: FizzBuzz
    public static void fizzBuzz() {
        for (int i = 1; i <= 100; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                System.out.println("FizzBuzz");
            } else if (i % 3 == 0) {
                System.out.println("Fizz");
            } else if (i % 5 == 0) {
                System.out.println("Buzz");
            } else {
                System.out.println(i);
            }
        }
        System.out.println();
    }

    // Chamada e resposta:
    public static void executarFizzBuzz() {
        fizzBuzz();
        // Resposta Questão 3 (parcial):
        // 1
        // 2
        // Fizz
        // 4
        // Buzz
        // ...
        // FizzBuzz (para múltiplos de 3 e 5)
    }

    // Função 4: calculadora
    public static String calculator(double a, double b, String operacao) {
        switch (operacao) {
            case "+":
                return String.valueOf(a + b);
            case "-":
                return String.valueOf(a - b);
            case "*":
                return String.valueOf(a * b);
            case "/":
                if (b != 0) {
                    return String.valueOf(a / b);
                } else {
                    return "Erro: divisão por zero!";
                }
            default:
                return "Operação inválida!";
        }
    }

    // Chamada e resposta:
    public static void testarCalculadora() {
        System.out.println("10 + 5 = " + calculator(10, 5, "+"));
        // Resposta Questão 4: 10 + 5 = 15.0

        System.out.println("10 - 5 = " + calculator(10, 5, "-"));
        // Resposta Questão 4: 10 - 5 = 5.0

        System.out.println("10 * 5 = " + calculator(10, 5, "*"));
        // Resposta Questão 4: 10 * 5 = 50.0

        System.out.println("10 / 5 = " + calculator(10, 5, "/"));
        // Resposta Questão 4: 10 / 5 = 2.0
    }

    // Função 5: conversor de temperatura
    public static String convertTemperature(String tipo, double valor) {
        if (tipo.equalsIgnoreCase("C")) {
            double f = valor * 1.8 + 32;
            return valor + "°C = " + f + "°F";
        } else if (tipo.equalsIgnoreCase("F")) {
            double c = (valor - 32) / 1.8;
            return valor + "°F = " + c + "°C";
        } else {
            return "Tipo inválido! Use 'C' ou 'F'.";
        }
    }

    // Chamada e resposta:
    public static void testarConversaoTemperatura() {
        System.out.println(convertTemperature("C", 25));
        // Resposta Questão 5: 25.0°C = 77.0°F

        System.out.println(convertTemperature("F", 77));
        // Resposta Questão 5: 77.0°F = 25.0°C
    }

    public static void main(String[] args) {
        tabuada();
        verificarIdade();
        executarFizzBuzz();
        testarCalculadora();
        testarConversaoTemperatura();
    }
}



