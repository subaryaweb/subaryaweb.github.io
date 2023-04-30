<template>
	<Card
		class="mt--12 mx-4 sm:mx-8 md:mx-12 lg:mx-12 xl:mx-12 2xl:mx-auto mt-24 max-w-screen-2xl shadow-color border-2"
	>
		<template #title>
			<div class="mt-5 mx-auto flex justify-center text-4xl">
				Welcome to SubaRya's Page !
			</div>
		</template>
		<template #content>
			<div class="ml-12 text-2xl flex justify-center"></div>
			<div class="ml-12 text-2xl flex justify-center"></div>
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
