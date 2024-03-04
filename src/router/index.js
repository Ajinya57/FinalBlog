import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
	{
		path: "/home",
		name: "home",
		component: () => import("../views/Home.vue"),
	},
	{
		path: "/login",
		name: "login",
		component: () => import("../views/Login.vue"),
	},
	{
		path: "/blog/:id",
		name: "blog",
		component: () => import("../views/Blog.vue"),
	},
	{
		path: "/archives",
		name: "archives",
		component: () => import("../views/Archives.vue"),
	},
	{
		path: "/about",
		name: "about",
		component: () => import("../views/About.vue"),
	},
	{
		path: "/tags/:id",
		name: "tags",
		component: () => import("../views/Tags.vue"),
	},
	{
		path: "/categories",
		name: "categories",
		component: () => import("../views/Categories.vue"),
	},
	{
		path: "/",
		redirect: "/home",
	},
	{
		path: "/404",
		name: "404",
		component: () => import("../views/404.vue"), //定义找不到已有组件时显示404
	},
	{
		path: "/:catchAll(.*)",
		redirect: "/404",
	},
];

const router = createRouter({
	history: createWebHashHistory(""),
	routes,
});

export default router;
