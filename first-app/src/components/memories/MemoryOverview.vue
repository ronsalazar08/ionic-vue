<template>
  <ion-img :src="memory.image" :alt="memory.image"></ion-img>
  <h2 class="ion-text-center">{{ memory.title }}</h2>
  <p class="ion-text-center">{{ memory.description }}</p>
</template>
<script>
import { IonImg } from "@ionic/vue";
export default {
  props: ["memory"],
  components: {
    IonImg,
  },
};
</script>
