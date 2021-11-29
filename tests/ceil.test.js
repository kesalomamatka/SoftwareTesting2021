import ceil from '../src/ceil'

describe('ceil.js test', ()=>{
    it('First parameter is numbe', ()=>{
        expect(ceil(4.006)).toBe(5)
    });

    it('First parameter is any type but not number', ()=>{
        expect(ceil("four")).toThrow(Error);
    });

    it('Second parameter is number', ()=>{
        expect(ceil(6040, -2)).toBe(6100);
    });

    it('Second parameter is any type but not number', ()=>{
        expect(ceil(6040, "two")).toThrow(Error);
    });

    it('4.006 -1', ()=>{
        expect(ceil(4.006, -1)).toBe(10);
    });

    it('4.006 -1', ()=>{
        expect(ceil(-4.006, -1)).toBe(0);
    });

    it('4.006 2', ()=>{
        expect(ceil(4.006, 2)).toBe(4.01);
    });
})