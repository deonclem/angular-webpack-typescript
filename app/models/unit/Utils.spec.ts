import {Utils} from "../Utils";

describe("Utils", () => {
    it('should get the max value out of an array of objects', () => {
        let arr = [{count:5},{count:12},{count:1}];
        expect(Utils.getMaxValueFromArrayOfObjects(arr, 'count')).toBe(12);
        arr = [{count:5},{count:undefined},{count:1}];
        expect(Utils.getMaxValueFromArrayOfObjects(arr, 'count')).toBe(5);
    });
});