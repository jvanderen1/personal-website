<template>
  <div
      class="flex justify-around"
  >
    <img
        alt="Vue logo"
        src="../assets/images/logo.svg"
        class="w-32"
    >
    <img
        alt="Plus"
        src="../assets/images/plus.svg"
        class="w-16"
    >
    <img
        alt="Heart"
        src="../assets/images/heart.svg"
        class="w-32"
    >
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class LoveVue extends Vue {
  }
</script>
