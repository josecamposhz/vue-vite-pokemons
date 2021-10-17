<template>
	<article class="pokemon-card" :class="pokemon.types[0].name" @click="onClick(pokemon.id)">
		<header>
			<span>{{ pokemon.name }} </span>
			<span>#{{ pokemon.id }}</span>
		</header>
		<img class="pokemon-image" :src="pokemon.image" :alt="pokemon.name" />
		<footer>
			<div class="pokemon-type" v-for="type in pokemon.types" :key="type.name">
				{{ type.name }}
			</div>
		</footer>
	</article>
</template>
<script>
export default {
	props: {
		pokemon: {
			type: Object,
			required: true,
		},
		onClick: {
			type: Function,
			default: () => {},
		},
	},
};
</script>
<style></style>
