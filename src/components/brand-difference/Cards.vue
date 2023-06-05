<template>
    <div class="grid grid-cols-3 gap-7">
      <template v-for="(cardItem, index) in cards">
        <CardItem :refIndex="index+1" :card="cardItem"/>
      </template>
    </div>
   
</template>
<script>
import db from '@/data/db.json'
import CardItem from './CardItem.vue';

export default {
 components : {
    CardItem,
 },
 data(){
    return {
        cards: [],
    }
 },
 methods : {
    getCards(){
        const datas = db;
        this.cards = datas.brandDifferenceCards;
    }
 },
 mounted(){
    this.getCards();
 }
}
</script>
<style></style>