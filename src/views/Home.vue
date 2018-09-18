<template>
  <div class="home flex flex-wrap md:flex-no-wrap">
    <div
        class="w-full md:w-1/2 "
    >
      <div class="block max-w-md rounded overflow-hidden align-middle shadow-lg rounded m-auto">
        <img
            alt="Coffee cup"
            src="../assets/images/coffee-cup-picture.jpg"
            class="width-full"
        >
        <div class="px-6 py-4">
          <p class="font-bold text-2xl mb-2">
            Joshua Van Deren
          </p>
          <div class="flex justify-around sm:justify-start">
            <div class="h-full pr-2">
              <a
                  href="https://www.linkedin.com/in/vanderen97/"
                  target="_blank"
              >
                <img
                    alt="LinkedIn logo"
                    src="../assets/images/linkedin.svg"
                >
              </a>
            </div>
            <div class="h-full px-2">
              <a
                  href="https://github.com/jvanderen1"
                  target="_blank"
              >
                <img
                    alt="GitHub logo"
                    src="../assets/images/github.svg"
                >
              </a>
            </div>
            <div class="h-full pl-2">
              <a
                  href="https://www.instagram.com/jvanderen1/"
                  target="_blank"
              >
                <img
                    alt="Instagram logo"
                    src="../assets/images/instagram.svg"
                >
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
        class="w-full md:w-1/2"
    >
      <div class="px-5 pt-5 mt-2 md:mt-0 md:ml-2">
        <h1 class="text-center h-24">
          Welcome
        </h1>
        <p class="text-center h-24">
          A simple, responsive website made out of curiosity and love for programming
        </p>
      </div>
      <LoveVueIcons/>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import LoveVueIcons from '@/components/LoveVueIcons.vue';

  @Component( {
    components: {
      LoveVueIcons,
    },
  } )
  export default class Home extends Vue {
  }
</script>
