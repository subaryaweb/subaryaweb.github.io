import { defineConfig } from "windicss/helpers";
import AspectRatio from "windicss/plugin/aspect-ratio";
import Filters from "windicss/plugin/filters";
import Forms from "windicss/plugin/forms";
import LineClamp from "windicss/plugin/line-clamp";
import SrollSnap from "windicss/plugin/scroll-snap";

export default defineConfig({
	darkMode: "class",
	attributify: true,
	plugins: [
		AspectRatio,
		Filters,
		Forms,
		LineClamp,
		SrollSnap,
		require("@windicss/plugin-scrollbar"),
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Noto Sans TC", "Helvetica Neue", "sans-serif"],
				// mono: '"Fira Code", monospace',
			},
		},
	},
});
