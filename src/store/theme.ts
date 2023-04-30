import { defineStore } from "pinia";

const Theme = "lara-light-blue";

export const themeStore = defineStore({
	id: "theme",
	state: () => ({
		theme: Theme,
	}),
	actions: {
		saveTheme(theme: string = Theme) {
			this.theme = theme;
		},
	},
});
