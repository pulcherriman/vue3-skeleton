import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			redirect: "/content1",
		},
		{
			path: "/content1",
			name: "content1",
			component: () => import("../views/Content1View.vue"),
		},
		{
			path: "/content2",
			name: "content2",
			component: () => import("../views/Content2View.vue"),
		},
		{
			path: "/content3",
			name: "content3",
			component: () => import("../views/Content3View.vue"),
		},
		{
			path: "/content4",
			name: "content4",
			component: () => import("../views/Content4View.vue"),
		},
	],
});

export default router;
