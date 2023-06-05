<template>
    <div class="swiper-slide">
        <div class="brand-category-title mb-3">
            <h4 class="text-main-orange font-bold text-lg">{{ category.categoryTitle }}</h4>
        </div>
        <div class="grid grid-cols-6 gap-x-2 gap-y-8">
                <div class="brand-item" v-for="item in category.brands">
                    <a class="flex justify-center items-center h-full" href="#">
                        <img class="brand-item-img" :src="item" alt="">
                    </a>
                </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["category"],
}
</script>
<style></style>