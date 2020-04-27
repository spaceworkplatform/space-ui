<script>
import selfInstall from "../utils/selfInstall";
import { createPopper } from "@popperjs/core";
export default {
	name: "STooltip",
	props: {
		label: {
			type: String,
			default: null
		}
	},
	install(Vue, theme) {
		selfInstall(Vue, theme, this);
	},
	data() {
		return {
			popperInstance: null
		};
	},
	render(createElement) {
		let el = createElement(
			"span",
			{
				class:
					"bg-black w-full shadow-md py-1 invisible px-2 rounded font-bold text-white"
			},
			[
				this.$slots.default || this.label,
				createElement('div', {
					class: 'arrow'
				})
			]
		);
		return el;
	},
	methods: {
		_createPopper() {
			this.popperInstance = createPopper(this.$parent.$el, this.$el, {
				placement: "bottom",
				modifiers: [
					{
						name: "offset",
						options: {
							offset: [0, 8]
						}
					},
					{
						name: "preventOverflow",
						options: {
							mainAxis: false
						}
					},
					{
						name: "arrow",
						options: {
							element: '.arrow'
						}
					}
				]
			});
		}
	},
	mounted() {
		this._createPopper();
		this.$parent.$el.addEventListener("mouseenter", () => {
			this.$el.classList.remove("invisible");
		});

		this.$parent.$el.addEventListener("mouseleave", () => {
			this.$el.classList.add("invisible");
		});
	}
};
</script>

<style>
.arrow {
	top: -4px;
}
.arrow,
.arrow::before {
  position: absolute;
  width: 8px;
  height: 8px;
  z-index: -1;
}

.arrow::before {
  content: '';
  transform: rotate(45deg);
  background: #000;
}
</style>