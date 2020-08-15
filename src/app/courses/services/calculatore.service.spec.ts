import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';

describe('Calculator service', () => {

    let loggerSpy: any;
    let calculatorService: CalculatorService;

    beforeEach(() => {
        loggerSpy = jasmine.createSpyObj('LoggerService', ['log']);

        calculatorService = new CalculatorService(loggerSpy);
    });

    it('Should add two numbers', () => {
        const FIRST_NUMBER: number = 2;
        const SECOND_NUMBER: number  = 2;
        const EXPECTED_RESULT: number = FIRST_NUMBER + SECOND_NUMBER;
        const METHOD_CALLED_TIMES: number = 1;
        
        
        const result = calculatorService.add(FIRST_NUMBER, SECOND_NUMBER);
        
        expect(result).toBe(EXPECTED_RESULT, "Unexpected addition result");
        expect(loggerSpy.log).toHaveBeenCalledTimes(METHOD_CALLED_TIMES);
    })
    
    it('Should substract two numbers', () => {
        const FIRST_NUMBER: number = 2;
        const SECOND_NUMBER: number  = 2;
        const EXPECTED_RESULT: number = FIRST_NUMBER - SECOND_NUMBER;
        const METHOD_CALLED_TIMES: number = 1;
    
        const result = calculatorService.subtract(FIRST_NUMBER, SECOND_NUMBER);
    
        expect(result).toBe(EXPECTED_RESULT, "Unexpected substraction result");
        expect(loggerSpy.log).toHaveBeenCalledTimes(METHOD_CALLED_TIMES);
    })
    
})