import { defineConfig } from 'windicss/helpers';

export default defineConfig({
	theme: {
		extend: {
			fontFamily: {
				roboto: ['Roboto', 'sans-serif'],
				arial: ['Arial', 'sans-serif'],
			},
			colors: {
				'g:cod': '#3C4043',
				'g:silver': '#BDC1C6',
				'g:shark': '#303134',
				'g:charcoal': '#202124',
				'g:white': '#FFFFFF',
				'g:athens_gray': '#E8EAED',
				'g:athens_gray_faded': '#E8EAED14',
				'g:shuttle_gray': '#5F6368',
			},
			boxShadow: {
				'g:xs_shadow:': '0 1px 4px 0 rgba(0, 0, 0, 0.2)',
				'g:sm_shadow': '0 1px 6px 0 rgba(23, 23, 23, 1)',
				'g:md_shadow': '0 4px 12px 0 rgba(23, 23, 23, 0.9)',
			},
		},
	},
});
