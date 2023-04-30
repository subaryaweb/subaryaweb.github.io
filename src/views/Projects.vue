<template>
	<Card
		class="mt--12 my-8 mx-4 sm:mx-8 md:mx-12 lg:mx-12 xl:mx-12 2xl:mx-auto mt-24 max-w-screen-2xl shadow-color border-2"
		v-if="!checked"
	>
		<template #title>
			<div class="mt-5 ml-8 text-4xl">專案與貢獻</div>
		</template>
		<template #content>
			<Accordion class="accordion-custom" :activeIndex="0">
				<AccordionTab>
					<template #header>
						<span>臺師大資訊工程學系報名系統</span>
					</template>
					<Splitter style="height: 500px" class="mb-5">
						<SplitterPanel class="overflow-auto m-12">
							<div class="text-xl mb-8">
								此為 2022
								臺師大軟體工程課程專案。在此專案中我擔任前端組長，採取
								Scrum Agile Framwork 帶領 8
								位同學開發，其中也擔任 Scrum Master。
							</div>
                            <div class="flex ">
                                <ui class="text-xl">
                                    Tool Key: 
                                    <li>Git</li>
                                    <li>PNPM</li>
                                    <li>Linear App</li>
                                </ui>
                                <ui class="mx-auto text-xl">
                                    Key Skill:
                                    <li >Figma</li>
                                    <li>Vue.js</li>
                                    <li>Windi CSS</li>
                                    <li>TypeScript</li>
                                    <li>PrimeVue</li>
                                    <li>Eslint</li>
                                    <li>Prettier</li>
                                </ui>
                            </div>
							
						</SplitterPanel>
						<SplitterPanel class="flex items-center justify-center">
							<div
								class="card md:flex md:justify-center mx-2 sm:mx-2 md:mx-2 lg:mx-2 xl:mx-4 2xl:mx-auto"
							>
								<Galleria
									:value="images"
									:responsiveOptions="responsiveOptions"
									:numVisible="5"
									containerStyle="max-width: 400px"
								>
									<template #item="slotProps">
										<img
											:src="slotProps.item.itemImageSrc"
											:alt="slotProps.item.alt"
											style="width: 100%"
										/>
									</template>
									<template #thumbnail="slotProps">
										<img
											:src="
												slotProps.item.thumbnailImageSrc
											"
											:alt="slotProps.item.alt"
										/>
									</template>
								</Galleria>
							</div>
						</SplitterPanel>
					</Splitter>
				</AccordionTab>
				<AccordionTab>
					<template #header>
						<span>Header II</span>
					</template>
					<Splitter style="height: 500px" class="mb-5">
						<SplitterPanel
							class="flex align-items-center justify-content-center"
						>
							<p class="m-0">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in
								reprehenderit in voluptate velit esse cillum
								dolore eu fugiat nulla pariatur. Excepteur sint
								occaecat cupidatat non proident, sunt in culpa
								qui officia deserunt mollit anim id est laborum.
							</p>
						</SplitterPanel>
						<SplitterPanel
							class="flex align-items-center justify-content-center"
						>
							<div class="card md:flex md:justify-content-center">
								<Galleria
									:value="images"
									:responsiveOptions="responsiveOptions"
									:numVisible="5"
									containerStyle="max-width: 400px"
								>
									<template #item="slotProps">
										<img
											:src="slotProps.item.itemImageSrc"
											:alt="slotProps.item.alt"
											style="width: 100%"
										/>
									</template>
									<template #thumbnail="slotProps">
										<img
											:src="
												slotProps.item.thumbnailImageSrc
											"
											:alt="slotProps.item.alt"
										/>
									</template>
								</Galleria>
							</div>
						</SplitterPanel>
					</Splitter>
				</AccordionTab>
			</Accordion>
		</template>
	</Card>
	<!-- <Card
		class="mt--12 my-8 mx-4 sm:mx-8 md:mx-12 lg:mx-12 xl:mx-12 2xl:mx-auto mt-24 max-w-screen-2xl shadow-color-dark border-2"
		v-else
	>
		<template #title> 專案與貢獻 </template>
		<template #content>
			<Accordion class="accordion-custom" :activeIndex="0">
				<AccordionTab>
					<template #header>
						<span>臺師大資訊工程學系報名系統</span>
					</template>
					<Splitter style="height: 500px" class="mb-5">
						<SplitterPanel class="list-disc truncate m-12">
							<li>
								此為 2022
								臺師大軟體工程課程專案。在此專案中我擔任前端組長，採取
								Scrum Agile Framwork 帶領 8
								位同學開發，其中也擔任 Scrum Master。
							</li>
							<li>Tool Key: Git, PNPM, Linear App</li>
							<li>
								Key Skill: Figma, Vue.js, Windi CSS, TypeScript,
								PrimeVue, Eslint, Prettier
							</li>
						</SplitterPanel>
						<SplitterPanel class="flex items-center justify-center">
							<div
								class="card md:flex md:justify-center mx-2 sm:mx-2 md:mx-2 lg:mx-2 xl:mx-4 2xl:mx-auto"
							>
								<Galleria
									:value="images"
									:responsiveOptions="responsiveOptions"
									:numVisible="5"
									containerStyle="max-width: 400px"
								>
									<template #item="slotProps">
										<img
											:src="slotProps.item.itemImageSrc"
											:alt="slotProps.item.alt"
											style="width: 100%"
										/>
									</template>
									<template #thumbnail="slotProps">
										<img
											:src="
												slotProps.item.thumbnailImageSrc
											"
											:alt="slotProps.item.alt"
										/>
									</template>
								</Galleria>
							</div>
						</SplitterPanel>
					</Splitter>
				</AccordionTab>
				<AccordionTab>
					<template #header>
						<span>Header II</span>
					</template>
					<Splitter style="height: 500px" class="mb-5">
						<SplitterPanel
							class="flex align-items-center justify-content-center"
						>
							<p class="m-0">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in
								reprehenderit in voluptate velit esse cillum
								dolore eu fugiat nulla pariatur. Excepteur sint
								occaecat cupidatat non proident, sunt in culpa
								qui officia deserunt mollit anim id est laborum.
							</p>
						</SplitterPanel>
						<SplitterPanel
							class="flex align-items-center justify-content-center"
						>
							<div class="card md:flex md:justify-content-center">
								<Galleria
									:value="images"
									:responsiveOptions="responsiveOptions"
									:numVisible="5"
									containerStyle="max-width: 400px"
								>
									<template #item="slotProps">
										<img
											:src="slotProps.item.itemImageSrc"
											:alt="slotProps.item.alt"
											style="width: 100%"
										/>
									</template>
									<template #thumbnail="slotProps">
										<img
											:src="
												slotProps.item.thumbnailImageSrc
											"
											:alt="slotProps.item.alt"
										/>
									</template>
								</Galleria>
							</div>
						</SplitterPanel>
					</Splitter>
				</AccordionTab>
			</Accordion>
		</template>
	</Card> -->
	<!-- GDMC, CP_Discussion, STPad -->
</template>

<script setup lang="ts">
import { PhotoService } from "@/service/PhotoService";
const images = ref();
const checked = ref(false);
const responsiveOptions = ref([
	{
		breakpoint: "1500px",
		numVisible: 5,
	},
	{
		breakpoint: "1024px",
		numVisible: 3,
	},
	{
		breakpoint: "768px",
		numVisible: 2,
	},
	{
		breakpoint: "560px",
		numVisible: 1,
	},
]);
onMounted(() => {
	PhotoService.getImages().then((data) => (images.value = data));
});
</script>

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
