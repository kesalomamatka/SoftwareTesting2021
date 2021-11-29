import isEmpty from '../src/isEmpty'

describe('isEmpty.js test', ()=>{
    it('Input values have a ‘size’ of 0', ()=>{
        expect(isEmpty({})).toBe(true)
    });

    it('Input values have a ‘length’ of 0', ()=>{
        expect(isEmpty([])).toBe(true)
    });

    it('Input values are null/NaN/undefined...', ()=>{
        expect(isEmpty(NaN)).toBe(true)
        expect(isEmpty(null)).toBe(true)
        expect(isEmpty(undefined)).toBe(true)
    });
    
    it('input values are object/array/buffer/string which contains something', ()=>{
        expect(isEmpty([123, 142, 32])).toBe(false)
        expect(isEmpty({'a': 'b'})).toBe(false)
        expect(isEmpty('a')).toBe(false)
    });
})