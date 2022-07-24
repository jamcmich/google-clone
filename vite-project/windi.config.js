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
				'g:cod_faded': '#3C404314',
				'g:cod_lighter': '#3c4043E6',
				'g:cod_gray': '#171717',
				'g:silver': '#BDC1C6',
				'g:shark': '#303134',
				'g:charcoal': '#202124',
				'g:white': '#FFFFFF',
				'g:white_faded': '#FFFFFFDE',
				'g:athens_gray': '#E8EAED',
				'g:athens_gray_faded': '#E8EAED14',
				'g:athens_gray_lighter': '#F8F9FA',
				'g:shuttle_gray': '#5F6368',
				'g:malibu': '#8AB4F8',
				'g:rolling_stone': '#757B80',
				'g:gray_chateau': '#9AA0A6',
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
