<template>
    <li class="banner-item basis-1/2" v-for="bannerItem in bannerItems">
        <a href="#" class="flex items-center gap-x-1 hover:bg-gray-100 rounded-xl group transition-all">
            <span
                class="rounded-full group-hover:border-r-4 bg-gray-100 hover:border-r-4 border-b-gray-200 w-8 h-8 flex justify-center items-center">
                <img class="w-6  font-extrabold" :src="bannerItem.imgsrc" alt="">
            </span>
            <span>{{ bannerItem.title }}</span>
        </a>
    </li>
</template>
<script>
export default {
    props: {
        bannerItems: Array
    },
    data(){
        return {}
    }
}
</script>
<style lang="">
    
</style>

