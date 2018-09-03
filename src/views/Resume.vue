<template>
  <div class="resume">
    <h1 class="text-center py-2">
      Résumé
    </h1>
    <iframe
        class="resume--pdf"
        src="https://app.box.com/embed/s/4o6g8svhbge5wqbk6d1g3cb2ll19o7be"
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
    height: stretch
    margin: 0 auto
</style>
