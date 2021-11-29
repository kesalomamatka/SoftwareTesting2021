import chunk from '../src/chunk'
import * as matchers from 'jest-extended';
expect.extend(matchers);

describe('chunk.js test', ()=>{
    it('Input valid array ', ()=>{
        expect(chunk(['a', 'b', 'c', 'd'], 2)).toIncludeSameMembers([['a','b'],['c','d']])
    });

    it('Input valid array with different size', ()=>{
        expect(chunk(['a', 'b', 'c', 'd'], 3)).toIncludeSameMembers( [['a', 'b', 'c'], ['d']])
    });


    it('Input invalid array ', ()=>{
        expect(chunk(null, 3)).toThrow(Error)
    });

    
    it('Size type is not number (toInteger.js, toFinite.js) ', ()=>{
        expect(chunk(['a', 'b', 'c', 'd'], 'string')).toBe([])
    });
        
    it('Size is greater than array length ', ()=>{
        expect(chunk(['a', 'b', 'c', 'd'], 5)).toThrow(Error)
    });
})