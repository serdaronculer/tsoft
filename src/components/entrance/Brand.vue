<template >
    <div class="brand border h-[70px] p-2 bg-white group" v-for="source in companyLogos">
        <span class="w-full h-full ">
            <img class="z-10 w-full h-full group-hover:scale-125 transition-all object-contain"
                :src="source" alt="">
        </span>
    </div>
</template>
<script>
export default {
 props : {
    companyLogos: Array,
 }
}
</script>
<style></style>