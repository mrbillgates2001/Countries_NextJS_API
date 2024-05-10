import { Button } from "flowbite-react";
import { size } from "./src/app/icon";
import type { Config } from "tailwindcss";
const flowbite = require("flowbite-react/tailwind");

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		flowbite.content(),
	],
	darkMode: "class",
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				navBackground: "#2B3844",
				bodyBackground: "#202C36",
				activeColor: "#0E7490",
			},
			spacing: {
				cardWidth: "314px",
				cardHeight: "366px",
			},
		},
		fontSize: {
			24: "24px",
			18: "18px",
			14: "14px",
		},
	},
	plugins: [flowbite.plugin()],
};
export default config;
