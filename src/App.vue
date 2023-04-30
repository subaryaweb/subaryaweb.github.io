<template>
	<Menubar :model="items">
		<template #start>
			<Avatar
				image="https://imgur.com/Yir9im6.png"
				class="ml-12 mr-8 mt-1"
				size="xlarge"
				shape="circle"
			/>
		</template>
		<template #end>
			<div class="card flex justify-content-center">
				<InputSwitch
					class="mr-12"
					v-model="checked"
					@click="toggleTheme"
				/>
			</div>
		</template>
	</Menubar>
	<router-view />
</template>
<script setup lang="ts">
import { usePrimeVue } from "primevue/config";
// import { themeStore } from "@/store/theme";
const PrimeVue = usePrimeVue();
const router = useRouter();
const checked = ref(false);
const currentTheme = ref("lara-light-blue");
// const theme = themeStore();
const items = ref([
	{
		label: "Home",
		icon: "pi pi-home",
		command: () => {
			router.push({ path: "/" });
		},
	},
	{
		label: "About me",
		icon: "pi pi-id-card",
		command: () => {
			router.push({ path: "/about" });
		},
	},
	{
		label: "Project",
		icon: "pi pi-book",
		command: () => {
			router.push({ path: "/projects" });
		},
	},
]);
const toggleTheme = () => {
	let nextTheme = "lara-light-blue";
	if (currentTheme.value === "lara-light-blue") nextTheme = "viva-dark";
	else if (currentTheme.value === "viva-dark") nextTheme = "lara-light-blue";
	PrimeVue.changeTheme(currentTheme.value, nextTheme, "id-to-link", () => {});
	// theme.$patch(nextTheme);
	// console.log(themeStore.state());
	currentTheme.value = nextTheme;
};
</script>
<style lang="scss"></style>
