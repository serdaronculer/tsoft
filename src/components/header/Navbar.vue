<template>
    <ul class="flex h-full">
        <NavItem />
    </ul>
    <div class="flex info">
        <ul class="h-full flex gap-5 mr-10 nav-icon-items">
            <NavIconItem :paths="paths" />
        </ul>
        <div class="flex items-center">
            <div
                class="w-28  rounded-2xl border hover:border-transparent flex justify-center selected-language relative group/abc bg-white">
                <div class="flag-item">
                    <img src="../../assets/icons/countries/tr_flag.svg" alt="" class="w-4 rounded-full">
                    <span class="text-xs">Türkçe</span>
                    <span class="text-xs flag-select-box ml-auto"></span>
                </div>
                <ul
                    class="w-full absolute z-10 top-0 p-0 outline outline-1 outline-gray-200 rounded-2xl invisible group-hover/abc:visible bg-white opacity-0 group-hover/abc:opacity-100 transition-opacity duration-500">
                    <li>
                        <a href="#" class="flag-item">
                            <img src="../../assets/icons/countries/tr_flag.svg" alt="" class="w-4 rounded-full">
                            <span class="text-xs">Türkçe</span>
                            <span class="text-xs flag-select-box ml-auto"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flag-item">
                            <img src="../../assets/icons/countries/en_flag.svg" alt="" class="w-4 rounded-full">
                            <span class="text-xs">English</span>
                            <span class="text-xs flag-select-box ml-auto group-hover/abc:hidden"></span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="flex items-center ml-3">
            <div class="try-now-button cursor-pointer rounded-3xl ">
                <a href="#" class="flex w-full justify-around py-[10px] px-8 gap-x-1">
                    <img src="../../assets/icons/try_now.svg" alt="">
                    <span class="text-white">ÜCRETSİZ DENEYİN</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import NavItem from './NavItem.vue';
import NavIconItem from './NavIconItem.vue';
export default {
    components: {
        NavItem,
        NavIconItem
    },
    data() {
        return {
            paths: [
                "/src/assets/icons/search.svg",
                "/src/assets/icons/user.svg",
                "/src/assets/icons/phone.svg",
            ]
        }
    }
}
</script>
<style></style>