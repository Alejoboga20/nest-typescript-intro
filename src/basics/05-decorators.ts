export class NewPokemon {
	constructor(public readonly id: number, public name: string) {}

	scream() {
		console.log('I am new');
	}

	speak() {
		console.log("don't want to speak");
	}
}

const MyDecorator = () => {
	return (target: Function) => {
		return NewPokemon;
	};
};

@MyDecorator()
export class Pokemon {
	constructor(public readonly id: number, public name: string) {}

	scream() {
		console.log(this.name.toUpperCase());
	}

	speak() {
		console.log(this.name);
	}
}

export const squirtle = new Pokemon(7, 'Squirtle');
squirtle.scream();
squirtle.speak();
