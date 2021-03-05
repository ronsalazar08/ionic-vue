<template>
  <base-layout
    :page-title="loadedMemory ? loadedMemory.title : 'Loading...'"
    page-default-back-link="/memories"
  >
    <h2 v-if="!loadedMemory">Could not find Memory</h2>
    <memory-overview v-else :memory="loadedMemory"></memory-overview>
  </base-layout>
</template>

<script>
import MemoryOverview from "../components/memories/MemoryOverview.vue";
export default {
  data() {
    return {
      memoryId: this.$route.params.id,
    };
  },
  components: {
    MemoryOverview,
  },
  computed: {
    loadedMemory() {
      return this.$store.getters.memory(this.memoryId);
    },
  },
};
</script>
