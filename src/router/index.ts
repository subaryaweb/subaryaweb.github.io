import {
	createRouter,
	RouteRecordRaw,
	Router,
	createWebHistory,
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
	// Login Pages
	{
		path: "/",
		name: "HomePage",
		component: () => import("@/views/HomePage.vue"),
	},
	{
		path: "/about",
		name: "AboutPage",
		component: () => import("@/views/About.vue"),
	},
	{
		path: "/projects",
		name: "projectsPage",
		component: () => import("@/views/Projects.vue"),
	},
];
export const router: Router = createRouter({
	history: createWebHistory(),
	routes,
});
