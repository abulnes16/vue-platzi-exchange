<template>
  <main>
    <cx-header :links="this.links"/>
    <router-view class="container px-5 sm:px-20 py-20 flex justify-center" />
  </main>
</template>

<script>
import CxHeader from "@/components/CxHeader";

export default {
  name: "App",
  data() {
    return {
      links: [
        {
          title: "BTC",
          to: { name: "coin-detail", params: { id: "bitcoin" } },
        },
        {
          title: "ETH",
          to: { name: "coin-detail", params: { id: "ethereum" } },
        },
        {
          title: "XRP",
          to: { name: "coin-detail", params: { id: "ripple" } },
        },
      ],
    };
  },
  components: {
    CxHeader,
  },
};
</script>

<style></style>
