<template>
    <div class="basis-1/2 max-w-[50%] px-4">
        <img class="w-full rounded-2xl" :src="messageObject.imgSrc" alt="">
    </div>
</template>
<script>
export default {
    props: ["messageObject"]
}
</script>
<style></style>