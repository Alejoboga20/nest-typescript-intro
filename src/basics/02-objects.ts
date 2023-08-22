export const pokemonIds = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//pokemonIds.push('10'); Error: Argument of type '"10"' is not assignable to parameter of type 'number'.
pokemonIds.push(+'10');

export const pokemonNames = ['Bulbasaur', 'Charmander', 'Squirtle'];

export interface Pokemon {
	id: number;
	name: string;
	age?: number;
}

export const bulbasaur: Pokemon = {
	id: 1,
	name: 'Bulbasaur',
};

export const pokemons: Pokemon[] = [
	{
		id: 1,
		name: 'Bulbasaur',
	},
	{
		id: 2,
		name: 'Charmander',
	},
	{
		id: 3,
		name: 'Squirtle',
	},
];
