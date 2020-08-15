import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';

describe('Calculator service', () => {

    it('Should add two numbers', () => {
        const FIRST_NUMBER: number = 2;
        const SECOND_NUMBER: number  = 2;
        const calculatorService: CalculatorService = new CalculatorService(new LoggerService());


        const result = calculatorService.add(FIRST_NUMBER, SECOND_NUMBER);

        expect(result).toBe(4);
    })
    
    it('Should substract two numbers', () => {
        const FIRST_NUMBER: number = 2;
        const SECOND_NUMBER: number  = 2;
        const calculatorService: CalculatorService = new CalculatorService(new LoggerService());
    
    
        const result = calculatorService.subtract(FIRST_NUMBER, SECOND_NUMBER);
    
        expect(result).toBe(0);
    })
    
})