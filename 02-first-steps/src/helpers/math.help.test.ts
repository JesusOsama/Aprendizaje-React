import { describe, expect, test } from 'vitest';
import { add, multiply, substrack } from './math.helper';



describe('add', () => {
    test('should add two positives numbers', () => {

        //! 1. Arrange
        const a = 1;
        const b = 2;

        //! 2. Act
        const result = add(a, b);

        //! 3. Asset 
        expect(result).toBe(a + b);
    })
})

describe('substrack', () => {
    test('should substrack two positives numbers', () => {

        const a = 1;
        const b = 2;

        const result = substrack(a, b);

        expect(result).toBe(a - b);
    })

    test('should substrack two negative numbers', () => {

        const a = -1;
        const b = -2;

        const result = substrack(a, b);

        expect(result).toBe(a - b);
    })
})

describe('multiply', () => {
    test('should multiply two positives numbers', () => {
        const a = 1;
        const b = 2;

        const result = multiply(a, b);
        expect(result).toBe(a * b);
    })

    test('should multiply two negative numbers', () => {
        const a = -1;
        const b = -2;

        const result = multiply(a, b);
        expect(result).toBe(a * b);
    })
})

