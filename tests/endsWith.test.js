import endsWith from '../src/endsWith'

import * as matchers from 'jest-extended';
expect.extend(matchers);

describe('endWith.js test', () => {
    it('what if no position is given and target is at the end of the string', () => {
        expect(endsWith('abc', 'c')).toBeTruthy();
    });

    it('what if no position is given and target isn\'t at the end of the string', () => {
        expect(endsWith('abc', 'b')).toBeFalsy();
    });

    
    it('what if position is undefined target is at the end of the string', () => {
        expect(endsWith('abc', 'c',undefined)).toBeTruthy();
    });

    it('what if position is undefined target isn’t at the end of the string true', () => {
        expect(endsWith('abc', 'b',undefined)).toBeFalsy();
    });

    it('what if position is before the target\'s match in string ', () => {
        expect(endsWith('abc', 'c',2)).toBeFalsy();
    });

    it('what if position is after the target\'s match in string', () => {
        expect(endsWith('abc', 'b',3)).toBeFalsy();
    });
    
    it('what if target is not of type String despite it having a match in string', () => {
        expect(endsWith('123', 3, 3)).toBeFalsy();
    });
        
    it('what if string is not a String', () => {
        expect(endsWith(123, 3, 3)).toBeFalsy();
    });

    it('what if position is not a Number', () => {
        expect(endsWith('123', '3', '3')).toBeFalsy();
    });

    it('what if position is out of range ', () => {
        expect(endsWith('123', '3', 5)).toBeFalsy();
    });
});
