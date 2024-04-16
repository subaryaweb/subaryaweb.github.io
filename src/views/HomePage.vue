<template>
	<t-layout>
		<t-header class="flex items-center h-[calc(72px)]">
			<t-head-menu default-value="2-1" expand-type="popup">
				<template #logo>
					<t-avatar shape="circle" size="50px" image="/assets/SubaRya.png" class="font-bold text-xl ml-8"></t-avatar>
				</template>
				<t-menu-item value="1" class="text-md font-semibold" @click="handleClickHome()">
					Home
				</t-menu-item>
				<t-menu-item value="2" class="text-md font-semibold" @click="handleClickAboutme()">
					About Me
				</t-menu-item>
				<t-menu-item value="3" class="text-md font-semibold" @click="handleClickProjects()">
					Projects
				</t-menu-item>
				<template #operations>
					<t-space>
						<SunnyIcon v-if="!checked" />
						<MoonIcon v-else />
						<t-switch class="mr-4" v-model="checked" @change="onChangeSwitch" />
					</t-space>
					<t-button variant="text" shape="square" class="mr-4">
						<template #icon>
							<a href="https://github.com/KutsunaSubaRya" target="_blank">
								<LogoGithubIcon />
							</a>
						</template>
					</t-button>
				</template>
			</t-head-menu>
		</t-header>
		<t-layout class="flex">
			<router-view v-if="pageVal">
			</router-view>
			<Content v-if="!pageVal"
					 class="h-[calc(100vh-72px)] overflow-y-auto py-8 px-12 flex items-center justify-center flex-col">
				<t-card hover-shadow header-bordered
						class="flex items-center justify-center font-bold text-3xl w-2/3 h-2/3 rounded-3xl">
					<div>
						Welcome to SubaRya's Project !
					</div>
				</t-card>
			</Content>
		</t-layout>
	</t-layout>
</template>

<script setup lang="ts">
import { LogoGithubIcon } from "tdesign-icons-vue-next";
import { Content } from "tdesign-vue-next";
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import { SwitchProps } from "tdesign-vue-next";
import { SunnyIcon, MoonIcon } from "tdesign-icons-vue-next";

const router = useRouter();
const pageVal = ref(false);
const image = "/assets/SubaRya.png";

const checked = ref(true);
const onChangeSwitch: SwitchProps["onChange"] = (val) => {
	if (val) {
		document.documentElement.setAttribute("theme-mode", "dark");
	} else {
		document.documentElement.removeAttribute("theme-mode");
	}
};

const handleClickHome = () => {
	pageVal.value = false;
	router.push({ name: "HomePage" });
};

const handleClickProjects = () => {
	pageVal.value = true;
	router.push({ name: "projectsPage" });
};

const handleClickAboutme = () => {
	pageVal.value = true;
	router.push({ name: "aboutPage" });
};

onMounted(() => {
	document.documentElement.setAttribute("theme-mode", "dark");
});

</script>

<style scoped>
</style>