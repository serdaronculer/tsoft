<template>
    <div class="pt-sticky-menu-height bg-section-a">
        <div class="pt-20 container mx-auto pb-20">
            <div class="flex gap-5 items-end">
                <div class="basis-1/2 max-w-[50%] flex flex-col">
                    <h2 class="font-bold text-4xl">Türkiye’nin Lider <span class="text-main-orange">E-Ticaret
                            Yazılımı</span></h2>
                    <p class="mt-7">Binlerce büyük markanın tercihi T-Soft E-Ticaret Çözümleri ile özelleştirilmiş,
                        güvenli ve kullanıcı dostu bir E-Ticaret altyapısı yaratın, dünya çapında yeni müşteriler
                        kazanmaya başlayın.</p>
                    <div class="brands grid grid-cols-6 mt-16 gap-2 cursor-pointer">
                        <Brand :companyLogos="companyLogos.companyLogos" />
                    </div>
                    <button
                        class="w-48 h-10 inline-flex justify-center items-center rounded-full bg-main-orange text-white font-light mt-10">
                        Tüm Referanslar
                    </button>
                </div>
                <div class="basis-1/2 max-w-[50%] ml-20">
                    <img class=" max-h-[350px]" src="https://www.tsoft.com.tr/assets/images/slider/video-frame.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Brand from './Brand.vue';
import datas from '@/data/db.json';
export default {
    components: {
        Brand,
    },
    data() {
        return {
            companyLogos: [],
        }
    },
    methods: {
        getCompanyLogos() {
            this.companyLogos = datas;
        }
    },
    mounted() {
        this.getCompanyLogos();
    }
}
</script>
<style></style>