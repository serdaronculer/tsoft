<template>
    <li v-for="path in paths">
        <a href="#" class="flex items-center h-full">
            <img :src="path" alt="">
        </a>
    </li>
</template>
<script>
export default {
  props : ["paths"],
  data(){
    return {
  
    }
  }
}
</script>
<style></style>