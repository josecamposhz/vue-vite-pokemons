<template>
	<nav id="nav">
		<!-- Usa el componente router-link la navegación. -->
		<!-- Especifica la ruta usando la propiedad `to`. -->
		<!-- `<router-link>` será renderizado como una etiqueta `<a>` por defecto -->
		<router-link to="/">Home</router-link> |
		<router-link to="/about">About</router-link> |
		<router-link :to="{ name: 'Pokemons' }">Pokemons</router-link>
	</nav>
	<!-- Navegación programática -->
	<button class="btn-random-pokemon" @click="randomPokemon">
		Mostrar un Pokemon Random
	</button>
	<router-view></router-view>
</template>

<script>
export default {
	computed() {},
	methods: {
		randomPokemon() {
			this.$router.push({
				name: 'Pokemon',
				params: { id: Math.floor(Math.random() * 155) },
			});
		},
	},
};
</script>

<style lang="scss">
nav {
	font-size: 1.4rem;
	margin-bottom: 1rem;
	a {
		text-decoration: none;
		border-bottom: 2px solid transparent;
		&.router-link-active {
			color: #3eaf7c;
			border-bottom-color: #3eaf7c;
		}
	}
}

.btn-random-pokemon {
	width: 248px;
	padding: 0.6rem;
	font-size: 1.2em;
	cursor: pointer;
	border: none;
	color: #fff;
	background-color: tomato;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
