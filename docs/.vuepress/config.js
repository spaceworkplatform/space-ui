module.exports = {
	title: 'Space UI',
	description: 'Vue components library from space',
	themeConfig: {
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Github', link: 'https://github.com/spaceworkplatform/space-ui' }
		],
		sidebar: [
			'/',
			{
				title: 'Components',
				collapsible: true,
				children: [
					'components/button'
				]
			}
		]
	},
	postcss: {
		'plugins': [
			require('tailwindcss')('tailwind.config.js'),
			require('autoprefixer')()
		]
	},
}