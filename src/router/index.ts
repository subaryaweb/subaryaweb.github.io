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
		component: () => import("../views/HomePage.vue"),
		children: [
			{
				path: "/projects",
				name: "projectsPage",
				component: () => import("../views/Projects.vue"),
			},
			{
				path: "/about",
				name: "aboutPage",
				component: () => import("../views/About.vue"),
			},
			{
				path: "/resume",
				name: "resumePage",
				component: () => import("../views/Resume.vue"),
			},
		],
	},
];
export const router: Router = createRouter({
	history: createWebHistory(),
	routes,
});
