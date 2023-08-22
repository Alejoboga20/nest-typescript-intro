/* Basic Types in TypeScript */

export let stringName: string = 'this is a string name';
export const age: number = 27;
export const isDeveloper: boolean = true;
export const name = 'Alejo';

/* Type Safety */
// stringName = 27; // Error: Type 'number' is not assignable to type 'string'
stringName = 'This is a new string name';

export const templateString = `This is a template string displaying stringName: ${stringName}`;
console.log(templateString);
