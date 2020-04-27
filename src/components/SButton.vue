<script>
import selfInstall from "../utils/selfInstall";
import getCurrentClass from "../utils/getCurrentClass";
import getDarkerColorClass from "../utils/getDarkerColorClass";
import SButtonTheme from "../themes/default/SButton";
import commonAttributes from "../mixins/commonAttributes";
import STooltip from "./STooltip.vue";

const {
	baseClass,
	disabledClass,
	xsSizeClass,
	smSizeClass,
	defaultSizeClass,
	lgSizeClass
} = SButtonTheme;

export default {
	name: "SButton",
	install(Vue, theme) {
		selfInstall(Vue, theme, this);
	},
	mixins: [commonAttributes],
	components: {
		STooltip
	},
	props: {
		tagName: {
			type: String,
			default: "button",
			validator(value) {
				return ["button", "a"].includes(value);
			}
		},
		value: {
			type: [String, Number],
			default: null
		},
		type: {
			type: String,
			default: "button"
		},
		label: {
			type: String,
			default: null
		},
		href: {
			type: String,
			default: null
		},
		color: {
			type: String,
			default: "white"
		},
		textColor: {
			type: String,
			default: "black"
		},
		tooltip: {
			type: [String, Boolean],
			default: null
		},
		rounded: {
			type: [Boolean, String],
			default: true
		},
		elevated: {
			type: [Boolean, String],
			default: false
		},
		outline: {
			type: Boolean,
			default: false
		},
		size: {
			type: String,
			default: null,
			validator(value) {
				return (
					value === null || ["xs", "sm", "md", "lg"].includes(value)
				);
			}
		},
		method: {
			type: String,
			default: undefined
		},
		data: {
			type: Object,
			default: undefined
		},
		preserveState: {
			type: Boolean,
			default: false
		},
		preserveScroll: {
			type: Boolean,
			default: false
		},
		to: {
			type: [String, Object],
			default: undefined
		},
		replace: {
			type: Boolean,
			default: false
		},
		append: {
			type: Boolean,
			default: false
		},
		activeClass: {
			type: String,
			default: "router-link-active"
		},
		exact: {
			type: Boolean,
			default: false
		},
		exactActiveClass: {
			type: String,
			default: "router-link-exact-active"
		},
		baseClass: {
			type: [String, Object, Array],
			default: baseClass
		},
		disabledClass: {
			type: [String, Object, Array],
			default: disabledClass
		},
		xsSizeClass: {
			type: [String, Object, Array],
			default: xsSizeClass
		},
		smSizeClass: {
			type: [String, Object, Array],
			default: smSizeClass
		},
		defaultSizeClass: {
			type: [String, Object, Array],
			default: defaultSizeClass
		},
		lgSizeClass: {
			type: [String, Object, Array],
			default: lgSizeClass
		}
	},
	computed: {
		currentClass() {
			return getCurrentClass(this);
		},
		isInertiaLinkComponentAvailable() {
			return !!this.$options.components.InertiaLink;
		},
		isRouterLinkComponentAvailable() {
			return !!(
				this.$options.components.RouterLink ||
				this.$options.components.NuxtLink
			);
		},
		isARouterLink() {
			return this.to !== undefined && this.isRouterLinkComponentAvailable;
		},
		isAnIntertiaLink() {
			return (
				this.href !== undefined && this.isInertiaLinkComponentAvailable
			);
		},
		componentToRender() {
			if (this.isARouterLink) {
				return (
					this.$options.components.NuxtLink ||
					this.$options.components.RouterLink
				);
			}

			if (this.isAnIntertiaLink) {
				return this.$options.components.InertiaLink;
			}

			if (this.href) {
				return "a";
			}

			return this.tagName;
		}
	},
	methods: {
		onBlur(e) {
			this.$emit("blur", e);
		},
		onFocus(e) {
			this.$emit("focus", e);
		},
		onClick(e) {
			this.$emit("click", e);
		},
		blur() {
			this.$el.blur();
		},
		focus() {
			this.$el.focus();
		},
		getAttributes() {
			if (this.isAnIntertiaLink) {
				return {
					href: this.href,
					method: this.method,
					data: this.data,
					preserveState: this.preserveState,
					preserveScroll: this.preserveScroll,
					id: this.id,
					value: this.value,
					autofocus: this.autofocus,
					disabled: this.disabled,
					name: this.name,
					type: this.type
				};
			}
			if (this.isARouterLink) {
				return {
					to: this.to,
					replace: this.replace,
					append: this.append,
					tag: this.tagName,
					activeClass: this.activeClass,
					exact: this.exact,
					event: ["click", "focus", "blur"],
					exactActiveClass: this.exactActiveClass,
					id: this.id,
					value: this.value,
					autofocus: this.autofocus,
					disabled: this.disabled,
					name: this.name,
					type: this.type
				};
			}
			return {
				id: this.id,
				value: this.value,
				autofocus: this.autofocus,
				disabled: this.disabled,
				name: this.name,
				href: this.href,
				type: this.type
			};
		}
	},
	render(createElement) {
		return createElement(
			this.componentToRender,
			{
				attrs: this.getAttributes(),
				class: this.currentClass,
				on: {
					click: this.onClick,
					focus: this.onFocus,
					blur: this.onBlur
				}
			},
			[
				this.$slots.default || this.label,
				this.tooltip != null
					? createElement("s-tooltip", {
						props: {
							label: this.tooltip
						}
					  }, this.$slots.tooltip || this.tooltip)
					: null
			]
		);
	}
};
</script>