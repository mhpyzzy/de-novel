import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/home.vue';

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
		children: [
			{
				path: 'message',
				name: 'message',
				// route level code-splitting
				// this generates a separate chunk (about.[hash].js) for this route
				// which is lazy-loaded when the route is visited.
				component: () => import(/* webpackChunkName: "message" */ '../views/message'),
			},
			{
				path: 'create',
				name: 'create',
				component: () => import(/* webpackChunkName: "create" */ '../views/create'),
			},
			{
				path: 'center',
				name: 'center',
				component: () => import(/* webpackChunkName: "center" */ '../views/center'),
			},
		],
	},
	{
		path: '/m1',
		name: 'm1',
		component: () => import(/* webpackChunkName: "m1" */ '../views/message/m1.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
