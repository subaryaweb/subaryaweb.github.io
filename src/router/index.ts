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
];
export const router: Router = createRouter({
	history: createWebHistory(),
	routes,
});
