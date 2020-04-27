<script>
import selfInstall from "../utils/selfInstall";
import getCurrentClass from "../utils/getCurrentClass";
import SBadgeTheme from "../themes/default/SBadge";
import commonAttributes from "../mixins/commonAttributes";

const {
	baseClass,
	disabledClass,
	xsSizeClass,
	smSizeClass,
	defaultSizeClass,
	lgSizeClass,
	floatingClass
} = SBadgeTheme;

export default {
	name: "SBadge",
	mixins: [commonAttributes],
	props: {
		tagName: {
			type: String,
			default: 'div'
		},
		floating: {
			type: Boolean,
			default: false
		},
		color: {
			type: String,
			default: "white"
		},
		textColor: {
			type: String,
			default: "black"
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
		baseClass: {
			type: [String, Object, Array],
			default: baseClass
		},
		floatingClass: {
			type: [String, Object, Array],
			default: floatingClass
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
		},
		label: {
			type: String,
			default: null
		}
	},
	install(Vue, theme) {
		selfInstall(Vue, theme, this);
	},
	computed: {
		currentClass() {
			return getCurrentClass(this)
		}
	},
	methods: {
		getAttributes() {
			return {
				id: this.id,
				autofocus: this.autofocus,
				disabled: this.disabled,
				name: this.name,
				tabindex: this.tabindex
			};
		}
	},
	render(createElement) {
		return createElement(
			"div",
			{
				attrs: this.getAttributes(),
				class: this.currentClass
			},
			this.$slots.default || this.label
		);
	}
};
</script>