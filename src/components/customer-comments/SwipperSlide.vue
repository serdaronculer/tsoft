<template>
    <div class="swiper-slide">
        <div class="rounded-2xl bg-white">
            <div class="px-4 ">
                <img class="w-full rounded-2xl -translate-y-1/2" :src="slide.imgSrc" alt="">
                <div class="card-body -mt-16 py-2">
                    <img class="card-customer-banner" :src="slide.logo" alt="">

                    <div class="author my-3">
                        <h4 class="font-bold text-ellipsis whitespace-nowrap overflow-hidden text-gray-500">
                            {{ slide.name }}
                        </h4>
                        <p class="text-ellipsis whitespace-nowrap overflow-hidden text-sm">{{ slide.job }}</p>
                    </div>
                    <p class="description">{{ slide.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["slide"],
}
</script>
<style></style>