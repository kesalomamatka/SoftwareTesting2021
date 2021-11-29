import eq from '../src/eq'
describe('eq.js test', () => {
    it('what if value and other are identical and of the same type', () => {
        expect( eq('a', 'a')).toBeTruthy();
    });

    it('hat if value and other are seemingly identical, but of different types, e.g. a Number and a String', () => {
        expect(eq('13', 13)).toBeFalsy();
    });
    
    it('what if value and other are the same Object', () => {
        const a = {a:'12'}
        expect(eq(a, a)).toBeTruthy();
    });

    it('what if value and other are different Objects with identical tructure', () => {
        const a = {a:'12'}
        const b = {a:'12'}
        expect(eq(a, b)).toBeFalsy();
    });

    it('what if value and other are +0 and -0 (type Number) ', () => {
        expect(eq(+0, -0)).toBeTruthy();
    });

    it('what if value and other are both NaN ', () => {
        expect(eq(NaN, NaN)).toBeTruthy();
    });

    it('what if value is NaN and other is a different Number ', () => {
        expect(eq(NaN, 4)).toBeFalsy();
    });

    it('what if value and other are both undefined ', () => {
        expect(eq(undefined, undefined)).toBeTruthy();
    });

    it('what if value is undefined and other is different ', () => {
        expect(eq(undefined, 5)).toBeFalsy();
    });

    it('what if value and other are both null  ', () => {
        expect(eq(null, null)).toBeTruthy();
    });

    it('what if value is null and other is different  ', () => {
        expect(eq(null, 5)).toBeFalsy();
    });

    it('what if value and other are both true  ', () => {
        expect(eq(true, true)).toBeTruthy();
    });

    it('what if value and other are both false  ', () => {
        expect(eq(false, false)).toBeTruthy();
    });

    it('what if value is true and other is false  ', () => {
        expect(eq(true, false)).toBeFalsy();
    });
});
