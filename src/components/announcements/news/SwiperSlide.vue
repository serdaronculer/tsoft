<template>
    <div class="swiper-slide">
        <div class="news-card-item flex  bg-white shadow-lg rounded-md h-full">
            <div class="image-container basis-1/2 ">
                <img class="max-h-full rounded-tl-md  rounded-bl-md"
                    :src="card.imgSrc" alt="">
            </div>
            <div class="content p-4 flex flex-col gap-y-5">
                <h4 class="text-lg text-main-orange font-bold">{{ card.title }}</h4>
                <p class="text-sm font-light">{{ card.description }}</p>
            </div>
        </div>
    </div>
    
</template>
<script>
export default {
props: ["card"],
}
</script>
<style></style>