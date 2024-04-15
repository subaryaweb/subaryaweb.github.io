<template>
	<div class="flex flex-col items-center">
		<Swiper class="items-center justify-center mx-12" :duration="300" :interval="3000">
			<SwiperItem v-for="item in 3" :key="item">
				<div class="flex items-center justify-center">
					<img :src="getImage(item)" alt="Image {{item}}">
				</div>
			</SwiperItem>
		</Swiper>
		<div class="py-12 mx-12 items-center justify-center">

			<div class="text-xl mb-8">
				此為 2022
				臺師大軟體工程課程專案。在此專案中我擔任<span class="text-yellow-500">前端組長</span>，採取
				Scrum Agile Framework 帶領 8
				位同學開發，其中也擔任 Scrum Master。
			</div>
			<div class="flex">
				<ul class="text-2xl">
					Tool Key:
					<li class="ml-4 text-xl">Eslint</li>
					<li class="ml-4 text-xl">GitLab</li>
					<li class="ml-4 text-xl">Linear App</li>
					<li class="ml-4 text-xl">PNPM</li>
					<li class="ml-4 text-xl">Prettier</li>
					<li class="ml-4 text-xl">TanStack Query</li>
					<li class="ml-4 text-xl">Vite</li>
				</ul>
				<ul class="mx-auto text-2xl pl-4">
					Key Skill:
					<li class="ml-4 text-xl">Figma</li>
					<li class="ml-4 text-xl">PrimeVue</li>
					<li class="ml-4 text-xl">TypeScript</li>
					<li class="ml-4 text-xl">Vue3.js</li>
					<li class="ml-4 text-xl">Windi CSS</li>
				</ul>
			</div>
		</div>
	</div>
</template>


<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperItem, Slider } from "tdesign-vue-next";

const size = ref(3);
const max = 6;
const min = 3;
const link = "src/assets/swiperImage/ntnu_adms/";
const ext = ".png";

const getImage = (index: number) => {
	return link + index.toString() + ext;
};
</script>

<style lang="scss">
//.t-swiper__navigation-item {
//	span {
//		background-color: #888888 !important;
//	}
//}
//.t-is-active {
//	span {
//		background-color: #2d2d2d !important;
//	}
//}
.t-space .t-space-item {
	width: 100%;
}

.t-space-vertical {
	width: 1000px;
	height: 560px;
}
</style>
