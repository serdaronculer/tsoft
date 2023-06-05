<template>
    <section class="pt-sticky-menu-height bg-main-gray">
        <div class="container mx-auto">
            <SectionTitle color1="text-main-orange" color2="text-black" title1="Müşterilerimiz" title2="Bizi Anlatıyor" description="E-ticaret sitesini kurarak dünyaya açılmak isteyen binlerce değerli markanın yol arkadaşı olmaya devam ediyoruz"/>
            <SwipperWrapper/>
        </div>
    </section>
</template>
<script>
import SwipperWrapper from './SwipperWrapper.vue';
export default {
    components: {
        SwipperWrapper
    }
}
</script>
<style></style>