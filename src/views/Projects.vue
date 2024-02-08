<template>
	<t-layout>
		<t-aside class="h-[calc(100vh-72px)] overflow-y-auto flex flex-col items-center">
			<t-menu v-model="menuVal" class="!h-[calc(100vh-120px)]">
				<t-menu-item
					:key="1"
					:value="1"
					class="text-md font-semibold"
					@click="curComponent = projectJC"
				>
					<template #icon>
						<UsergroupIcon />
					</template>
					社群維護 - jc
				</t-menu-item>
				<t-menu-item
					:key="2"
					:value="2"
					class="text-md font-semibold"
					@click="curComponent = projectMC"
				>
					<template #icon>
						<Gamepad1Icon />
					</template>
					2023 - GDMC
				</t-menu-item>
				<t-menu-item
					:key="3"
					:value="3"
					class="text-md font-semibold"
					@click="curComponent = projectNTNUADMS"
				>
					<template #icon>
						<SystemSettingIcon />
					</template>
					臺師大資訊工程學系報名系統
				</t-menu-item>
				<t-menu-item
					:key="4"
					:value="4"
					class="text-md font-semibold"
					@click="curComponent = projectLATIAFP"
				>
					<template #icon>
						<ChartIcon />
					</template>
					大學排名與熱門分析討論站
				</t-menu-item>
			</t-menu>
		</t-aside>
		<Content class="h-[calc(100vh-72px)] overflow-y-auto py-8 px-12 flex justify-center">
			<keep-alive>
				<component :is="curComponent" />
			</keep-alive>
		</Content>
	</t-layout>
</template>


<script setup lang="ts">
import projectJC from "@/components/projectJC.vue";
import projectMC from "@/components/projectMC.vue";
import projectNTNUADMS from "@/components/projectNTNUADMS.vue";
import projectLATIAFP from "@/components/projectLATIAFP.vue";
import {Content} from "tdesign-vue-next";
import {UsergroupIcon, Gamepad1Icon, SystemSettingIcon, ChartIcon} from "tdesign-icons-vue-next";
import {ref} from "vue";

const curComponent = ref(projectJC);
</script>

<style lang="scss">
</style>
