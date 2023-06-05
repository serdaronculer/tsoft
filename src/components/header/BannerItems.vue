<template>
    <div class="banner-items p-5">
        <ul class="flex flex-wrap gap-y-4">
            <BannerItem :bannerItems="bannerItems" />
        </ul>
    </div>
</template>
<script>
import BannerItem from './BannerItem.vue';
export default {
    components: {
        BannerItem,
    },
  data (){
    return {}
  },
  props : {
    bannerItems : Array,
  }
}
</script>
<style></style>

