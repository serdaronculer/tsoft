<template>
    <div class="swiper swiper-brands">
        <div class="swiper-wrapper">
            <template v-for="category in categories">
                <SwiperSlide :category="category"/>
            </template>
            <div class="swiper-slide" v-for="(_, index) in 10">
                {{ index + 1 }}
            </div>

        </div>
        <div class="swiper-pagination"></div>

    </div>
</template>
<script>
import db from '@/data/db.json';
import SwiperSlide from './SwiperSlide.vue';
export default {
    components : {
        SwiperSlide,
    },
    data(){
        return {
          categories: [],
        }
    },
    methods: {
        getCategories(){
            const data = db;
            this.categories = data.popularReferences;
        },
        runSwiper() {
            let swiperBrands = new Swiper('.swiper-brands', {
                slidesPerView: 1,
                spaceBetween: 10,

                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                on: {
                    slideChange: function () {
                        updatePagination();
                    },
                },
            });
        }
    },
    mounted() {
        this.runSwiper();
        this.getCategories();
    }
}
</script>
<style></style>