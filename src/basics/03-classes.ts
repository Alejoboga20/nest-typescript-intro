/* 
Long form
export class Pokemon {
	public id: number;
	public name: string;

	constructor(id: number, name: string) {
		console.log('Pokemon constructor');
		this.id = id;
		this.name = name;
	}
}
 */

/* Short form for classes */
export class Pokemon {
	get imageUrl(): string {
		return `https://pokemon.com/${this.id}`;
	}

	scream(): void {
		console.log(`${this.name.toUpperCase()}!!!}`);
	}

	speak(): void {
		console.log(`Hi my name is ${this.name}`);
	}

	constructor(public readonly id: number, public name: string) {}
}

export const charmander = new Pokemon(4, 'Charmander');
