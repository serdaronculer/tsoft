<template>
    <div class="campaigns basis-1/2 max-w-[50%]">
        <div class="news-header relative flex justify-between items-center pl-5 mb-6 pb-5">
            <div class="title flex flex-col gap-y-2">
                <span class="uppercase font-semibold text-2xl">YENİ</span>
                <span class="uppercase font-bold text-2xl">KAMPANYALAR</span>
            </div>
            <div class="button-group gap-4 flex items-center ">
                <button class="bg-gray-300 rounded-full py-2 px-4 font-semibold">Tümü</button>
            </div>
        </div>
        <div class="swiper swiper-campaigns max-h-[500px] relative">
            <div class="swiper-wrapper ">
                <div class="swiper-slide">
                    <div class="campaign-wrapper p-5 flex justify-center ">
                        <a href="#"
                            class=" campaign-item bg-white p-4 flex flex-col w-96 items-center rounded-lg gap-y-5 pb-10 shadow-lg">
                            <img class="" src="https://www.tsoft.com.tr/img/kampanya/jetofis2023K.png" alt="">
                            <span class="text-main-orange font-bold text-center">JetOfis Muhasebe
                                Programı T-Soft müşterilerine 3 ay boyunca ücretsiz</span>
                            <p class="text-gray-500 text-sm text-center">Sadece aylık 80 TL ücret ile
                                kullanım imkanı.
                                T-Soft entegrasyonunda %50 indirim fırsatı.</p>
                        </a>

                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="campaign-wrapper p-5 flex justify-center ">
                        <a href="#"
                            class=" campaign-item bg-white p-4 flex flex-col w-96 items-center rounded-lg gap-y-5 pb-10 shadow-lg">
                            <img class="" src="https://www.tsoft.com.tr/img/kampanya/jetofis2023K.png" alt="">
                            <span class="text-main-orange font-bold text-center">JetOfis Muhasebe
                                Programı T-Soft müşterilerine 3 ay boyunca ücretsiz</span>
                            <p class="text-gray-500 text-sm text-center">Sadece aylık 80 TL ücret ile
                                kullanım imkanı.
                                T-Soft entegrasyonunda %50 indirim fırsatı.</p>
                        </a>

                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="campaign-wrapper p-5 flex justify-center ">
                        <a href="#"
                            class=" campaign-item bg-white p-4 flex flex-col w-96 items-center rounded-lg gap-y-5 pb-10 shadow-lg">
                            <img class="" src="https://www.tsoft.com.tr/img/kampanya/jetofis2023K.png" alt="">
                            <span class="text-main-orange font-bold text-center">JetOfis Muhasebe
                                Programı T-Soft müşterilerine 3 ay boyunca ücretsiz</span>
                            <p class="text-gray-500 text-sm text-center">Sadece aylık 80 TL ücret ile
                                kullanım imkanı.
                                T-Soft entegrasyonunda %50 indirim fırsatı.</p>
                        </a>

                    </div>
                </div>
                <div class="swiper-slide">Slide 4</div>
                <div class="swiper-slide">Slide 5</div>
                <div class="swiper-slide">Slide 6</div>
                <div class="swiper-slide">Slide 7</div>
                <div class="swiper-slide">Slide 8</div>
                <div class="swiper-slide">Slide 9</div>
            </div>
            <button
            @click="nextSlide"
                class="arrow-right-campaigns p-4 rounded-full bg-white absolute right-0 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
                <img src="../../../assets/icons/arrow_right.svg" class="campaign-arrow-right pointer-events-none" />
            </button>
            <button
            @click="prevSlide"
                class="arrow-left-campaigns p-4 rounded-full bg-white absolute left-0 top-1/2 translate-x-1/2 -translate-y-1/2 z-50">
                <img src="../../../assets/icons/arrow_left.svg" class="campaign-arrow-left pointer-events-none" />
            </button>
            <div class="swiper-pagination absolute"></div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            swiperCampaigns: null,
        }
    },
    methods: {
        runSwiper() {
            let swiperCampaigns = new Swiper(".swiper-campaigns", {
                slidesPerView: 1,
                spaceBetween: 10,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            });

            return swiperCampaigns;
        },
        nextSlide() {
            this.swiperCampaigns.slideNext(500, () => _);
        },
        prevSlide() {
            this.swiperCampaigns.slidePrev(500, () => _);
        },
    },
    mounted() {
        this.swiperCampaigns = this.runSwiper();
    }
}
</script>
<style></style>