'use strict'

const { createApp } = Vue;

createApp({
  data() {
    return {
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
      email: null,
    };
  },
  mounted() {
    axios.get(this.apiUrl).then(response => {
      this.email = response.data.response;
      console.log(this.email);
    });
  },
}).mount('#app');