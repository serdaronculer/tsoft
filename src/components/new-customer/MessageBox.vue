<template>
    <div class="mt-7 customer1-content active p-6">
        <component :is="messageObject.display === 1 ? 'MessageBoxDescription' : 'MessageBoxImage'" :messageObject="messageObject"></component>
        <component :is="messageObject.display === 1 ? 'MessageBoxImage' : 'MessageBoxDescription'" :messageObject="messageObject"></component>
     
    </div>
</template>
<script>
import MessageBoxImage from './MessageBoxImage.vue';
import MessageBoxDescription from './MessageBoxDescription.vue';
export default {
 props : ["messageObject"],
 components : {
    MessageBoxImage,
    MessageBoxDescription
 },
}
</script>
<style></style>