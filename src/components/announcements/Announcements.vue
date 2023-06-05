<template>
    <section class="pt-sticky-menu-height bg-gray-50">
        <div class="container mx-auto pb-20">
            <div class="flex justify-center gap-6">             
                    <SwiperWrapperNews/>
                    <SwiperWrapperCampaigns/>
            </div>
        </div>
    </section>
</template>
<script>
import SwiperWrapperNews from './news/SwiperWrapper.vue';
import SwiperWrapperCampaigns from './campaigns/SwiperWrapper.vue';
export default {
    components : {
        SwiperWrapperNews,
        SwiperWrapperCampaigns,
    }
}
</script>
<style></style>