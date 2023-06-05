<template>
    <section class="pt-sticky-menu-height bg-gray-100 pb-6">
        <div class="container mx-auto">
            <SectionTitle title1="Avantajlı" title2="Paketlerimiz"
                description="İşletmenize en uygun e-ticaret paketini seçin, hemen kazanmaya başlayın" />
            <div class="flex gap-10 justify-center">
                <template v-for="card in cards">
                    <CardItem :card="card"/>
                </template>
            </div>
        </div>
    </section>
</template>
<script>
import db from "@/data/db.json"
import CardItem from "./CardItem.vue";
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
            this.cards = db.advantagePackages;
        }
    },
    mounted() {
        this.getCards();
    }
}
</script>
<style></style>