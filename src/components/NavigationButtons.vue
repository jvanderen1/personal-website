<template>
  <div class="nav-group">
    <router-link
        to="/"
        tag="button"
        class="nav-group--button focus:outline-none focus:shadow-outline"
    >
      Home
    </router-link>
    <router-link
        to="/resume"
        tag="button"
        class="nav-group--button focus:outline-none focus:shadow-outline"
    >
      Résumé
    </router-link>
    <router-link
        to="/contact"
        tag="button"
        class="nav-group--button focus:outline-none focus:shadow-outline"
    >
      Contact
    </router-link>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class NavigationButtons extends Vue {
  }
</script>
