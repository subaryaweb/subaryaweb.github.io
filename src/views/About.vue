<template>
	<Card
		class="mt--12 mx-4 sm:mx-8 md:mx-12 lg:mx-12 xl:mx-12 2xl:mx-auto mt-24 max-w-screen-2xl shadow-color border-2"
	>
		<template #title>
			<div class="mt-5 ml-8 text-4xl">Whoami</div></template
		>
		<template #content>
			<div class="ml-12">
				<div class="flex">
					<i class="pi pi-user mr-4" style="font-size: 1.5rem"></i>
					<div class="text-xl">名稱: 蘇子權 (SubaRya)</div>
				</div>
				<div class="flex mt-6">
					<i class="pi pi-file mr-4" style="font-size: 1.5rem"></i>
					<div class="text-xl">
						簡介: 目前就讀於臺灣師範大學資訊工程系
					</div>
				</div>
			</div>
		</template>
	</Card>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.accordion-custom i span {
	vertical-align: middle;
}

.accordion-custom span {
	margin: 0 0.5rem;
}

.shadow-color {
	transition: box-shadow 0.3s;
	border-radius: 10px;
}

.shadow-color:hover {
	box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
}

.shadow-color-dark {
	transition: box-shadow 0.3s;
	border-color: rgb(38, 50, 56);
	border-width: 1px;
	border-radius: 10px;
}

.shadow-color-dark:hover {
	box-shadow: 0 0 11px rgb(255, 255, 255);
}
</style>
