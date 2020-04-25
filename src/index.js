import merge from 'lodash/merge'
import DefaultTheme from './themes/default'

import SButton from './components/SButton.vue'

const components = {
	SButton
}

function extendComponent(Vue, CurrentTheme, componentName) {
	const themeSettings = CurrentTheme[componentName]
	const themeDefaultSettings = DefaultTheme[componentName]

	const newSettings = merge(themeDefaultSettings, themeSettings)

	let { props } = components[componentName]

	Object.keys(newSettings).forEach(key => {
		const prop = {
			default: () => newSettings[key]
		}
		props[key] = prop
	})

	return Vue.extend({
		...components[componentName],
		...{
			props
		}
	})
}

export default {
	install(Vue, args = {}) {
		if (this.installed) {
			return
		}

		this.installed = true

		const CurrentTheme = {
			...DefaultTheme,
			...args.theme || {}
		}

		const componentsToRegister = args.components || Object.keys(components)

		componentsToRegister.forEach(componentName => {
			Vue.component(componentName, extendComponent(Vue, CurrentTheme, componentName))
		})
	}
}