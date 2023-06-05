<template>
    <div class="px-7 py-10 bg-white rounded-xl relative">
        <div
            class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-gray-200 inline-flex items-center justify-center">
            <img class="w-10 h-10" :src="card.imgsrc" alt="">
        </div>
        <h3 class="font-bold text-xl text-center">{{ card.title }}
        </h3>
        <ul class="mt-7 space-y-3">
            <li class="card-item" v-for="item in card.contentItems">{{ item }}</li>
        </ul>
    </div>
</template>
<script>
export default {
  props: ["card"]
}
</script>
<style></style>