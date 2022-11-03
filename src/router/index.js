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
	{
		path: '/m2',
		name: 'm2',
		component: () => import(/* webpackChunkName: "m2" */ '../views/message/m2.vue'),
	},
	// 上传章节
	{
		path: '/upload',
		name: 'upload',
		component: () => import(/* webpackChunkName: "upload" */ '../views/create/upload.vue'),
	},
	// 活动列表页面
	{
		path: '/activity',
		name: 'activity',
		component: () => import(/* webpackChunkName: "activity" */ '../views/create/activity.vue'),
	},
	// 藏品主页面 所有藏品的集合
	{
		path: '/collection',
		name: 'collection',
		component: () => import(/* webpackChunkName: "collection" */ '../views/create/collection'),
	},
	// 藏品列表页面 单个的藏品
	{
		path: '/collection_list',
		name: 'collection_list',
		component: () => import(/* webpackChunkName: "collection" */ '../views/create/collection/collection_list'),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
