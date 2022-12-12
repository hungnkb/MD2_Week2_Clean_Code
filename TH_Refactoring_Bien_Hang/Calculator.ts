export class Calculator {
    static addition = "+";
    static subtraction = "-";
    static multiplication = "*";
    static division = "/"

    public static calculate(firstNumber: number, secondNumber: number, operator: string): number | string {
        switch (operator) {
            case this.addition:
                return firstNumber + secondNumber;
            case this.subtraction:
                return firstNumber - secondNumber;
            case this.multiplication:
                return firstNumber * secondNumber;
            case this.division:
                if (secondNumber != 0)
                    return firstNumber / secondNumber;
                else
                    return "Can not divide by 0";
            default:
                return "Unsupported operation";
        }
    }
}