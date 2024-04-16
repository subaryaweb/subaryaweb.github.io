<template>
	<div class="flex flex-col items-center">
		<Swiper class="items-center justify-center mx-12" :duration="300" :interval="3000">
			<SwiperItem v-for="item in 2" :key="item">
				<div class="flex items-center justify-center">
					<img :src="getImage(item)" alt="Image {{item}}">
				</div>
			</SwiperItem>
		</Swiper>
		<div class="py-12 mx-12 items-center justify-center">
			<div class="text-xl mb-8">
				<div class="text-center">
					此為社群貢獻專案。
				</div>
				<br />

				<a
					class="text-blue-500 hover:underline"
					href="https://github.com/kellyjonbrazil/jc"
					target="_blank"
				>jc</a
				>

				是有著 7.5k Star 的 JSON Convert CLI
				tools，使用後發現 Git Log parse to JSON
				功能有誤， 於是 fork 並且修改了此功能，並且發了
				<a
					class="text-blue-500 hover:underline"
					href="https://github.com/kellyjonbrazil/jc/issues/395"
					target="_blank"
				>Issue</a
				>
				給原作者，最後收到有採納並於下一版本會更新的通知。
			</div>
			<div class="flex">
				<ul class="text-2xl">
					Tool Key:
					<li class="ml-4 text-xl">GitHub</li>
				</ul>
				<ul class="mx-auto text-2xl pl-4">
					Key Skill:
					<li class="ml-4 text-xl">Python</li>
					<li class="ml-4 text-xl">Regex</li>
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
	return path + 'jc/' + index.toString() + ext;
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
