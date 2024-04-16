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
				<div class="text-center">
					此為 Discord Bot 專案。
					<a
						class="text-blue-500 hover:underline"
						href="https://github.com/KutsunaSubaRya/NTNU-CIDS"
						target="_blank"
					>National Taiwan Normal University - Course Information Discord Bot System (NTNU_CIDS)</a>
				</div>
				<br />
				<div>
					此專案為了讓使用者在加退選期間內等待校內(臺師大)選課平台資訊更新時，能夠透過 Discord Bot
					取得最新的課程資訊，並且能夠設定課程開放時通知使用者。
				</div>
				<br />
				<div>
					在此個人專案中，我使用半自動的方式將驗證碼輸入到 Proxmox Virtual Environment 的 terminal 中並使用 <a
					class="text-blue-500 hover:underline" href="https://github.com/atanunq/viu" target="_blank">Viu</a>
					顯示。過程中也有使用 Regex 將學校有意將 id element
					隱藏的方式解析出來。並完成除了驗證碼以外皆是自動爬取與通知使用者的功能。
				</div>
			</div>
			<div class="flex">
				<ul class="text-2xl">
					Tool Key:
					<li class="ml-4 text-xl">Discord Bot API Doc</li>
					<li class="ml-4 text-xl">GitHub</li>
					<li class="ml-4 text-xl">Proxmox Virtual Environment</li>
					<li class="ml-4 text-xl">Regex</li>
					<li class="ml-4 text-xl">Selenium</li>
					<li class="ml-4 text-xl">Viu</li>
				</ul>
				<ul class="mx-auto text-2xl pl-4">
					Key Skill:
					<li class="ml-4 text-xl">Python</li>
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
	return path + 'ntnu_cids/' + index.toString() + ext;
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
