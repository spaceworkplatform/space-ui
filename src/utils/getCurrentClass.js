import getDarkerColorClass from './getDarkerColorClass'

let propsMap = {
	baseClass: (vm) => {
		return vm.baseClass.split(' ')
	},

	size: (vm) => {
		let classes = [
			`${vm.$options._componentTag}-size-${vm.size || "default"}`
		]

		if (vm.size === null || vm.size == "md") {
			classes.push(vm.defaultSizeClass);
		} else if (vm.size === "xs") {
			classes.push(vm.xsSizeClass);
		} else if (vm.size === "sm") {
			classes.push(vm.smSizeClass);
		} else if (vm.size == "lg") {
			classes.push(vm.lgSizeClass);
		}

		return classes
	},

	rounded: (vm) => {
		if (typeof vm.rounded == 'boolean' && vm.rounded === true) {
			return ['rounded']
		} else if (typeof vm.rounded == 'string') {
			return [`rounded-${vm.rounded}`]
		}

		return []
	},

	elevated: (vm) => {
		if (typeof vm.elevated == 'boolean' && vm.elevated === true) {
			return ['shadow']
		} else if (typeof vm.elevated == 'string') {
			return [`shadow-${vm.elevated}`]
		}

		return []
	},

	disabled: (vm) => {
		let classes = []
		if (vm.disabled == true) {
			classes.push(
				`${vm.$options._componentTag}-disabled`
			);

			if (vm.$props.disabledClass != undefined) {
				classes.push(vm.disabledClass);
			}
		}
		return classes
	},

	floating: (vm) => {
		return vm.floatingClass.split(' ')
	},

	outline: (vm) => {
		if(vm.outline === false){
			return [
				`bg-${vm.color}`,
				`hover:bg-${getDarkerColorClass(vm.color)}`,
				`text-${vm.textColor}`,
				`hover:text-${getDarkerColorClass(vm.textColor)}`
			]
		} else {
			return [
				`border border-${vm.color}`,
				`text-${vm.textColor}`,
				`hover:bg-${vm.color}`,
				`hover:text-white`
			]
		}

		return []
	}
}

export default (vm) => {
	let classes = [
		`${vm.$options._componentTag}`
	];

	Object.keys(propsMap).forEach((key) => {
		if (vm.$options._propKeys.includes(key)) {
			classes = [
				...classes,
				...propsMap[key](vm)
			]
		}
	})

	return classes
}