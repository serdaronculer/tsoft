<template>
    <div class="news basis-1/2 max-w-[50%]">
        <div class="news-header relative flex justify-between items-center pl-5 mb-6 pb-5">
            <div class="title flex flex-col gap-y-2">
                <span class="uppercase font-semibold text-2xl">Bizden</span>
                <span class="uppercase font-bold text-2xl">Haberler</span>
            </div>
            <div class="button-group gap-4 flex items-center ">
                <button @click="prevSlide" :class="prev ? '' : 'news-button-disabled'"
                    class="arrow-up-news  border border-main-orange rounded-full flex justify-center items-center p-3">
                    <img class="w-4 h-4" src="../../../assets/icons/arrow_up.svg" alt="">
                </button>
                <button @click="nextSlide" :class="next ? '' : 'news-button-disabled'"
                    class="arrow-down-news border border-main-orange rounded-full flex justify-center items-center p-3">
                    <img class="w-4 h-4 rotate-180" src="../../../assets/icons/arrow_up.svg" alt="">
                </button>
                <button class="bg-gray-300 rounded-full py-2 px-4 font-semibold">Tümü</button>
            </div>
        </div>
        <div class="swiper swiper-news max-h-[600px] overflow-y-hidden overflow-x-hidden pl-5">
            <div class="swiper-wrapper">
                <template v-for="card in cards">
                    <SwiperSlide :card="card" />
                </template>
            </div>

        </div>
    </div>
</template>
<script>
import SwiperSlide from './SwiperSlide.vue';
import db from '@/data/db.json';
export default {
    data() {
        return {
            prev: false,
            next: true,
            swiperNews: null,
            cards: [],
        }
    },
    components: {
        SwiperSlide,
    },
    methods: {
        getCards() {
            let data = db;
            this.cards = data.announcements;
        },
        nextSlide() {
            this.swiperNews.slideNext(500, () => _);
            if (this.swiperNews.activeIndex == this.cards.length - 3) {
                console.log(this.swiperNews.activeIndex, this.cards.length - 3);
                this.next = false;
                console.log(this.next);
            } else {
                this.next = true;
                this.prev = true;
            }

        },
        prevSlide() {
            this.swiperNews.slidePrev(500, () => _);
            if (this.swiperNews.activeIndex == 0) {
                this.prev = false;
            }
            else {
                this.next = true;
                this.prev = true;
            }
        },
        runSwiper() {
            const newsUnitSlide = 3;
            let swiperNews = new Swiper(".swiper-news", {
                direction: 'vertical',
                slidesPerView: newsUnitSlide,
                spaceBetween: 30,
                breakpoints: {
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                },
            });
            return swiperNews;
        }
    },
    mounted() {
        this.swiperNews = this.runSwiper();
        this.getCards();
    }
}
</script>
<style></style>