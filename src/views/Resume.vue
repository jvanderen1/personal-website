<template>
  <div class="resume">
    <h1 class="text-center py-2">
      Résumé
    </h1>
    <iframe
        class="resume--pdf"
        src="https://app.box.com/embed/s/mvonyupt7imqykjmer3v1mevx26i7fgi"
        frameborder="0">
    </iframe>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class Resume extends Vue {
  }
</script>

<style lang="sass">
  .resume--pdf
    display: block
    position: relative
    width: 85%
    height: 100vh
    margin: 0 auto
</style>
