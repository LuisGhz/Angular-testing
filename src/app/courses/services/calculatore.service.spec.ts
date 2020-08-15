import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';

describe('Calculator service', () => {

    it('Should add two numbers', () => {
        const FIRST_NUMBER: number = 2;
        const SECOND_NUMBER: number  = 2;

        const logger = jasmine.createSpyObj('LoggerService', ['log']);

        const calculatorService: CalculatorService = new CalculatorService(logger);


        const result = calculatorService.add(FIRST_NUMBER, SECOND_NUMBER);

        expect(result).toBe(4, "Unexpected addition result");
        expect(logger.log).toHaveBeenCalledTimes(1);
    })
    
    it('Should substract two numbers', () => {
        const FIRST_NUMBER: number = 2;
        const SECOND_NUMBER: number  = 2;
        const calculatorService: CalculatorService = new CalculatorService(new LoggerService());
    
    
        const result = calculatorService.subtract(FIRST_NUMBER, SECOND_NUMBER);
    
        expect(result).toBe(0);
    })
    
})