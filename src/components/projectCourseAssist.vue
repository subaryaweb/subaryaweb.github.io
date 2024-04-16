<template>
	<div class="flex flex-col items-center">
		<Swiper class="items-center justify-center mx-12" :duration="300" :interval="3000">
			<SwiperItem v-for="item in 6" :key="item">
				<div class="flex items-center justify-center">
					<img :src="getImage(item)" alt="Image {{item}}">
				</div>
			</SwiperItem>
		</Swiper>
		<div class="py-12 mx-12 items-center justify-center">
			<div class="text-xl mb-8">
				<div class="text-center">
					此為課表、待辦事項、筆記三合一的課程助手 APP 專案。
					<a
						class="text-blue-500 hover:underline"
						href="https://github.com/Adam7066/NTNU_APP_2023_Final"
						target="_blank"
					>課程小助手</a>
				</div>
				<br />
				<div>
					此專案為了解決學生在手機中可以將課表、待辦事項、課程筆記等功能整合在一個 APP
					中，出門忘了帶電腦或是紙本筆記也能夠快速查看與調整。詳細的操作可以觀看
					<a class="text-blue-500 hover:underline" href="https://youtu.be/kn4JitmAHjY" target="_blank">Demo
						影片</a>。
				</div>
				<br />
				<div>
					在此合作專案中，我擔任<span class="text-yellow-500">全部前端</span>的工作，並且使用了以下技術與工具完成上述目標。
				</div>
			</div>
			<div class="flex">
				<ul class="text-2xl">
					Tool Key:
					<li class="ml-4 text-xl">Eslint</li>
					<li class="ml-4 text-xl">GitHub</li>
					<li class="ml-4 text-xl">PNPM</li>
					<li class="ml-4 text-xl">Prettier</li>
					<li class="ml-4 text-xl">Vite</li>
				</ul>
				<ul class="mx-auto text-2xl pl-4">
					Key Skill:
					前端
					<li class="ml-4 text-xl">Tailwind CSS</li>
					<li class="ml-4 text-xl">TDesign</li>
					<li class="ml-4 text-xl">TypeScript</li>
					<li class="ml-4 text-xl">Vue3.js</li>
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
	return path + 'ntnu_course_assist/' + index.toString() + ext;
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
