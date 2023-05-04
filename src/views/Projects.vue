<template>
	<Card
		class="mt--12 mx-8 sm:mx-8 md:mx-12 lg:mx-12 xl:mx-12 2xl:mx-12 mt-24 max-w-full shadow-color border-2"
	>
		<template #title>
			<div class="mt-5 ml-8 text-4xl">專案與貢獻</div>
		</template>
		<template #content>
			<Accordion class="accordion-custom" :activeIndex="0">
				<AccordionTab>
					<template #header>
						<span>臺師大資訊工程學系報名系統</span>
						<Tag
							class="tooltip"
							data-placement="top"
							data-tooltip="專案可見性"
							rounded
						>
							<span class="tooltiptext">Private</span>
						</Tag>
					</template>
					<Splitter style="height: 500px" class="mb-5">
						<SplitterPanel class="overflow-auto m-12">
							<div class="text-xl mb-8">
								此為 2022
								臺師大軟體工程課程專案。在此專案中我擔任前端組長，採取
								Scrum Agile Framwork 帶領 8
								位同學開發，其中也擔任 Scrum Master。
							</div>
							<div class="flex">
								<ui class="text-xl">
									Tool Key:
									<li>GitLab</li>
									<li>Vite</li>
									<li>TanStack Query</li>
									<li>PNPM</li>
									<li>Linear App</li>
									<li>Eslint</li>
									<li>Prettier</li>
								</ui>
								<ui class="mx-auto text-xl">
									Key Skill:
									<li>Figma</li>
									<li>Vue.js</li>
									<li>Windi CSS</li>
									<li>TypeScript</li>
									<li>PrimeVue</li>
								</ui>
							</div>
						</SplitterPanel>
						<SplitterPanel class="flex items-center justify-center">
							<div
								class="card md:flex md:justify-center mx-2 sm:mx-2 md:mx-2 lg:mx-2 xl:mx-4 2xl:mx-auto"
							>
								<Galleria
									:value="NTNUADMimages"
									:responsiveOptions="responsiveOptions"
									:numVisible="2"
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
						<span>GDMC</span>
						<Tag
							class="tooltip"
							data-placement="top"
							data-tooltip="專案可見性"
							rounded
						>
							<span class="tooltiptext">Private</span>
						</Tag>
					</template>
					<Splitter style="height: 500px" class="mb-5">
						<SplitterPanel class="overflow-auto m-12">
							<div class="text-xl mb-8">
								基於 Python 開發的工具，能夠在
								<a
									class="text-blue-500 hover:underline"
									href="https://www.minecraft.net/"
									>Minecraft</a
								>
								3D 沙盒
								遊戲中自動生成適應各種地形與環境的村莊。由於目前此專案正處於<a
									class="text-blue-500 hover:underline"
									href="https://gendesignmc.engineering.nyu.edu/"
									>參賽期</a
								>而設定 Private。
							</div>
							<div class="flex">
								<ui class="text-xl">
									Tool Key:
									<li>GitHub</li>
									<li>
										<a
											class="text-blue-500 hover:underline"
											href="https://github.com/avdstaaij/gdpc"
											>GDPC 6.0</a
										>
									</li>
								</ui>
								<ui class="mx-auto text-xl">
									Key Skill & 負責工作:
									<li>Python</li>
									<li>Multi-Agent System 架構設計</li>
									<li>環境與資源分析、世界階級量化</li>
								</ui>
							</div>
						</SplitterPanel>
						<SplitterPanel class="flex items-center justify-center">
							<div
								class="card md:flex md:justify-center mx-2 sm:mx-2 md:mx-2 lg:mx-2 xl:mx-4 2xl:mx-auto"
							>
								<Galleria
									:value="MCimages"
									:responsiveOptions="responsiveOptions"
									:numVisible="3"
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
						<span>CP_Discussion</span>
						<Tag
							class="tooltip"
							data-placement="top"
							data-tooltip="專案可見性"
							rounded
						>
							<span class="tooltiptext">Public</span>
						</Tag>
					</template>
					<Splitter style="height: 500px" class="mb-5">
						<SplitterPanel class="overflow-auto m-12">
							<div class="text-xl mb-8">
								此為因應程式設計一、二課程助教一職，為原本構想用於課程的討論區。
							</div>
							<div class="flex">
								<ui class="text-xl">
									Tool Key:
									<li>GitHub</li>
									<li>PNPM</li>
									<li>Vite</li>
									<li>Docker</li>
									<li>Eslint</li>
									<li>Prettier</li>
								</ui>
								<ui class="mx-auto text-xl">
									Key Skill:
									<li>Vue.js</li>
									<li>Windi CSS</li>
									<li>TypeScript</li>
									<li>Naive UI</li>
									<li>Go</li>
									<li>gqlgen</li>
								</ui>
							</div>
							<div class="flex justify-center mt-8 text-xl">
								<a class="text-blue-500 hover:underline" href="https://github.com/FateAC/CP_Discussion_Front-End">
									CP_Discussion Repo Link
								</a>
							</div>
						</SplitterPanel>
						<SplitterPanel class="flex items-center justify-center">
							<div
								class="card md:flex md:justify-center mx-2 sm:mx-2 md:mx-2 lg:mx-2 xl:mx-4 2xl:mx-auto"
							>
								<!-- <Galleria
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
								</Galleria> -->
							</div>
						</SplitterPanel>
					</Splitter>
				</AccordionTab>

				<AccordionTab>
					<template #header>
						<span>jc</span>
						<Tag
							class="tooltip"
							data-placement="top"
							data-tooltip="專案可見性"
							rounded
						>
							<span class="tooltiptext">Public</span>
						</Tag>
					</template>
					<Splitter style="height: 500px" class="mb-5">
						<SplitterPanel class="overflow-auto m-12">
							<div class="text-xl mb-8">
								此為社群貢獻專案。
								<a
									class="text-blue-500 hover:underline"
									href="https://github.com/kellyjonbrazil/jc"
									>jc</a
								>

								是有著 6.2k Star 的 JSON Convert CLI
								tools，使用後發現 Git Log parse to JSON
								功能有誤， 於是 fork 並且修改了此功能，並且發了
								<a
									class="text-blue-500 hover:underline"
									href="https://github.com/kellyjonbrazil/jc/issues/395"
									>Issue</a
								>
								給原作者，最後收到有採納並於下一版本會更新的通知。
							</div>
							<div class="flex">
								<ui class="text-xl">
									Tool Key:
									<li>GitHub</li>
								</ui>
								<ui class="mx-auto text-xl">
									Key Skill:
									<li>Python</li>
									<li>Regex</li>
								</ui>
							</div>
						</SplitterPanel>
						<SplitterPanel class="flex items-center justify-center">
							<div
								class="card md:flex md:justify-center mx-2 sm:mx-2 md:mx-2 lg:mx-2 xl:mx-4 2xl:mx-auto"
							>
								<Galleria
									:value="JCimages"
									:responsiveOptions="responsiveOptions"
									:numVisible="1"
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
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import {
	PhotoServiceMC,
	PhotoServiceJC,
	PhotoServiceNTNUADM,
} from "../service/PhotoService";
const MCimages = ref();
const JCimages = ref();
const NTNUADMimages = ref();
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
	PhotoServiceMC.getImages().then((data: any) => (MCimages.value = data));
	PhotoServiceJC.getImages().then((data: any) => (JCimages.value = data));
	PhotoServiceNTNUADM.getImages().then(
		(data: any) => (NTNUADMimages.value = data)
	);
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

