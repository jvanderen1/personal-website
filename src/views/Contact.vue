<template>
  <div class="contact">
    <h1 class="text-center py-2">
      Contact
    </h1>
    <ContactForm/>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import ContactForm from '@/components/ContactForm.vue';

  @Component( {
    components: {
      ContactForm,
    },
  } )
  export default class Contact extends Vue {
  }
</script>