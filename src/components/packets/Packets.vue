<template>
    <section class="pt-sticky-menu-height bg-gray-50">
        <div class="container mx-auto">
            <div class="flex gap-5 justify-center">
                <div class="basis-1/3 max-w-[50%] flex justify-center">
                    <img src="https://www.tsoft.com.tr/assets/images/home-page/packets/birlikte-yazalim.png" alt="">
                </div>
                <div class="basis-1/2 max-w-[50%] flex flex-col">
                    <span class="text-3xl ">E-Ticarette Başarı Hikayenizi</span>
                    <span class="text-3xl  text-main-orange">Birlikte Yazalım</span>
                    <p class="mt-4">Müşterilerimizin e-ticarette başarılı olmaları için deneyimli ekibimizle, tüm
                        ihtiyaçlarını bütünsel olarak sunduğumuz ekosistemimizle ve güvenli altyapımız ile her zaman
                        yanlarındayız.</p>
                    
                    <Cards />
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import Cards from './Cards.vue';
export default {
    components: {
        Cards,
    }
}
</script>
<style></style>