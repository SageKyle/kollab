/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: 'hsl(237, 50%, 27%)',
					light: 'hsl(229, 47%, 36%)',
				},
			},
		},
	},
	plugins: [],
}
