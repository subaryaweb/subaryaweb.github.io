<template>
	<t-layout class="flex">
		<t-aside class="w-1/2 min-w-56 max-w-88 h-[calc(100vh-72px)] overflow-y-auto  items-center">
			<t-menu class="!h-[calc(100vh-120px)]">
				<t-popup placement="right">
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
					<template #content>
						<div>社群維護 - jc</div>
					</template>
				</t-popup>
				<t-popup placement="right">
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
					<template #content>
						<div>2023 - GDMC (Generative Design in Minecraft)</div>
					</template>
				</t-popup>
				<t-popup placement="right">
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
					<template #content>
						<div>臺師大資訊工程學系報名系統</div>
					</template>
				</t-popup>
				<t-popup placement="right">
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
					<template #content>
						<div>大學排名與熱門分析討論站</div>
					</template>
				</t-popup>
				<t-popup placement="right">
					<t-menu-item
						:key="5"
						:value="5"
						class="text-md font-semibold"
						@click="curComponent = projectNTNUCIDS"
					>
						<template #icon>
							<NotificationIcon />
						</template>
						臺師大選課即時回報 DC Bot 系統
					</t-menu-item>
					<template #content>
						<div>臺師大選課即時回報 DC Bot 系統</div>
					</template>
				</t-popup>
				<t-popup placement="right">
					<t-menu-item
						:key="6"
						:value="6"
						class="text-md font-semibold"
						@click="curComponent = projectCourseAssist"
					>
						<template #icon>
							<MobileIcon />
						</template>
						課程小助手 APP
					</t-menu-item>
					<template #content>
						<div>課程小助手 APP</div>
					</template>
				</t-popup>
			</t-menu>
		</t-aside>
		<Content class="flex-grow h-[calc(100vh-72px)] overflow-y-auto py-8 px-12 flex justify-center">
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
import projectNTNUCIDS from "@/components/projectNTNU-CIDS.vue";
import projectCourseAssist from "@/components/projectCourseAssist.vue";
import { Content } from "tdesign-vue-next";
import { UsergroupIcon, Gamepad1Icon, SystemSettingIcon, ChartIcon, NotificationIcon, MobileIcon } from "tdesign-icons-vue-next";
import { ref } from "vue";

const curComponent = ref(projectJC);
</script>

<style lang="scss">
.t-default-menu {
	width: 100% !important;
}
</style>
