<template>
	<t-layout>
		<t-header class="flex items-center h-[calc(72px)]">
			<t-head-menu default-value="2-1" expand-type="popup">
				<template #logo>
					<router-link :to="{name: 'HomePage'}">
						<div class="font-bold text-xl ml-8"> SubaRya</div>
					</router-link>
				</template>
				<t-menu-item value="2" class="text-md font-semibold">
					Home
				</t-menu-item>
				<t-menu-item value="3" class="text-md font-semibold">
					About Me
				</t-menu-item>
				<t-menu-item value="3" class="text-md font-semibold">
					Projects
				</t-menu-item>
				<template #operations>
					<t-button variant="text" shape="square" class="mr-4">
						<template #icon>
							<a href="https://github.com/LATIA112-1-Finial-Project" target="_blank">
								<LogoGithubIcon />
							</a>
						</template>
					</t-button>
				</template>
			</t-head-menu>
		</t-header>
		<t-layout class="flex">
			<Content class="h-[calc(100vh-72px)] overflow-y-auto py-8 px-12 flex items-center justify-center flex-col">
				<t-card hover-shadow header-bordered
						class="flex items-center justify-center font-bold text-3xl w-2/3 h-2/3 rounded-3xl">
					<div>
						Hi,
					</div>
					<div>
						Welcome to SubaRya's Page !
					</div>
				</t-card>
			</Content>
		</t-layout>
	</t-layout>
</template>

<script setup lang="ts">
import {LogoGithubIcon} from "tdesign-icons-vue-next";
import {Content} from "tdesign-vue-next";

</script>

<style scoped>
</style>