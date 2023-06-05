<template>
    <section class="pt-sticky-menu-height bg-gray-100">
        <div class="container mx-auto">
            <div class="statistics">
                <template v-for="card in cards">
                    <CardItem :card="card" />
                </template>
            </div>
        </div>
    </section>
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
            const data = db;
            this.cards = data.statistics;
        }
    },
    mounted(){
        this.getCards();
    }
}
</script>
<style></style>