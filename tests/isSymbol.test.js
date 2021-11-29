import isSymbol from '../src/isSymbol'

import * as matchers from 'jest-extended';
expect.extend(matchers);

describe('isSymbol.js test', () => {
    it('value = Symbol()', () => {
        expect(isSymbol(Symbol())).toBeTruthy();
    });

    it('value = Symbol.iterator', () => {
        expect(isSymbol(Symbol.iterator)).toBeTruthy();
    });

    it('value = String()', () => {
        expect(isSymbol("string")).toBeFalsy();
    });

    it('value = Number()', () => {
        expect(isSymbol(123)).toBeFalsy();
    });

    it('value = null', () => {
        expect(isSymbol(null)).toBeFalsy();
    });

    it('value = undefined', () => {
        expect(isSymbol(undefined)).toBeFalsy();
    });

    it('value = Boolean', () => {
        expect(isSymbol(false)).toBeFalsy();
    });
});
