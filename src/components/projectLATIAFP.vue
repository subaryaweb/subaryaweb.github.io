<template>
	<div class="flex flex-col items-center">
		<Swiper class="items-center justify-center mx-12" :duration="300" :interval="3000">
			<SwiperItem v-for="item in 9" :key="item">
				<div class="flex items-center justify-center">
					<img :src="getImage(item)" alt="Image {{item}}">
				</div>
			</SwiperItem>
		</Swiper>
		<div class="py-12 mx-12 items-center justify-center">
			<div class="text-xl mb-8">
				<div class="text-center">
					此為創意黑客松專案。專題名稱為
					<a
						class="text-blue-500 hover:underline"
						href="https://demox.tw/idea/detail/?id=1360"
						target="_blank"
					>大學排名與熱門領域討論站</a>
				</div>
				<br />
				<div>
					此專案為了解決網路上大學排名與領域趨勢雜亂、資料不易比對之問題，以利學生客製化並省時選擇未來目標。特色功能有：使用者創建帳號後，可透過互動圖表自定義交叉比較，並收藏最愛，更設有討論串促進資訊交流。
				</div>
				<br />
				<div>
					在此合作專案中，我擔任
					<span class="text-yellow-500">前端、後端、資料爬蟲、部署</span>
					等多項工作，並且使用了多項技術與工具完成上述目標。
				</div>
				<br />
				<div>
					最後在第一屆教育數據啟航創意黑客松晉級決賽並獲得佳作獎。
				</div>
			</div>
			<div>
				<div class="flex">
					<ul class="w-1/2 text-2xl">
						Tool Key:
						<li class="ml-4 text-xl">Argon2</li>
						<li class="ml-4 text-xl">Cloudflare Tunnel</li>
						<li class="ml-4 text-xl">Eslint</li>
						<li class="ml-4 text-xl">GitHub</li>
						<li class="ml-4 text-xl">PNPM</li>
						<li class="ml-4 text-xl">Proxmox Virtual Environment</li>
						<li class="ml-4 text-xl">Prettier</li>
						<li class="ml-4 text-xl">Scrapy</li>
						<li class="ml-4 text-xl">Selenium</li>
						<li class="ml-4 text-xl">Vite</li>
					</ul>
					<ul class="mx-auto pl-4 w-1/2 text-2xl">
						Key Skill:
						前端
						<li class="ml-4 text-xl">ECharts</li>
						<li class="ml-4 text-xl">Tailwind CSS</li>
						<li class="ml-4 text-xl">TDesign</li>
						<li class="ml-4 text-xl">TypeScript</li>
						<li class="ml-4 text-xl">Vue3.js</li>
					</ul>

				</div>
				<div class="flex text-xl mt-4">
					<ul class="mx-auto w-1/2">
						Key Skill:
						後端
						<li class="ml-4 text-xl">Flask</li>
						<li class="ml-4 text-xl">Python</li>
					</ul>
					<ul class="mx-auto pl-4 w-1/2">
						Key Skill:
						資料庫
						<li class="ml-4 text-xl">SQLAlchemy ORM</li>
						<li class="ml-4 text-xl">SQLite</li>
					</ul>
				</div>
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
	return path + 'latia_fp/' + index.toString() + ext;
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
