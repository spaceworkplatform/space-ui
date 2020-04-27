<template>
	<div id="app" class="container mx-auto my-4">
		<div class="flex justify-between items-center w-full">
			<div>
				<s-button tooltip="test" color="blue-500" text-color="white" size="xs" label="Label Prop" />
			</div>
			<div>
				<s-button color="indigo-500" rounded text-color="white" size="sm" label="Label Prop" tooltip>
					<template #tooltip>
						test with slot
					</template>
				</s-button>
			</div>
			<div>
				<s-button elevated color="yellow-500" rounded="lg" outline label="Label Prop" />
			</div>
			<div>
				<s-button
					color="red-500"
					disabled
					rounded="full"
					text-color="white"
					size="lg"
					label="Label Prop"
				/>
			</div>
			<div>
				<s-button color="indigo-600">
					Button with Badge
					<s-badge color="blue-500" text-color="white" rounded="full" size="sm" floating label="2" />
				</s-button>
			</div>
		</div>
	</div>
</template>

<script>
import SButton from "./components/SButton.vue";
import SBadge from "./components/SBadge.vue";
export default {
	name: "App",
	components: {
		SButton,
		SBadge
	}
};
</script>

<style>
body {
	direction: rtl;
}
</style>