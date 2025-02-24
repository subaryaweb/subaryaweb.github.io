<template>
  <Content class="h-[calc(100vh-72px)] overflow-y-auto py-8 px-12 flex items-center justify-center flex-col">
    <div class="my-4 overflow-auto size-full">
      <VuePdfEmbed annotation-layer text-layer class="w-1/2 mx-auto" :source="pdfSource"/>
    </div>
  </Content>
</template>

<script setup lang="ts">
import {Content} from "tdesign-vue-next";
import VuePdfEmbed from "vue-pdf-embed";
import "vue-pdf-embed/dist/styles/annotationLayer.css";
import "vue-pdf-embed/dist/styles/textLayer.css";

const pdfSource = "/assets/pdf/resume.pdf";
</script>

<style lang="scss">
</style>