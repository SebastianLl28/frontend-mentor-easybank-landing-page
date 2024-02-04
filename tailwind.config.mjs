/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				darkBlue: '#2d314d',
				limeGreen: '#31d35c',
				brightCyan: 'hsl(192, 70%, 51%)',
				grayishBlue: 'hsl(233, 8%, 62%)',
				lightGrayishBlue: 'hsl(220, 16%, 96%)',
				veryLightGray: 'hsl(0, 0%, 98%)',
			}
		},
	},
	plugins: [],
}
