<template>
  <div class="flex justify-center">
    <div class="w-full max-w-md">
      <form
          id="contact-form"
          class="form-group"
          @submit.prevent="checkForm"
      >
        <!-- Name -->
        <div class="mb-4">
          <label
              class="form-group--label"
              for="name"
          >
            Name
          </label>
          <input
              class="form-group--input"
              v-bind:class="{'border-red': nameError}"
              id="name"
              v-model="name"
              type="text"
              placeholder="e.g. John Clark"
          >
          <p
              v-if="nameError"
              class="text-red text-xs italic mt-3">
            Please enter your name.
          </p>
        </div>

        <!-- Email -->
        <div class="mb-4">
          <label
              class="form-group--label"
              for="email"
          >
            Email
          </label>
          <input
              class="form-group--input"
              v-bind:class="{'border-red': emailError}"
              id="email"
              v-model="email"
              type="email"
              placeholder="e.g. john.clark@mail.com"
          >
          <p
              v-if="emailError"
              class="text-red text-xs italic mt-3">
            Please enter your email.
          </p>
        </div>

        <!-- Subject -->
        <div class="mb-4">
          <label
              class="form-group--label"
              for="subject"
          >
            Subject
          </label>
          <input
              class="form-group--input"
              v-bind:class="{'border-red': subjectError}"
              id="subject"
              v-model="subject"
              type="text"
              placeholder="e.g. Suggestion"
          >
          <p
              v-if="subjectError"
              class="text-red text-xs italic mt-3">
            Please enter a subject.
          </p>
        </div>

        <!-- Message -->
        <div class="mb-4">
          <label
              class="form-group--label"
              for="message"
          >
            Message
          </label>
          <textarea
              class="form-group--input"
              v-bind:class="{'border-red': messageError}"
              id="message"
              v-model="message"
              placeholder="e.g. Here's how to make your website better…"
              rows=10
          ></textarea>
          <p
              v-if="messageError"
              class="text-red text-xs italic mt-3">
            Please enter a message.
          </p>
        </div>

        <!-- Submit -->
        <!-- TODO: Should prevent user from submitting multiple requests (maybe through JQuery) -->
        <div class="mt-6 flex justify-end">
          <input
              class="bg-blue hover:bg-blue-light text-white font-bold py-2 px-4 border-b-4 border-blue-dark hover:border-blue rounded focus:outline-none focus:shadow-outline"
              type="submit"
              value="Send message"
          >
        </div>
        <div class="hidden">
          <label
              class="form-group--label"
              for="age"
          ></label>
          <input
              id="age"
              v-model="spamDetection"
              type="text"
          >
        </div>
        <p
            v-if="successfullySent"
            class="font-bold text-center text-green text-xs mt-2"
        >
          Successfully sent your message
        </p>
        <p
            v-if="unsuccessfullySent"
            class="font-bold text-center text-red text-xs mt-2"
        >
          Something went wrong…please email
          <a href="mailto:jvanderen1@gmail.com">jvanderen1@gmail.com</a>
        </p>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import axios from 'axios';

  @Component
  export default class ContactForm extends Vue {
    private name: string = '';
    private email: string = '';
    private subject: string = '';
    private message: string = '';
    private spamDetection: string = '';

    private nameError: boolean = false;
    private emailError: boolean = false;
    private subjectError: boolean = false;
    private messageError: boolean = false;

    private successfullySent: boolean = false;
    private unsuccessfullySent: boolean = false;

    private beforeCheck() {
      this.successfullySent = false;
      this.unsuccessfullySent = false;
    }

    private checkSpam() {
      if ( this.spamDetection.length > 0 ) {
        window.location.replace( 'https://theuselessweb.com/' );
      }
    }

    private sendEmail() {
      const apiEndpoint = 'https://vanderen-contact.prod.with-datafire.io/contact';
      const data = {
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message,
      };

      axios.post(
        apiEndpoint,
        data,
      )
        .then( (response) => {
          this.successfullySent = true;
          console.log( response );

          this.name = this.email = this.subject = this.message = '';
        } )
        .catch( (error) => {
          this.unsuccessfullySent = true;
          console.log(error);
        } );
    }

    private checkForm( e: Event ) {
      this.beforeCheck();

      this.checkSpam();

      this.nameError = ( this.name.length < 1 );
      this.emailError = ( this.email.length < 1 );
      this.subjectError = ( this.subject.length < 1 );
      this.messageError = ( this.message.length < 1 );

      if ( !this.nameError && !this.emailError && !this.subjectError && !this.messageError ) {
        this.sendEmail();
      }

      return false;
    }
  }
</script>