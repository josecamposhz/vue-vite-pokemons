import axios from 'axios';

class ApiService {
	constructor() {
		this.resource = axios.create({
			baseURL: 'https://pokeapi.co/api/v2/pokemon',
		});
	}

	getPokemons() {
		return this.resource.get(`?limit=50`);
	}

	getPokemonByName(name) {
		return this.resource.get(`/${name}`);
	}
}

export default new ApiService();
