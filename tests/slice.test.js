import slice from '../src/slice'
import * as matchers from 'jest-extended';
expect.extend(matchers);

describe('slice.js test', () => {
    it('what if the array is empty', () => {
        expect(slice([],0,-1)).toIncludeSameMembers([]);
    });

    it('what if no end index is given', () => {
        let array = [1, 2, 3, 4]
        expect(slice(array,2)).toIncludeSameMembers( [3, 4]);
    });

    it('what if no end index is given', () => {
        let array = [1, 2, 3, 4]
        expect(slice(array,0,2)).toIncludeSameMembers( [1, 2]);
    });

    it('what if start and end index are the same', () => {
        let array = [1, 2, 3, 4]
        expect(slice(array,2,2)).toIncludeSameMembers( []);
    });

    it('what if start index is negative and end index is positive', () => {
        let array = [1, 2, 3, 4]
        expect(slice(array,-2,2)).toThrow(Error);
    });

    it('what if start index is positive and end index is negative', () => {
        let array = [1, 2, 3, 4]
        expect(slice(array,2,-2)).toThrow(Error);
    });

    it('what if end index is out of range', () => {
        let array = [1, 2, 3, 4]
        expect(slice(array,2,10)).toThrow(Error);
    });

    
    it('what if both start and end index are out of range', () => {
        let array = [1, 2, 3, 4]
        expect(slice(array,-10,10)).toThrow(Error);
    });
});
