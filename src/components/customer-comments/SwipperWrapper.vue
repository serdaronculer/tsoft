<template>
    <div class="swiper swiper-customer pt-32">
        <div class="swiper-wrapper">
            <template v-for="slide in slides">
                <SwipperSlide :slide="slide" />
            </template>
        </div>
        <div class="swiper-pagination"></div>
        <div class="flex justify-center mt-5">
            <button class="text-white bg-main-orange px-8 py-2 rounded-full">Tüm Yorumlar</button>
        </div>
    </div>
</template>
<script>
import db from '@/data/db.json';
import SwipperSlide from './SwipperSlide.vue';
export default {
    components: {
        SwipperSlide,
    },
    data() {
        return {
            slides: [],
        }
    },
    methods: {
        getSlides() {
            const data = db;
            this.slides = data.customerComments;
        },
        runSwiper() {
            let swiperCustomer = new Swiper(".swiper-customer", {
                slidesPerView: 1,
                spaceBetween: 10,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                breakpoints: {
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                },
            });
        }
    },
    mounted() {
        this.runSwiper();
        this.getSlides();
    }
}
</script>
<style></style>