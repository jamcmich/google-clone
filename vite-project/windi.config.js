import { defineConfig } from 'windicss/helpers';

export default defineConfig({
	theme: {
		extend: {
			fontFamily: {
				roboto: ['Roboto', 'sans-serif'],
				arial: ['Arial', 'sans-serif'],
			},
			colors: {
				'g:cod': 'rgb(60, 64, 67)',
				'g:cod_faded': 'rgba(60, 64, 67, 0.08)',
				'g:cod_lighter': 'rgba(60, 64, 67, 0.9)',
				'g:cod_gray': '#171717',
				'g:silver': 'rgb(189, 193, 198)',
				'g:shark': '#303134',
				'g:charcoal': 'rgb(32, 33, 36)',
				'g:white': '#FFFFFF',
				'g:white_faded': 'rgba(255, 255, 255, 0.87)',
				'g:athens_gray': '#E8EAED',
				'g:athens_gray_faded': 'rgba(232, 234, 237, 0.08)',
				'g:athens_gray_lighter': '#F8F9FA',
				'g:shuttle_gray': 'rgb(95, 99, 104)',
				'g:malibu': '#8AB4F8',
				'g:rolling_stone': 'rgb(117, 123, 128)',
				'g:gray_chateau': 'rgb(154, 160, 166)',
				'g:manatee': '#999DA2',
				'g:manatee_light': '#969BA1',
				'g:black': '#000000',
				'g:black_faded': '#000000DE',
				'g:iron': '#DFE1E5',
				'g:iron_lighter': '#DFE1E500',
				'g:iron_darker': '#DADCE0',
				'g:cornflower_blue': '#4285F4',
				'g:concrete': '#F2F2F2',
				'g:malibu': '#8AB4F8',
			},
		},
	},
});
