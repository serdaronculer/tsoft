<template>
    <section class="pt-sticky-menu-height bg-main-gray pb-5">
        <div class="container mx-auto">
            <SectionTitle color1="text-main-orange" color2="text-black" title1="Popüler" title2="Markalarımız"
                description="T-Soft e-ticaret altyapısını tercih eden sektör bazında lider markalar" />
          <SwiperWrapper/>
        </div>
    </section>
</template>
<script>
import SwiperWrapper from './SwiperWrapper.vue';
export default {
 components : {
    SwiperWrapper,
 }
}
</script>
<style></style>