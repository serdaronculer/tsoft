<template>
    <header class="sticky-menu-height shadow-md bg-white fixed w-full z-[9999]">
        <div class="relative bg-white">
            <nav class="sticky-menu-height flex items-center container mx-auto">
                <router-link to="/">
                    <LogoSvg class="w-[178px]"/>
                </router-link>

                <div class="ml-5 flex justify-between h-full w-full">
                    <Navbar/>
                </div>
            </nav>
        </div>
    </header>
</template>
<script>
import LogoSvg from '@/assets/images/navbar/logo.svg';
import Navbar from '@/components/header/Navbar.vue';
export default {
 components: {
    LogoSvg,
    Navbar,
 }
}
</script>
<style></style>