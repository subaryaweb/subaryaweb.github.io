<template>
	<div class="flex flex-col items-center">
		<Swiper class="items-center justify-center mx-12" :duration="300" :interval="3000">
			<SwiperItem v-for="item in 12" :key="item">
				<div class="flex items-center justify-center">
					<img :src="getImage(item)" alt="Image {{item}}">
				</div>
			</SwiperItem>
		</Swiper>
		<div class="py-12 mx-12 items-center justify-center">
			<div class="text-xl mb-8">
				基於 Python 開發的 <a class="text-blue-500 hover:underline" href="https://github.com/NTNU-GDMC/GDMC"
									  target="_blank">專案</a>，能夠在
				<a
					class="text-blue-500 hover:underline"
					href="https://www.minecraft.net/"
					target="_blank"
				>Minecraft</a
				>
				3D 沙盒
				遊戲中自動生成適應各種地形與環境的村莊。
			</div>
			<div class="text-xl mb-8">
				此專案為 <a class="text-blue-500 hover:underline" href="https://2023.ieee-cog.org/" target="_blank">2023
				IEEE Conference on Games</a> 的 <a class="text-blue-500 hover:underline"
												   href="https://gendesignmc.wikidot.com/" target="_blank">6th annual
				GDMC - AI Settlement Generation Competition in Minecraft</a> 競賽專案，最後在此競賽中拿下 <a
				class="text-blue-500 hover:underline"
				href="https://gendesignmc.wikidot.com/wiki:2023-settlement-generation-competition#PositionNotLoaded"
				target="_blank">第一名</a>。
			</div>
			<div class="text-xl mb-8">

			</div>
			<div class="flex">
				<ul class="text-2xl">
					Tool Key:
					<li class="ml-4 text-xl">GitHub</li>
					<li class="ml-4 text-xl">
						<a
							class="text-blue-500 hover:underline"
							href="https://github.com/avdstaaij/gdpc"
							target="_blank"
						>GDPC 6.0</a
						>
					</li>
				</ul>
				<ul class="mx-auto text-2xl pl-4">
					Key Skill & 負責工作:
					<li class="ml-4 text-xl">Python</li>
					<li class="ml-4 text-xl">Multi-Agent System 架構設計</li>
					<li class="ml-4 text-xl">環境與資源分析、世界階級量化</li>
					<li class="ml-4 text-xl">地下結構生成</li>
				</ul>
			</div>
		</div>
	</div>
</template>


<script setup lang="ts">
import { Swiper, SwiperItem } from "tdesign-vue-next";
import { useSwiperStore } from "@/stores/swiper";

const swiperStore = useSwiperStore();

const getImage = (index: number) => {
	const path:string = swiperStore.getPath;
	const ext:string = swiperStore.getExt;
	return path + 'mc/' + index.toString() + ext;
};
</script>

<style lang="scss">
.t-space .t-space-item {
	width: 100%;
}

.t-space-vertical {
	width: 1000px;
	height: 560px;
}
</style>
