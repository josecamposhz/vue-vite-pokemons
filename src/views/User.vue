<template>
	<h1>User ID: {{ $route.params.id }}</h1>
</template>
<script>
export default {
	mounted() {
		console.log(this.$route.params.id);
	},
};
</script>
