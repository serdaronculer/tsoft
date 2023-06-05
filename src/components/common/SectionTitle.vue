<template>
    <div
        class="mb-6 after:w-1/12 after:h-1 after:bg-main-orange after:rounded-2xl after:bottom-0 after:left-0 after:mt-4  after:block">
        <h4 :class="color1" class="text-2xl font-medium ">{{ title1 }}
            <span :class="color2">{{ title2 }}</span>
        </h4>
        <p class="text-sm">{{ description }}</p>
    </div>
</template>
<script>
export default {
 props : {
    title1: String,
    title2: String,
    description: String,
    color1: {
        type: String,
        default: "text-black",      
    },
    color2: {
        type: String,
        default: "text-main-orange",      
    },
 }
}
</script>
<style></style>