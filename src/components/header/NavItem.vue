<template>
    <li class="group" v-for="bannerItem in bannerItems.bannerItems">
        <router-link to="/" class="nav-link">{{ bannerItem.name }}</router-link>
        <NavMenu :navItem="bannerItem.navItem" />
    </li>
</template>
<script>
import NavMenu from './NavMenu.vue';
import datas from '@/data/db.json';
export default {
    components: {
        NavMenu,
    },
    data() {
        return {
            bannerItems: [],
        }
    },
    methods: {
        getDatas() {
            this.bannerItems = datas;
        }
    },
    mounted() {
        this.getDatas();
    }
}
</script>
<style></style>