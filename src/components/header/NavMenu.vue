<template>
    <div class="nav-link-menu">
        <div class="w-full flex">
            <div class="flex flex-col max-w-[33%]">
                <div class="flex relative">
                    <img class="max-h-56" :src="navItem.bannerLogo" alt="">
                    <div class="menu-banner-text">{{ navItem.slogan }}</div>
                </div>
                <div class="bg-secondary-gray text-white p-5">
                    {{ navItem.sloganText }}</div>
            </div>
        
            <BannerItems :bannerItems="navItem.bannerItems"/>
        </div>
    </div>
</template>
<script>
import BannerItems from './BannerItems.vue';
export default {
    components: {
        BannerItems,
    },
    data(){
        return{}
    },
    props : ["navItem"],
}
</script>
<style></style>

