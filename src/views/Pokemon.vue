<template>
	<h2 v-if="isLoading">Cargando...</h2>
	<PokemonCard
		v-else
		:pokemon="pokemon"
		style="max-width: 350px; margin: 1rem auto"
	/>
</template>
<script>
import Pokemon from '@/models/Pokemon';
import pokemonApi from '@/services/pokemonApi';
import PokemonCard from '@/components/PokemonCard.vue';
export default {
	components: { PokemonCard },
	beforeRouteUpdate(to, from) {
		// se llama cuando la ruta que renderiza este componente ha cambiado.
		// Por ejemplo, dada una ruta con los parámetros `/users/:id`, cuando
		// navegamos entre `/users/1` y `/users/2`, la misma instancia del componente `UserDetails`
		// será reutilizada, y este hook será llamado cuando esto ocurra.
		// Como el componente está montado mientras esto sucede, el "navigation guard" o guardian de navegación
		// tiene acceso a `this` de la instancia de este componente.
		// Para este caso, volvemos a setear el valor pokemonId y llamamos a la función getPokemon
		this.pokemonId = to.params.id;
		this.getPokemon();
	},
	data() {
		return {
			pokemonId: null,
			isLoading: true,
			pokemon: null,
		};
	},
	mounted() {
		this.pokemonId = this.$route.params.id;
		this.getPokemon();
	},
	methods: {
		async getPokemon() {
			this.isLoading = true;
			const { data } = await pokemonApi.getPokemonByName(this.pokemonId);
			this.pokemon = new Pokemon(data);
			this.isLoading = false;
		},
	},
};
</script>
