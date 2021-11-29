import isEmpty from '../src/isEmpty'

describe('isEmpty.js test', ()=>{
    it('Input values have a ‘size’ of 0', ()=>{
        expect(isEmpty({})).toBeTruthy()
    });

    it('Input values have a ‘length’ of 0', ()=>{
        expect(isEmpty([])).toBeTruthy()
    });

    it('Input values are null/NaN/undefined...', ()=>{
        expect(isEmpty(NaN)).toBeTruthy()
    });
    
    it('nput values are object/array/buffer/string which contains something', ()=>{
        expect(isEmpty([123,142,32])).toBeFalsy()
    });
})