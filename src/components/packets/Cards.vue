<template>
    <div class="mt-4 p-5 grid grid-cols-3 gap-x-5" >
        <template v-for="card in cards">
            <CardItem :card="card" />
        </template>
    </div>
</template>
<script>
import CardItem from './CardItem.vue';
import db from '@/data/db.json';
export default {
    components: {
        CardItem,
    },
    data() {
        return {
            cards: [],
        }
    },
    methods: {
        getCards() {
            const packetCards = db.packetsCards;
            this.cards = packetCards;
        }
    },
    mounted(){
        this.getCards();
    }
    
}
</script>
<style></style>