// .tooltip {
//   position: relative;
//   display: inline-block;
//   border-bottom: 1px dotted black;
// }

.tooltip {
	position: relative;
}

.tooltip:before,
.tooltip:after {
	position: absolute;
	visibility: hidden;
	-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
	filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
	opacity: 0;
	-webkit-transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out,
		-webkit-transform 0.2s cubic-bezier(0.71, 1.7, 0.77, 1.24);
	-moz-transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out,
		-moz-transform 0.2s cubic-bezier(0.71, 1.7, 0.77, 1.24);
	transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out,
		transform 0.2s cubic-bezier(0.71, 1.7, 0.77, 1.24);
	-webkit-transform: translate3d(0, 0, 0);
	-moz-transform: translate3d(0, 0, 0);
	transform: translate3d(0, 0, 0);
	pointer-events: none;
}

.tooltip:hover:before,
.tooltip:hover:after,
.tooltip:focus:before,
.tooltip:focus:after {
	visibility: visible;
	-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
	filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
	opacity: 1;
}

.tooltip:before {
	z-index: 1001;
	border: 6px solid transparent;
	background: transparent;
	content: "";
}

.tooltip:after {
	z-index: 1000;
	padding: 8px;
	width: 160px;
	background-color: #000;
	background-color: rgba(0, 0, 0, 0.8);
	color: #fff;
	content: attr(data-tooltip);
	font-size: 14px;
	line-height: 1.2;
	text-align: center;
}

.tooltip:before,
.tooltip:after,
.tooltip[data-placement="top"]:before,
.tooltip[data-placement="top"]:after {
	bottom: 100%;
	left: 50%;
}

.tooltip:before,
.tooltip[data-placement="top"]:before {
	margin-left: -6px;
	margin-bottom: -12px;
	border-top-color: #000;
	border-top-color: rgba(0, 0, 0, 0.8);
}

.tooltip:after,
.tooltip[data-placement="top"]:after {
	margin-left: -80px;
}

.tooltip:hover:before,
.tooltip:hover:after,
.tooltip:focus:before,
.tooltip:focus:after,
.tooltip[data-placement="top"]:hover:before,
.tooltip[data-placement="top"]:hover:after,
.tooltip[data-placement="top"]:focus:before,
.tooltip[data-placement="top"]:focus:after {
	-webkit-transform: translateY(-12px);
	-moz-transform: translateY(-12px);
	transform: translateY(-12px);
}
</style>
