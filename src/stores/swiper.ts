import { defineStore } from "pinia";

export const useSwiperStore = defineStore({
	id: "swiper",
	state: () => ({
		path: "/assets/swiperImage/",
		ext: ".png"
	}),
	getters: {
		getPath(): string {
			return this.path;
		},
		getExt(): string {
			return this.ext;
		}
	}
});