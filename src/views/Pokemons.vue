<template>
	<h1>Pokedex</h1>
	<h2 v-if="isLoading">Cargando la Pokedex...</h2>
	<section v-else class="pokemon-grid">
		<PokemonCard
			v-for="pokemon in pokemons"
			:pokemon="pokemon"
			:onClick="showPokemon"
		/>
	</section>
</template>
<script>
import Pokemon from '@/models/Pokemon';
import pokemonApi from '@/services/pokemonApi';
import PokemonCard from '@/components/PokemonCard.vue';
export default {
	components: { PokemonCard },
	data() {
		return {
			isLoading: true,
			pokemons: [],
		};
	},
	mounted() {
		this.getPokemons();
	},
	methods: {
		async getPokemons() {
			this.isLoading = true;
			const { data } = await pokemonApi.getPokemons();
			this.pokemons = await Promise.all(
				data.results.map((poke) => this.getPokemon(poke.name))
			);
			this.isLoading = false;
		},
		async getPokemon(name) {
			const { data } = await pokemonApi.getPokemonByName(name);
			const pokemonData = new Pokemon(data);
			return pokemonData;
		},
		showPokemon(id) {
			this.$router.push({ name: 'Pokemon', params: { id } });
		},
	},
};
</script>
<style>
.pokemon-grid {
	padding: 1rem;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	grid-auto-rows: 250px;
	gap: 1rem;
}
</style>
