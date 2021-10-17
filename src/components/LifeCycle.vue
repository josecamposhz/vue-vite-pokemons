<template>
	<section>
		<h2>Ciclo de Vida - Instancia Vue</h2>
		<h3>Contador: {{ counter }}</h3>
		<button @click="counter--">Disminuir</button>
		<button @click="counter++">Aumentar</button>
	</section>
</template>

<script>
export default {
	data() {
		return {
			counter: 0,
		};
	},
	beforeCreate() {
		//esto se ejecuta ante o el momento que se crea vue
		console.log('beforeCreate');
	},
	created() {
		//al crear los metodos y observadores de eventos, pero aún no accede al DOM.
		//Aun no se puede acceder a 'el'
		console.log('created');
	},
	beforeMount() {
		//se crearan los métodos observadores y eventos, pero aún no accede al DOM.
		//Aún no se puede acceder al 'el'
		console.log('beforeMount');
	},
	mounted() {
		//se ejecuta al insertar al dom lee los observadores
		console.log('mounted');
	},
	beforeUpdate() {
		//al detecatar los cambios
		console.log('beforeUpdate');
	},
	updated() {
		//al realizar los cambios
		console.log('updated');
	},
	beforeUnmount() {
		//antes de abandonar la instacia
		console.log('beforeUnmount');
	},
	unmounted() {
		//se abandona toda la instacia
		console.log('unmounted');
	},
	watch: {
		counter(newCounter, oldCounter) {
			console.log(`El valor anterior del counter es: ${oldCounter}`);
			console.log(`El nuevo valor del counter es: ${newCounter}`);
		},
	},
};
</script>