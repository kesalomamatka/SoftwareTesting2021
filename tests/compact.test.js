import compact from '../src/compact'
describe('compact.js test', () => {
    it('what if array only has all the falsey values', () => {
        expect(compact([ false,  '',  undefined])).toEqual([]);
    });

    it('what if array only has several truthy values of different acceptable types', () => {
        expect(compact([1, 2, 3])).toEqual([1, 2, 3]);
    });

    it('what if array has a single falsey value (length 1) ', () => {
        expect(compact([false])).toEqual([]);
    });

    it('what if array has a single truthy value (length 1)', () => {
        expect(compact([1])).toEqual([1]);
    });

    it('what if array is empty', () => {
        expect(compact([])).toEqual([]);
    });

    it('what if array has both truthy and falsey values', () => {
        expect(compact([1, false])).toEqual([1]);
    });

    it('what if array is not an Array', () => {
        expect(compact(4)).toThrow(Error);
    });
});
