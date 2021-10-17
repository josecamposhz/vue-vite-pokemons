import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';
import NotFound from '@/views/NotFound.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('@/views/About.vue'),
	},
	{
		path: '/pokemons',
		name: 'Pokemons',
		component: () => import('@/views/Pokemons.vue'),
	},
	{
		path: '/pokemons/:id',
		name: 'Pokemon',
		component: () => import('@/views/Pokemon.vue'),
	},
	{
		path: '/user/:id',
		name: 'User',
		component: () => import('@/views/User.vue'),
	},
	{ path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
