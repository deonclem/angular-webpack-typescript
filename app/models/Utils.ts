/**
 * Utils class with only static methods
 */

export class Utils {

    /**
     * Takes an array of object as input and returns the biggest 'property' number
     * arr[property] must be a string
     * @param arr: the array of objetcs
     * @param property: the property to look for in each object
     * @returns {number}: the biggest value found
     */
    public static getMaxValueFromArrayOfObjects(arr: any[], property: string):number{
        return Math.max(...arr.map(value => value[property] ? value[property] : 0));
    }

    /**
     * Takes an array of object as input and returns the smallest 'property' number
     * arr[property] must be a string
     * @param arr: the array of objetcs
     * @param property: the property to look for in each object
     * @returns {number}: the smallest value found
     */
    public static getMinValueFromArrayOfObjects(arr: any[], property: string):number{
        return Math.min(...arr.map(value => value[property] ? value[property] : Infinity));
    }
}