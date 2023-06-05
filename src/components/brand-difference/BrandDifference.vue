<template>
    <section class="pt-sticky-menu-height bg-gray-100">
        <div class="container mx-auto">
            <SectionTitle  title1="E-Ticarette" title2="T-Soft Farkı" description="Başarılı, kazandıran bir #eticaret sitesi kurmak için ihtiyacınız olan her şey T-Soft’ta"/>
            <div class="mt-16">
                    <Cards/>
                </div>
        </div>
    </section>
</template>
<script>

import Cards from './Cards.vue';
export default {
 components : {
    Cards
 }
}
</script>
<style></style>