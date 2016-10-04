/**
 * takes a string as input and returns the same string with the first letter capitalized
 * If toLower is true, the rest of the string is lowered
 * If each is true, the first letter of each word is capitalized (toLower must also be true)
 * @returns a string
 */

export function capitalize() {
    return (input, tolower, each) => {
        if (input) {
            if (tolower) {
                if(each){
                    return input
                    .split(/(\s|-)/g)
                    .filter(word => word.length)
                    .map(word => (word[0].toUpperCase() + word.toLowerCase().slice(1)))
                    .join('');
                } else {
                    return input[0].toUpperCase() + input.toLowerCase().slice(1);
                }
            } else {
                return input[0].toUpperCase() + input.slice(1);
            }
        }
    }
}