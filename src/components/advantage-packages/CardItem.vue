<template>
    <div class="w-[360px] bg-white rounded-[20px] mt-36">
        <div class="px-5 ">
            <img class="w-full rounded-[10px] h-48 -translate-y-1/2"
                :src="card.imgSrc" alt="">
        </div>
        <div class="card-body flex flex-col -mt-20 px-5">
            <h4 :class="card.color" class="text-lg font-bold">{{ card.title }}
                <span class="text-black">İşletmeler</span>
            </h4>
            <p class="text-xs font-bold mt-5">{{ card.subtitle }}</p>
            <p class="text-xs mt-1 min-h-[120px]">{{ card.description }}</p>
            <ul class="">
                <li class="card-item pl-4 text-[13px]" v-for="item in card.contentItems">{{ item }}</li>
            </ul>

            <a class="text-sm text-main-orange underline my-5 font-bold" href="#">Detaylı Bilgi</a>
        </div>
    </div>
</template>
<script>
export default {
props : ["card"],
}
</script>
<style></style>