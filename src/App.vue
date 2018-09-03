<template>
  <div id="app">
    <NavigationButtons/>
    <router-view/>
  </div>
</template>

<script lang="ts">
  import '@/assets/styles/main.sass';
  import '@/assets/styles/loading-btn/loading.css';
  import '@/assets/styles/loading-btn/loading-btn.css';
  import { Component, Vue } from 'vue-property-decorator';
  import NavigationButtons from '@/components/NavigationButtons.vue';

  @Component( {
    components: {
      NavigationButtons,
    },
  } )
  export default class App extends Vue {
  }
</script>
