import { PokeApiAdapter } from '../api/pokeApi.adapter';
import { Move, PokemonResponse } from '../types/pokeapi-response.interface';

export class Pokemon {
	constructor(
		public readonly id: number,
		public name: string,
		private readonly http: PokeApiAdapter
	) {}

	get imageUrl(): string {
		return `https://pokemon.com/${this.id}.jpg`;
	}

	scream() {
		console.log(`${this.name.toUpperCase()}!!!`);
	}

	speak() {
		console.log(`${this.name}, ${this.name}`);
	}

	async getMoves(): Promise<Move[]> {
		const data = await this.http.get(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
		console.log(data.moves);

		return data.moves;
	}
}

const pokeApi = new PokeApiAdapter();

export const charmander = new Pokemon(4, 'Charmander', pokeApi);

charmander.getMoves();
