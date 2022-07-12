import { defineConfig } from 'windicss/helpers';
import colors from 'windicss/colors';

export default defineConfig({
	theme: {
		extend: {
			fontFamily: {
				roboto: ['Roboto', 'sans-serif'],
				arial: ['Arial', 'sans-serif'],
			},
			colors: {
				'g:dark_gray': '#202124',
				'g:light_gray': '#BDC1C6',
				'g:white': '#FFFFFF',
			},
		},
	},
});
