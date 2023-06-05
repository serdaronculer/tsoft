<template>
  <div>
    <Header />
    <Entrance />
    <Packets />
    <BrandDifference />
    <Statistics />
    <AdvantagePackages />
    <NewCustomer />
    <CustomerComments />
    <PopularReferences />
    <Announcements />
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue';
import Entrance from './components/entrance/Entrance.vue';
import Packets from './components/packets/Packets.vue';
import BrandDifference from './components/brand-difference/BrandDifference.vue';
import Statistics from './components/statistics/Statistics.vue';
import AdvantagePackages from './components/advantage-packages/AdvantagePackages.vue';
import NewCustomer from './components/new-customer/NewCustomer.vue';
import CustomerComments from './components/customer-comments/CustomerComments.vue';
import PopularReferences from './components/popular-references/PopularReferences.vue';
import Announcements from './components/announcements/Announcements.vue';
export default {
  components: {
    Header,
    Entrance,
    Packets,
    BrandDifference,
    Statistics,
    AdvantagePackages,
    NewCustomer,
    CustomerComments,
    PopularReferences,
    Announcements,
  }
}
</script>
<style></style>