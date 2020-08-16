import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';
import { TestBed } from '@angular/core/testing';


/**
 * Add x to describe "xdescribe" will skip this test suit (You can disable individual test adding x "xit")
 * Add f to describe "fdescribe" will focus in this test suit (You can focus in specific test adding f "fit")
 */
describe('Calculator service', () => {

    let loggerSpy: any;
    let calculatorService: CalculatorService;

    beforeEach(() => {
        // Create fake instance of LoggserService
        loggerSpy = jasmine.createSpyObj('LoggerService', ['log']);

        TestBed.configureTestingModule({
            providers: [
                /**
                 *  Use Dependency injection mechanism to provide LoggerService.
                 *  Why use fake instance of LoggerService?
                 *  I want test CalculatorService in insolation. Assuming this service works fine with its dependencies.
                 *  If I use the a LoggerService instance. It will be Integration testing. Because I am checking how both 
                 *  services work together.
                 */ 
                CalculatorService,
                { provide: LoggerService, useValue: loggerSpy }
            ]
        })

        calculatorService = TestBed.get(CalculatorService);
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